# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Core RareBus gameplay loop ("Hop On" random route collection)
- Rarity tiers: Common, Uncommon, Rare, Very Rare, Legendary, Cursed
- Daily Ride system (one higher-quality pull per calendar day)
- Streak tracking (current streak + personal best)
- Unhinged Score (replaced previous Sicko Score)
- "I have actually ridden this" personal flags on collected routes
- Large hand-written database of routes with flavorful descriptions
- Share Collection feature
- Simple Milestones system for light progression
- Basic rarity filtering in the collection view
- Improved first-time experience and onboarding text
- Softened overall tone ("weird about transit" instead of "unwell")
- Light refactor: split into index.html + css/style.css + js/routes.js + js/game.js (still fully static)
- Significantly expanded route database with higher-quality, more varied, and funnier writing across more cities
- Improved feedback and celebration on rare/legendary/cursed route pulls
- Cleaned up duplication in routes.js and added another batch of stronger, higher-quality new entries with better writing and variety
- Added early scaffolding for Collections system (light progression through curated route sets)

### Notes
- All work stays under `[Unreleased]` until a release is cut.

## Changes in this cycle (Unreleased)
- **Fixed broken modular architecture**: Removed stray HTML from top of js/game.js, eliminated duplicate ROUTES data, made routes.js the single source of truth. Game now actually loads and runs as a clean static site.
- **Substantially expanded + upgraded route database**: 80+ high-quality, funny, varied entries with strong writing across Toronto (heavy), other Canadian cities, NYC, Chicago, London, SF, LA, Europe, Asia, intercity, and deep cursed lore. All ids unique, rarities consistent with game logic, no dups.
- **Completed Collections system in full**: 4 curated sets (Toronto Nightmare Pack, Cursed Classics, Long Haul Hero, Streetcar Struggle). Real completion detection, progress UI with bars, bonus Unhinged Score awarded on finish, celebration toasts, integrated into scoring and stats.
- **Added visible Collections section** in the main UI (progress cards, completion states, bonus display).
- **Scoring consistency**: Internal function renamed calculateUnhingedScore (was still Sicko internally). UI label and share text already used "Unhinged".
- **Improved daily + pull feedback** and collection bonus integration in score.
- **Verified slop-factory git identity** and continued under [Unreleased] only.