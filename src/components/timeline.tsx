import * as React from 'react'
import { cn } from '@/lib/utils'

interface Milestone {
  id: string
  date: string
  group: string
  title: string
  summary: string
  links: string[]
}

interface TimelineProps {
  milestones?: Milestone[]
  className?: string
}

export function Timeline({ milestones = [], className }: TimelineProps) {
  // TODO: 實現時間軸邏輯
  // 從 /data/milestones.json 讀取數據
  // 按日期排序並分組顯示
  // 支援不同 group 的視覺區分
  
  return (
    <div className={cn('space-y-8', className)}>
      <div className="text-center text-muted-foreground">
        Timeline component placeholder
      </div>
      {milestones.length === 0 && (
        <div className="text-center text-sm text-muted-foreground">
          暫無里程碑數據
        </div>
      )}
    </div>
  )
}

interface TimelineItemProps {
  milestone: Milestone
  isLast?: boolean
  className?: string
}

export function TimelineItem({ 
  milestone, 
  isLast = false, 
  className 
}: TimelineItemProps) {
  // TODO: 實現時間軸項目
  // 顯示日期、標題、摘要
  // 支援連結和分組樣式
  
  return (
    <div className={cn('relative', className)}>
      <div className="text-sm text-muted-foreground">
        {milestone.date}
      </div>
      <div className="font-semibold">
        {milestone.title}
      </div>
      <div className="text-sm text-muted-foreground">
        {milestone.summary}
      </div>
    </div>
  )
}
