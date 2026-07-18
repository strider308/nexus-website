# 005 — Mobile Sheet Drawer Easing and Hit Targets

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: MEDIUM
- **Category**: Easing & duration
- **Estimated scope**: 1 file

## Problem
The mobile sheet drawer currently animates using a generic `ease-in-out` curve and slides over a short static distance (`translate-x-[2.5rem]`) rather than entering smoothly from fully off-screen. Additionally, the exit directions are inconsistent, and close buttons on mobile can have sub-optimal touch target sizes.

## Target
Refine the mobile sheet drawer to slide in fully from off-screen using `duration-[280ms]` and `ease-[var(--motion-ease-drawer)]`, configure correct translation vectors, support responsive widths, and increase tap-target bounds to a standard 44px minimum.

## Steps

### 1. Update `src/components/ui/sheet.tsx`
Update the `SheetContent` popup wrapper classes. Remove the hardcoded 280px width and use `w-[min(85vw,24rem)]`, apply correct directional translation parameters, and update the transitions:
```typescript
// before
className={cn(
  "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
  className
)}

// after
className={cn(
  "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-[280ms] ease-[var(--motion-ease-drawer)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-full data-[side=bottom]:data-starting-style:translate-y-full data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-[min(85vw,24rem)] data-[side=left]:border-r data-[side=left]:data-ending-style:-translate-x-full data-[side=left]:data-starting-style:-translate-x-full data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-[min(85vw,24rem)] data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-full data-[side=right]:data-starting-style:translate-x-full data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:-translate-y-full data-[side=top]:data-starting-style:-translate-y-full data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm motion-paused:transform-none motion-paused:transition-opacity",
  className
)}
```

Update the close button inside `SheetContent` to ensure a tap-target of 44×44px:
```typescript
// before
render={
  <Button
    variant="ghost"
    className="absolute top-3 right-3"
    size="icon-sm"
  />
}

// after
render={
  <Button
    variant="ghost"
    className="absolute top-3 right-3 h-11 w-11 flex items-center justify-center p-2 rounded-full hover:bg-white/5 active:scale-95 transition-transform"
    size="icon"
  />
}
```

*Note: Base UI primitives automatically handle focus trapping, Escape closing, and focus restoration.*

## Verification
- Run `npm run lint` and `npm run build` to confirm compiles.
- Open the mobile menu. Drag, press escape, and click outside. Verify that focus is captured inside the sheet, closes cleanly on escape, and restores focus to the trigger button.
