import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 bg-border transition-colors",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical: "h-full w-px",
      },
      variant: {
        default: "bg-border",
        primary: "bg-primary/20",
        accent: "bg-accent/20",
        muted: "bg-muted-foreground/20",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent",
        dashed: "border-dashed border-t",
      },
      size: {
        default: "",
        sm: "h-px",
        lg: "h-0.5",
        xl: "h-1",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "default",
    },
  }
)

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation, variant, size, decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation}
        className={cn(separatorVariants({ orientation, variant, size, className }))}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator, separatorVariants }
