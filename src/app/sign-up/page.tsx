"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Sparkles, Crown, Users, TrendingUp } from 'lucide-react'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    platforms: [] as string[],
    primaryPlatform: '',
    followerCount: '',
    niche: '',
    customNiche: '',
    contentTypes: [] as string[],
    goals: [] as string[]
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'youtube', name: 'YouTube', icon: '▶️' },
    { id: 'twitter', name: 'Twitter/X', icon: '🐦' },
    { id: 'twitch', name: 'Twitch', icon: '🎮' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' }
  ]

  const niches = [
    'Beauty & Makeup',
    'Gaming & Esports',
    'Fitness & Health',
    'Food & Cooking',
    'Travel & Adventure',
    'Technology & Reviews',
    'Fashion & Style',
    'Lifestyle & Wellness',
    'Education & Tutorials',
    'Entertainment & Humor',
    'Business & Entrepreneurship',
    'Comedy & Memes',
    'Motivational & Inspiration',
    'Biblical & Faith',
    'Parenting & Family',
    'Art & Creativity',
    'Music & Performance',
    'Sports & Athletics',
    'Cars & Automotive',
    'Home & DIY',
    'Personal Development',
    'Mental Health & Mindfulness',
    'Finance & Investing',
    'Science & Nature',
    'History & Culture',
    'News & Politics',
    'Pets & Animals',
    'Photography & Videography',
    'Dance & Movement',
    'Relationships & Dating',
    'Study & Academic',
    'Language Learning',
    'Productivity & Organization',
    'Sustainability & Environment',
    'Astrology & Spirituality',
    'Book Reviews & Literature',
    'True Crime & Mystery',
    'Real Estate & Property',
    'Crypto & Web3',
    'Pop Culture & Celebrities',
    'Other - Suggest New Niche'
  ]

  const contentTypes = [
    'Tutorials & How-to',
    'Product Reviews & Unboxings',
    'Behind the Scenes',
    'Day in the Life',
    'Challenges & Trends',
    'Q&A Sessions',
    'Live Streams',
    'Brand Partnerships',
    'Viral Trends & Memes',
    'Educational Content',
    'Motivational Speeches',
    'Bible Studies & Devotionals',
    'Transformation Stories',
    'Reaction Videos',
    'Story Time Content',
    'Tips & Life Hacks',
    'Before & After',
    'Workout Routines',
    'Recipe & Cooking Shows',
    'Travel Vlogs',
    'Room Tours & Makeovers',
    'Get Ready With Me',
    'What I Eat in a Day',
    'Shopping Hauls',
    'Outfit of the Day',
    'Study With Me',
    'Morning/Night Routines',
    'Podcast Clips',
    'Interview Content',
    'Comedy Skits'
  ]

  const goals = [
    'Grow my following',
    'Increase engagement',
    'Make money from content',
    'Land brand partnerships',
    'Save time creating content',
    'Improve content quality',
    'Go viral more often',
    'Build personal brand',
    'Inspire and motivate others',
    'Share my faith and values',
    'Educate my audience',
    'Create consistent content',
    'Build a community',
    'Become a thought leader',
    'Help others achieve their goals',
    'Share knowledge and expertise',
    'Create positive impact',
    'Document my journey',
    'Connect with like-minded people',
    'Turn passion into income'
  ]

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsLoading(true)

    // Simulate API call and email collection
    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
      console.log('Sign-up data collected:', formData)

      // Log custom niche suggestions for review
      if (formData.customNiche) {
        console.log('🎯 NEW NICHE SUGGESTION:', formData.customNiche)
        console.log('👤 Suggested by:', `${formData.firstName} ${formData.lastName} (${formData.email})`)
      }

      // In production, this would:
      // 1. Send email to your notification system
      // 2. Store user data in database
      // 3. Send welcome email to user
      // 4. Add to email marketing list
      // 5. Flag custom niche suggestions for review
    }, 3000)
  }

  const togglePlatform = (platformId: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(p => p !== platformId)
        : [...prev.platforms, platformId]
    }))
  }

  const toggleContentType = (contentType: string) => {
    setFormData(prev => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(contentType)
        ? prev.contentTypes.filter(c => c !== contentType)
        : [...prev.contentTypes, contentType]
    }))
  }

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
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
                <div className="ml-2 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs text-white font-medium">
                  FOR INFLUENCERS
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-purple-300">Sign Up Progress</h2>
              <span className="text-sm text-gray-400">Step {step} of 3</span>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex-1 h-2 rounded-full ${
                    stepNumber <= step
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2">
                {isComplete ? "Welcome to Pulse AI!" : (
                  <>
                    {step === 1 && "Create Your Account"}
                    {step === 2 && "Tell Us About Your Content"}
                    {step === 3 && "Set Your Goals"}
                  </>
                )}
              </CardTitle>
              <p className="text-gray-300">
                {isComplete ? "Your influencer journey starts now!" : (
                  <>
                    {step === 1 && "Join 500K+ influencers creating viral content with AI"}
                    {step === 2 && "Help us personalize your content creation experience"}
                    {step === 3 && "What do you want to achieve with Pulse AI?"}
                  </>
                )}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* Success Screen */}
              {isComplete && (
                <div className="text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Account Created Successfully!</h3>
                    <p className="text-gray-300 max-w-md mx-auto">
                      Thanks for joining Pulse AI! We've collected your information and will notify you as soon as the full platform launches.
                    </p>

                    {/* Custom Niche Suggestion Thank You */}
                    {formData.customNiche && (
                      <div className="bg-blue-600/10 border border-blue-400/20 rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-blue-300 text-sm font-medium mb-2">
                          💡 Thank you for your niche suggestion!
                        </p>
                        <p className="text-gray-300 text-sm">
                          <strong>"{formData.customNiche}"</strong> - We'll review this and consider adding it to our platform. Your input helps us serve creators better!
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-purple-600/10 border border-purple-400/20 rounded-lg p-6 space-y-4">
                    <h4 className="text-purple-300 font-medium">🚀 What happens next?</h4>
                    <div className="text-left space-y-2 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>We'll email you when the full platform launches</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>You'll get early access and special pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Content creation tips sent to your inbox</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Exclusive influencer growth strategies</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-white font-medium">Share Pulse AI with other creators:</p>
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="outline"
                        className="text-white border-white/20 bg-white/10 hover:bg-white/20"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Pulse AI - AI Content Creation for Influencers',
                              text: 'Check out this AI platform for creating viral content!',
                              url: window.location.origin
                            })
                          } else {
                            navigator.clipboard.writeText(window.location.origin)
                            alert('Link copied to clipboard!')
                          }
                        }}
                      >
                        📱 Share
                      </Button>
                      <Link href="/">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          🏠 Back to Home
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="text-center text-gray-400 text-sm">
                    <p>Expected launch: <strong className="text-white">Q1 2025</strong></p>
                    <p>You're user #{Math.floor(Math.random() * 1000) + 1} on our waitlist! 🎉</p>
                  </div>
                </div>
              )}

              {/* Step 1: Basic Info */}
              {!isComplete && step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-white">Username/Handle</Label>
                    <Input
                      id="username"
                      placeholder="@yourusername"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Platform & Content Info */}
              {!isComplete && step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-white">Which platforms do you create content for?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          onClick={() => togglePlatform(platform.id)}
                          className={`cursor-pointer p-3 rounded-lg border transition-all ${
                            formData.platforms.includes(platform.id)
                              ? 'bg-purple-600/20 border-purple-400'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{platform.icon}</span>
                            <span className="text-white font-medium">{platform.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Primary Platform</Label>
                    <Select value={formData.primaryPlatform} onValueChange={(value) => setFormData({...formData, primaryPlatform: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select your main platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform.id} value={platform.id}>
                            {platform.icon} {platform.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Total Followers (across all platforms)</Label>
                    <Select value={formData.followerCount} onValueChange={(value) => setFormData({...formData, followerCount: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select follower range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1k">0 - 1K followers</SelectItem>
                        <SelectItem value="1k-10k">1K - 10K followers</SelectItem>
                        <SelectItem value="10k-50k">10K - 50K followers</SelectItem>
                        <SelectItem value="50k-100k">50K - 100K followers</SelectItem>
                        <SelectItem value="100k-500k">100K - 500K followers</SelectItem>
                        <SelectItem value="500k-1m">500K - 1M followers</SelectItem>
                        <SelectItem value="1m+">1M+ followers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Content Niche</Label>
                    <Select value={formData.niche} onValueChange={(value) => setFormData({...formData, niche: value, customNiche: value === 'other-suggest-new-niche' ? formData.customNiche : ''})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select your main niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {niches.map((niche) => (
                          <SelectItem key={niche} value={niche.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
                            {niche}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Custom Niche Input */}
                    {formData.niche === 'other-suggest-new-niche' && (
                      <div className="space-y-2 mt-3 p-4 bg-purple-600/10 border border-purple-400/20 rounded-lg">
                        <Label htmlFor="customNiche" className="text-purple-300 font-medium">
                          💡 Suggest a New Niche
                        </Label>
                        <Input
                          id="customNiche"
                          placeholder="e.g., Sustainable Living, Mental Health Advocacy, etc."
                          value={formData.customNiche}
                          onChange={(e) => setFormData({...formData, customNiche: e.target.value})}
                          className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        />
                        <p className="text-gray-300 text-sm">
                          🚀 Help us make Pulse AI better! Your suggestion will be reviewed and potentially added to our niche options.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-white">What type of content do you create?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {contentTypes.map((contentType) => (
                        <div
                          key={contentType}
                          onClick={() => toggleContentType(contentType)}
                          className={`cursor-pointer p-2 rounded-lg border text-sm transition-all ${
                            formData.contentTypes.includes(contentType)
                              ? 'bg-purple-600/20 border-purple-400 text-white'
                              : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          {contentType}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Goals */}
              {!isComplete && step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-white">What are your main goals? (Select all that apply)</Label>
                    <div className="space-y-2">
                      {goals.map((goal) => (
                        <div
                          key={goal}
                          onClick={() => toggleGoal(goal)}
                          className={`cursor-pointer p-3 rounded-lg border transition-all ${
                            formData.goals.includes(goal)
                              ? 'bg-purple-600/20 border-purple-400'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded border-2 ${
                              formData.goals.includes(goal)
                                ? 'bg-purple-500 border-purple-500'
                                : 'border-white/40'
                            }`}>
                              {formData.goals.includes(goal) && (
                                <div className="w-2 h-2 bg-white rounded-sm m-0.5" />
                              )}
                            </div>
                            <span className="text-white">{goal}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-600/10 border border-purple-400/20 rounded-lg p-4">
                    <h4 className="text-purple-300 font-medium mb-2">🎉 You're almost ready!</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      With your personalized setup, you'll be able to:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Create unlimited content for your audience</li>
                      <li>• Generate viral hooks and trending content</li>
                      <li>• Optimize for brand partnership opportunities</li>
                      <li>• Scale your content across all platforms</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" className="border-white/20" />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the{' '}
                      <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {!isComplete && (
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className="text-white border-white/20 bg-white/10 hover:bg-white/20 disabled:opacity-50"
                >
                  Previous
                </Button>

                {step < 3 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Creating Your Account...
                      </>
                    ) : (
                      <>
                        <Crown className="h-4 w-4 mr-2" />
                        Start Creating Content
                      </>
                    )}
                  </Button>
                )}
              </div>
              )}

              {!isComplete && step === 1 && (
                <div className="text-center pt-4">
                  <p className="text-gray-400 text-sm">
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-purple-400 hover:text-purple-300 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Social Proof */}
          {!isComplete && (
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>500K+ Influencers</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>10M+ Videos Created</span>
              </div>
              <div className="flex items-center space-x-1">
                <Crown className="h-4 w-4" />
                <span>$2.5B+ Brand Revenue</span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
