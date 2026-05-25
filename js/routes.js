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