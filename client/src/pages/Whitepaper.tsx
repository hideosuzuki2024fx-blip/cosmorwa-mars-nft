import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { WhitepaperDownload } from "@/components/WhitepaperDownload";

/**
 * ホワイトペーパーダウンロードページ
 * 投資家向けの詳細なドキュメント提供
 */

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              ホームに戻る
            </Button>
          </Link>
          <h1 className="text-lg font-bold">ホワイトペーパー</h1>
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              投資家向けホワイトペーパー
            </h2>
            <p className="text-lg text-muted-foreground">
              CosmoRWAの詳細なビジネスプラン、市場分析、財務予測を含む包括的なドキュメント
            </p>
          </div>

          <WhitepaperDownload />

          {/* FAQ Section */}
          <section className="mt-16 pt-12 border-t border-border/50">
            <h3 className="text-2xl font-bold mb-8">よくある質問</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">Q: ホワイトペーパーは誰が対象ですか？</h4>
                <p className="text-muted-foreground">
                  A: 主に投資家、企業の事業開発担当者、宇宙・ブロックチェーン業界の専門家を対象としています。
                  ただし、CosmoRWAのコンセプトに興味のある全ての方にお読みいただけます。
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Q: ホワイトペーパーの内容は何ですか？</h4>
                <p className="text-muted-foreground">
                  A: 市場分析、3段階の実装ロードマップ、冷徹なリスク分析、競合分析、
                  財務予測（Year 1-3）、チーム要件、資金調達計画を含んでいます。
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Q: ホワイトペーパーはいつ更新されますか？</h4>
                <p className="text-muted-foreground">
                  A: 市場状況やプロジェクトの進捗に応じて、四半期ごとに更新予定です。
                  最新版はいつでもこのページからダウンロードできます。
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Q: ホワイトペーパーの内容について質問がある場合は？</h4>
                <p className="text-muted-foreground">
                  A: Discord、Twitter、またはメールでお気軽にお問い合わせください。
                  チームメンバーが詳しくご説明します。
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Q: ホワイトペーパーの内容は変更される可能性がありますか？</h4>
                <p className="text-muted-foreground">
                  A: はい、市場環境や規制状況の変化に応じて、内容は更新される可能性があります。
                  重要な変更があった場合は、コミュニティに通知いたします。
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16 pt-12 border-t border-border/50">
            <div className="p-8 rounded-lg bg-primary/10 border border-primary/30">
              <h3 className="text-2xl font-bold mb-4">投資や提携についてのお問い合わせ</h3>
              <p className="text-muted-foreground mb-6">
                CosmoRWAへの投資、パートナーシップ、その他のビジネス提携についてのお問い合わせは、
                以下の方法でお気軽にご連絡ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  メールで問い合わせ
                </Button>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Discord コミュニティに参加
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/20 py-12 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 CosmoRWA. All rights reserved.</p>
          <p className="mt-2">
            本ホワイトペーパーは情報提供目的であり、投資勧誘ではありません。
          </p>
        </div>
      </footer>
    </div>
  );
}
