import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#dedbc8] text-[#070707] hover:bg-[#f0edda] font-mono text-[11px] uppercase tracking-wider",
        primary: "bg-[#dedbc8] text-[#070707] hover:bg-[#f0edda] font-mono text-[11px] uppercase tracking-wider",
        secondary: "border border-[#dedbc8]/20 bg-transparent text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 font-mono text-[11px] uppercase tracking-wider",
        outline: "border border-[#dedbc8]/20 bg-transparent text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 font-mono text-[11px] uppercase tracking-wider",
        ghost: "hover:bg-[#dedbc8]/5 hover:text-white font-mono text-[11px] uppercase tracking-wider",
        editorialLink: "font-sans underline underline-offset-4 decoration-1 decoration-gray-600 hover:decoration-white hover:text-white font-medium text-sm text-gray-300",
        systemControl: "bg-[#0d0d0d]/80 border border-[#dedbc8]/20 text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/10 text-xs font-mono uppercase tracking-wider",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 gap-1.5 px-4",
        xs: "h-7 gap-1 px-2.5 text-[10px]",
        sm: "h-8 gap-1 px-3 text-[11px]",
        lg: "h-11 gap-2 px-6 text-sm",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export default Button;
