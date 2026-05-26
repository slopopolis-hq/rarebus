// RareBus — clean game logic (no HTML pollution, single source of truth for ROUTES in routes.js)
// All commits as slop-factory only.

let state = {
  rides: [],
  collection: {},        // routeId -> {route, count, firstSeen, personallyRode: bool}
  streak: { current: 0, best: 0, lastRideDate: null },
  dailyClaimed: null,    // date string
  completedCollections: [],
  collectionBonus: 0
};

let currentRarityFilter = 'all';

// ==================== ROUTE DATA LOADED FROM routes.js ====================

// ==================== COLLECTIONS (curated sets for progression) ====================
const COLLECTIONS = [
  {
    id: "toronto_nightmare",
    name: "Toronto Nightmare Pack",
    description: "Collect the most cursed Toronto night routes.",
    routeIds: ["tor-301", "tor-300", "tor-320", "tor-ghost", "cursed-7"],
    bonus: 150
  },
  {
    id: "cursed_classics",
    name: "Cursed Classics",
    description: "The most legendary cursed routes across cities.",
    routeIds: ["cursed-1", "cursed-2", "cursed-3", "cursed-4", "cursed-5", "cursed-6"],
    bonus: 200
  },
  {
    id: "long_haul",
    name: "Long Haul Hero",
    description: "Survive the longest, most brutal routes.",
    routeIds: ["tor-52", "tor-129", "ldn-159", "chi-22", "via-can"],
    bonus: 120
  },
  {
    id: "streetcar_struggle",
    name: "Streetcar Struggle",
    description: "Endure the iconic Toronto streetcar experience.",
    routeIds: ["tor-501", "tor-506", "tor-504", "tor-512"],
    bonus: 80
  }
];

// ==================== STATE ====================
function loadState() {
  const saved = localStorage.getItem('rarebus_v2');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed }; // merge to keep new fields
  }
  
  // Migrate old state if needed (from v1)
  if (localStorage.getItem('rarebus_state') && !state.rides.length) {
    console.log('%c[RareBus] Old save found. Starting fresh is recommended.', 'color:#444');
  }
}

function saveState() {
  localStorage.setItem('rarebus_v2', JSON.stringify(state));
}

// ==================== HELPERS ====================
function getRarityClasses(rarity) {
  const map = {
    'common': 'rarity-common',
    'uncommon': 'rarity-uncommon',
    'rare': 'rarity-rare',
    'very-rare': 'rarity-very-rare',
    'legendary': 'rarity-legendary',
    'cursed': 'rarity-cursed'
  };
  return map[rarity] || 'rarity-common';
}

function getRarityLabel(rarity) {
  const labels = {
    'common': 'Common', 'uncommon': 'Uncommon', 'rare': 'Rare',
    'very-rare': 'Very Rare', 'legendary': 'Legendary', 'cursed': 'Cursed'
  };
  return labels[rarity] || rarity;
}

function getRarityWeight(rarity) {
  const w = { 'common': 38, 'uncommon': 22, 'rare': 12, 'very-rare': 5, 'legendary': 2.2, 'cursed': 0.9 };
  return w[rarity] || 10;
}

function calculateUnhingedScore() {
  let score = 0;
  const entries = Object.values(state.collection);
  
  entries.forEach(entry => {
    const r = entry.route;
    const w = { 'common': 4, 'uncommon': 11, 'rare': 27, 'very-rare': 58, 'legendary': 120, 'cursed': 210 };
    score += (w[r.rarity] || 5) * entry.count;
  });
  
  // Variety bonus
  score += entries.length * 8;
  
  // Streak bonus
  score += state.streak.current * 14;
  score += state.streak.best * 3;
  
  // Personally rode bonus
  const personallyRode = entries.filter(e => e.personallyRode).length;
  score += personallyRode * 45;
  
  // Collection completion bonuses
  if (state.completedCollections && state.completedCollections.length) {
    score += state.completedCollections.length * 100;
  }
  if (state.collectionBonus) {
    score += state.collectionBonus;
  }
  
  return Math.floor(score);
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function updateStreak(newRideDate) {
  const today = getToday();
  const last = state.streak.lastRideDate;
  
  if (!last) {
    state.streak.current = 1;
  } else {
    const lastDate = new Date(last);
    const currentDate = new Date(newRideDate);
    const diffDays = Math.floor((currentDate - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      state.streak.current += 1;
    } else if (diffDays > 1) {
      state.streak.current = 1;
    }
    // if diffDays === 0, same day, do nothing to streak
  }
  
  if (state.streak.current > state.streak.best) {
    state.streak.best = state.streak.current;
  }
  
  state.streak.lastRideDate = newRideDate.split('T')[0]; // store date only
}

// ==================== CORE GAME LOGIC ====================
function pickWeightedRoute(allowCursed = true) {
  let pool = ROUTES;
  if (!allowCursed) {
    pool = ROUTES.filter(r => r.rarity !== 'cursed');
  }
  
  const weights = pool.map(r => getRarityWeight(r.rarity));
  const total = weights.reduce((a,b) => a+b, 0);
  let rand = Math.random() * total;
  
  for (let i = 0; i < pool.length; i++) {
    rand -= weights[i];
    if (rand <= 0) return pool[i];
  }
  return pool[pool.length-1];
}

function logRide(route, isDaily = false) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit', hour12:true }).toLowerCase();
  
  const stories = [
    "Got on. Immediately regretted several life choices.",
    "Sat next to someone having a conversation with their reflection.",
    "The driver said 'good luck' when I got off. Still thinking about it.",
    "Missed my stop because I was too deep in my own thoughts.",
    "Had a moment of clarity. Forgot it before I got off.",
    "Someone offered me a mint. I said no. I think about this daily.",
    "The bus was 19 minutes late and somehow still felt early.",
  ];
  const story = stories[Math.floor(Math.random() * stories.length)];

  const ride = {
    id: Date.now(),
    time: timeStr,
    route,
    story,
    isDaily,
    timestamp: now.toISOString()
  };
  
  state.rides.push(ride);
  
  // Collection
  if (!state.collection[route.id]) {
    state.collection[route.id] = {
      route,
      count: 0,
      firstSeen: now.toISOString(),
      personallyRode: false
    };
  }
  state.collection[route.id].count++;
  
  // Streak
  updateStreak(now.toISOString());
  
  if (isDaily) {
    state.dailyClaimed = getToday();
  }
  
  saveState();
  return ride;
}

function takeRide(isDaily = false) {
  const route = pickWeightedRoute();
  const ride = logRide(route, isDaily);
  
  renderEverything();
  
  // Special feedback for good pulls
  if (route.rarity === 'legendary' || route.rarity === 'cursed') {
    showRarePullToast(route);
  }
  
  // New route celebration
  const isNew = state.collection[route.id].count === 1;
  if (isNew) {
    setTimeout(() => {
      const el = document.getElementById(`route-${route.id}`);
      if (el) el.classList.add('new-route');
    }, 80);
  }

  checkCollections();
}

function takeDailyRide() {
  const today = getToday();
  if (state.dailyClaimed === today) {
    alert("You've already taken today's ride. Come back tomorrow.");
    return;
  }
  
  // Daily rides are slightly better on average
  let route;
  const roll = Math.random();
  if (roll < 0.08) route = ROUTES.filter(r => r.rarity === 'cursed')[0] || pickWeightedRoute();
  else if (roll < 0.28) route = ROUTES.filter(r => r.rarity === 'legendary' || r.rarity === 'very-rare')[0] || pickWeightedRoute();
  else route = pickWeightedRoute();
  
  const ride = logRide(route, true);
  renderEverything();
  
  if (route.rarity === 'cursed' || route.rarity === 'legendary') {
    showRarePullToast(route, true);
  }
}

function togglePersonallyRode(routeId) {
  if (state.collection[routeId]) {
    state.collection[routeId].personallyRode = !state.collection[routeId].personallyRode;
    saveState();
    renderCollection();
    updateStats();
  }
}

// ==================== RENDERING ====================
function updateStats() {
  const entries = Object.values(state.collection);
  const unique = entries.length;
  
  const scoreEl = document.getElementById('sicko-score');
  if (scoreEl) scoreEl.textContent = calculateUnhingedScore().toLocaleString();
  
  const uniqueEl = document.getElementById('unique-count');
  if (uniqueEl) uniqueEl.textContent = unique;
  
  const totalEl = document.getElementById('total-routes');
  if (totalEl) totalEl.textContent = ROUTES.length;
  
  const curStreak = document.getElementById('current-streak');
  if (curStreak) curStreak.textContent = state.streak.current;
  
  const bestStreak = document.getElementById('best-streak');
  if (bestStreak) bestStreak.textContent = state.streak.best;
  
  const cursed = entries.filter(e => e.route.rarity === 'cursed' || e.route.rarity === 'legendary').length;
  const pct = unique > 0 ? Math.round((cursed / unique) * 100) : 0;
  const cursedPct = document.getElementById('cursed-pct');
  if (cursedPct) cursedPct.textContent = pct + '%';
  
  // Daily button state
  const dailyBtn = document.getElementById('daily-btn');
  const dailyText = document.getElementById('daily-text');
  const today = getToday();
  
  if (dailyBtn && dailyText) {
    if (state.dailyClaimed === today) {
      dailyBtn.classList.add('opacity-50', 'cursor-not-allowed', 'hover:bg-zinc-900');
      dailyBtn.disabled = true;
      dailyText.textContent = "CLAIMED TODAY";
    } else {
      dailyBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hover:bg-zinc-900');
      dailyBtn.disabled = false;
      dailyText.textContent = "TODAY'S RIDE";
    }
  }

  // Render milestones + collections
  renderMilestones();
  renderCollections();
}

function renderMilestones() {
  const container = document.getElementById('milestones');
  if (!container) return;

  const entries = Object.values(state.collection);
  const unique = entries.length;
  const cursed = entries.filter(e => e.route.rarity === 'cursed' || e.route.rarity === 'legendary').length;
  const personallyRode = entries.filter(e => e.personallyRode).length;
  const score = calculateUnhingedScore();

  const milestones = [
    { text: "Collect 5 routes", done: unique >= 5 },
    { text: "Find a Rare route", done: entries.some(e => e.route.rarity === 'rare' || e.route.rarity === 'very-rare') },
    { text: "Find a Cursed route", done: cursed > 0 },
    { text: "Personally rode 3 routes", done: personallyRode >= 3 },
    { text: "Reach 500 Unhinged Score", done: score >= 500 },
  ];

  container.innerHTML = milestones.map(m => 
    `<div class="${m.done ? 'text-emerald-400' : 'text-zinc-500'}">• ${m.text} ${m.done ? '✓' : ''}</div>`
  ).join('');
}

function checkCollections() {
  const entries = Object.values(state.collection);
  const collectedIds = entries.map(e => e.route.id);
  let bonusAwarded = false;

  if (!state.completedCollections) state.completedCollections = [];
  if (!state.collectionBonus) state.collectionBonus = 0;

  COLLECTIONS.forEach(col => {
    const completed = col.routeIds.every(id => collectedIds.includes(id));
    if (completed && !state.completedCollections.includes(col.id)) {
      state.completedCollections.push(col.id);
      state.collectionBonus += col.bonus;
      bonusAwarded = true;
      
      // Little celebration for completing a set
      setTimeout(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-emerald-900 border border-emerald-400 text-emerald-200 px-4 py-2 rounded-2xl text-sm z-50';
        toast.innerHTML = `Collection complete: <strong>${col.name}</strong> (+${col.bonus} Unhinged)`;
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.style.transition = 'all 0.3s';
          toast.style.opacity = '0';
          setTimeout(() => toast.remove(), 200);
        }, 2400);
      }, 420);
    }
  });

  if (bonusAwarded) {
    saveState();
    updateStats();
  }
}

function filterByRarity(rarity) {
  currentRarityFilter = rarity;

  document.querySelectorAll('.rarity-filter').forEach(btn => {
    btn.classList.remove('active-filter', 'bg-zinc-700');
    if (btn.dataset.filter === rarity) {
      btn.classList.add('active-filter', 'bg-zinc-700');
    }
  });

  renderCollection();
}

function renderCollection() {
  const grid = document.getElementById('collection-grid');
  const countEl = document.getElementById('collection-count');
  if (!grid || !countEl) return;
  
  let entries = Object.values(state.collection).sort((a,b) => {
    const ra = getRarityWeight(b.route.rarity);
    const rb = getRarityWeight(a.route.rarity);
    if (ra !== rb) return ra - rb;
    return b.count - a.count;
  });

  // Apply rarity filter
  if (currentRarityFilter !== 'all') {
    entries = entries.filter(e => e.route.rarity === currentRarityFilter);
  }
  
  countEl.textContent = `${entries.length} / ${ROUTES.length} collected`;
  
  if (entries.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full border border-zinc-800 rounded-2xl h-44 flex flex-col items-center justify-center text-center p-6 bg-zinc-900">
        <div class="text-4xl mb-3 opacity-40">🚌</div>
        <div class="text-sm text-zinc-400 max-w-[280px]">
          Your collection is empty.<br>
          Click <strong>Hop On</strong> above to start collecting routes.
        </div>
      </div>`;
    return;
  }
  
  grid.innerHTML = entries.map(entry => {
    const r = entry.route;
    const personally = entry.personallyRode;
    
    return `
      <div id="route-${r.id}" class="route-card bg-zinc-900 border ${getRarityClasses(r.rarity)} rounded-2xl p-4">
        <div class="flex justify-between items-start gap-3">
          <div class="min-w-0">
            <div class="font-mono text-2xl font-bold tracking-[-1.5px]">${r.num}</div>
            <div class="font-semibold leading-tight">${r.name}</div>
            <div class="text-[10px] text-zinc-500 mt-0.5">${r.city}</div>
          </div>
          <div class="text-right">
            <div class="transit-pill px-2 py-px rounded bg-zinc-800 inline-block mb-1">${getRarityLabel(r.rarity)}</div>
            <div class="text-amber-300/80 text-sm font-medium">×${entry.count}</div>
          </div>
        </div>
        
        <div class="text-xs text-zinc-400 mt-3 leading-snug">
          ${r.text}
        </div>
        
        <div class="flex items-center justify-between mt-4 text-xs">
          <button onclick="togglePersonallyRode('${r.id}'); event.stopImmediatePropagation();"
                  class="flex items-center gap-x-1.5 text-left ${personally ? 'text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'}">
            <i class="fa-solid ${personally ? 'fa-check-square' : 'fa-square'}"></i>
            <span class="text-[10px]">I rode this</span>
          </button>
          <div class="text-zinc-500 text-[10px]">
            ${new Date(entry.firstSeen).toLocaleDateString('en-US', {month:'short', day:'numeric'})}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderRecent() {
  const container = document.getElementById('recent-log');
  if (!container) return;
  
  if (state.rides.length === 0) {
    container.innerHTML = `<div class="px-5 py-6 text-center text-xs text-zinc-500">No rides yet. Click Hop On above to get started.</div>`;
    return;
  }
  
  const recent = [...state.rides].reverse().slice(0, 9);
  
  container.innerHTML = recent.map(ride => {
    const r = ride.route;
    const isNew = state.collection[r.id]?.count === 1;
    
    return `
      <div class="log-entry flex gap-x-4 items-start px-5 py-3.5 hover:bg-zinc-950 transition-colors ${ride.isDaily ? 'bg-zinc-950/50' : ''}">
        <div class="w-10 text-right flex-shrink-0 pt-0.5">
          <div class="font-mono text-[11px] text-zinc-500">${ride.time}</div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-x-2">
            <span class="font-semibold">${r.num} ${r.name}</span>
            <span class="text-[10px] px-1.5 py-px rounded bg-zinc-800 text-zinc-400">${getRarityLabel(r.rarity)}</span>
            ${ride.isDaily ? '<span class="text-[10px] text-amber-400">• daily</span>' : ''}
          </div>
          <div class="text-zinc-400 text-xs mt-1 leading-tight">${ride.story}</div>
        </div>
      </div>`;
  }).join('');
}

function renderCollections() {
  const container = document.getElementById('collections');
  if (!container) return;

  const collectedIds = Object.values(state.collection).map(e => e.route.id);

  container.innerHTML = COLLECTIONS.map(col => {
    const have = col.routeIds.filter(id => collectedIds.includes(id)).length;
    const total = col.routeIds.length;
    const pct = Math.round((have / total) * 100);
    const done = have === total;

    return `
      <div class="bg-zinc-900 border ${done ? 'border-emerald-400' : 'border-zinc-800'} rounded-2xl p-4">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="font-semibold text-sm leading-tight">${col.name}</div>
            <div class="text-[10px] text-zinc-500 mt-0.5">${col.description}</div>
          </div>
          ${done ? `<div class="text-[10px] text-emerald-400 font-medium whitespace-nowrap">+${col.bonus}</div>` : ''}
        </div>
        <div class="mt-3">
          <div class="flex items-center gap-x-2 text-xs text-zinc-400">
            <div class="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div class="h-1.5 bg-emerald-400 transition-all" style="width: ${pct}%"></div>
            </div>
            <div class="tabular-nums w-8 text-right">${have}/${total}</div>
          </div>
          ${done ? '<div class="text-emerald-400 text-[10px] mt-1.5">Completed • Bonus added to Unhinged Score</div>' : 
                   '<div class="text-[10px] text-zinc-500 mt-1.5">Keep riding to complete this set</div>'}
        </div>
      </div>
    `;
  }).join('');
}

function renderEverything() {
  updateStats();
  renderCollection();
  renderRecent();
  // renderCollections is called from updateStats
}

// ==================== SPECIAL MOMENTS ====================
function showRarePullToast(route, isDaily = false) {
  const el = document.createElement('div');
  const label = getRarityLabel(route.rarity);
  
  let color = 'border-zinc-700';
  let extra = '';
  
  if (route.rarity === 'cursed') {
    color = 'border-red-600 bg-red-950/60';
    extra = ' <span class="text-red-400 font-bold">!!!</span>';
  } else if (route.rarity === 'legendary') {
    color = 'border-purple-600 bg-purple-950/50';
    extra = ' <span class="text-purple-400 font-bold">★</span>';
  } else if (route.rarity === 'very-rare') {
    color = 'border-amber-600 bg-amber-950/40';
  } else if (route.rarity === 'rare') {
    color = 'border-yellow-600 bg-yellow-950/30';
  }
  
  el.className = `fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 border ${color} px-5 py-3 rounded-2xl flex items-center gap-x-3 shadow-2xl z-50 text-sm`;
  el.innerHTML = `
    <div>
      <span class="font-medium">${label} pull${extra}:</span> 
      <span class="font-semibold">${route.num} ${route.name}</span>
    </div>
  `;
  
  document.body.appendChild(el);
  
  const duration = (route.rarity === 'cursed' || route.rarity === 'legendary') ? 4200 : 2600;
  
  setTimeout(() => {
    el.style.transition = 'all 0.4s ease';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 400);
  }, duration);
}

function shareCollection() {
  const entries = Object.values(state.collection);
  if (entries.length === 0) {
    alert("You have nothing to brag about yet. Touch grass (or a bus).");
    return;
  }
  
  const score = calculateUnhingedScore();
  const cursed = entries.filter(e => e.route.rarity === 'cursed' || e.route.rarity === 'legendary').length;
  const personally = entries.filter(e => e.personallyRode).length;
  
  let text = `My RareBus collection (Unhinged Score: ${score})\n`;
  text += `${entries.length} routes • ${state.rides.length} rides logged\n`;
  if (state.streak.best > 0) text += `Best streak: ${state.streak.best} days\n`;
  if (cursed > 0) text += `Cursed/Legendary finds: ${cursed}\n`;
  if (personally > 0) text += `Personally ridden: ${personally} (certified weird)\n`;
  
  text += `\nTop finds:\n`;
  
  const sorted = [...entries].sort((a,b) => getRarityWeight(b.route.rarity) - getRarityWeight(a.route.rarity)).slice(0, 5);
  sorted.forEach(e => {
    text += `- ${e.route.num} ${e.route.name} (${getRarityLabel(e.route.rarity)})\n`;
  });
  
  text += `\nhttps://github.com/slopopolis-hq/rarebus (built in the factory)`;
  
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-emerald-900 text-emerald-200 text-xs px-4 py-2 rounded-2xl';
    toast.textContent = 'Collection copied to clipboard';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1600);
  }).catch(() => {
    alert(text); // fallback
  });
}

// ==================== INIT ====================
function init() {
  loadState();
  
  // First time seed (very light demo)
  if (state.rides.length === 0 && typeof ROUTES !== 'undefined') {
    const demo = ROUTES.find(r => r.id === "tor-1"); // 1 - Queen East
    if (demo) {
      const t = new Date(Date.now() - 1000 * 60 * 60 * 12);
      state.rides.push({
        id: 900,
        time: t.toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit', hour12:true}).toLowerCase(),
        route: demo,
        story: "Demo ride (you can delete these by resetting)",
        isDaily: false,
        timestamp: t.toISOString()
      });
      state.collection[demo.id] = {
        route: demo,
        count: 1,
        firstSeen: t.toISOString(),
        personallyRode: false
      };
    }
    saveState();
  }
  
  const totalEl = document.getElementById('total-routes');
  if (totalEl && typeof ROUTES !== 'undefined') totalEl.textContent = ROUTES.length;
  
  renderEverything();
  
  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      takeRide(false);
    }
    if (e.key.toLowerCase() === 'd' && e.metaKey) {
      e.preventDefault();
      takeDailyRide();
    }
  });
  
  // Fun console message
  console.log('%c[RareBus] You are now part of the problem. Press / to ride.', 'color:#3f3f46');
}

window.onload = init;
