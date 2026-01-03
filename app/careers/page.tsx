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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    ArrowRight,
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Users,
    Heart,
    Lightbulb,
    TrendingUp,
    X,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

    useEffect(() => {
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

    const jobs: Job[] = [
        {
            id: '1',
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Lagos, Nigeria (Hybrid)',
            type: 'Full-time',
            salary: '₦8M - ₦12M/year',
            description: 'Join our engineering team to build scalable solutions for agricultural transformation.',
            requirements: [
                '5+ years of experience with React, Node.js, and TypeScript',
                'Experience with cloud platforms (AWS/GCP)',
                'Strong understanding of database design and optimization',
                'Experience with agile development methodologies'
            ],
            responsibilities: [
                'Design and implement new features for our platform',
                'Collaborate with product team on technical solutions',
                'Mentor junior developers',
                'Optimize application performance and scalability'
            ]
        },
        {
            id: '2',
            title: 'Product Manager',
            department: 'Product',
            location: 'Abuja, Nigeria',
            type: 'Full-time',
            salary: '₦6M - ₦10M/year',
            description: 'Lead product strategy and development for our agricultural technology platform.',
            requirements: [
                '3+ years of product management experience',
                'Understanding of agricultural sector (preferred)',
                'Strong analytical and communication skills',
                'Experience with agile methodologies'
            ],
            responsibilities: [
                'Define product roadmap and strategy',
                'Work with stakeholders to gather requirements',
                'Prioritize features and manage backlog',
                'Analyze product metrics and user feedback'
            ]
        },
        {
            id: '3',
            title: 'UX/UI Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            salary: '₦4M - ₦7M/year',
            description: 'Create intuitive and beautiful interfaces for farmers and agricultural stakeholders.',
            requirements: [
                '3+ years of UX/UI design experience',
                'Proficiency in Figma and design systems',
                'Portfolio demonstrating mobile and web design',
                'Understanding of user research methodologies'
            ],
            responsibilities: [
                'Design user interfaces for web and mobile applications',
                'Conduct user research and usability testing',
                'Create and maintain design system',
                'Collaborate with developers on implementation'
            ]
        },
        {
            id: '4',
            title: 'Agricultural Extension Officer',
            department: 'Operations',
            location: 'Kaduna, Nigeria',
            type: 'Full-time',
            salary: '₦3M - ₦5M/year',
            description: 'Work directly with farmers to onboard them to our platform and provide training.',
            requirements: [
                'Degree in Agriculture or related field',
                'Experience working with smallholder farmers',
                'Fluency in Hausa and English',
                'Strong interpersonal and communication skills'
            ],
            responsibilities: [
                'Onboard farmers to the MaxAgroTech platform',
                'Provide training on platform usage',
                'Gather feedback from farmers',
                'Support farmers with agricultural best practices'
            ]
        },
        {
            id: '5',
            title: 'Data Scientist',
            department: 'Analytics',
            location: 'Lagos, Nigeria',
            type: 'Full-time',
            salary: '₦7M - ₦11M/year',
            description: 'Build ML models and analytics to optimize agricultural outcomes.',
            requirements: [
                'MSc/PhD in Computer Science, Statistics, or related field',
                'Strong Python and ML framework experience',
                'Experience with agricultural data (preferred)',
                'Knowledge of statistical analysis and modeling'
            ],
            responsibilities: [
                'Develop predictive models for crop yields',
                'Analyze agricultural and market data',
                'Build recommendation systems',
                'Create data visualizations and reports'
            ]
        },
        {
            id: '6',
            title: 'Community Manager',
            department: 'Community',
            location: 'Remote',
            type: 'Full-time',
            salary: '₦3.5M - ₦6M/year',
            description: 'Build and engage our community of farmers, buyers, and agricultural stakeholders.',
            requirements: [
                '2+ years of community management experience',
                'Experience with social media and content creation',
                'Excellent written and verbal communication',
                'Understanding of agricultural sector (preferred)'
            ],
            responsibilities: [
                'Manage social media channels',
                'Create engaging content for community',
                'Organize online and offline events',
                'Monitor and respond to community feedback'
            ]
        }
    ];

    const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];

    const filteredJobs = selectedDepartment === 'All'
        ? jobs
        : jobs.filter(job => job.department === selectedDepartment);

    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a4d2e] via-[#24981C] to-[#4EBE38]">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.15]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px'
                }} />

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a4d2e]/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="hero-badge mb-8">
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Join Our Mission
                            </Badge>
                        </div>

                        <h1 className="hero-headline text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-6">
                            Build the Future of
                            <br />
                            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                                Agriculture
                            </span>
                        </h1>

                        <p className="hero-description text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                            Join a passionate team transforming agriculture in Northern Nigeria. We're looking for talented individuals who want to make a real impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="animate-section py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <Badge className="mb-4 bg-[#0140AC]/10 text-[#0140AC] border-[#0140AC]/20">
                            Open Positions
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Current Openings
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find your perfect role and help us revolutionize agriculture
                        </p>
                    </div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {departments.map((dept) => (
                            <Button
                                key={dept}
                                variant={selectedDepartment === dept ? 'default' : 'outline'}
                                onClick={() => setSelectedDepartment(dept)}
                                className={selectedDepartment === dept
                                    ? 'bg-gradient-to-r from-[#4EBE38] to-[#24981C] text-white'
                                    : ''}
                            >
                                {dept}
                            </Button>
                        ))}
                    </div>

                    {/* Job Cards */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-stagger">
                        {filteredJobs.map((job) => (
                            <Card key={job.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4EBE38]/10 to-transparent rounded-full blur-2xl" />
                                <CardHeader className="relative">
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge className="bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20">
                                            {job.department}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">{job.type}</Badge>
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                                    <CardDescription className="text-base">{job.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="relative">
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MapPin className="h-4 w-4 text-[#4EBE38]" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <DollarSign className="h-4 w-4 text-[#4EBE38]" />
                                            {job.salary}
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => setSelectedJob(job)}
                                        className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white"
                                    >
                                        View Details & Apply
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="animate-section py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-4 bg-[#4EBE38]/10 text-[#4EBE38] border-[#4EBE38]/20">
                            Benefits
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Why Join MaxAgroTech?
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto animate-stagger">
                        {[
                            { icon: Heart, title: 'Impact', desc: 'Make a real difference in farming communities' },
                            { icon: TrendingUp, title: 'Growth', desc: 'Continuous learning and career development' },
                            { icon: Users, title: 'Team', desc: 'Work with passionate, talented people' },
                            { icon: Lightbulb, title: 'Innovation', desc: 'Use cutting-edge technology' }
                        ].map((benefit, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4EBE38]/10 to-transparent rounded-full blur-2xl" />
                                <CardContent className="pt-8 relative">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4EBE38] to-[#24981C] mb-4 shadow-lg">
                                        <benefit.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
                <div className='overflow-y-hidden'>
                    <DialogContent className="w-[calc(100%-2rem)] max-w-3xl max-h-[90vh] overflow-y-auto">

                        <DialogHeader>
                            <div className="flex items-start justify-between pr-8">
                                <div>
                                    <DialogTitle className="text-2xl mb-2">{selectedJob?.title}</DialogTitle>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-[#4EBE38]/10 text-[#4EBE38]">{selectedJob?.department}</Badge>
                                        <Badge variant="outline">{selectedJob?.type}</Badge>
                                    </div>
                                </div>
                            </div>
                        </DialogHeader>

                        {selectedJob && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3">About the Role</h3>
                                    <DialogDescription className="text-gray-600 text-base">
                                        {selectedJob.description}
                                    </DialogDescription>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <CheckCircle2 className="h-5 w-5 text-[#4EBE38] flex-shrink-0 mt-0.5" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                                    <ul className="space-y-2">
                                        {selectedJob.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <CheckCircle2 className="h-5 w-5 text-[#4EBE38] flex-shrink-0 mt-0.5" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Apply for this Position</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</label>
                                            <input
                                                type="tel"
                                                placeholder="+234 XXX XXX XXXX"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">LinkedIn Profile</label>
                                            <input
                                                type="url"
                                                placeholder="https://linkedin.com/in/yourprofile"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Resume/CV *</label>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Cover Letter</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us why you're a great fit for this role..."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all resize-none"
                                            />
                                        </div>
                                        <Button className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white h-12 text-base font-semibold shadow-lg shadow-[#4EBE38]/25">
                                            Submit Application
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </DialogContent>
                </div>

            </Dialog>

            <Footer />
        </div>
    );
}
