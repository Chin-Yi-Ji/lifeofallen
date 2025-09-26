import * as React from "react"
import { cn } from "@/lib/utils"
import { Card as CardPrimitive } from "@/components/ui/card"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "elevated"
}

export function Card({ 
  children, 
  className, 
  variant = "default",
  ...props 
}: CardProps) {
  return (
    <CardPrimitive
      className={cn(
        "transition-all duration-200",
        {
          "bg-card text-card-foreground": variant === "default",
          "border border-border bg-card text-card-foreground": variant === "outline",
          "bg-card text-card-foreground shadow-lg": variant === "elevated",
        },
        className
      )}
      {...props}
    >
      {children}
    </CardPrimitive>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}
