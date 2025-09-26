import { useEffect, useState } from 'react'

interface UseScrollspyOptions {
  sectionIds: string[]
  offset?: number
}

export function useScrollspy({ sectionIds, offset = 0 }: UseScrollspyOptions) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    // TODO: 實現 scrollspy 邏輯
    // 監聽滾動事件，根據當前視窗位置決定哪個 section 應該高亮
  }, [sectionIds, offset])

  return activeSection
}
