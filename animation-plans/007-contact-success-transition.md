# 007 — Contact Form Success State Crossfade Transition

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: MEDIUM
- **Category**: Missed opportunities
- **Estimated scope**: 1 file

## Problem
In `src/app/contact/page.tsx`, switching from the active contact input form to the success block is an instant conditional toggle. This results in a jarring layout teleportation, which is disorienting and degrades visual polish. Additionally, screen readers are not notified of the status change, and keyboard focus is lost, violating accessibility guidelines.

## Target
Wrap the status boards inside Framer Motion `AnimatePresence` to render a smooth crossfade with a subtle 8px vertical transform. Update copy to match verified guidelines, set focus parameters, and define `role="status"` bounds.

## Steps

### 1. Update `src/app/contact/page.tsx`
Import Framer Motion features at the top of the file:
```typescript
import { AnimatePresence, motion } from "motion/react";
```

Update status checks to wrap panels in `AnimatePresence` with `mode="wait"`. In the success panel, preserve honest factual copy, add `role="status"` and `aria-live="polite"`, set `tabIndex={-1}`, and focus the heading using a React ref on successful trigger:
```typescript
  const successHeadingRef = React.useRef<HTMLHeadingElement>(null);

  // Set focus when status shifts to success
  React.useEffect(() => {
    if (status === "success" && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [status]);
```

Render structural container sizing to preserve stable layout height:
```typescript
// Replace current conditional block:
<div className="min-h-[460px] flex flex-col justify-start">
  <AnimatePresence mode="wait">
    {status === "success" ? (
      <motion.div
        key="success-card"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        className="border border-[#2a7d8a] bg-[#2a7d8a]/5 p-8 flex flex-col gap-4 motion-reduce:transform-none"
        role="status"
        aria-live="polite"
      >
        <h2 
          ref={successHeadingRef}
          tabIndex={-1} 
          className="text-sm font-mono uppercase tracking-wider text-[#2a7d8a] font-bold outline-none"
        >
          Diagnostics Request Logged
        </h2>
        <p className="text-xs text-gray-300 font-normal leading-relaxed font-sans">
          Thank you for outlining your workflow. We’ll review the information and contact you using the email address you provided.
        </p>
      </motion.div>
    ) : (
      <motion.form
        key="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="flex flex-col gap-6"
        noValidate
      >
        ...
      </motion.form>
    )}
  </AnimatePresence>
</div>
```

## Verification
- Run `npm run lint` and `npm run build` to confirm compiles.
- Fill and submit a valid query. Verify that the success block slides up (<= 8px) and fades in, and keyboard focus is automatically pulled to the success heading.
