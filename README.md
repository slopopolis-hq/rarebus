# RareBus

**You are a transit sicko. Collect the routes that prove it.**

RareBus is a tiny, mean-spirited, strangely compelling browser game about logging the most unhinged, obscure, and cursed public transit rides on Earth.

Every time you click "Hop On", you add another entry to your personal museum of poor decisions. Some routes are common. Some are legendary. A few should probably be classified as crimes against humanity.

## Current Features

- Large hand-written database of routes across multiple cities with real personality
- Rarity system (Common → Cursed)
- Daily Ride (one special, higher-rarity ride per calendar day)
- Real streak tracking
- Sicko Score (a completely made-up but deeply meaningful number)
- "I have actually ridden this" flags for the truly unwell
- Shareable collection (copy a beautiful brag to clipboard)
- Fully offline, pure localStorage

## Philosophy

This is the fun, stupid sibling to serious transit tools.

No real data. No noble goals. Just the quiet joy of becoming the kind of person who has strong feelings about the 3:17am 301.

---

Built in Slopopolis HQ from the spark:  
*"what if we made riding public transit into a game?"*

Zero employees. Maximum degeneracy.

## Play

```bash
open index.html
```

Or just double-click it.

## Future Degeneracy (maybe)

- More cities
- Route trading
- "I rode this with a friend" social features
- Export your collection as a cursed zine
- Actual GTFS import for people who want to ruin the joke

Currently operating at peak slop velocity.

## Publishing / Releasing to slopopolis-hq

This repo is intended to live under the Slopopolis organization.

1. Create a new repository called `rarebus` in the slopopolis-hq org (public).
2. From this directory, run:

```bash
git remote add origin https://github.com/slopopolis-hq/rarebus.git
git branch -M main
git push -u origin main
```

The agent (slop-factory) has been committing as:

```
--author="slop-factory <ryan+slopfactory@slopopolis.com>"
```

All future changes should continue this pattern.
