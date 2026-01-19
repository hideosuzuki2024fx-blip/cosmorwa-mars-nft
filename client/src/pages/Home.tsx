import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Rocket, Map, Zap, Users, TrendingUp, Globe, Lock } from "lucide-react";
import { useState } from "react";

/**
 * Mars NFT Land Ownership Platform
 * SpaceXへの提案資料としてのホームページ
 * 
 * コンセプト：火星表面をグリッド化し、NFT化。所有者の所有欲と予測アルゴリズムを活用し、
 * 火星探査の最適化エンジンを構築する。
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-accent" />
            <span className="font-bold text-lg">Mars NFT Land</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm hover:text-accent transition">Vision</a>
            <a href="#concept" className="text-sm hover:text-accent transition">Concept</a>
            <a href="#spacex" className="text-sm hover:text-accent transition">For SpaceX</a>
            <a href="#whitepaper" className="text-sm hover:text-accent transition">Whitepaper</a>
          </nav>
          <a href="/whitepaper">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
              Download Whitepaper
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mars-mapping-hero.jpg')",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 border-accent/50 text-accent">
              The Future of Mars Exploration
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Own Mars.
              <br />
              <span className="text-accent">Experience Discovery.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Tokenize Mars surface into NFT land parcels. Own virtual Martian territory.
              Experience real-time exploration events. Build the future of space discovery together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a href="/whitepaper">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Proposal for SpaceX
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 md:py-24 border-b border-border/50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">The Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Mars is not a destination. It's a frontier. And frontiers are explored by communities, not corporations alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-primary/30 p-6">
              <Map className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Tokenized Terrain</h3>
              <p className="text-muted-foreground">
                Mars surface divided into NFT parcels. Each parcel is a unique digital asset with real geographic coordinates.
              </p>
            </Card>

            <Card className="bg-card/50 border-primary/30 p-6">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Ownership</h3>
              <p className="text-muted-foreground">
                Millions of people worldwide can own Mars land. Participate in exploration. Share in discovery events.
              </p>
            </Card>

            <Card className="bg-card/50 border-primary/30 p-6">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Event-Driven Value</h3>
              <p className="text-muted-foreground">
                When rovers land on your property, samples are collected, or discoveries are made—your land gains value.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-16 md:py-24 border-b border-border/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="phase1">Phase 1: Tokenization</TabsTrigger>
              <TabsTrigger value="phase2">Phase 2: Prediction</TabsTrigger>
              <TabsTrigger value="phase3">Phase 3: Discovery</TabsTrigger>
            </TabsList>

            <TabsContent value="phase1" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mars Grid Tokenization</h3>
                  <p className="text-muted-foreground mb-4">
                    SpaceX provides high-resolution Mars mapping data. The surface is divided into geometric grid parcels.
                    Each parcel becomes an NFT with unique coordinates, elevation data, and geological features.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> 1 million+ NFT parcels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Real geographic coordinates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Geological data embedded
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Tradeable on blockchain
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src="/images/mars-nft-grid.jpg" alt="Mars NFT Grid" className="w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="phase2" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden order-2 md:order-1">
                  <img src="/images/mars-nft-grid.jpg" alt="Prediction Algorithm" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Predictive Algorithms</h3>
                  <p className="text-muted-foreground mb-4">
                    NFT owners develop algorithms to predict rover landing sites, resource deposits, and discovery locations.
                    They compete to acquire high-value parcels based on scientific analysis.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Community-driven prediction models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Geological analysis competitions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Crowdsourced data generation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Massive dataset for SpaceX
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="phase3" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Discovery Events</h3>
                  <p className="text-muted-foreground mb-4">
                    When rovers land on your property, samples are collected, or discoveries are made—these become events.
                    NFT owners experience real-time exploration. Land value increases based on discovery significance.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Real-time rover tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Sample collection notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Discovery event marketplace
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Dynamic NFT value updates
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src="/images/mars-discovery-event.jpg" alt="Discovery Event" className="w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SpaceX Value Proposition */}
      <section id="spacex" className="py-16 md:py-24 border-b border-border/50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Why SpaceX Should Adopt This</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This isn't just an NFT project. It's a Mars exploration optimization engine powered by global community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/30 p-8">
              <TrendingUp className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Massive Data Generation</h3>
              <p className="text-muted-foreground mb-6">
                Millions of community members generate predictive algorithms and geological analyses. SpaceX gains:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Crowdsourced Mars terrain analysis</li>
                <li>• Optimal landing site predictions</li>
                <li>• Resource deposit identification</li>
                <li>• Geological pattern recognition</li>
                <li>• Machine learning training data</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-primary/30 p-8">
              <Globe className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
              <p className="text-muted-foreground mb-6">
                Transform passive Mars enthusiasts into active participants. Benefits:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Millions of engaged community members</li>
                <li>• Mars colonization narrative building</li>
                <li>• Future customer base for Mars tourism</li>
                <li>• Funding source for exploration</li>
                <li>• Brand loyalty and advocacy</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-primary/30 p-8">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Exploration Acceleration</h3>
              <p className="text-muted-foreground mb-6">
                Data-driven insights accelerate Mars exploration:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Faster optimal site identification</li>
                <li>• Reduced exploration costs</li>
                <li>• Better resource allocation</li>
                <li>• Improved mission success rates</li>
                <li>• Competitive advantage vs. other space agencies</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-primary/30 p-8">
              <Lock className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Revenue Stream</h3>
              <p className="text-muted-foreground mb-6">
                New business model for Mars exploration:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• NFT primary sales revenue</li>
                <li>• Secondary market royalties</li>
                <li>• Premium features and subscriptions</li>
                <li>• Data licensing to other agencies</li>
                <li>• Mars tourism pre-registration</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary/10 border-b border-border/50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This proposal is designed for SpaceX. If you're interested in bringing Mars NFT Land to life, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/whitepaper">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Download Full Proposal
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Mars NFT Land</h4>
              <p className="text-sm text-muted-foreground">
                A proposal for SpaceX to tokenize Mars exploration.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/whitepaper" className="hover:text-accent">Whitepaper</a></li>
                <li><a href="#" className="hover:text-accent">Technical Docs</a></li>
                <li><a href="#" className="hover:text-accent">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent">Discord</a></li>
                <li><a href="#" className="hover:text-accent">Twitter</a></li>
                <li><a href="#" className="hover:text-accent">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent">Terms</a></li>
                <li><a href="#" className="hover:text-accent">Privacy</a></li>
                <li><a href="#" className="hover:text-accent">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Mars NFT Land. A proposal for SpaceX.</p>
            <p className="mt-2">
              This is a concept proposal. Not affiliated with SpaceX or any space agency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
