# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-05-25

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
- Significantly expanded route database (95 high-quality, funny entries across Toronto, other Canadian cities, NYC, Chicago, London, SF, LA, Europe, Asia, and intercity)
- Improved feedback and celebration on rare/legendary/cursed route pulls
- Completed Collections system in full: 4 curated sets (Toronto Nightmare Pack, Cursed Classics, Long Haul Hero, Streetcar Struggle) with progress UI, completion tracking, Unhinged Score bonuses, and celebration toasts
- Visible Collections section in the main UI (progress cards, completion states, bonus display)
- Scoring consistency: internal function fully renamed to calculateUnhingedScore

### Fixed
- Broken modular architecture: removed stray HTML from js/game.js, eliminated duplicate ROUTES data, made routes.js the single source of truth. Game now actually loads and runs cleanly as a static site.

### Changed
- Improved daily pulls, collection bonus integration, and overall polish after foundational fixes.

### Notes
- First proper release. All prior work promoted from [Unreleased]. Game is now actually playable and doesn't suck.

## [Unreleased]