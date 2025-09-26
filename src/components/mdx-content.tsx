import * as React from 'react'
import { cn } from '@/lib/utils'

interface MDXContentProps {
  content: string
  className?: string
}

export function MDXContent({ content, className }: MDXContentProps) {
  // TODO: 實現 MDX 渲染邏輯
  // 使用 MDX 渲染器處理內容
  // 支援自定義組件和樣式
  // 處理 frontmatter 和內容分離
  
  return (
    <div className={cn('prose prose-lg max-w-none', className)}>
      <div className="text-center text-muted-foreground mb-4">
        MDX Content Component
      </div>
      <div className="whitespace-pre-wrap text-sm text-muted-foreground">
        {content}
      </div>
    </div>
  )
}

interface MDXWrapperProps {
  children: React.ReactNode
  className?: string
}

export function MDXWrapper({ children, className }: MDXWrapperProps) {
  // TODO: 實現 MDX 包裝器
  // 提供統一的樣式和佈局
  // 支援自定義組件注入
  
  return (
    <div className={cn('mdx-content', className)}>
      {children}
    </div>
  )
}
