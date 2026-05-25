# AGENTS.md — RareBus (Internal)

> **This file is gitignored.** It is for AI agents only and should not be published.

This document contains the operational and Slopopolis-specific instructions for working on RareBus.

## Commit Convention

All commits in this repository **must** be made as the slop-factory bot using this exact author line:

```bash
--author="slop-factory <ryan+slopfactory@slopopolis.com>"
```

**Example commit:**
```bash
git commit -m "Add new cursed routes" --author="slop-factory <ryan+slopfactory@slopopolis.com>"
```

This convention keeps human craft commits separate from AI-generated slop in the broader Slopopolis system.

## Publishing / Releasing to slopopolis-hq

This repo is intended to live under the Slopopolis organization.

### Steps to publish

1. Create a new repository called `rarebus` in the `slopopolis-hq` org (public).
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

## Changelog & Versioning

- All changes must be documented under the `[Unreleased]` section.
- Do **not** create versioned sections (e.g. `## [0.1.0]`) in advance.
- Version numbers are only assigned when the project is actually ready to be released/pushed to the org.
- Adding features or making changes does **not** automatically trigger a version bump.
- When releasing: Move the contents of `[Unreleased]` into a proper version header, then start a fresh empty `[Unreleased]` section.
- Follow the user's standard changelog rules (no empty [Unreleased] sections after release, immutability of released versions, etc.).

## General Guidelines

- This is a pure Slopopolis project (high-velocity, low-utility, fun, slightly unhinged).
- Keep the public `README.md` focused on the game experience only.
- Any internal Slopopolis process, agent conventions, or publishing steps belong in this file.
- When making changes, continue the slop-factory author identity.

Last updated: 2026-05-25

