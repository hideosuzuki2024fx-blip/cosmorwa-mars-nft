import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Lock, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * ホワイトペーパーダウンロードコンポーネント
 * 投資家向けの詳細なドキュメントをPDF形式で提供
 */

export function WhitepaperDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // PDFファイルをダウンロード
      const link = document.createElement("a");
      link.href = "/CosmoRWA-Whitepaper.pdf";
      link.download = "CosmoRWA-Whitepaper-v1.0.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("ダウンロードエラー:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const features = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "市場分析",
      description: "2026年のRWA、DeSci、宇宙経済の最新トレンド分析"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "法的リスク評価",
      description: "証券法準拠の設計と規制対応戦略"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "財務予測",
      description: "Year 1-3の保守的なシナリオと成長予測"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main CTA Card */}
        <Card className="bg-gradient-to-br from-primary/20 to-accent/10 border-primary/30 p-8 md:col-span-2 md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">CosmoRWA ホワイトペーパー</h3>
                <p className="text-sm text-muted-foreground">
                  投資家向けの詳細なビジネスプラン、市場分析、財務予測
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-accent/50 text-accent">
                  Version 1.0
                </Badge>
                <span className="text-xs text-muted-foreground">January 2026</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">ドキュメント内容:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Executive Summary</li>
                  <li>✓ 3段階の実装ロードマップ</li>
                  <li>✓ 冷徹なリスク分析と対策</li>
                  <li>✓ 競合分析と市場機会</li>
                  <li>✓ 財務予測（Year 1-3）</li>
                  <li>✓ チーム要件と資金調達計画</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2">ファイルサイズ</p>
                <p className="text-lg font-bold">485 KB</p>
              </div>

              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2">形式</p>
                <p className="text-lg font-bold">PDF</p>
              </div>

              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2">ページ数</p>
                <p className="text-lg font-bold">15ページ</p>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  ダウンロード中...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  PDFをダウンロード
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Features Grid */}
        {features.map((feature, idx) => (
          <Card key={idx} className="bg-card/50 border-primary/30 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 text-accent flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Information Box */}
      <Card className="bg-secondary/20 border-border/50 p-6">
        <h4 className="font-bold mb-3">このホワイトペーパーについて</h4>
        <p className="text-sm text-muted-foreground mb-4">
          本ホワイトペーパーは、AIの忖度を排除した冷徹な市場分析と、段階的な事業化ロードマップを提示しています。
          一般的な暗号資産プロジェクトが陥りやすい「法的リスク」と「実需の欠如」を徹底的に回避し、
          証券法準拠かつ実利的なビジネスモデルに基づいて設計されています。
        </p>
        <div className="p-4 rounded-lg bg-background/50 border border-border/50">
          <p className="text-xs font-mono text-muted-foreground">
            CosmoRWA Development Team | January 2026
          </p>
        </div>
      </Card>

      {/* Additional Resources */}
      <div className="space-y-3">
        <h4 className="font-bold">追加リソース</h4>
        <div className="grid md:grid-cols-2 gap-3">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 justify-start">
            <FileText className="w-4 h-4 mr-2" />
            技術ドキュメント
          </Button>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 justify-start">
            <FileText className="w-4 h-4 mr-2" />
            実装ロードマップ
          </Button>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 justify-start">
            <FileText className="w-4 h-4 mr-2" />
            リスク分析レポート
          </Button>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 justify-start">
            <FileText className="w-4 h-4 mr-2" />
            FAQ
          </Button>
        </div>
      </div>
    </div>
  );
}
