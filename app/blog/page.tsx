import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Calendar, Clock, User, ArrowRight, BookOpen, MessageCircle, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Thai Tones Made Friendly: A Beginner's Roadmap",
    excerpt: "Master the 5 Thai tones with simple techniques that actually work. Learn how to distinguish between high, mid, low, rising, and falling tones through practical examples and memory tricks.",
    content: "Thai tones can seem intimidating at first, but with the right approach, they become much more manageable...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Pronunciation",
    tags: ["Tones", "Beginner", "Pronunciation"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    darkBgGradient: "from-blue-900/30 to-cyan-900/30",
  },
  {
    id: 2,
    title: "Reading Thai Script: Start Here",
    excerpt: "Your step-by-step guide to reading Thai confidently. From consonants to vowels, learn the building blocks of written Thai with interactive exercises.",
    content: "Thai script might look complex, but it's actually quite logical once you understand the system...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Script",
    tags: ["Reading", "Script", "Alphabet"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: false,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "from-green-900/30 to-emerald-900/30",
  },
  {
    id: 3,
    title: "10 Everyday Thai Phrases You'll Actually Use",
    excerpt: "Essential phrases for real conversations with Thai speakers. Skip the textbook Thai and learn what people actually say in daily life.",
    content: "When learning a new language, it's easy to get caught up in formal grammar and forget the practical side...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Beginner",
    tags: ["Conversation", "Phrases", "Daily Life"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: false,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-900/30 to-pink-900/30",
  },
  {
    id: 4,
    title: "Understanding Thai Culture Through Language",
    excerpt: "Discover how Thai language reflects cultural values and social hierarchy. Learn the subtle ways Thais show respect and build relationships.",
    content: "Language and culture are deeply intertwined in Thailand. The way you speak reflects your understanding of Thai society...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    category: "Culture",
    tags: ["Culture", "Social", "Respect"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: false,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    darkBgGradient: "from-orange-900/30 to-red-900/30",
  },
  {
    id: 5,
    title: "Common Thai Grammar Mistakes and How to Avoid Them",
    excerpt: "Learn from common errors that learners make and how to speak more naturally. Practical tips to sound more like a native speaker.",
    content: "Every language learner makes mistakes, and that's perfectly normal. The key is learning from them...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    category: "Grammar",
    tags: ["Grammar", "Mistakes", "Advanced"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: false,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    darkBgGradient: "from-indigo-900/30 to-purple-900/30",
  },
  {
    id: 6,
    title: "Thai Numbers and Counting: Beyond the Basics",
    excerpt: "Master Thai numbers, counting systems, and how to use them in real situations. From shopping to telling time, become confident with numbers.",
    content: "Numbers are essential in any language, and Thai is no exception. But Thai numbers have some unique features...",
    author: "Sarah",
    authorAvatar: "S",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    category: "Vocabulary",
    tags: ["Numbers", "Counting", "Practical"],
    image: "/thai-teacher-with-students-in-modern-classroom-set.png",
    featured: false,
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
    darkBgGradient: "from-teal-900/30 to-green-900/30",
  },
]

const categories = [
  { name: "All", count: 6, active: true },
  { name: "Pronunciation", count: 1, active: false },
  { name: "Script", count: 1, active: false },
  { name: "Beginner", count: 1, active: false },
  { name: "Culture", count: 1, active: false },
  { name: "Grammar", count: 1, active: false },
  { name: "Vocabulary", count: 1, active: false },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Learning Resources</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            Thai Learning Blog
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Study tips, culture notes, and Thai language essentials to accelerate your learning journey
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search articles..."
              className="pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className="pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Article</h2>
            <p className="text-slate-600 dark:text-slate-300">Our latest and most popular content</p>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                <div className="relative order-2 lg:order-1">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${post.bgGradient} dark:${post.darkBgGradient} text-slate-700 dark:text-slate-300 border-0 font-medium shadow-lg`}
                  >
                    {post.category}
                  </Badge>
                </div>
                
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                          {post.authorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{post.author}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Thai Language Expert</p>
                      </div>
                    </div>
                    
                    <Button
                      size="lg"
                      asChild
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
                    >
                      <Link href={`/blog/${post.id}`} className="flex items-center">
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Categories and All Posts */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Browse by Category</h2>
            <p className="text-slate-600 dark:text-slate-300">Find content that matches your learning goals</p>
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

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card 
                key={post.id} 
                className="group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${post.borderGradient} dark:${post.darkBgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
                
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${post.bgGradient} dark:${post.darkBgGradient} text-slate-700 dark:text-slate-300 border-0 font-medium`}
                  >
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center space-x-4 mb-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 font-bold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Author and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                          {post.authorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
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
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Thai Learning Tips</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly insights, pronunciation guides, and cultural notes delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-white"
            />
            <Button className="bg-white text-slate-900 hover:bg-white/90 shadow-lg hover:shadow-white/25">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
