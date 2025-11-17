import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: boolean;
    success?: boolean;
    resize?: "none" | "vertical" | "horizontal" | "both";
  }
>(({ className, error, success, resize = "vertical", ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        resize === "none" && "resize-none",
        resize === "vertical" && "resize-y",
        resize === "horizontal" && "resize-x",
        resize === "both" && "resize",
        error && "border-destructive focus-visible:ring-destructive",
        success && "border-green-500 focus-visible:ring-green-500",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
