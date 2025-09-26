import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  eyebrow, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center space-y-2", className)}>
      {eyebrow && (
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
