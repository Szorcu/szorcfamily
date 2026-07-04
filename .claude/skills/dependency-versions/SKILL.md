---
name: dependency-versions
description: Choosing package versions when adding or updating dependencies in package.json. Use whenever editing dependencies/devDependencies, bumping packages, or resolving version choices.
---

# Dependency version policy

Apply this whenever you add, update, or bump anything in `package.json`.

## Rules

1. **Pin exact versions.** No `^`, `~`, `>=`, `*`, or ranges. `"react": "19.2.7"`, never `"^19"`.
2. **7-day stabilisation window.** Never install a version published less than 7 days ago. Pick the latest stable release dated on or before `today − 7 days`. Only violate this if the user explicitly asks (e.g. a required hotfix).
3. **Stay within the current major** unless the user asks to change majors.
4. **Skip pre-releases** (anything with `-rc`, `-beta`, `-canary`, etc.).

## Bumping a major (only if the user asks)

Check compatibility first, apply the change, then verify it actually works before reporting done. If it breaks, revert and give the user the concrete reason.
