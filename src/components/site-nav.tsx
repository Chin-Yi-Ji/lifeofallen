"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "首頁", href: "/" },
  { name: "里程碑", href: "/milestones" },
  { name: "價值觀", href: "/values" },
  { name: "工作", href: "/work" },
  { name: "興趣", href: "/interests" },
  { name: "生活風格", href: "/lifestyle" },
  { name: "最近關注", href: "/recent" },
  { name: "聯絡我", href: "/contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto flex h-14 items-center px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Placeholder for Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Reserved space for future CTA buttons */}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 items-center justify-between">
          <div className="font-semibold">About Allen</div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">切換選單</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle>導航選單</SheetTitle>
                <SheetDescription>
                  選擇您想要瀏覽的頁面
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-3 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-2 py-1 text-lg transition-colors hover:text-foreground/80",
                      pathname === item.href
                        ? "text-foreground font-semibold"
                        : "text-foreground/70"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
