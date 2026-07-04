# CLAUDE.md

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. Component File Structure

**One folder per component. `export const`, never `export default` unless a tool requires it.**

Each component lives in its own folder under `src/components/`:

```
ComponentName/
  ComponentName.tsx      → export const ComponentName
  ComponentName.types.ts → export type ComponentNameProps  (only if the component has props)
  ComponentName.consts.ts → module-level constants (only if the component has any)
  ComponentName.utils.ts  → module-level helper functions (only if the component has any)
  index.ts               → export * from "./ComponentName"
```

- The `.tsx` file exports the component as `export const ComponentName = (...) => { ... }`.
- Add `ComponentName.types.ts` only when the component takes props. Don't create empty types files for propless components.
- Don't declare `const` values or helper functions at module scope inside the `.tsx`. Move constants to `ComponentName.consts.ts` and helper functions to `ComponentName.utils.ts`, and import them. Only create these files when there's something to put in them.
- `index.ts` re-exports the component so imports stay `@/components/ComponentName`.
- Use `export const`, never `export default` — unless a framework/tool forces a default export (e.g. Next.js `page.tsx`/`layout.tsx`).

## 6. Boolean Naming

**Booleans read as yes/no questions. Prefix with `is`, `has`, `should`, `can`.**

- Name boolean variables, state, and props `isDismissed`, `hasError`, `shouldRender`, `canSubmit` — never bare adjectives/participles like `dismissed`, `error`, `open`.
- Applies to `useState` flags, derived booleans, and component props alike.
