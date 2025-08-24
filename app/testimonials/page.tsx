import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, Heart, TrendingUp, Users, Award, CheckCircle, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Anna Chen",
    location: "UK",
    avatar: "A",
    rating: 5,
    quote: "I finally understand Thai tones! Sarah's method just clicked for me. After struggling for months with other resources, her step-by-step approach made everything clear. I can now confidently order food and have basic conversations with Thai friends.",
    story: "Anna had been trying to learn Thai for over a year with various apps and textbooks, but the tones always confused her. Within 3 weeks of starting with Sarah's course, she was able to distinguish between the 5 tones and speak with much more confidence.",
    progress: "Started from zero, now conversational in 6 months",
    category: "Pronunciation Breakthrough",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    darkBgGradient: "from-blue-900/30 to-cyan-900/30",
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Italy",
    avatar: "M",
    rating: 5,
    quote: "Simple, practical Thai I actually use every day. Sarah focuses on real conversations, not just textbook phrases. I can now bargain at markets, order food, and make small talk with locals.",
    story: "Marco moved to Thailand for work and needed to learn practical Thai quickly. Sarah's emphasis on everyday conversation helped him become comfortable in social situations within just 2 months.",
    progress: "Zero to market-ready Thai in 2 months",
    category: "Practical Communication",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "from-green-900/30 to-emerald-900/30",
  },
  {
    id: 3,
    name: "Lina Johnson",
    location: "US",
    avatar: "L",
    rating: 5,
    quote: "Supportive and structured—exactly what I needed. Sarah's weekly check-ins kept me motivated, and the community of learners made the journey fun. I never felt alone in my learning.",
    story: "Lina was a busy professional who needed accountability to stick with her Thai learning goals. Sarah's structured approach and supportive community helped her maintain consistent progress.",
    progress: "Consistent weekly progress for 8 months",
    category: "Structured Learning",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-900/30 to-pink-900/30",
  },
  {
    id: 4,
    name: "David Kim",
    location: "Canada",
    avatar: "D",
    rating: 5,
    quote: "The cultural context Sarah provides is invaluable. Learning Thai isn't just about words—it's about understanding the culture behind them. This made all the difference in my interactions.",
    story: "David was interested in Thai culture and wanted to learn the language authentically. Sarah's cultural insights helped him understand the nuances of Thai communication and build genuine relationships.",
    progress: "Cultural fluency alongside language skills",
    category: "Cultural Understanding",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    darkBgGradient: "from-orange-900/30 to-red-900/30",
  },
  {
    id: 5,
    name: "Sophie Martin",
    location: "Australia",
    avatar: "S",
    rating: 5,
    quote: "Sarah's reading lessons are brilliant! I went from being intimidated by Thai script to reading signs and menus confidently. The memory techniques she uses are incredibly effective.",
    story: "Sophie was fascinated by Thai script but found it overwhelming. Sarah's systematic approach to teaching reading, with clever memory aids, helped her master the alphabet in just 4 weeks.",
    progress: "Reading Thai script fluently in 4 weeks",
    category: "Script Mastery",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    darkBgGradient: "from-indigo-900/30 to-purple-900/30",
  },
  {
    id: 6,
    name: "Carlos Rodriguez",
    location: "Spain",
    avatar: "C",
    rating: 5,
    quote: "The progress tracking system keeps me motivated. I can see exactly how far I've come and what I need to work on. It's like having a personal coach cheering me on.",
    story: "Carlos needed clear milestones to stay motivated in his Thai learning journey. Sarah's progress tracking system and personalized feedback helped him maintain steady improvement.",
    progress: "Steady progress with clear milestones",
    category: "Progress Tracking",
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
    darkBgGradient: "from-teal-900/30 to-green-900/30",
  },
]

const stats = [
  { number: "98%", label: "Success Rate", icon: TrendingUp, description: "Students achieve their learning goals" },
  { number: "10K+", label: "Happy Students", icon: Users, description: "From over 50 countries worldwide" },
  { number: "4.9/5", label: "Average Rating", icon: Star, description: "Based on 2,500+ reviews" },
  { number: "6", label: "Months Average", icon: Award, description: "Time to conversational fluency" },
]

const categories = [
  { name: "All", count: 6, active: true },
  { name: "Pronunciation", count: 1, active: false },
  { name: "Practical", count: 1, active: false },
  { name: "Structured", count: 1, active: false },
  { name: "Cultural", count: 1, active: false },
  { name: "Script", count: 1, active: false },
  { name: "Progress", count: 1, active: false },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
            <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider">Student Success</span>
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-red-500 rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            Real Stories from Real Students
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Discover how thousands of learners have transformed their Thai skills and achieved their language goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/pricing" className="flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="group border-2 border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Link href="/auth/signup" className="flex items-center">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Free Demo
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Success Stats */}
      <Section className="pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Proven Results</h2>
            <p className="text-slate-600 dark:text-slate-300">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group text-center border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Testimonial */}
      <Section className="pb-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Success Story</h2>
            <p className="text-slate-600 dark:text-slate-300">Meet Anna, whose journey inspired our approach</p>
          </div>

          {testimonials.filter(t => t.id === 1).map((testimonial) => (
            <Card key={testimonial.id} className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${testimonial.bgGradient} dark:${testimonial.darkBgGradient} text-slate-700 dark:text-slate-300 border-0 font-medium`}
                  >
                    {testimonial.category}
                  </Badge>
                </div>
                
                <div className="p-8 lg:p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{testimonial.location}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                      {testimonial.progress}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {testimonial.story}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* All Testimonials */}
      <Section className="pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Browse Success Stories</h2>
            <p className="text-slate-600 dark:text-slate-300">Find inspiration from students with similar goals</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  category.active
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </Button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.id !== 1).map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`bg-gradient-to-r ${testimonial.bgGradient} dark:${testimonial.darkBgGradient} text-slate-700 dark:text-slate-300 border-0 font-medium`}
                    >
                      {testimonial.category}
                    </Badge>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 font-bold">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <blockquote className="text-sm italic text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                      {testimonial.progress}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white font-bold text-sm`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-3 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300"
            >
              Load More Stories
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your Thai learning journey today and become the next success story
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-white text-slate-900 hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/pricing" className="flex items-center">
                Choose Your Plan
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="group border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold text-white hover:text-white"
            >
              <Link href="/auth/signup" className="flex items-center">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Start Free Trial
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
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
