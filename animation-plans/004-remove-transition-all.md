# 004 — Remove transition-all Safely

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 6 files

## Problem
Several shadcn components (`button.tsx`, `badge.tsx`, `accordion.tsx`, `progress.tsx`, `tabs.tsx`) and layout elements utilize `transition-all`. The issue with `transition-all` is not that it automatically causes layout recalculation on every render, but rather that it permits unintended properties (like padding, height, margins, border-radius) to animate implicitly when state changes, making rendering performance and active transitions less predictable.

## Target
Replace `transition-all` classes with explicit property transitions using valid Tailwind syntax.

## Steps

### 1. Update `src/components/ui/button.tsx`
Replace `transition-all` on Line 7:
```typescript
// before
"group/button ... transition-all ..."
// after
"group/button ... transition-[color,background-color,border-color,transform,box-shadow] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] ..."
```

### 2. Update `src/components/ui/badge.tsx`
Replace `transition-all` on Line 8:
```typescript
// before
"group/badge ... transition-all ..."
// after
"group/badge ... transition-[color,background-color,border-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] ..."
```

### 3. Update `src/components/ui/accordion.tsx`
Replace `transition-all` on Line 36:
```typescript
// before
"group/accordion-trigger ... transition-all ..."
// after
"group/accordion-trigger ... transition-[border-color,box-shadow,text-decoration-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] ..."
```

### 4. Update `src/components/ui/progress.tsx`
Base UI's `ProgressIndicator` renders progress dynamically by altering its width inline. We must animate this property explicitly using `transition-[width]`:
```typescript
// before
className={cn("h-full bg-primary transition-all", className)}
// after
className={cn("h-full bg-primary transition-[width] duration-[var(--motion-duration-state)] ease-[var(--motion-ease-out)]", className)}
```

### 5. Update `src/components/ui/tabs.tsx`
Replace `transition-all` on Line 61:
```typescript
// before
"relative ... transition-all ..."
// after
"relative ... transition-[color,background-color,border-color,box-shadow] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] ..."
```

## Verification
- Run `npm run lint` and `npm run build` to confirm clean compiles.
