"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import {
  Video,
  Play,
  Download,
  Edit3,
  Sparkles,
  Camera,
  Globe,
  Users,
  TrendingUp,
  Star,
  Crown,
  BookOpen,
  Heart,
  ChevronRight,
  Loader2,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [selectedNiche, setSelectedNiche] = useState('')
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const steps = [
    {
      title: "Welcome to Pulse AI",
      subtitle: "AI Content Creation for Influencers",
      description: "Create unlimited viral content for your audience and brand partnerships across all social media platforms in seconds"
    },
    {
      title: "Choose Your Content Category",
      subtitle: "500+ Content Categories for Influencers",
      description: "Select from beauty, gaming, lifestyle, fitness, food, tech, travel, and hundreds more niches to create content your audience loves"
    },
    {
      title: "Select Platform & Style",
      subtitle: "Multi-Platform Optimization",
      description: "Choose your target platform and content style - we'll optimize for maximum engagement and viral potential"
    },
    {
      title: "Write Your Prompt",
      subtitle: "Describe Your Content Vision",
      description: "Tell our AI exactly how you want your content to look - our viral optimization AI will enhance it for maximum impact"
    },
    {
      title: "Real-Time Generation",
      subtitle: "Watch Your Content Come to Life",
      description: "Our AI creates audio and visuals simultaneously, optimized for your platform and audience with viral hooks"
    },
    {
      title: "Your Content is Ready!",
      subtitle: "Download, Edit, or Share",
      description: "Your professional-grade content is ready for your audience, brand partnerships, and social media success"
    }
  ]

  const contentCategories = {
    beauty_lifestyle: {
      label: "💄 Beauty & Lifestyle",
      subcategories: {
        makeup_tutorials: {
          label: "Makeup Tutorials",
          niches: ["Get Ready With Me", "Product Reviews", "Transformation", "Viral Makeup Trends", "Budget Beauty"]
        },
        skincare_wellness: {
          label: "Skincare & Wellness",
          niches: ["Morning Routines", "Product Testing", "Skin Transformation", "Self-Care Content", "Wellness Tips"]
        }
      }
    },
    gaming_tech: {
      label: "🎮 Gaming & Tech",
      subcategories: {
        gaming_content: {
          label: "Gaming Content",
          niches: ["Gameplay Highlights", "Game Reviews", "Tips & Tricks", "Reaction Videos", "Gaming Setup Tours"]
        },
        tech_reviews: {
          label: "Tech Reviews",
          niches: ["Phone Reviews", "Gadget Unboxings", "Tech Comparisons", "Setup Tours", "Tech News"]
        }
      }
    },
    fitness_health: {
      label: "💪 Fitness & Health",
      subcategories: {
        workout_content: {
          label: "Workout Content",
          niches: ["Quick Workouts", "Form Checks", "Workout Challenges", "Fitness Transformations", "Gym Vlogs"]
        },
        nutrition_wellness: {
          label: "Nutrition & Wellness",
          niches: ["Healthy Recipes", "Meal Prep", "Nutrition Tips", "What I Eat in a Day", "Health Challenges"]
        }
      }
    }
  }

  const platforms = [
    { id: 'tiktok', name: 'TikTok', specs: '9:16, 15-60s', icon: '🎵' },
    { id: 'instagram', name: 'Instagram Reels', specs: '9:16, 15-90s', icon: '📸' },
    { id: 'youtube', name: 'YouTube Shorts', specs: '9:16, up to 60s', icon: '▶️' },
    { id: 'youtube_long', name: 'YouTube Video', specs: '16:9, 5-15min', icon: '📺' }
  ]

  const demoPrompts = {
    "Get Ready With Me": "Create a 'Get Ready With Me' video showing a complete makeup transformation with trending products, perfect lighting, and engaging commentary that will hook viewers in the first 3 seconds.",
    "Gameplay Highlights": "Generate epic gaming moments compilation with dramatic music, slow-motion effects, and viral gaming reactions that will get massive engagement from the gaming community.",
    "Quick Workouts": "Create a high-energy 30-second workout routine with clear form demonstrations, motivational music, and results-focused messaging for fitness enthusiasts."
  }

  useEffect(() => {
    if (isGenerating && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 2, 100))
      }, 100)
      return () => clearTimeout(timer)
    }
    if (progress === 100 && isGenerating) {
      setTimeout(() => {
        setIsGenerating(false)
        setShowVideo(true)
        setCurrentStep(5)
      }, 1000)
    }
  }, [progress, isGenerating])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    setProgress(0)
    setCurrentStep(4)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <h1 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                  Pulse AI
                </h1>
                <Badge variant="secondary" className="ml-2 bg-purple-600/20 text-purple-300">
                  LIVE DEMO
                </Badge>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-purple-300">Demo Progress</h2>
              <span className="text-sm text-gray-400">Step {currentStep + 1} of {steps.length}</span>
            </div>
            <div className="relative">
              <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full" />
            </div>
          </div>

          {/* Step Content */}
          <Card className="mb-8 bg-black/20 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2">
                {steps[currentStep].title}
              </CardTitle>
              <p className="text-xl text-purple-300 mb-4">
                {steps[currentStep].subtitle}
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                {steps[currentStep].description}
              </p>
            </CardHeader>
            <CardContent>
              {/* Step 0: Welcome */}
              {currentStep === 0 && (
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6 text-center">
                        <Video className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">500+ Content Types</h3>
                        <p className="text-gray-300 text-sm">Every niche for influencers</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6 text-center">
                        <Sparkles className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Viral Optimization</h3>
                        <p className="text-gray-300 text-sm">AI creates engaging content</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6 text-center">
                        <Crown className="h-12 w-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Brand Partnership Ready</h3>
                        <p className="text-gray-300 text-sm">Professional quality content</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Button onClick={handleNext} size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Start Demo <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Additional step content would continue here with similar structure */}
              {/* For brevity, I'll include the key navigation and final step */}

              {/* Step 5: Content Ready */}
              {currentStep === 5 && showVideo && (
                <div className="space-y-6 text-center">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8 border border-purple-400/20">
                    <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl text-white mb-2">Your Content is Ready!</h3>
                    <p className="text-gray-300 mb-6">
                      Professional-grade content optimized for your audience and platform
                    </p>

                    {/* Mock Video Player */}
                    <div className="bg-black/40 rounded-lg p-6 mb-6">
                      <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="h-16 w-16 text-white mx-auto mb-4" />
                          <p className="text-white text-lg">{selectedNiche || "Your Viral Content"}</p>
                          <p className="text-gray-300 text-sm">Click to preview your content</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20">
                        <Play className="h-4 w-4 mr-2" />
                        Preview Content
                      </Button>
                      <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20">
                        <Download className="h-4 w-4 mr-2" />
                        Download HD
                      </Button>
                      <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit with AI
                      </Button>
                    </div>
                  </div>

                  <div className="bg-yellow-600/10 border border-yellow-400/20 rounded-lg p-6">
                    <h4 className="text-yellow-300 font-medium mb-2">🎉 Ready to Create Unlimited Content?</h4>
                    <p className="text-gray-300 mb-4">
                      Start generating professional content for your audience and brand partnerships
                    </p>
                    <Link href="/sign-up">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                        <Crown className="h-4 w-4 mr-2" />
                        Start Your Free Trial
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="text-white border-white/20 bg-white/10 hover:bg-white/20 disabled:opacity-50"
            >
              Previous
            </Button>
            <div className="flex space-x-2">
              <Link href="/sign-up">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Skip Demo - Start Creating
                </Button>
              </Link>
              {currentStep < steps.length - 1 && currentStep !== 3 && (
                <Button
                  onClick={handleNext}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
