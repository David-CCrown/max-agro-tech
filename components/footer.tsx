'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Leaf, Globe, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
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
                            <li><Link href="/#features" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Features</Link></li>
                            <li><Link href="/#impact" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Impact</Link></li>
                            <li><Link href="/#workflow" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />How It Works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Company</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><Link href="/teams" className="hover:text-[#4EBE38] transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4" />Team</Link></li>
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
    );
}
