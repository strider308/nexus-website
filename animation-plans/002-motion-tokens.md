# 002 — Motion Tokens

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: HIGH
- **Category**: Cohesion & tokens
- **Estimated scope**: 1 file

## Problem
Currently, there are no centralized easing or duration tokens in `src/styles/tokens.css`. Easings are hardcoded inline (e.g. `duration-300` or custom `cubic-bezier` values), causing visual inconsistency. To avoid cyclic definitions (e.g. `--ease-out: var(--ease-out)`), non-cyclic variables must be used.

## Target
Define shared, non-cyclic motion tokens in `src/styles/tokens.css` and consume them using Tailwind arbitrary utility syntax.

## Steps

### 1. Update `src/styles/tokens.css`
Append the following tokens under `:root`:
```css
  /* Motion Easings */
  --motion-ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --motion-ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --motion-ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);

  /* Motion Durations */
  --motion-duration-press: 160ms;
  --motion-duration-control: 180ms;
  --motion-duration-popover: 200ms;
  --motion-duration-drawer: 280ms;
  --motion-duration-state: 220ms;
```

### 2. Standardize usage syntax
Whenever consuming these variables in Tailwind class lists, use the exact syntax:
```text
ease-[var(--motion-ease-out)]
duration-[var(--motion-duration-control)]
```
Do not place raw `var(--...)` strings in class lists without a Tailwind utility prefix.

## Verification
- Run `npm run lint` and `npm run build` to verify clean compiles.
