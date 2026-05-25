# AGENTS.md — RareBus (Internal)

> **This file is gitignored.** It is for AI agents only and should not be published.

This document contains the operational and Slopopolis-specific instructions for working on RareBus.

## Commit Identity (Strict Rule)

**Every commit in this repository must show slop-factory as BOTH Author and Committer.**

- Author: `slop-factory <ryan+slopfactory@slopopolis.com>`
- Committer: `slop-factory <ryan+slopfactory@slopopolis.com>`

**Never** allow `ryanphanna` (or any personal human identity) to appear in the Author or Committer field.

Before committing or pushing, always ensure the slop-factory git identity is active (via folder-based includeIf rules, `~/.gitconfig-slop-factory`, or explicit config).

**Violation of this rule is not acceptable.** If it occurs, history must be immediately rewritten to remove the personal identity.

This is a core Slopopolis requirement to keep human and AI commit graphs separate.

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

- All changes stay under `[Unreleased]`.
- When we push: Immediately change `[Unreleased]` to the next version number.
- Choose the version based on change size (major/minor/patch).
- Do not leave changes under Unreleased after a push.
- After versioning, start a fresh empty `[Unreleased]` section.
- Follow the user's standard changelog rules (immutability after release, no empty Unreleased, etc.).

### Pushing Policy
- Any push to the remote is treated as a **request only**.
- The user decides whether and when to actually push.
- Do not push without explicit approval.

## Commit vs Push Workflow

- **Local commits**: You may auto-commit based on your own judgment whenever it feels appropriate.
- **Pushes**: These are deliberate requests. Only request a push when you genuinely feel it is the right time (as pushing triggers versioning).

## General Guidelines

- This is a pure Slopopolis project (high-velocity, low-utility, fun, slightly unhinged).
- Keep the public `README.md` focused on the game experience only.
- Any internal Slopopolis process, agent conventions, or publishing steps belong in this file.
- When making changes, continue the slop-factory author identity.

## Communication Style

- Keep all responses short and direct.
- Use minimal words. No long explanations or walls of text.
- Answer the actual question asked, nothing more.

Last updated: 2026-05-25

