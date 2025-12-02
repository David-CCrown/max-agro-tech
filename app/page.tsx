'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Smartphone,
  BarChart3,
  MapPin,
  Leaf,
  Package,
  DollarSign,
  Shield,
  Zap,
  Globe,
  Mail,
  Phone,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // GSAP Animations - Optimized
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      });

      gsap.from('.hero-headline', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      });

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.6,
        ease: 'power2.out'
      });

      gsap.from('.hero-stat', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Section animations with ScrollTrigger - Fixed to not hide initially
      const sections = gsap.utils.toArray('.animate-section');
      sections.forEach((section: any) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      });

      // Stagger animations for groups
      const staggerGroups = gsap.utils.toArray('.animate-stagger');
      staggerGroups.forEach((group: any) => {
        const children = Array.from(group.children);
        gsap.fromTo(children,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10'
          : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-[#4EBE38] to-[#24981C] rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                MaxAgroTech
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#impact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Impact
              </Link>
              <Link href="#workflow" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#stakeholders" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Stakeholders
              </Link>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white shadow-lg shadow-[#4EBE38]/25 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="px-4 py-6 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 space-y-4">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              Features
            </Link>
            <Link
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              Impact
            </Link>
            <Link
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              How It Works
            </Link>
            <Link
              href="#stakeholders"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              Stakeholders
            </Link>
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white shadow-lg shadow-[#4EBE38]/25 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(78, 190, 56, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4EBE38]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0140AC]/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="space-y-8 lg:space-y-10">
                <div className="hero-badge">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBE38]/10 border border-[#4EBE38]/20 text-[#4EBE38] text-sm font-medium backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EBE38] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EBE38]"></span>
                    </span>
                    Not just a platform but a revolution
                  </span>
                </div>

                <div className="hero-headline space-y-4">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white">
                    Transforming
                    <br />
                    <span className="bg-gradient-to-r from-[#4EBE38] via-[#24981C] to-[#4EBE38] bg-clip-text text-transparent">
                      Agriculture
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-white/60">
                    Through Digital Innovation
                  </p>
                </div>

                <p className="hero-description text-lg text-white/70 leading-relaxed max-w-xl">
                  Revolutionizing the ginger value chain in Northern Nigeria. A unified platform connecting farmers to global markets with complete traceability.
                </p>

                <div className="hero-buttons flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white shadow-lg shadow-[#4EBE38]/25 px-8 h-14 text-base font-semibold transition-all duration-300">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="ghost" className="border-2 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 h-14 text-base font-semibold">
                    Watch Video
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#4EBE38]" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#4EBE38]" />
                    <span>Verified Platform</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#4EBE38]" />
                    <span>1000+ Farmers</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { value: '30%', label: 'Yield Increase', icon: TrendingUp },
                    { value: '25%', label: 'Income Growth', icon: DollarSign },
                    { value: '100%', label: 'Traceability', icon: Shield },
                    { value: '50%', label: 'Credit Access', icon: Zap }
                  ].map((stat, index) => (
                    <div key={index} className="hero-stat group">
                      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#4EBE38]/50 transition-all duration-300 hover:bg-white/10">
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                          <stat.icon className="h-8 w-8 text-[#4EBE38]" />
                        </div>

                        <div className="relative">
                          <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/60 font-medium">
                            {stat.label}
                          </div>
                        </div>

                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4EBE38]/0 to-[#4EBE38]/0 group-hover:from-[#4EBE38]/5 group-hover:to-transparent transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="animate-section py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20">
              <Sparkles className="h-3 w-3 mr-1" />
              The Digital Toolkit
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Three Powerful Modules
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end digital transformation for the ginger value chain
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto animate-stagger">
            {/* Max-Grow - Large Card */}
            <Card className="lg:col-span-2 group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#4EBE38]/5 to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4EBE38]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-14 w-14 bg-gradient-to-br from-[#4EBE38] to-[#24981C] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4EBE38]/25">
                    <Leaf className="h-7 w-7 text-white" />
                  </div>
                  <Badge variant="outline" className="border-[#4EBE38]/30 text-[#4EBE38]">Core Module</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Max-Grow</CardTitle>
                <CardDescription className="text-base">Farmer Enablement & Input Management</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Smart Registration', desc: 'GPS geo-fencing & unique IDs', icon: MapPin },
                    { title: 'Input Marketplace', desc: 'Verified seeds & supplies', icon: Package },
                    { title: 'AI Diagnostics', desc: 'Pest & disease detection', icon: Sparkles },
                    { title: 'Advisory System', desc: 'Real-time farming guidance', icon: BarChart3 }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-[#4EBE38]/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-[#4EBE38]" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1">{feature.title}</div>
                        <div className="text-xs text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Max-Logistics */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#0140AC]/5 to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0140AC]/5 rounded-full blur-3xl" />
              <CardHeader className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-[#000074] to-[#0140AC] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#0140AC]/25">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Max-Logistics</CardTitle>
                <CardDescription>Aggregation & Traceability</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  {[
                    'Quality Grading',
                    'Digital Ledger',
                    'QR/RFID Tracking',
                    'Loss Reporting'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0140AC]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Max-Market */}
            <Card className="lg:col-span-3 group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-r from-white via-[#4EBE38]/5 to-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-gradient-to-br from-[#4EBE38] to-[#24981C] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4EBE38]/25">
                      <DollarSign className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">Max-Market</CardTitle>
                      <CardDescription>Finance & Sales Platform</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-[#4EBE38] text-white border-0">Revenue Engine</Badge>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: 'B2B Matching', icon: Globe },
                    { title: 'Payment Gateway', icon: Shield },
                    { title: 'Analytics Dashboard', icon: BarChart3 },
                    { title: 'Micro-Finance', icon: TrendingUp }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#4EBE38]/30 hover:shadow-md transition-all">
                      <feature.icon className="h-5 w-5 text-[#4EBE38]" />
                      <span className="font-medium text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Modern Cards */}
      <section id="impact" className="animate-section py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#0140AC]/10 text-[#0140AC] border-[#0140AC]/20">
              Measurable Results
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Transforming the Value Chain
            </h2>
            <p className="text-lg text-gray-600">
              Data-driven impact across every stage of production
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-stagger">
            {[
              { value: '30%', label: 'Yield Increase', desc: 'Through precision farming', icon: TrendingUp, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { value: '15%', label: 'PHL Reduction', desc: 'Via quality grading', icon: Shield, gradient: 'from-[#000074] to-[#0140AC]' },
              { value: '25%', label: 'Income Growth', desc: 'For smallholder farmers', icon: DollarSign, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { value: '100%', label: 'Traceability', desc: 'Farm-to-buyer tracking', icon: BarChart3, gradient: 'from-[#000074] to-[#0140AC]' },
              { value: '50%', label: 'Credit Access', desc: 'Formal lending reach', icon: Zap, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { value: '∞', label: 'Job Creation', desc: 'Digital opportunities', icon: Users, gradient: 'from-[#000074] to-[#0140AC]' }
            ].map((metric, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.gradient} opacity-5 rounded-full blur-2xl`} />
                <CardContent className="pt-8 pb-6 relative">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${metric.gradient} mb-4 shadow-lg`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section - Timeline Design */}
      <section id="workflow" className="animate-section py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000074]/5 via-white to-[#4EBE38]/5" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20">
              The Journey
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From farmer onboarding to secure payment in 6 seamless steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Farmer Onboarding', desc: 'Farm geo-fenced and assigned unique Max ID', icon: Users, color: '#4EBE38' },
              { step: '02', title: 'Input Acquisition', desc: 'Access verified seeds via digital marketplace', icon: Package, color: '#0140AC' },
              { step: '03', title: 'Growth Monitoring', desc: 'AI diagnostics and satellite monitoring', icon: BarChart3, color: '#4EBE38' },
              { step: '04', title: 'Harvest & Aggregation', desc: 'Quality grading with digital receipts', icon: CheckCircle2, color: '#0140AC' },
              { step: '05', title: 'Market Matching', desc: 'B2B marketplace with verified buyers', icon: Globe, color: '#4EBE38' },
              { step: '06', title: 'Secure Payment', desc: 'Direct payment to farmer account', icon: DollarSign, color: '#0140AC' }
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 5 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-transparent" />
                )}
                <Card className="mb-6 group hover:shadow-xl transition-all duration-500 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 relative">
                        <div
                          className="h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10"
                          style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
                        >
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="h-5 w-5" style={{ color: item.color }} />
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders - Modern Grid */}
      <section id="stakeholders" className="animate-section py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#0140AC]/10 text-[#0140AC] border-[#0140AC]/20">
              Ecosystem
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Empowering every stakeholder in the agricultural value chain
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-stagger">
            {[
              { title: 'Smallholder Farmers', interface: 'Mobile App', benefit: 'Quality inputs, advice, and fair pricing', icon: Users, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { title: 'Local Aggregators', interface: 'Mobile/Tablet', benefit: 'Efficient collection management', icon: Package, gradient: 'from-[#000074] to-[#0140AC]' },
              { title: 'Exporters & Buyers', interface: 'Web Dashboard', benefit: 'Verified supply and traceability', icon: Globe, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { title: 'Processors', interface: 'Web/Tablet', benefit: 'Consistent raw material supply', icon: BarChart3, gradient: 'from-[#000074] to-[#0140AC]' },
              { title: 'Financial Institutions', interface: 'API/Dashboard', benefit: 'De-risked lending opportunities', icon: DollarSign, gradient: 'from-[#4EBE38] to-[#24981C]' },
              { title: 'Extension Workers', interface: 'App/Dashboard', benefit: 'Real-time agricultural data', icon: Smartphone, gradient: 'from-[#000074] to-[#0140AC]' }
            ].map((stakeholder, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-white relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stakeholder.gradient} opacity-5 rounded-full blur-2xl`} />
                <CardHeader className="relative">
                  <div className={`h-12 w-12 bg-gradient-to-br ${stakeholder.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <stakeholder.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-2">{stakeholder.title}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">{stakeholder.interface}</Badge>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-gray-600">{stakeholder.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="animate-section py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4EBE38] via-[#24981C] to-[#4EBE38]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Compelling Copy */}
              <div className="text-white space-y-8">
                <div>
                  <Badge className="mb-6 bg-white/20 text-white border-0 backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Join the Revolution
                  </Badge>
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    Transform Your Agricultural Business Today
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Be part of the digital transformation revolutionizing agriculture in Northern Nigeria.
                    Connect farmers to global markets with complete transparency.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: CheckCircle2, text: 'Complete farm-to-market traceability' },
                    { icon: CheckCircle2, text: 'AI-powered farming insights' },
                    { icon: CheckCircle2, text: 'Direct access to verified buyers' },
                    { icon: CheckCircle2, text: 'Secure payment processing' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">1000+ Farmers</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Globe className="h-5 w-5" />
                    <span className="text-sm">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm">100% Secure</span>
                  </div>
                </div>
              </div>

              {/* Right - Contact Card */}
              <Card className="border-0 bg-white shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">Get Started Now</CardTitle>
                  <CardDescription className="text-base">Fill out the form and we'll be in touch within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">I'm interested in...</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all">
                        <option>Max-Grow (Farmer Tools)</option>
                        <option>Max-Logistics (Aggregation)</option>
                        <option>Max-Market (Finance & Sales)</option>
                        <option>Full Platform Access</option>
                      </select>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white h-12 text-base font-semibold shadow-lg shadow-[#4EBE38]/25">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 text-center mb-4">Or reach us directly:</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Mail, href: 'mailto:info@maxagrotech.com', label: 'Email' },
                        { icon: Phone, href: 'tel:+234XXXXXXXXX', label: 'Call' },
                        { icon: MapPin, href: '#', label: 'Visit' }
                      ].map((contact, i) => (
                        <Link key={i} href={contact.href}>
                          <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <contact.icon className="h-5 w-5 text-[#4EBE38] group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-gray-600">{contact.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern */}
      <footer className="bg-[#000074] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 bg-gradient-to-br from-[#4EBE38] to-[#24981C] rounded-xl flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">MaxAgroTech</span>
              </div>
              <p className="text-white/70 mb-6 max-w-sm">
                Revolutionizing agriculture through digital innovation. Not just a platform but a revolution.
              </p>
              <div className="flex gap-3">
                {['twitter', 'linkedin', 'facebook'].map((social) => (
                  <Link key={social} href={`#${social}`}>
                    <div className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Globe className="h-5 w-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="#features" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Features</Link></li>
                <li><Link href="#impact" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Impact</Link></li>
                <li><Link href="#workflow" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="#" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />About Us</Link></li>
                <li><Link href="#" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Careers</Link></li>
                <li><Link href="#" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="#" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 MaxAgroTech. All rights reserved.</p>
            <p>Made with <span className="text-[#4EBE38]">♥</span> in Northern Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
