import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, CheckCircle, BookOpen, MessageCircle, Users, TrendingUp, ArrowRight, Sparkles, Play, Zap, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section */}
      <Section className="pt-16 pb-12 relative overflow-hidden">
        {/* Enhanced Background Gradients & Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:via-purple-900/20 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        {/* Enhanced Floating Elements with Better Animation */}
        <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-16 left-1/3 w-16 h-16 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-15 blur-xl animate-pulse delay-1500" />
        
        {/* Geometric Shapes for Visual Interest */}
        <div className="absolute top-24 right-1/3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-ping delay-700" />
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping delay-1000" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left space-y-6">
              {/* Enhanced Badges with Better Styling */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="group relative overflow-hidden text-xs bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 text-orange-800 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-red-900/30 dark:text-yellow-200 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-yellow-800/50 dark:via-orange-800/50 dark:to-red-800/50" />
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-500 dark:fill-yellow-300 dark:text-yellow-300 relative z-10" />
                  <span className="relative z-10 font-medium">Student Love</span>
                </Badge>
                <Badge variant="secondary" className="group relative overflow-hidden text-xs bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-emerald-800 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-200 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-green-800/50 dark:via-emerald-800/50 dark:to-teal-800/50" />
                  <Zap className="w-3 h-3 mr-1 text-emerald-500 dark:text-emerald-300 relative z-10" />
                  <span className="relative z-10 font-medium">Beginner-Friendly</span>
                </Badge>
                <Badge variant="secondary" className="group relative overflow-hidden text-xs bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-indigo-800 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 dark:text-indigo-200 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-blue-800/50 dark:via-indigo-800/50 dark:to-purple-800/50" />
                  <Heart className="w-3 h-3 mr-1 text-indigo-500 dark:text-indigo-300 relative z-10" />
                  <span className="relative z-10 font-medium">Flexible Pace</span>
                </Badge>
              </div>

              {/* Enhanced Main Heading with Better Typography */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 via-blue-900 to-slate-900 dark:from-white dark:via-slate-100 dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight">
                  Learn Thai with Sarah
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">—</span>
                  <span className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-rose-600 dark:from-blue-400 dark:via-purple-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                    clear, friendly, and practical
                  </span>
                  <span className="text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">.</span>
                </div>
              </div>

              {/* Enhanced Subheading with Better Styling */}
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                Master tones, script, and everyday Thai through bite-sized lessons, culture tips, and guided practice.
              </p>

              {/* Enhanced CTA Buttons with Better Effects */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-rose-600 hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:to-rose-700 text-white shadow-xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold border-0"
                >
                  <Link href="/pricing" className="flex items-center">
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="group relative overflow-hidden border-2 border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-400 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300"
                >
                  <Link href="/auth/signup" className="flex items-center">
                    <Play className="mr-2 h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                    See a Free Demo
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </Button>
              </div>

              {/* Enhanced Stats Section with Better Visual Appeal */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { number: "10K+", label: "Students", icon: Users, gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-100 to-cyan-100", darkBgGradient: "from-blue-900/30 to-cyan-900/30" },
                  { number: "500+", label: "Lessons", icon: BookOpen, gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-100 to-pink-100", darkBgGradient: "from-purple-900/30 to-pink-900/30" },
                  { number: "98%", label: "Success Rate", icon: TrendingUp, gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-100 to-emerald-100", darkBgGradient: "from-green-900/30 to-emerald-900/30" },
                ].map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.bgGradient} dark:${stat.darkBgGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <div className={`w-8 h-8 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Enhanced Image with Better Effects */}
            <div className="relative group">
              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-purple-400/15 via-pink-400/15 to-rose-400/15 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-700" />
              
              <div className="relative">
                <Image
                  src="/thai-teacher-with-students-in-modern-classroom-set.png"
                  alt="Sarah teaching Thai in a friendly classroom environment"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl border-4 border-white/30 dark:border-slate-700/30 backdrop-blur-sm w-full h-auto group-hover:shadow-blue-500/25 group-hover:shadow-purple-500/25 group-hover:shadow-pink-500/25 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1"
                />
                
                {/* Enhanced Floating Elements on Image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-xl animate-bounce group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl animate-bounce delay-1000 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                
                {/* Additional Decorative Elements */}
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping delay-500" />
                <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Value Props */}
      <Section className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-800/30" />
        
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Why Choose Us</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            Why learn Thai with Sarah?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A structured, supportive approach that makes Thai accessible and enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            {
              icon: BookOpen,
              title: "Beginner-friendly structure",
              description: "Step-by-step lessons covering tones, script, and essential vocabulary",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              borderGradient: "from-blue-200 to-cyan-200",
              darkBgGradient: "from-blue-900/30 to-cyan-900/30",
              darkBorderGradient: "from-blue-700/50 to-cyan-700/50",
            },
            {
              icon: MessageCircle,
              title: "Real conversation focus",
              description: "Learn phrases and expressions you'll actually use in daily life",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50",
              borderGradient: "from-purple-200 to-pink-200",
              darkBgGradient: "from-purple-900/30 to-pink-900/30",
              darkBorderGradient: "from-purple-700/50 to-pink-700/50",
            },
            {
              icon: TrendingUp,
              title: "Progress tracking",
              description: "Stay motivated with clear milestones and gentle accountability",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50",
              borderGradient: "from-green-200 to-emerald-200",
              darkBgGradient: "from-green-900/30 to-emerald-900/30",
              darkBorderGradient: "from-green-700/50 to-emerald-700/50",
            },
            {
              icon: Users,
              title: "Teacher support",
              description: "Ask questions, get feedback, and learn with a supportive community",
              gradient: "from-orange-500 to-red-500",
              bgGradient: "from-orange-50 to-red-50",
              borderGradient: "from-orange-200 to-red-200",
              darkBgGradient: "from-orange-900/30 to-red-900/30",
              darkBorderGradient: "from-orange-700/50 to-red-700/50",
            },
          ].map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.borderGradient} dark:${item.darkBorderGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
              
              <CardHeader className="relative z-10 text-center pb-4">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${item.bgGradient} dark:${item.darkBgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {item.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Enhanced Curriculum Preview */}
      <Section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(120,119,198,0.05),transparent_50%)]" />
        
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
            <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Learning Path</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            What you'll learn
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum designed to take you from complete beginner to confident speaker
          </p>
        </div>

        <Tabs defaultValue="beginner" className="max-w-5xl mx-auto relative z-10">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-1 rounded-2xl shadow-lg">
            <TabsTrigger 
              value="beginner" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              Beginner
            </TabsTrigger>
            <TabsTrigger 
              value="script" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              Script & Tones
            </TabsTrigger>
            <TabsTrigger 
              value="everyday" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              Everyday Thai
            </TabsTrigger>
            <TabsTrigger 
              value="culture" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              Culture
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beginner" className="mt-12">
            <Card className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Foundation Building</CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">Essential basics to get you started</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Thai alphabet and basic reading",
                    "Essential greetings and introductions",
                    "Numbers, days, and time expressions",
                    "Basic sentence structure",
                    "Common verbs and adjectives",
                    "Polite particles and social etiquette",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group/item">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="script" className="mt-12">
            <Card className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl hover:shadow-green-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Mastering Thai Script & Tones</CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">The key to authentic pronunciation</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "All 44 consonants with memory techniques",
                    "32 vowels and vowel combinations",
                    "5 tone rules made simple",
                    "Reading practice with real words",
                    "Tone drills and pronunciation exercises",
                    "Common tone patterns and exceptions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 hover:from-green-100 hover:to-emerald-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group/item">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="everyday" className="mt-12">
            <Card className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Practical Conversation</CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">Thai you'll use in real situations</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Shopping and bargaining phrases",
                    "Ordering food and drinks",
                    "Asking for directions",
                    "Making appointments and plans",
                    "Expressing opinions and preferences",
                    "Emergency and health vocabulary",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 hover:from-purple-100 hover:to-pink-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group/item">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="mt-12">
            <Card className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl hover:shadow-orange-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Cultural Understanding</CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">Context that makes language meaningful</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Thai social hierarchy and respect levels",
                    "Buddhist concepts in daily language",
                    "Festival traditions and celebrations",
                    "Business etiquette and formal speech",
                    "Regional differences and dialects",
                    "Modern Thai slang and expressions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 hover:from-orange-100 hover:to-red-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group/item">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Enhanced Testimonial Teasers */}
      <Section className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-800/20" />
        
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
            <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider">Student Success</span>
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-red-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            What students say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners who've transformed their Thai skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
          {[
            {
              name: "Anna",
              location: "UK",
              avatar: "A",
              quote: "I finally understand tones—Sarah's method just clicked.",
              rating: 5,
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              darkBgGradient: "from-blue-900/30 to-cyan-900/30",
            },
            {
              name: "Marco",
              location: "Italy",
              avatar: "M",
              quote: "Simple, practical Thai I actually use every day.",
              rating: 5,
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50",
              darkBgGradient: "from-purple-900/30 to-pink-900/30",
            },
            {
              name: "Lina",
              location: "US",
              avatar: "L",
              quote: "Supportive and structured—exactly what I needed.",
              rating: 5,
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50",
              darkBgGradient: "from-green-900/30 to-emerald-900/30",
            },
          ].map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
              
              <CardContent className="relative z-10 pt-8">
                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg italic text-slate-700 dark:text-slate-300 text-center mb-6 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.bgGradient} dark:${testimonial.darkBgGradient} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white font-bold`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
            </Card>
          ))}
        </div>

        <div className="text-center relative z-10">
          <Button 
            variant="outline" 
            asChild
            className="group border-2 border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-3 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <Link href="/testimonials" className="flex items-center">
              Read More Stories
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Enhanced Blog Teaser */}
      <Section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(168,85,247,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.05),transparent_50%)]" />
        
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Latest Insights</span>
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            Latest from the blog
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Study tips, culture notes, and Thai language essentials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
          {[
            {
              title: "Thai Tones Made Friendly: A Beginner's Roadmap",
              tag: "Pronunciation",
              date: "Dec 15, 2024",
              excerpt: "Master the 5 Thai tones with simple techniques that actually work.",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              borderGradient: "from-blue-200 to-cyan-200",
              darkBgGradient: "from-blue-900/30 to-cyan-900/30",
              darkBorderGradient: "from-blue-700/50 to-cyan-700/50",
            },
            {
              title: "Reading Thai Script: Start Here",
              tag: "Script",
              date: "Dec 12, 2024",
              excerpt: "Your step-by-step guide to reading Thai confidently.",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50",
              borderGradient: "from-green-200 to-emerald-200",
              darkBgGradient: "from-green-900/30 to-emerald-900/30",
              darkBorderGradient: "from-green-700/50 to-emerald-700/50",
            },
            {
              title: "10 Everyday Thai Phrases You'll Actually Use",
              tag: "Beginner",
              date: "Dec 10, 2024",
              excerpt: "Essential phrases for real conversations with Thai speakers.",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50",
              borderGradient: "from-purple-200 to-pink-200",
              darkBgGradient: "from-purple-900/30 to-pink-900/30",
              darkBorderGradient: "from-purple-700/50 to-pink-700/50",
            },
          ].map((post, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${post.borderGradient} dark:${post.darkBorderGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs bg-gradient-to-r ${post.bgGradient} dark:${post.darkBgGradient} text-slate-700 dark:text-slate-300 border-0 font-medium`}
                  >
                    {post.tag}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{post.date}</span>
                </div>
                <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 font-bold">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 mb-4">
                  {post.excerpt}
                </CardDescription>
                
                {/* Read More Link */}
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
            </Card>
          ))}
        </div>

        <div className="text-center relative z-10">
          <Button 
            variant="outline" 
            asChild
            className="group border-2 border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-3 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <Link href="/blog" className="flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Enhanced CTA Banner */}
      <Section className="relative overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-2000" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-white/80 rounded-full" />
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Ready to Start?</span>
            <div className="w-2 h-2 bg-white/80 rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to start speaking Thai with confidence?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who've transformed their Thai skills with our proven method.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-white text-slate-900 hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-10 py-5 text-xl font-bold"
            >
              <Link href="/pricing" className="flex items-center">
                <span className="relative z-10">Choose a Plan</span>
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="group border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-10 py-5 text-xl font-bold text-white hover:text-white"
            >
              <Link href="/auth/signup" className="flex items-center">
                <Play className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Free Demo
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Lifetime Access</span>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
