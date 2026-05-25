    <!-- Recent Activity -->
    <div>
      <div class="flex items-baseline justify-between px-1 mb-3">
        <div>
          <div class="display text-xl tracking-tight font-semibold">Recent Rides</div>
          <div class="text-[10px] text-zinc-500 -mt-0.5">Routes you've collected recently</div>
        </div>
      </div>
      <div id="recent-log" 
           class="bg-zinc-900 border border-zinc-800 rounded-2xl divide-y divide-zinc-800 text-sm max-h-[320px] overflow-auto">
        <!-- JS injected -->
      </div>
    </div>

    <!-- Finished Product Footer -->
    <div class="text-center mt-8 mb-4 text-[10px] text-zinc-600">
      <div>RareBus v2 — Finished Product</div>
      <div class="mt-1">Built in Slopopolis HQ • No employees were involved</div>
    </div>
  </div>

  <script>
    // ==================== ROUTE DATABASE ====================
    // Hand-written with love and deep personal issues
    const ROUTES = [
      // Toronto - Common
      {id:"tor-1", num:"1", name:"Queen East", city:"Toronto", rarity:"common", text:"The people mover. You will see someone you went to high school with."},
      {id:"tor-501", num:"501", name:"Queen Streetcar", city:"Toronto", rarity:"common", text:"The artery of chaos. God help you if you're going all the way."},
      {id:"tor-506", num:"506", name:"Carlton", city:"Toronto", rarity:"common", text:"The streetcar that makes you question every life choice."},
      {id:"tor-29", num:"29", name:"Dufferin", city:"Toronto", rarity:"common", text:"The most honest bus in the city. Brutal and direct."},
      
      // Toronto - Uncommon
      {id:"tor-510", num:"510", name:"Spadina", city:"Toronto", rarity:"uncommon", text:"Tourists, students, and one guy screaming about the illuminati."},
      {id:"tor-7", num:"7", name:"Bathurst", city:"Toronto", rarity:"uncommon", text:"The emotional support bus of the west end."},
      {id:"tor-25", num:"25", name:"Don Mills", city:"Toronto", rarity:"uncommon", text:"The bus that exists in its own dimension."},
      {id:"tor-32", num:"32", name:"Eglinton West", city:"Toronto", rarity:"uncommon", text:"Somehow always feels like you're in a different city."},
      
      // Toronto - Rare
      {id:"tor-47", num:"47", name:"Lansdowne", city:"Toronto", rarity:"rare", text:"Somehow always has both the most beautiful and most unhinged people on it simultaneously."},
      {id:"tor-73", num:"73", name:"Royal York", city:"Toronto", rarity:"rare", text:"Extremely long. Extremely empty. Extremely haunted."},
      {id:"tor-86", num:"86", name:"Scarborough Express", city:"Toronto", rarity:"rare", text:"The bus that makes you google 'how to get out of Scarborough'."},
      {id:"tor-161", num:"161", name:"Castle Frank", city:"Toronto", rarity:"rare", text:"A bus for people who have given up on traditional navigation."},
      
      // Toronto - Very Rare
      {id:"tor-42", num:"42", name:"Eastwood", city:"Toronto", rarity:"very-rare", text:"Nobody knows where this actually goes. It just appears."},
      {id:"tor-185", num:"185", name:"Donway", city:"Toronto", rarity:"very-rare", text:"Proof that suburban planning was a mistake."},
      {id:"tor-63", num:"63", name:"Gerrard", city:"Toronto", rarity:"very-rare", text:"The bus equivalent of a bad decision at 2am."},
      
      // Toronto Night / Cursed
      {id:"tor-300", num:"300", name:"Bloor Night Bus", city:"Toronto", rarity:"legendary", text:"The vampire express. You will see things that cannot be unseen."},
      {id:"tor-301", num:"301", name:"Queen Night Bus", city:"Toronto", rarity:"cursed", text:"The most cursed vehicle in North America. Strong recommend."},
      {id:"tor-320", num:"320", name:"Yonge Night Bus", city:"Toronto", rarity:"legendary", text:"Drunk people, raccoons, and one man who is definitely a wizard."},
      {id:"tor-ghost", num:"???", name:"The Ghost Streetcar", city:"Toronto", rarity:"cursed", text:"Seen only after midnight on rainy nights. Smells like wet newspaper and regret."},
      
      // Other Canadian
      {id:"van-99", num:"99", name:"B-Line", city:"Vancouver", rarity:"uncommon", text:"The bus that taught an entire city what 'reliability' isn't."},
      {id:"mtl-80", num:"80", name:"Avenue du Parc", city:"Montreal", rarity:"rare", text:"The most beautiful and most chaotic bus simultaneously."},
      {id:"yyc-301", num:"301", name:"BRT", city:"Calgary", rarity:"rare", text:"A train that thinks it's a bus. Or the other way around."},
      
      // US Classics
      {id:"nyc-m15", num:"M15", name:"2nd Avenue", city:"New York", rarity:"uncommon", text:"Somehow both the best and worst bus in Manhattan at the same time."},
      {id:"nyc-m66", num:"M66", name:"Cross Town", city:"New York", rarity:"rare", text:"The bus that exists purely to make you late for everything."},
      {id:"chi-22", num:"22", name:"Clark", city:"Chicago", rarity:"uncommon", text:"The bus that runs the length of human suffering."},
      {id:"la-20", num:"20", name:"Metro Local", city:"Los Angeles", rarity:"rare", text:"A bus in a city that was designed to make buses fail."},
      {id:"phl-42", num:"42", name:"Baltimore Ave", city:"Philadelphia", rarity:"very-rare", text:"The bus they don't tell tourists about for good reason."},
      
      // UK / Europe
      {id:"ldn-73", num:"73", name:"To Stoke Newington", city:"London", rarity:"rare", text:"The most passive-aggressive bus in the Western hemisphere."},
      {id:"ldn-38", num:"38", name:"Hackney Central", city:"London", rarity:"uncommon", text:"Full of people who have very strong opinions about sourdough."},
      {id:"ber-m41", num:"M41", name:"Metrobus", city:"Berlin", rarity:"rare", text:"The bus that makes you feel like you're in a different decade."},
      {id:"par-91", num:"91", name:"Gare du Nord", city:"Paris", rarity:"very-rare", text:"The bus equivalent of existential dread."},
      
      // Asia / Wildcards
      {id:"tok-ya", num:"Shinjuku", name:"Marunouchi Line", city:"Tokyo", rarity:"rare", text:"The most polite hell on Earth."},
      {id:"hk-1", num:"1", name:"Hong Kong Island", city:"Hong Kong", rarity:"uncommon", text:"A double-decker that somehow still feels like a rollercoaster."},
      {id:"sg-143", num:"143", name:"To Jurong", city:"Singapore", rarity:"rare", text:"The cleanest bus you'll ever be depressed on."},
      
      // Intercity / Legendary
      {id:"go-lse", num:"GO", name:"Lakeshore East", city:"Ontario", rarity:"legendary", text:"The train that turns normal people into people who have opinions about GO Transit."},
      {id:"via-can", num:"The Canadian", name:"VIA Rail", city:"Canada", rarity:"cursed", text:"Four days. One shower. You will form lifelong grudges."},
      {id:"amtrak-1", num:"1", name:"Sunset Limited", city:"USA", rarity:"legendary", text:"The train that makes you understand why people romanticize trains."},
      
      // Pure Cursed Energy
      {id:"cursed-1", num:"3:17", name:"The 3:17 to Hell", city:"Unknown", rarity:"cursed", text:"This one shouldn't exist. It picks you, not the other way around."},
      {id:"cursed-2", num:"N-7", name:"Night Service", city:"Multiple", rarity:"cursed", text:"The bus that only appears when you've already given up."},
      {id:"cursed-3", num:"???", name:"The One That Doesn't Appear on Maps", city:"Toronto", rarity:"cursed", text:"The drivers won't talk about it. You shouldn't either."},
      {id:"cursed-4", num:"404", name:"The 404 Bus", city:"Internet", rarity:"legendary", text:"It doesn't exist. You've taken it three times."},
      // Additional routes for the finished product
      {id:"tor-11", num:"11", name:"Bayview", city:"Toronto", rarity:"rare", text:"The bus for people who own boats and have strong opinions about them."},
      {id:"tor-22", num:"22", name:"Coxwell", city:"Toronto", rarity:"very-rare", text:"A bus so chaotic they had to split it in two. Both halves are still bad."},
      {id:"tor-94", num:"94", name:"Wellesley", city:"Toronto", rarity:"uncommon", text:"Short, angry, and frequently on fire (metaphorically)."},
      {id:"sf-14", num:"14", name:"Mission", city:"San Francisco", rarity:"rare", text:"The bus that makes you feel like you're in a different city every three blocks."},
      {id:"sea-7", num:"7", name:"Rainier", city:"Seattle", rarity:"uncommon", text:"The bus that teaches you the true meaning of 'drizzle'."},
      {id:"aus-20", num:"20", name:"Manor", city:"Austin", rarity:"rare", text:"A bus in a city that was designed by people who hate buses."},
      {id:"ldn-29", num:"29", name:"Tottenham Court Road", city:"London", rarity:"legendary", text:"The bus that moves slower than walking but costs more than therapy."},
      {id:"cursed-5", num:"666", name:"The 666", city:"Various", rarity:"cursed", text:"It exists in every major city. It is never on time. It is always watching."},
      {id:"tor-504", num:"504", name:"King Streetcar", city:"Toronto", rarity:"uncommon", text:"The streetcar that moves at the speed of a disappointed parent."},
      {id:"tor-512", num:"512", name:"St. Clair", city:"Toronto", rarity:"rare", text:"The dedicated right-of-way that still somehow gets stuck in traffic."},
    ];

    // ==================== STATE ====================
    let state = {
      rides: [],
      collection: {},        // routeId -> {route, count, firstSeen, personallyRode: bool}
      streak: { current: 0, best: 0, lastRideDate: null },
      dailyClaimed: null,    // date string
    };

    function loadState() {
      const saved = localStorage.getItem('rarebus_v2');
      if (saved) state = JSON.parse(saved);
      
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

    function calculateSickoScore() {
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
      
      // Personally rode bonus (the real sicko tax)
      const personallyRode = entries.filter(e => e.personallyRode).length;
      score += personallyRode * 45;
      
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
    }

    function takeDailyRide() {
      const today = getToday();
      if (state.dailyClaimed === today) {
        alert("You've already taken today's ride. Come back tomorrow, sicko.");
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
      
      document.getElementById('sicko-score').textContent = calculateSickoScore().toLocaleString();
      document.getElementById('unique-count').textContent = unique;
      document.getElementById('total-routes').textContent = ROUTES.length;
      document.getElementById('current-streak').textContent = state.streak.current;
      document.getElementById('best-streak').textContent = state.streak.best;
      
      const cursed = entries.filter(e => e.route.rarity === 'cursed' || e.route.rarity === 'legendary').length;
      const pct = unique > 0 ? Math.round((cursed / unique) * 100) : 0;
      document.getElementById('cursed-pct').textContent = pct + '%';
      
      // Daily button state
      const dailyBtn = document.getElementById('daily-btn');
      const dailyText = document.getElementById('daily-text');
      const today = getToday();
      
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

    function renderCollection() {
      const grid = document.getElementById('collection-grid');
      const countEl = document.getElementById('collection-count');
      
      const entries = Object.values(state.collection).sort((a,b) => {
        const ra = getRarityWeight(b.route.rarity);
        const rb = getRarityWeight(a.route.rarity);
        if (ra !== rb) return ra - rb;
        return b.count - a.count;
      });
      
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

    function renderEverything() {
      updateStats();
      renderCollection();
      renderRecent();
    }

    // ==================== SPECIAL MOMENTS ====================
    function showRarePullToast(route, isDaily = false) {
      const el = document.createElement('div');
      const label = getRarityLabel(route.rarity);
      const color = route.rarity === 'cursed' ? 'text-red-400 border-red-600' : 'text-purple-400 border-purple-600';
      
      el.className = `fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 border ${color} px-5 py-3 rounded-2xl flex items-center gap-x-3 shadow-2xl z-50 text-sm`;
      el.innerHTML = `
        <div>
          <span class="font-medium">${label} pull:</span> 
          <span class="font-semibold">${route.num} ${route.name}</span>
        </div>
      `;
      
      document.body.appendChild(el);
      
      setTimeout(() => {
        el.style.transition = 'all 0.3s ease';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 280);
      }, 2600);
    }

    function shareCollection() {
      const entries = Object.values(state.collection);
      if (entries.length === 0) {
        alert("You have nothing to brag about yet. Touch grass (or a bus).");
        return;
      }
      
      const score = calculateSickoScore();
      const cursed = entries.filter(e => e.route.rarity === 'cursed' || e.route.rarity === 'legendary').length;
      const personally = entries.filter(e => e.personallyRode).length;
      
      let text = `My RareBus collection (Sicko Score: ${score})\n`;
      text += `${entries.length} routes • ${state.rides.length} rides logged\n`;
      if (state.streak.best > 0) text += `Best streak: ${state.streak.best} days\n`;
      if (cursed > 0) text += `Cursed/Legendary finds: ${cursed}\n`;
      if (personally > 0) text += `Personally ridden: ${personally} (certified sicko)\n`;
      
      text += `\nTop finds:\n`;
      
      const sorted = [...entries].sort((a,b) => getRarityWeight(b.route.rarity) - getRarityWeight(a.route.rarity)).slice(0, 5);
      sorted.forEach(e => {
        text += `- ${e.route.num} ${e.route.name} (${getRarityLabel(e.route.rarity)})\n`;
      });
      
      text += `\nhttps://github.com/slopopolis-hq (built in the factory)`;
      
      navigator.clipboard.writeText(text).then(() => {
        const orig = event?.target?.innerText || '';
        const btns = document.querySelectorAll('button, [onclick*="share"]');
        // simple toast
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
      
      // First time seed (very light)
      if (state.rides.length === 0) {
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
      
      document.getElementById('total-routes').textContent = ROUTES.length;
      renderEverything();
      
      // Keyboard
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
  </script>
</body>
