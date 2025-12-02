'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = pathname === '/';

    const navLinks = [
        { href: '/#features', label: 'Features', homeOnly: true },
        { href: '/#impact', label: 'Impact', homeOnly: true },
        { href: '/#workflow', label: 'How It Works', homeOnly: true },
        { href: '/marketplace', label: 'Marketplace', homeOnly: false },
        { href: '/teams', label: 'Team', homeOnly: false },
    ];

    // Filter links based on current page
    const visibleLinks = navLinks.filter(link => !link.homeOnly || isHomePage);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-gradient-to-br from-[#4EBE38] to-[#24981C] rounded-lg flex items-center justify-center">
                            <Leaf className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">
                            MaxAgroTech
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {visibleLinks.map((link) => {
                            const isActive = link.href === '/teams' ? pathname === '/teams' :
                                link.href === '/marketplace' ? pathname === '/marketplace' : false;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                        ? 'text-white'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link href="/get-started">
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white shadow-lg shadow-[#4EBE38]/25 transition-all duration-300"
                            >
                                Get Started
                            </Button>
                        </Link>
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
                    {visibleLinks.map((link) => {
                        const isActive = link.href === '/teams' ? pathname === '/teams' :
                            link.href === '/marketplace' ? pathname === '/marketplace' : false;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block text-sm font-medium transition-colors py-2 ${isActive
                                    ? 'text-white'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link href="/get-started">
                        <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white shadow-lg shadow-[#4EBE38]/25 transition-all duration-300"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
