'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    ArrowRight,
    Leaf,
    Linkedin,
    Twitter,
    Mail,
    Target,
    Users,
    Heart,
    Lightbulb,
    TrendingUp,
    Globe,
    Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TeamsPage() {

    useEffect(() => {
        // GSAP Animations
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

            // Stagger animations
            const staggerGroups = gsap.utils.toArray('.animate-stagger');
            staggerGroups.forEach((group: any) => {
                const children = Array.from(group.children);
                gsap.fromTo(children,
                    { opacity: 0, y: 20 },
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
            ctx.revert();
        };
    }, []);

    const leadership = [
        {
            name: 'Mansur Ibrahim Muhammad',
            role: 'Founder/CEO',
            image: '/Team-20251204T053539Z-1-001/Team/Max-CEO/Mansur Ibrahim Muhammed.jpg',
            bio: 'Visionary leader driving the mission to transform agriculture in Nigeria.',
            linkedin: '#',
            twitter: '#',
            email: 'mansur@maxagrotech.com'
        },
        {
            name: 'Nkemjika Emmanuel Amah',
            role: 'Co-founder/CTO',
            image: '/Team-20251204T053539Z-1-001/Team/Nkem/Nkemjika E. Amah.jpg',
            bio: 'Technical architect building scalable solutions for the agricultural sector.',
            linkedin: '#',
            twitter: '#',
            email: 'nkemjika@maxagrotech.com'
        },
        {
            name: 'Lovina Itse',
            role: 'Co-founder/Head Of Media',
            image: '/Team-20251204T053539Z-1-001/Team/Veena/Lovina Itse.jpeg',
            bio: 'Creative strategist amplifying our story and impact across media channels.',
            linkedin: '#',
            twitter: '#',
            email: 'lovina@maxagrotech.com'
        }
    ];

    const team = [
        {
            name: 'Cenoyamba Danladi',
            role: 'Confidential Secretary',
            department: 'Administration',
            image: null
        },
        {
            name: 'David James',
            role: 'Senior Developer',
            department: 'Engineering',
            image: '/Team-20251204T053539Z-1-001/Team/Aeko-Software Developer/David Adakole James.jpg'
        },
        {
            name: 'Joshua Wasanmaza Maiwada',
            role: 'Senior Developer',
            department: 'Engineering',
            image: null
        },
        {
            name: 'Iklima Banangida',
            role: 'Senior Developer',
            department: 'Engineering',
            image: null
        },
        {
            name: 'Victory Chukwu',
            role: 'Staff',
            department: 'Operations',
            image: null
        },
        {
            name: 'Halima Yakubu',
            role: 'Staff',
            department: 'Operations',
            image: null
        },
        {
            name: 'Anas Abubakar Sadiq',
            role: 'Staff',
            department: 'Operations',
            image: null
        },
        {
            name: 'Aisha Yelwa',
            role: 'Staff',
            department: 'Operations',
            image: null
        },
        {
            name: 'Victor Joshua',
            role: 'Staff',
            department: 'Operations',
            image: null
        },
        {
            name: 'Felix Chinoso Emmanuel',
            role: 'Staff',
            department: 'Operations',
            image: null
        }
    ];

    const values = [
        {
            icon: Target,
            title: 'Mission-Driven',
            description: 'We\'re committed to transforming agriculture and empowering farmers across Nigeria',
            gradient: 'from-[#4EBE38] to-[#24981C]'
        },
        {
            icon: Users,
            title: 'Farmer-First',
            description: 'Every decision we make puts the needs of smallholder farmers at the center',
            gradient: 'from-[#000074] to-[#0140AC]'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We leverage cutting-edge technology to solve real agricultural challenges',
            gradient: 'from-[#4EBE38] to-[#24981C]'
        },
        {
            icon: Heart,
            title: 'Impact',
            description: 'We measure success by the positive change we create in farming communities',
            gradient: 'from-[#000074] to-[#0140AC]'
        }
    ];

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
                                Meet Our Team
                            </Badge>
                        </div>

                        <h1 className="hero-headline text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-6">
                            The People Behind the
                            <br />
                            <span className="bg-gradient-to-r from-[#4EBE38] via-[#24981C] to-[#4EBE38] bg-clip-text text-transparent">
                                Revolution
                            </span>
                        </h1>

                        <p className="hero-description text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                            We're a passionate team of technologists, agricultural experts, and community builders
                            dedicated to transforming farming in Northern Nigeria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="animate-section py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-4 bg-[#0140AC]/10 text-[#0140AC] border-[#0140AC]/20">
                            Leadership
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Our Leadership Team
                        </h2>
                        <p className="text-lg text-gray-600">
                            Experienced leaders driving innovation in agricultural technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-stagger">
                        {leadership.map((leader, index) => (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4EBE38]/10 to-transparent rounded-full blur-2xl" />
                                <CardContent className="pt-8 relative">
                                    {/* Avatar */}
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#4EBE38] to-[#24981C] flex items-center justify-center text-white text-4xl font-bold relative shadow-lg">
                                        {leader.image ? (
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            leader.name.split(' ').map(n => n[0]).join('')
                                        )}
                                    </div>

                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                        <p className="text-sm text-[#4EBE38] font-semibold mb-3">{leader.role}</p>
                                        <p className="text-sm text-gray-600">{leader.bio}</p>
                                    </div>

                                    <Separator className="mb-4" />

                                    <div className="flex justify-center gap-3">
                                        <Link href={leader.linkedin}>
                                            <div className="h-9 w-9 rounded-lg bg-gray-100 hover:bg-[#4EBE38] hover:text-white flex items-center justify-center transition-all group">
                                                <Linkedin className="h-4 w-4" />
                                            </div>
                                        </Link>
                                        <Link href={leader.twitter}>
                                            <div className="h-9 w-9 rounded-lg bg-gray-100 hover:bg-[#4EBE38] hover:text-white flex items-center justify-center transition-all">
                                                <Twitter className="h-4 w-4" />
                                            </div>
                                        </Link>
                                        <Link href={`mailto:${leader.email}`}>
                                            <div className="h-9 w-9 rounded-lg bg-gray-100 hover:bg-[#4EBE38] hover:text-white flex items-center justify-center transition-all">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Team */}
            <section className="animate-section py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-4 bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20">
                            Core Team
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Meet the Team
                        </h2>
                        <p className="text-lg text-gray-600">
                            Talented individuals working together to make a difference
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-stagger">
                        {team.map((member, index) => (
                            <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-0 bg-white">
                                <CardContent className="pt-6">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[#000074] to-[#0140AC] flex items-center justify-center text-white text-2xl font-bold relative shadow-md">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            member.name.split(' ').map(n => n[0]).join('')
                                        )}
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                                        <Badge variant="outline" className="text-xs">{member.department}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="animate-section py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-4 bg-[#0140AC]/10 text-[#0140AC] border-[#0140AC]/20">
                            Our Values
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            What Drives Us
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto animate-stagger">
                        {values.map((value, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-2xl`} />
                                <CardContent className="pt-8 relative">
                                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} mb-4 shadow-lg`}>
                                        <value.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-sm text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="animate-section py-24 lg:py-32 relative overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4EBE38] via-[#24981C] to-[#4EBE38]" />
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.15]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px'
                }} />
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 bg-white/20 text-white border-0 backdrop-blur-sm">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Join Us
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            Want to Make a Difference?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                            We're always looking for passionate individuals who want to transform agriculture
                            and empower farming communities across Nigeria.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/careers">
                                <Button size="lg" className="bg-white text-[#4EBE38] hover:bg-white/90 shadow-xl h-14 px-8 text-base font-semibold">
                                    View Open Positions
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/teams">
                                <Button size="lg" variant="link" className="border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-base font-semibold">
                                    Learn More About Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
