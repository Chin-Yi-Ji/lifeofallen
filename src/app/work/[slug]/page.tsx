import { notFound } from "next/navigation"
import { MdxContent } from "@/components/mdx-content"

// 假資料 - 當 MDX 讀不到內容時使用
const fallbackData = {
  title: "工作案例",
  role: ["Product Manager"],
  tags: ["案例研究"],
  timeline: "2024",
  kpi: ["待補充"],
  summary: "這是一個工作案例的範例頁面。當 MDX 內容無法載入時，會顯示這個假資料。",
  challenge: "待補充 - 這裡將描述專案面臨的主要挑戰...",
  approach: "待補充 - 這裡將描述採用的解決方案...",
  outcome: "待補充 - 這裡將描述專案的最終成果...",
  links: [],
  related_milestones: []
}

interface WorkPageProps {
  params: {
    slug: string
  }
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = params

  try {
    // 嘗試動態導入 MDX 文件
    const mdxModule = await import(`@/content/work/${slug}.mdx`)
    const { default: MDXContent, ...frontmatter } = mdxModule

    return (
      <div className="max-w-4xl mx-auto py-8">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.role?.map((role: string) => (
                <span key={role} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">時間線: {frontmatter.timeline}</p>
            <p className="text-lg text-gray-700">{frontmatter.summary}</p>
          </header>
          <MdxContent content={MDXContent} />
        </article>
      </div>
    )
  } catch (error) {
    // 如果 MDX 文件不存在或載入失敗，使用假資料
    console.log("MDX 文件載入失敗，使用假資料:", error)
    
    return (
      <div className="max-w-4xl mx-auto py-8">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{fallbackData.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {fallbackData.role.map((role: string) => (
                <span key={role} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {fallbackData.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">時間線: {fallbackData.timeline}</p>
            <p className="text-lg text-gray-700">{fallbackData.summary}</p>
          </header>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">挑戰</h2>
              <p className="text-gray-700">{fallbackData.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">解決方案</h2>
              <p className="text-gray-700">{fallbackData.approach}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">成果</h2>
              <p className="text-gray-700">{fallbackData.outcome}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">KPI 指標</h2>
              <div className="flex flex-wrap gap-2">
                {fallbackData.kpi.map((kpi: string) => (
                  <span key={kpi} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {kpi}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    )
  }
}