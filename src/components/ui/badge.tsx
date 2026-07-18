import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-transparent px-2 py-0.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-[color,background-color,border-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-[#dedbc8] text-[#070707]",
        outline: "border border-[#dedbc8]/20 text-[#dedbc8]",
        available: "border border-[#2a7d8a] bg-[#2a7d8a]/10 text-[#2a7d8a]",
        privateBeta: "border border-[#2e6fad] bg-[#2e6fad]/10 text-[#2e6fad]",
        referenceBuild: "border border-[#dedbc8]/30 bg-[#dedbc8]/5 text-[#dedbc8]",
        future: "border border-gray-600 bg-transparent text-gray-400",
        limitation: "border border-[#c44a7a] bg-[#c44a7a]/10 text-[#c44a7a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
export default Badge;
