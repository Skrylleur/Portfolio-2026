import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        info:
          "border-transparent bg-[#afc8ad] text-white hover:bg-[#2d4205]",
        gradient:
          "border-transparent bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90",
        glass:
          "border-border/50 bg-background/20 backdrop-blur-sm text-foreground hover:bg-background/30",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
      rounded: {
        default: "rounded-full",
        lg: "rounded-lg",
        xl: "rounded-xl",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, icon, iconPosition = "left", children, ...props }, ref) => {
    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="mr-1" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-1" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    )

    return (
      <div
        className={cn(badgeVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
