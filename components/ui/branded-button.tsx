import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"
import { cn } from "@/lib/utils"

const brandedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A1A2F] shadow-lg hover:shadow-xl hover:scale-105",
        secondary:
          "bg-gradient-to-r from-[#0A1A2F] to-[#1A2F45] text-[#FFD700] border-2 border-[#FFD700] shadow-lg hover:shadow-xl hover:scale-105",
        accent:
          "bg-gradient-to-r from-[#1A2F45] to-[#0D1F35] text-[#F5F5F5] border border-[#FFD700] shadow-md hover:shadow-lg hover:border-[#FFD700] hover:scale-105",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

interface BrandedButtonProps extends React.ComponentProps<"button">, VariantProps<typeof brandedButtonVariants> {
  asChild?: boolean
  showLogo?: boolean
}

function BrandedButton({
  className,
  variant,
  size,
  asChild = false,
  showLogo = true,
  children,
  ...props
}: BrandedButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className={cn(brandedButtonVariants({ variant, size, className }))} {...props}>
      {showLogo && (
        <Image src="/images/goal-betting-logo.png" alt="" width={24} height={24} className="w-11 h-11 animate-pulse" />
      )}
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Comp>
  )
}

export { BrandedButton, brandedButtonVariants }
