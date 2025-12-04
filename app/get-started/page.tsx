'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    ArrowRight,
    Smartphone,
    Globe,
    Users,
    ShoppingCart,
    Download,
    LogIn,
    UserPlus,
    CheckCircle2,
    Sparkles,
    Apple,
    Play,
    RotateCcw
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GetStartedPage() {
    const [flippedCard, setFlippedCard] = useState<'mobile' | 'web' | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animations - immediate start
            gsap.fromTo('.hero-badge',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            );

            gsap.fromTo('.hero-headline',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' }
            );

            gsap.fromTo('.hero-description',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
            );

            // Section animations
            const sections = gsap.utils.toArray('.animate-section');
            sections.forEach((section: any) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 30 },
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
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
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
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="hero-badge mb-8">
                            <Badge className="bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20 backdrop-blur-sm">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Get Started
                            </Badge>
                        </div>

                        <h1 className="hero-headline text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-6">
                            Join MaxAgroTech
                            <br />
                            <span className="bg-gradient-to-r from-[#4EBE38] via-[#24981C] to-[#4EBE38] bg-clip-text text-transparent">
                                Today
                            </span>
                        </h1>

                        <p className="hero-description text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                            Choose how you want to access the platform
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Choice Section */}
            <section className="animate-section py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            How do you want to get started?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Click a card to see your options
                        </p>
                    </div>

                    {/* Two Flip Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Mobile App Flip Card */}
                        <div className="flip-card-container" style={{ perspective: '1000px', minHeight: '500px' }}>
                            <div
                                className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${flippedCard === 'mobile' ? '[transform:rotateY(180deg)]' : ''
                                    }`}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front Side */}
                                <Card
                                    className="flip-card-front absolute inset-0 cursor-pointer border-2 border-gray-200 hover:border-[#4EBE38]/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
                                    style={{ backfaceVisibility: 'hidden' }}
                                    onClick={() => setFlippedCard('mobile')}
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4EBE38]/20 to-transparent rounded-full blur-3xl" />
                                    <CardHeader className="relative text-center pb-8">
                                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4EBE38] to-[#24981C] shadow-2xl mx-auto mb-6">
                                            <Smartphone className="h-10 w-10 text-white" />
                                        </div>
                                        <CardTitle className="text-3xl mb-3">Mobile App</CardTitle>
                                        <CardDescription className="text-base">
                                            For farmers and field workers
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative">
                                        <div className="space-y-3 mb-6">
                                            {['Access on the go', 'Works offline', 'Easy to use interface'].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                                    <div className="h-8 w-8 rounded-full bg-[#4EBE38]/10 flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle2 className="h-4 w-4 text-[#4EBE38]" />
                                                    </div>
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-4 border-t">
                                            <Users className="h-4 w-4" />
                                            <span>Perfect for: Farmers, Aggregators</span>
                                        </div>
                                        <div className="text-center mt-6">
                                            <Badge className="bg-[#4EBE38]/10 text-[#4EBE38]">Click to view download options</Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Back Side */}
                                <Card
                                    className="flip-card-back absolute inset-0 border-2 border-[#4EBE38] shadow-2xl"
                                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                >
                                    <CardHeader className="text-center bg-gradient-to-br from-[#4EBE38]/5 to-transparent relative">
                                        <button
                                            onClick={() => setFlippedCard(null)}
                                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <RotateCcw className="h-5 w-5 text-gray-600" />
                                        </button>
                                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4EBE38] to-[#24981C] shadow-lg mx-auto mb-4">
                                            <Download className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">Download the App</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <Button
                                                size="lg"
                                                className="w-full bg-black hover:bg-black/90 text-white h-14 flex items-center justify-center gap-3"
                                            >
                                                <Apple className="h-6 w-6" />
                                                <div className="text-left">
                                                    <div className="text-xs opacity-80">Download on</div>
                                                    <div className="text-base font-semibold">App Store</div>
                                                </div>
                                            </Button>
                                            <Button
                                                size="lg"
                                                className="w-full bg-black hover:bg-black/90 text-white h-14 flex items-center justify-center gap-3"
                                            >
                                                <Play className="h-6 w-6" />
                                                <div className="text-left">
                                                    <div className="text-xs opacity-80">Get it on</div>
                                                    <div className="text-base font-semibold">Google Play</div>
                                                </div>
                                            </Button>
                                            <Separator />
                                            <div className="text-center">
                                                <p className="text-sm text-gray-600 mb-3">Or scan QR code</p>
                                                <div className="inline-block p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                                    <div className="w-32 h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2">
                                                        <Download className="h-8 w-8 text-gray-400" />
                                                        <span className="text-xs text-gray-500">QR Code</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Web Platform Flip Card */}
                        <div className="flip-card-container" style={{ perspective: '1000px', minHeight: '600px' }}>
                            <div
                                className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${flippedCard === 'web' ? '[transform:rotateY(180deg)]' : ''
                                    }`}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front Side */}
                                <Card
                                    className="flip-card-front absolute inset-0 cursor-pointer border-2 border-gray-200 hover:border-[#0140AC]/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
                                    style={{ backfaceVisibility: 'hidden' }}
                                    onClick={() => setFlippedCard('web')}
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0140AC]/20 to-transparent rounded-full blur-3xl" />
                                    <CardHeader className="relative text-center pb-8">
                                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#000074] to-[#0140AC] shadow-2xl mx-auto mb-6">
                                            <Globe className="h-10 w-10 text-white" />
                                        </div>
                                        <CardTitle className="text-3xl mb-3">Web Platform</CardTitle>
                                        <CardDescription className="text-base">
                                            For buyers and business users
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative">
                                        <div className="space-y-3 mb-6">
                                            {['Full dashboard access', 'Advanced analytics', 'Multi-user management'].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                                    <div className="h-8 w-8 rounded-full bg-[#0140AC]/10 flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle2 className="h-4 w-4 text-[#0140AC]" />
                                                    </div>
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-4 border-t">
                                            <ShoppingCart className="h-4 w-4" />
                                            <span>Perfect for: Buyers, Processors</span>
                                        </div>
                                        <div className="text-center mt-6">
                                            <Badge className="bg-[#0140AC]/10 text-[#0140AC]">Click to access platform</Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Back Side */}
                                <Card
                                    className="flip-card-back absolute inset-0 border-2 border-[#0140AC] shadow-2xl"
                                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                >
                                    <CardHeader className="text-center bg-gradient-to-br from-[#0140AC]/5 to-transparent relative">
                                        <button
                                            onClick={() => setFlippedCard(null)}
                                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <RotateCcw className="h-5 w-5 text-gray-600" />
                                        </button>
                                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#000074] to-[#0140AC] shadow-lg mx-auto mb-4">
                                            <Globe className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">Access Web Platform</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4 grid grid-cols-1 gap-2">
                                            <Link href="/login">
                                                <Button
                                                    size="lg"
                                                    className="w-full bg-gradient-to-r from-[#000074] to-[#0140AC] hover:from-[#0140AC] hover:to-[#000074] text-white h-14 text-lg font-semibold shadow-lg"
                                                >
                                                    <LogIn className="mr-3 h-6 w-6" />
                                                    Sign In
                                                </Button>
                                            </Link>
                                            <Link href="/register">
                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="w-full border-2 border-[#0140AC] text-[#0140AC] hover:bg-[#0140AC] hover:text-white h-14 text-lg font-semibold"
                                                >
                                                    <UserPlus className="mr-3 h-6 w-6" />
                                                    Create Account
                                                </Button>
                                            </Link>
                                            <Separator />
                                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                                                <h4 className="font-semibold mb-3 text-gray-900 text-sm flex items-center gap-2">
                                                    <Sparkles className="h-4 w-4 text-[#0140AC]" />
                                                    Quick Start
                                                </h4>
                                                <div className="space-y-2 text-xs text-gray-600">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-6 w-6 rounded-full bg-[#0140AC] text-white flex items-center justify-center text-xs font-bold">1</div>
                                                        <span>Create account (2 min)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-6 w-6 rounded-full bg-[#0140AC] text-white flex items-center justify-center text-xs font-bold">2</div>
                                                        <span>Verify business profile</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-6 w-6 rounded-full bg-[#0140AC] text-white flex items-center justify-center text-xs font-bold">3</div>
                                                        <span>Start trading</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="animate-section py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6">Need Help?</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our support team is available 24/7 to assist you
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="outline" className="h-12 border-2">
                                <ArrowRight className="mr-2 h-5 w-5" />
                                View Documentation
                            </Button>
                            <Button size="lg" className="bg-gradient-to-r from-[#4EBE38] to-[#24981C] text-white h-12">
                                <ArrowRight className="mr-2 h-5 w-5" />
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
