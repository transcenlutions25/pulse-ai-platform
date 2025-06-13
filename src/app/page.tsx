import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <h1 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                  Pulse AI
                </h1>
                <div className="ml-2 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs text-white font-medium">
                  FOR INFLUENCERS
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/demo">
                <Button variant="outline" className="text-white border-purple-400 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm">
                  View Demo
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Start Creating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30 mb-4">
                <span className="text-purple-300 text-sm font-medium">🎬 The Ultimate Content Creation Tool for Influencers</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Create Viral Content for Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Audience & Brand Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered video creation designed specifically for social media influencers. Generate unlimited
              content for your followers, brand collaborations, and client partnerships across all platforms in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-3 shadow-lg">
                  Start Creating for Your Audience
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="text-white border-white bg-white/15 hover:bg-white/25 backdrop-blur-sm text-lg px-8 py-3">
                  See How Influencers Use It
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              ✨ Unlimited content creation • 🎯 Brand partnership ready • 📈 Audience growth guaranteed
            </p>
          </div>
        </div>
      </div>

      {/* Influencer Value Proposition */}
      <div className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            🚀 Why Top Influencers Choose Pulse AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-lg border border-purple-400/30">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">Higher Brand Deal Value</h3>
              <p className="text-gray-300">Create premium content that commands 3x higher rates from brand partnerships and sponsorships.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg border border-purple-400/30">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">10x Content Output</h3>
              <p className="text-gray-300">Generate unlimited content for your audience without burnout. Post daily across all platforms effortlessly.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg border border-purple-400/30">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Viral Potential</h3>
              <p className="text-gray-300">AI analyzes trending patterns to create content optimized for maximum engagement and viral reach.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories for Influencers */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Create Content Your Audience Craves
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            500+ content types designed for maximum engagement and brand partnership opportunities
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="text-white font-medium text-sm">Viral Trends</h3>
              <p className="text-gray-400 text-xs">Trending content types</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all">
              <div className="text-2xl mb-2">💄</div>
              <h3 className="text-white font-medium text-sm">Beauty & Style</h3>
              <p className="text-gray-400 text-xs">Tutorials & hauls</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all">
              <div className="text-2xl mb-2">🍕</div>
              <h3 className="text-white font-medium text-sm">Food & Lifestyle</h3>
              <p className="text-gray-400 text-xs">Recipes & reviews</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all">
              <div className="text-2xl mb-2">🎮</div>
              <h3 className="text-white font-medium text-sm">Gaming Content</h3>
              <p className="text-gray-400 text-xs">Gameplay & reviews</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-lg border border-indigo-400/20 hover:border-indigo-400/40 transition-all">
              <div className="text-2xl mb-2">💪</div>
              <h3 className="text-white font-medium text-sm">Fitness & Health</h3>
              <p className="text-gray-400 text-xs">Workouts & wellness</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-lg border border-red-400/20 hover:border-red-400/40 transition-all">
              <div className="text-2xl mb-2">🛍️</div>
              <h3 className="text-white font-medium text-sm">Shopping Hauls</h3>
              <p className="text-gray-400 text-xs">Product showcases</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
              <div className="text-2xl mb-2">✈️</div>
              <h3 className="text-white font-medium text-sm">Travel & Adventure</h3>
              <p className="text-gray-400 text-xs">Destination content</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-600/10 to-rose-600/10 rounded-lg border border-pink-400/20 hover:border-pink-400/40 transition-all">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-white font-medium text-sm">Brand Partnerships</h3>
              <p className="text-gray-400 text-xs">Sponsored content</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-lg border border-orange-400/20 hover:border-orange-400/40 transition-all">
              <div className="text-2xl mb-2">🎬</div>
              <h3 className="text-white font-medium text-sm">Behind the Scenes</h3>
              <p className="text-gray-400 text-xs">Personal moments</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-lg border border-violet-400/20 hover:border-violet-400/40 transition-all">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="text-white font-medium text-sm">Educational Series</h3>
              <p className="text-gray-400 text-xs">Teaching your niche</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-3 shadow-lg">
                Start Creating Content for Your Audience
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Influencer Success Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Built for Influencer Success
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Everything you need to grow your following and maximize brand partnership revenue
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-400/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Platform Optimization</h3>
              <p className="text-gray-300 mb-4">Create content perfectly sized and formatted for TikTok, Instagram, YouTube, and Twitter simultaneously</p>
              <div className="text-sm text-purple-300">✨ Auto-format for all platforms • Custom CTAs • Optimal posting times</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-lg border border-blue-400/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Audience Engagement Analytics</h3>
              <p className="text-gray-300 mb-4">AI analyzes your audience preferences to create content that gets maximum likes, shares, and comments</p>
              <div className="text-sm text-blue-300">✨ Engagement prediction • Trend analysis • Viral optimization</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-lg border border-green-400/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Brand Partnership Tools</h3>
              <p className="text-gray-300 mb-4">Professional-grade content that helps you command higher rates and attract premium brand deals</p>
              <div className="text-sm text-green-300">✨ Brand-ready templates • Logo integration • Campaign tracking</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-lg border border-yellow-400/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Content Creation</h3>
              <p className="text-gray-300 mb-4">Generate weeks of content in minutes. Never run out of ideas or struggle with content consistency again</p>
              <div className="text-sm text-yellow-300">✨ Batch creation • Content calendar • Auto-scheduling</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-lg border border-red-400/20">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-white mb-4">Personal Brand Building</h3>
              <p className="text-gray-300 mb-4">Maintain consistent voice and style across all content while showcasing your unique personality</p>
              <div className="text-sm text-red-300">✨ Voice cloning • Brand guidelines • Style consistency</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-lg border border-indigo-400/20">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Content Quality</h3>
              <p className="text-gray-300 mb-4">Studio-quality videos that rival expensive production teams, all created with simple text prompts</p>
              <div className="text-sm text-indigo-300">✨ 4K resolution • Professional editing • Custom branding</div>
            </div>
          </div>
        </div>
      </div>

      {/* Influencer Testimonials */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Trusted by Top Influencers Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-white font-medium">Influencers Using Pulse AI</div>
              <div className="text-gray-400 text-sm">Across all platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-white font-medium">Videos Created Daily</div>
              <div className="text-gray-400 text-sm">For audiences worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-white font-medium">Brand Deal Revenue</div>
              <div className="text-gray-400 text-sm">Generated by our users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-white font-medium">Higher Engagement</div>
              <div className="text-gray-400 text-sm">vs traditional content</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">"My brand partnership rates increased 300% after using Pulse AI. Brands love the quality of content I can deliver now!"</p>
              <div className="text-white font-medium">@BeautyByMia</div>
              <div className="text-gray-400 text-sm">2.3M TikTok followers</div>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">"I went from posting 3x/week to daily across all platforms. My audience engagement is through the roof!"</p>
              <div className="text-white font-medium">@FitnessKingJake</div>
              <div className="text-gray-400 text-sm">1.8M Instagram followers</div>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4">"This tool is a game-changer for content creators. I create better content for my audience in 1/10th the time."</p>
              <div className="text-white font-medium">@TechReviewSarah</div>
              <div className="text-gray-400 text-sm">950K YouTube subscribers</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-3 shadow-lg">
                See How Top Influencers Use Pulse AI
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing for Influencers */}
      <div className="py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-y border-purple-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            🚀 Start Creating Content for Your Audience
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500K+ influencers who trust Pulse AI to create engaging content for their followers and maximize their brand partnership revenue
          </p>
          <div className="bg-white/10 rounded-lg p-8 border border-purple-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🎬</div>
                <h3 className="text-white font-semibold mb-2">Unlimited Content</h3>
                <p className="text-gray-300 text-sm">Create as much as your audience wants</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="text-white font-semibold mb-2">Higher Brand Rates</h3>
                <p className="text-gray-300 text-sm">Premium content = premium partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="text-white font-semibold mb-2">Audience Growth</h3>
                <p className="text-gray-300 text-sm">Engage more, grow faster</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12 py-4 shadow-lg">
                Start Creating for Your Audience - Free Trial
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              ✅ No credit card required • ✅ Unlimited content first 7 days • ✅ Cancel anytime • ✅ Join 500K+ influencers
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2025 Pulse AI. Empowering influencers to create amazing content for their audiences.</p>
        </div>
      </footer>
    </div>
  );
}
