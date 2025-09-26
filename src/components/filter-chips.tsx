import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface FilterChipProps {
  label: string
  value: string
  isSelected: boolean
  onClick: (value: string) => void
  className?: string
}

export function FilterChip({ 
  label, 
  value, 
  isSelected, 
  onClick, 
  className 
}: FilterChipProps) {
  return (
    <Badge
      variant={isSelected ? 'default' : 'outline'}
      className={cn(
        'cursor-pointer transition-colors hover:bg-primary/10',
        className
      )}
      onClick={() => onClick(value)}
    >
      {label}
    </Badge>
  )
}

interface FilterChipsProps {
  options: Array<{ label: string; value: string }>
  selectedValues: string[]
  onSelectionChange: (values: string[]) => void
  multiple?: boolean
  className?: string
}

export function FilterChips({
  options,
  selectedValues,
  onSelectionChange,
  multiple = false,
  className
}: FilterChipsProps) {
  // TODO: 實現篩選邏輯
  // 支援單選/多選模式
  // 處理選中狀態的切換
  
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {options.map((option) => (
        <FilterChip
          key={option.value}
          label={option.label}
          value={option.value}
          isSelected={selectedValues.includes(option.value)}
          onClick={(value) => {
            // TODO: 實現點擊邏輯
            console.log('Filter chip clicked:', value)
          }}
        />
      ))}
    </div>
  )
}
