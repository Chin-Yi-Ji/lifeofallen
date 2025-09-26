import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Target, Heart, Coffee, Calendar, Mail } from "lucide-react"

// 導入新的 hooks 和組件（預留，暫不調用邏輯）
import { useScrollspy } from "@/hooks/use-scrollspy"
import { FilterChips } from "@/components/filter-chips"
import { Timeline } from "@/components/timeline"
import { MDXContent } from "@/components/mdx-content"

export default function HomePage() {
  // TODO: 之後可以在此使用 useScrollspy hook
  // const activeSection = useScrollspy({ 
  //   sectionIds: ['hero', 'featured-work', 'milestones', 'values', 'interests-lifestyle', 'recent-focus', 'contact-cta'] 
  // })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            歡迎來到 About Allen
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Allen 的個人網站 - 使用 Next.js App Router、TypeScript、Tailwind CSS 和 shadcn/ui 建立的現代化網站
          </p>
          <Button size="lg" className="mt-4">
            開始探索
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="精選作品"
            subtitle="展示我的專業技能與創意成果"
            eyebrow="Portfolio"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>專案一</CardTitle>
                <CardDescription>專案描述 placeholder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  這裡將展示第一個精選專案的詳細資訊...
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>專案二</CardTitle>
                <CardDescription>專案描述 placeholder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  這裡將展示第二個精選專案的詳細資訊...
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>專案三</CardTitle>
                <CardDescription>專案描述 placeholder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  這裡將展示第三個精選專案的詳細資訊...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones Summary Section */}
      <section id="milestones" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="重要里程碑"
            subtitle="回顧我的成長軌跡與關鍵時刻"
            eyebrow="Journey"
          />
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground">
                  里程碑內容 placeholder - 這裡將展示重要的職業與個人成就...
                </p>
                {/* TODO: 之後可以使用 Timeline 組件 */}
                {/* <Timeline milestones={milestones} /> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Summary Section */}
      <section id="values" className="py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="核心價值觀"
            subtitle="指引我前進方向的重要信念"
            eyebrow="Values"
          />
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground">
                  價值觀內容 placeholder - 這裡將展示我的核心價值觀與信念...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interests & Lifestyle Summary Section */}
      <section id="interests-lifestyle" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="興趣與生活風格"
            subtitle="工作之外的我，豐富多彩的生活"
            eyebrow="Lifestyle"
          />
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground">
                  興趣與生活風格內容 placeholder - 這裡將展示我的興趣愛好與生活方式...
                </p>
                {/* TODO: 之後可以使用 FilterChips 組件進行篩選 */}
                {/* <FilterChips options={interestOptions} selectedValues={selectedInterests} onSelectionChange={setSelectedInterests} /> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Focus Section */}
      <section id="recent-focus" className="py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="最近關注"
            subtitle="我目前正在學習與關注的領域"
            eyebrow="Recent"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>最新關注 1</CardTitle>
                <CardDescription>關注領域描述</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  最近關注內容 placeholder...
                </p>
                {/* TODO: 之後可以使用 MDXContent 組件渲染內容 */}
                {/* <MDXContent content={recentContent} /> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>最新關注 2</CardTitle>
                <CardDescription>關注領域描述</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  最近關注內容 placeholder...
                </p>
                {/* TODO: 之後可以使用 MDXContent 組件渲染內容 */}
                {/* <MDXContent content={recentContent} /> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="讓我們開始對話"
            subtitle="有任何想法或合作機會，歡迎與我聯繫"
            className="text-white"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              聯絡我
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Briefcase className="mr-2 h-4 w-4" />
              查看作品
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
