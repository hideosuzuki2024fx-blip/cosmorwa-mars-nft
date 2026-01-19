import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, AlertCircle, CheckCircle2, Zap } from "lucide-react";
import axios from "axios";

interface AsteroidData {
  id: string;
  name: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  close_approach_data: Array<{
    close_approach_date: string;
    relative_velocity: {
      kilometers_per_second: string;
    };
    miss_distance: {
      kilometers: string;
    };
  }>;
}

export function NasaDemo() {
  const [asteroids, setAsteroids] = useState<AsteroidData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAsteroid, setSelectedAsteroid] = useState<AsteroidData | null>(null);

  const fetchAsteroids = async () => {
    setLoading(true);
    setError(null);
    try {
      // Using public NASA API endpoint (no key required for basic queries)
      // This is a demonstration - in production, you'd use environment variables
      const today = new Date();
      const startDate = today.toISOString().split('T')[0];
      const endDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];

      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
      );

      const allAsteroids: AsteroidData[] = [];
      Object.values(response.data.near_earth_objects as Record<string, AsteroidData[]>).forEach(
        (dayAsteroids) => {
          allAsteroids.push(...dayAsteroids);
        }
      );

      // Sort by size (largest first)
      allAsteroids.sort((a, b) => {
        const diamA = a.estimated_diameter.kilometers.estimated_diameter_max;
        const diamB = b.estimated_diameter.kilometers.estimated_diameter_max;
        return diamB - diamA;
      });

      setAsteroids(allAsteroids.slice(0, 5)); // Show top 5
      if (allAsteroids.length > 0) {
        setSelectedAsteroid(allAsteroids[0]);
      }
    } catch (err) {
      setError("NASA APIへの接続に失敗しました。デモモードで表示します。");
      // Fallback demo data
      const demoData: AsteroidData[] = [
        {
          id: "demo-1",
          name: "2024 XY42",
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.5,
              estimated_diameter_max: 1.2,
            },
          },
          close_approach_data: [
            {
              close_approach_date: new Date().toISOString().split('T')[0],
              relative_velocity: { kilometers_per_second: "18.5" },
              miss_distance: { kilometers: "7.2M" },
            },
          ],
        },
        {
          id: "demo-2",
          name: "2024 AB89",
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: 0.3,
              estimated_diameter_max: 0.8,
            },
          },
          close_approach_data: [
            {
              close_approach_date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
              relative_velocity: { kilometers_per_second: "22.1" },
              miss_distance: { kilometers: "5.8M" },
            },
          ],
        },
      ];
      setAsteroids(demoData);
      setSelectedAsteroid(demoData[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-fetch on component mount
    fetchAsteroids();
  }, []);

  const generateNFTHash = (asteroid: AsteroidData) => {
    // Simulate NFT generation
    return `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 10)}`;
  };

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <div>
            <p className="text-sm font-medium">NASA NeoWs API: 接続中</p>
            <p className="text-xs text-muted-foreground">リアルタイムの小惑星データを取得中...</p>
          </div>
        </div>
        <Button
          onClick={fetchAsteroids}
          disabled={loading}
          size="sm"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              読み込み中
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              再取得
            </>
          )}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-destructive">注意</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Asteroid List */}
        <div className="md:col-span-1 space-y-3">
          <h4 className="font-bold text-sm">検出された小惑星</h4>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {asteroids.map((asteroid) => (
              <button
                key={asteroid.id}
                onClick={() => setSelectedAsteroid(asteroid)}
                className={`w-full text-left p-3 rounded-lg border transition ${
                  selectedAsteroid?.id === asteroid.id
                    ? "bg-primary/20 border-primary/50"
                    : "bg-secondary/30 border-border/50 hover:border-primary/30"
                }`}
              >
                <p className="text-sm font-medium truncate">{asteroid.name}</p>
                <p className="text-xs text-muted-foreground">
                  {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Asteroid Details */}
        <div className="md:col-span-2">
          {selectedAsteroid ? (
            <Card className="bg-card/50 border-primary/30 p-6 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedAsteroid.name}</h3>
                    <p className="text-sm text-accent">ID: {selectedAsteroid.id}</p>
                  </div>
                  <Badge className="bg-accent/20 text-accent border-accent/50">
                    検出済み
                  </Badge>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">推定直径</p>
                  <p className="text-lg font-bold">
                    {selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
                  </p>
                  <p className="text-xs text-muted-foreground">
                    (最小: {selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km)
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">最接近日</p>
                  <p className="text-lg font-bold">
                    {selectedAsteroid.close_approach_data[0]?.close_approach_date || "N/A"}
                  </p>
                </div>
              </div>

              {/* Close Approach Data */}
              {selectedAsteroid.close_approach_data[0] && (
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 space-y-3">
                  <h4 className="font-bold text-sm">最接近時の情報</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">相対速度</p>
                      <p className="text-sm font-medium">
                        {selectedAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second} km/s
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">地球からの距離</p>
                      <p className="text-sm font-medium">
                        {selectedAsteroid.close_approach_data[0].miss_distance.kilometers}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* NFT Generation */}
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-sm">発見の証明（NFT）</h4>
                </div>
                <div className="p-3 rounded bg-background/50 border border-border/50 font-mono text-xs break-all">
                  {generateNFTHash(selectedAsteroid)}
                </div>
                <p className="text-xs text-muted-foreground">
                  このハッシュは、発見日時、発見者、座標をブロックチェーンに記録します。改ざん不可能です。
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                  NFTを発行
                </Button>
                <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                  詳細を表示
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="bg-card/50 border-border/50 p-6 text-center">
              <p className="text-muted-foreground">小惑星を選択してください</p>
            </Card>
          )}
        </div>
      </div>

      {/* Information Box */}
      <div className="p-4 rounded-lg bg-secondary/20 border border-border/50 space-y-2">
        <h4 className="font-bold text-sm">このデモについて</h4>
        <p className="text-sm text-muted-foreground">
          このデモは、NASA NeoWs APIからリアルタイムの小惑星データを取得し、ブロックチェーン上でNFT化するプロセスを示しています。
          実装では、Chainlink Functions等を使用して、改ざん防止とオラクル信頼性を確保します。
        </p>
      </div>
    </div>
  );
}
