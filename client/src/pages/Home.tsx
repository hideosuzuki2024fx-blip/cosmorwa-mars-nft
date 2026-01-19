import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Rocket, Users, Building2, Zap, Shield, Globe } from "lucide-react";
import { useState } from "react";
import { NasaDemo } from "@/components/NasaDemo";

/**
 * CosmoRWA: Space Discovery Infrastructure Platform
 * 
 * Design Philosophy:
 * - Dark theme with deep space aesthetic (navy/purple gradients)
 * - 3-phase roadmap visualization (Data Proof → Community → B2B)
 * - Interactive elements that showcase real NASA data integration
 * - Typography: Space Mono for headings (technical authority), Poppins for body (readability)
 * - Accent colors: Bright cyan/magenta for CTAs against deep background
 */

export default function Home() {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      title: "Proof of Discovery",
      subtitle: "データ証明プラットフォーム",
      description: "NASA APIと連携し、天文データの発見をブロックチェーンで証明。タイムスタンプ、発見者、座標を改ざん不可能な形で記録します。",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "リアルタイムNASA API連携",
        "発見のタイムスタンプ証明",
        "発見者ウォレット登録",
        "改ざん防止メカニズム"
      ],
      status: "MVP開発中",
      timeline: "Q1 2026"
    },
    {
      id: 2,
      title: "Community & Governance",
      subtitle: "コミュニティ形成と命名権NFT",
      description: "法的リスクを最小化した「応援型」NFT。特定の天体や火星の座標に対し、コミュニティ内での愛称を付ける権利を販売します。",
      icon: <Users className="w-8 h-8" />,
      features: [
        "命名権NFT発行",
        "コミュニティガバナンス",
        "インパクト投資（寄付モデル）",
        "二次流通ロイヤリティ"
      ],
      status: "設計段階",
      timeline: "Q2 2026"
    },
    {
      id: 3,
      title: "B2B Partnership",
      subtitle: "事業提携とオラクル機能",
      description: "企業や研究機関向けのデータプロバイダー。予測市場との統合、宇宙イベント判定オラクル、API提供を通じた収益化。",
      icon: <Building2 className="w-8 h-8" />,
      features: [
        "Polymarket等との連携",
        "オラクル・プロバイダー化",
        "B2B API提供",
        "企業スポンサーシップ"
      ],
      status: "パートナーシップ模索中",
      timeline: "Q3-Q4 2026"
    }
  ];

  const risks = [
    {
      title: "証券法の壁",
      description: "「投資リターン」を約束しないモデルに設計。純粋なデジタル・コレクタブルとして展開。",
      mitigation: "法務専門家との連携"
    },
    {
      title: "オラクルの信頼性",
      description: "NASAの公開APIと複数の検証レイヤーを組み合わせ、改ざん防止を実装。",
      mitigation: "多層検証メカニズム"
    },
    {
      title: "流動性の確保",
      description: "初期段階では法的リスクの低い「応援型」モデルから始め、コミュニティを構築。",
      mitigation: "段階的な市場拡大"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-accent" />
            <h1 className="text-xl font-bold">CosmoRWA</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#roadmap" className="text-sm hover:text-accent transition">ロードマップ</a>
            <a href="#risks" className="text-sm hover:text-accent transition">リスク分析</a>
            <a href="#demo" className="text-sm hover:text-accent transition">デモ</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            詳細を見る
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/30 text-accent border-primary/50">
              Space Discovery Infrastructure
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              宇宙データの信頼性を<br />
              <span className="text-accent">ブロックチェーンで証明</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              市民科学と宇宙探査の民主化を実現するプラットフォーム。発見のタイムスタンプ、所有権、報酬をトークン化し、透明性と信頼性を担保します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                デモを試す <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a href="/whitepaper">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  ホワイトペーパー
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 md:py-32 border-t border-border/50">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">3段階の実行ロードマップ</h3>
            <p className="text-muted-foreground max-w-2xl">
              AIの忖度を排除した冷徹な分析に基づき、法的リスクを最小化しながら段階的にマネタイズを進めます。
            </p>
          </div>

          <Tabs value={`phase-${activePhase}`} onValueChange={(v) => setActivePhase(parseInt(v.split('-')[1]))}>
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary/50">
              {phases.map((phase) => (
                <TabsTrigger key={phase.id} value={`phase-${phase.id}`} className="data-[state=active]:bg-primary/30">
                  <span className="hidden sm:inline">Phase {phase.id}</span>
                  <span className="sm:hidden">P{phase.id}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {phases.map((phase) => (
              <TabsContent key={phase.id} value={`phase-${phase.id}`} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-primary/20 text-accent">
                        {phase.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{phase.title}</h4>
                        <p className="text-sm text-accent">{phase.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">ステータス</span>
                        <Badge variant="outline" className="border-primary/50">{phase.status}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">予定</span>
                        <span className="text-sm text-accent">{phase.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-card/50 border-primary/30 p-6">
                    <h5 className="font-bold mb-4">主要機能</h5>
                    <ul className="space-y-3">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Risk Analysis Section */}
      <section id="risks" className="py-20 md:py-32 border-t border-border/50 bg-secondary/20">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">冷徹なリスク分析と対策</h3>
            <p className="text-muted-foreground max-w-2xl">
              AIの忖度を排除し、実現困難な3つの壁に直面。各々に対して現実的な対策を講じています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((risk, idx) => (
              <Card key={idx} className="bg-card/50 border-destructive/30 p-6 hover:border-destructive/50 transition">
                <h4 className="font-bold mb-3 text-destructive">{risk.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{risk.description}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-medium text-accent">対策: {risk.mitigation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 md:py-32 border-t border-border/50">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Proof of Discovery デモ</h3>
            <p className="text-muted-foreground max-w-2xl">
              NASA NeoWs APIと連携し、リアルタイムの小惑星データを取得・NFT化するデモンストレーション。
            </p>
          </div>

          <NasaDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border/50 bg-gradient-to-r from-primary/20 via-background to-accent/10">
        <div className="container text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            次のステップ
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            このプロジェクトは「一攫千金の暗号資産」ではなく、「宇宙データの信頼性を担保するインフラ事業」です。本気で挑戦する準備はできていますか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/whitepaper">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                ホワイトペーパーをダウンロード
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              コミュニティに参加
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">CosmoRWA</h4>
              <p className="text-sm text-muted-foreground">
                宇宙データの信頼性を担保するブロックチェーン・インフラプラットフォーム。
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">ロードマップ</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#roadmap" className="hover:text-accent transition">Phase 1: データ証明</a></li>
                <li><a href="#roadmap" className="hover:text-accent transition">Phase 2: コミュニティ</a></li>
                <li><a href="#roadmap" className="hover:text-accent transition">Phase 3: B2B提携</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">リソース</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">ホワイトペーパー</a></li>
                <li><a href="#" className="hover:text-accent transition">技術ドキュメント</a></li>
                <li><a href="#" className="hover:text-accent transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">コミュニティ</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Discord</a></li>
                <li><a href="#" className="hover:text-accent transition">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 CosmoRWA. All rights reserved.</p>
            <p>Built with transparency and scientific rigor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
