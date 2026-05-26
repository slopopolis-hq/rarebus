const ROUTES = [
  // Toronto - Common (the everyday chaos)
  {id:"tor-1", num:"1", name:"Queen East", city:"Toronto", rarity:"common", text:"The people mover. You will see someone you went to high school with."},
  {id:"tor-501", num:"501", name:"Queen Streetcar", city:"Toronto", rarity:"common", text:"The artery of chaos. God help you if you're going all the way."},
  {id:"tor-506", num:"506", name:"Carlton", city:"Toronto", rarity:"common", text:"The streetcar that makes you question every life choice."},
  {id:"tor-29", num:"29", name:"Dufferin", city:"Toronto", rarity:"common", text:"The most honest bus in the city. Brutal and direct."},
  {id:"tor-5", num:"5", name:"Bloor", city:"Toronto", rarity:"common", text:"It goes forever and so does the guy next to you talking to himself."},
  {id:"tor-6", num:"6", name:"Bay", city:"Toronto", rarity:"common", text:"Short, angry, and always late in the exact way that ruins your day."},
  {id:"tor-11", num:"11", name:"Bayview", city:"Toronto", rarity:"common", text:"The bus for people who own boats and have strong opinions about them."},
  {id:"tor-22", num:"22", name:"Coxwell", city:"Toronto", rarity:"common", text:"A bus so chaotic they had to split it in two. Both halves are still bad."},
  {id:"tor-32", num:"32", name:"Eglinton West", city:"Toronto", rarity:"common", text:"Somehow always feels like you're in a different city."},
  {id:"tor-94", num:"94", name:"Wellesley", city:"Toronto", rarity:"common", text:"Short, angry, and frequently on fire (metaphorically)."},
  {id:"tor-504", num:"504", name:"King Streetcar", city:"Toronto", rarity:"common", text:"The streetcar that moves at the speed of a disappointed parent."},

  // Toronto - Uncommon
  {id:"tor-7", num:"7", name:"Bathurst", city:"Toronto", rarity:"uncommon", text:"The emotional support bus of the west end."},
  {id:"tor-25", num:"25", name:"Don Mills", city:"Toronto", rarity:"uncommon", text:"The bus that exists in its own dimension."},
  {id:"tor-51", num:"51", name:"Leslie", city:"Toronto", rarity:"uncommon", text:"You didn't know this existed until you were already on it."},
  {id:"tor-64", num:"64", name:"Main", city:"Toronto", rarity:"uncommon", text:"The bus equivalent of a strong coffee and a mild identity crisis."},
  {id:"tor-72", num:"72", name:"Pape", city:"Toronto", rarity:"uncommon", text:"It gets you there. Eventually. With character development."},
  {id:"tor-75", num:"75", name:"Sherbourne", city:"Toronto", rarity:"uncommon", text:"The bus that smells like the 90s and quiet desperation."},
  {id:"tor-82", num:"82", name:"Rosedale", city:"Toronto", rarity:"uncommon", text:"For when you want to see how the other half lives (from the outside)."},
  {id:"tor-89", num:"89", name:"Weston", city:"Toronto", rarity:"uncommon", text:"Long, loud, and full of people who have seen things."},
  {id:"tor-95", num:"95", name:"York Mills", city:"Toronto", rarity:"uncommon", text:"The suburban express that still manages to be late."},
  {id:"tor-112", num:"112", name:"Woodbine", city:"Toronto", rarity:"uncommon", text:"Beach vibes until you remember you're on a bus."},
  {id:"tor-504", num:"504", name:"King Streetcar", city:"Toronto", rarity:"uncommon", text:"The streetcar that moves at the speed of a disappointed parent."}, // note: appears once, rarity adjusted in real data
  {id:"tor-512", num:"512", name:"St. Clair", city:"Toronto", rarity:"uncommon", text:"The dedicated right-of-way that still somehow gets stuck in traffic."},

  // Toronto - Rare
  {id:"tor-47", num:"47", name:"Lansdowne", city:"Toronto", rarity:"rare", text:"Somehow always has both the most beautiful and most unhinged people on it simultaneously."},
  {id:"tor-73", num:"73", name:"Royal York", city:"Toronto", rarity:"rare", text:"Extremely long. Extremely empty. Extremely haunted."},
  {id:"tor-86", num:"86", name:"Scarborough Express", city:"Toronto", rarity:"rare", text:"The bus that makes you google 'how to get out of Scarborough'."},
  {id:"tor-161", num:"161", name:"Castle Frank", city:"Toronto", rarity:"rare", text:"A bus for people who have given up on traditional navigation."},
  {id:"tor-63", num:"63", name:"Gerrard", city:"Toronto", rarity:"rare", text:"The bus equivalent of a bad decision at 2am."},
  {id:"tor-52", num:"52", name:"Lawrence", city:"Toronto", rarity:"rare", text:"The one that takes you to places you didn't know were still in Toronto."},
  {id:"tor-129", num:"129", name:"Wilson", city:"Toronto", rarity:"rare", text:"Long enough to have its own weather system."},
  {id:"tor-176", num:"176", name:"Humberwood", city:"Toronto", rarity:"rare", text:"The bus that disappears into the suburbs and sometimes returns with new passengers."},
  {id:"tor-191", num:"191", name:"Highway 27", city:"Toronto", rarity:"rare", text:"For when you need to feel like you're leaving the province."},

  // Toronto - Very Rare / Night
  {id:"tor-42", num:"42", name:"Eastwood", city:"Toronto", rarity:"very-rare", text:"Nobody knows where this actually goes. It just appears."},
  {id:"tor-185", num:"185", name:"Donway", city:"Toronto", rarity:"very-rare", text:"Proof that suburban planning was a mistake."},
  {id:"tor-300", num:"300", name:"Bloor Night Bus", city:"Toronto", rarity:"very-rare", text:"The vampire express. You will see things that cannot be unseen."},
  {id:"tor-301", num:"301", name:"Queen Night Bus", city:"Toronto", rarity:"legendary", text:"The most cursed vehicle in North America. Strong recommend."},
  {id:"tor-320", num:"320", name:"Yonge Night Bus", city:"Toronto", rarity:"very-rare", text:"Drunk people, raccoons, and one man who is definitely a wizard."},
  {id:"tor-ghost", num:"???", name:"The Ghost Streetcar", city:"Toronto", rarity:"cursed", text:"Seen only after midnight on rainy nights. Smells like wet newspaper and regret."},

  // Other Canadian
  {id:"van-99", num:"99", name:"B-Line", city:"Vancouver", rarity:"uncommon", text:"The bus that taught an entire city what 'reliability' isn't."},
  {id:"van-20", num:"20", name:"Victoria", city:"Vancouver", rarity:"rare", text:"The one that goes to the beach and makes you question your life choices."},
  {id:"mtl-80", num:"80", name:"Avenue du Parc", city:"Montreal", rarity:"rare", text:"The most beautiful and most chaotic bus simultaneously."},
  {id:"mtl-55", num:"55", name:"Saint-Laurent", city:"Montreal", rarity:"uncommon", text:"The bus that speaks three languages and still gets lost."},
  {id:"yyc-301", num:"301", name:"BRT", city:"Calgary", rarity:"rare", text:"A train that thinks it's a bus. Or the other way around."},
  {id:"ott-95", num:"95", name:"Rockcliffe", city:"Ottawa", rarity:"uncommon", text:"The bus that goes to the fancy part and knows it."},
  {id:"win-60", num:"60", name:"Grant", city:"Winnipeg", rarity:"rare", text:"The bus that runs on hope and extremely cold air."},

  // US Classics
  {id:"nyc-m15", num:"M15", name:"2nd Avenue", city:"New York", rarity:"uncommon", text:"Somehow both the best and worst bus in Manhattan at the same time."},
  {id:"nyc-m66", num:"M66", name:"Cross Town", city:"New York", rarity:"rare", text:"The bus that exists purely to make you late for everything."},
  {id:"nyc-m15-sbs", num:"M15-SBS", name:"Second Avenue SBS", city:"New York", rarity:"uncommon", text:"The bus that thinks it is a train but still gets stuck behind a guy on a Citi Bike."},
  {id:"chi-22", num:"22", name:"Clark", city:"Chicago", rarity:"uncommon", text:"The bus that runs the length of human suffering."},
  {id:"chi-22-late", num:"22", name:"Clark Late Night", city:"Chicago", rarity:"very-rare", text:"The bus that runs when the city has given up on pretending to be civilized."},
  {id:"la-20", num:"20", name:"Metro Local", city:"Los Angeles", rarity:"rare", text:"A bus in a city that was designed to make buses fail."},
  {id:"sf-14", num:"14", name:"Mission", city:"San Francisco", rarity:"rare", text:"The bus that makes you feel like you're in a different city every three blocks."},
  {id:"sea-7", num:"7", name:"Rainier", city:"Seattle", rarity:"uncommon", text:"The bus that teaches you the true meaning of 'drizzle'."},
  {id:"phl-42", num:"42", name:"Baltimore Ave", city:"Philadelphia", rarity:"very-rare", text:"The bus they don't tell tourists about for good reason."},
  {id:"bos-1", num:"1", name:"Harvard", city:"Boston", rarity:"uncommon", text:"The bus that makes you understand why everyone walks."},
  {id:"dc-a2", num:"A2", name:"Anacostia", city:"Washington DC", rarity:"rare", text:"The bus that crosses worlds."},

  // UK / Europe
  {id:"ldn-73", num:"73", name:"To Stoke Newington", city:"London", rarity:"rare", text:"The most passive-aggressive bus in the Western hemisphere."},
  {id:"ldn-38", num:"38", name:"Hackney Central", city:"London", rarity:"uncommon", text:"Full of people who have very strong opinions about sourdough."},
  {id:"ldn-29", num:"29", name:"Tottenham Court Road", city:"London", rarity:"legendary", text:"The bus that moves slower than walking but costs more than therapy."},
  {id:"ldn-159", num:"159", name:"Oxford Circus", city:"London", rarity:"very-rare", text:"The bus that is always full of people who are late for something important."},
  {id:"ber-m41", num:"M41", name:"Metrobus", city:"Berlin", rarity:"rare", text:"The bus that makes you feel like you're in a different decade."},
  {id:"par-91", num:"91", name:"Gare du Nord", city:"Paris", rarity:"very-rare", text:"The bus equivalent of existential dread."},
  {id:"ams-48", num:"48", name:"Centraal", city:"Amsterdam", rarity:"uncommon", text:"The bus that smells like freedom and bicycles."},

  // Asia / Wildcards
  {id:"tok-ya", num:"Shinjuku", name:"Marunouchi Line", city:"Tokyo", rarity:"rare", text:"The most polite hell on Earth."},
  {id:"hk-1", num:"1", name:"Hong Kong Island", city:"Hong Kong", rarity:"uncommon", text:"A double-decker that somehow still feels like a rollercoaster."},
  {id:"sg-143", num:"143", name:"To Jurong", city:"Singapore", rarity:"rare", text:"The cleanest bus you'll ever be depressed on."},
  {id:"syd-380", num:"380", name:"Bondi", city:"Sydney", rarity:"uncommon", text:"The bus that goes to the beach and makes you regret your life choices."},
  {id:"auck-22", num:"22", name:"Onehunga", city:"Auckland", rarity:"rare", text:"The bus that runs on volcanic vibes and quiet judgment."},

  // Intercity / Legendary
  {id:"go-lse", num:"GO", name:"Lakeshore East", city:"Ontario", rarity:"legendary", text:"The train that turns normal people into people who have opinions about GO Transit."},
  {id:"via-can", num:"The Canadian", name:"VIA Rail", city:"Canada", rarity:"cursed", text:"Four days. One shower. You will form lifelong grudges."},
  {id:"amtrak-1", num:"1", name:"Sunset Limited", city:"USA", rarity:"legendary", text:"The train that makes you understand why people romanticize trains."},
  {id:"grey-ny", num:"NYC-DC", name:"Chinatown Bus", city:"Various", rarity:"very-rare", text:"You will arrive. You may not arrive as the same person."},

  // Pure Cursed Energy (the good stuff)
  {id:"cursed-1", num:"3:17", name:"The 3:17 to Hell", city:"Unknown", rarity:"cursed", text:"This one shouldn't exist. It picks you, not the other way around."},
  {id:"cursed-2", num:"N-7", name:"Night Service", city:"Multiple", rarity:"cursed", text:"The bus that only appears when you've already given up."},
  {id:"cursed-3", num:"???", name:"The One That Doesn't Appear on Maps", city:"Toronto", rarity:"cursed", text:"The drivers won't talk about it. You shouldn't either."},
  {id:"cursed-4", num:"404", name:"The 404 Bus", city:"Internet", rarity:"legendary", text:"It doesn't exist. You've taken it three times."},
  {id:"cursed-5", num:"666", name:"The 666", city:"Various", rarity:"cursed", text:"It exists in every major city. It is never on time. It is always watching."},
  {id:"cursed-6", num:"Nightmare", name:"The 4 a.m. Bus That Only Smells Like Wet Cigarettes and Regret", city:"Urban Legend", rarity:"cursed", text:"You will never be the same person who got on."},
  {id:"cursed-7", num:"???", name:"The Bus That Picks You Up When You Did Not Ask", city:"Everywhere", rarity:"cursed", text:"You did not hail it. It just knew."},
  {id:"cursed-8", num:"Last", name:"The Last Bus of the Night", city:"Every City", rarity:"cursed", text:"It waits for you specifically. Do not thank the driver."},

  // Additional high-quality expansions (Toronto + global flavor)
  {id:"tor-124", num:"124", name:"Sunnybrook", city:"Toronto", rarity:"uncommon", text:"The hospital bus. Everyone on it has a story they won't tell you."},
  {id:"tor-134", num:"134", name:"Progress", city:"Toronto", rarity:"rare", text:"Named ironically. It hasn't made any."},
  {id:"tor-168", num:"168", name:"Symes", city:"Toronto", rarity:"very-rare", text:"The bus that goes to the middle of nowhere and stays there."},
  {id:"tor-195", num:"195", name:"Jane", city:"Toronto", rarity:"uncommon", text:"Long. Loud. Legendary. The Jane is a lifestyle."},
  {id:"tor-300c", num:"300C", name:"Eglinton Night Special", city:"Toronto", rarity:"legendary", text:"The one that only appears when you have already accepted your fate."},
  {id:"tor-63-oss", num:"63", name:"Ossington Late Night", city:"Toronto", rarity:"rare", text:"The bus that turns 2am into a series of poor but memorable decisions."},
  {id:"ldn-12", num:"12", name:"Oxford Circus", city:"London", rarity:"uncommon", text:"The bus that is somehow always more crowded than the one before."},
  {id:"ldn-24", num:"24", name:"Hampstead Heath", city:"London", rarity:"rare", text:"The bus that goes to the park and makes you want to quit your job."},
  {id:"ldn-55", num:"55", name:"Hackney", city:"London", rarity:"uncommon", text:"The bus full of people who know exactly which cafe is best (this week)."},
  {id:"nyc-q46", num:"Q46", name:"Kew Gardens", city:"New York", rarity:"very-rare", text:"The bus that takes you to a different borough and a different decade."},
  {id:"chi-9", num:"9", name:"Ashland", city:"Chicago", rarity:"rare", text:"The bus that runs the length of the city's bad decisions."},
  {id:"la-4", num:"4", name:"Santa Monica", city:"Los Angeles", rarity:"uncommon", text:"The bus that is always stuck behind a Tesla whose driver is lost."},
  {id:"sf-38", num:"38", name:"Geary", city:"San Francisco", rarity:"rare", text:"The bus that teaches you the true meaning of 'fog'."},
  {id:"cursed-9", num:"3:33", name:"The Witching Hour", city:"Global", rarity:"cursed", text:"It arrives exactly when you shouldn't be outside."},
  {id:"cursed-10", num:"Reroute", name:"The Rerouted Express", city:"Everywhere", rarity:"cursed", text:"The route that used to exist. The driver is still looking for it."},
];

