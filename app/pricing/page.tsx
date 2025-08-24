import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Crown, Zap, Heart, Users, BookOpen, MessageCircle, TrendingUp, Award, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    description: "Perfect for beginners who want to try Thai learning",
    features: [
      "5 beginner lessons",
      "Basic pronunciation guide",
      "Community forum access",
      "Progress tracking",
      "Email support",
    ],
    limitations: [
      "Limited to 5 lessons",
      "No advanced content",
      "Basic support only",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "from-green-900/30 to-emerald-900/30",
    borderGradient: "from-green-200 to-emerald-200",
    darkBorderGradient: "from-green-700/50 to-emerald-700/50",
    popular: false,
    cta: "Get Started Free",
    href: "/auth/signup",
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Most popular choice for serious learners",
    features: [
      "All 500+ lessons",
      "Complete curriculum access",
      "Personalized learning path",
      "Weekly progress reports",
      "Priority email support",
      "Mobile app access",
      "Download lessons offline",
      "Certificate upon completion",
    ],
    limitations: [],
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-50 to-purple-50",
    darkBgGradient: "from-blue-900/30 to-purple-900/30",
    borderGradient: "from-blue-200 to-purple-200",
    darkBorderGradient: "from-blue-700/50 to-purple-700/50",
    popular: true,
    cta: "Start Pro Plan",
    href: "/auth/signup?plan=pro",
    savings: "Save 20%",
  },
  {
    name: "Premium",
    price: "$99",
    period: "per month",
    description: "Complete learning experience with personal coaching",
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions",
      "Custom learning materials",
      "Cultural immersion content",
      "Advanced conversation practice",
      "Priority phone support",
      "Exclusive workshops",
      "Lifetime access to updates",
    ],
    limitations: [],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-900/30 to-pink-900/30",
    borderGradient: "from-purple-200 to-pink-200",
    darkBorderGradient: "from-purple-700/50 to-pink-700/50",
    popular: false,
    cta: "Start Premium",
    href: "/auth/signup?plan=premium",
  },
]

const features = [
  {
    name: "500+ Interactive Lessons",
    description: "Comprehensive curriculum covering all aspects of Thai",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Personalized Learning Path",
    description: "AI-powered recommendations based on your progress",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Native Speaker Audio",
    description: "Perfect pronunciation with slow and normal speed options",
    icon: MessageCircle,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Progress Tracking",
    description: "Visual progress indicators and achievement badges",
    icon: Award,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Community Support",
    description: "Connect with fellow learners and native speakers",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Mobile App",
    description: "Learn on the go with our iOS and Android apps",
    icon: Zap,
    gradient: "from-teal-500 to-green-500",
  },
]

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, we'll refund your payment.",
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! The Starter plan is completely free forever, and Pro and Premium plans come with a 7-day free trial.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.",
  },
  {
    question: "Can I access the content offline?",
    answer: "Yes, Pro and Premium subscribers can download lessons for offline learning through our mobile apps.",
  },
]

export default function PricingPage() {
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
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Choose Your Plan</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your Thai learning journey. Start free and upgrade as you progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="#pricing" className="flex items-center">
                View All Plans
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
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Pricing Plans */}
      <Section id="pricing" className="pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Learning Path</h2>
            <p className="text-slate-600 dark:text-slate-300">Start with our free plan and upgrade as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute -top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 text-xs font-semibold">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} dark:${plan.darkBorderGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-xl" />
                
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    {plan.name === "Starter" && <Heart className="h-8 w-8 text-green-500" />}
                    {plan.name === "Pro" && <Crown className="h-8 w-8 text-blue-500" />}
                    {plan.name === "Premium" && <Star className="h-8 w-8 text-purple-500" />}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-start space-x-3">
                          <div className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0">×</div>
                          <span className="text-sm text-slate-500 dark:text-slate-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    asChild
                    className={`w-full group bg-gradient-to-r ${plan.gradient} hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                      plan.popular ? 'ring-2 ring-white/20' : ''
                    }`}
                  >
                    <Link href={plan.href} className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
              </Card>
            ))}
          </div>

          {/* Annual Savings Note */}
          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              💡 <strong>Save 20%</strong> with annual billing on Pro and Premium plans
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-400"
            >
              View Annual Plans
            </Button>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Everything You Need to Succeed</h2>
            <p className="text-slate-600 dark:text-slate-300">Comprehensive tools and resources for effective Thai learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="pt-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.bgGradient} dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {feature.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-300">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Thai Learning Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've already transformed their Thai skills
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-white text-slate-900 hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/auth/signup" className="flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="group border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold text-white hover:text-white"
            >
              <Link href="/testimonials" className="flex items-center">
                <Users className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                See Success Stories
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">7-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
