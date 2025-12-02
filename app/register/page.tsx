'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    ArrowRight,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ShoppingCart,
    Building2,
    CheckCircle2,
    User,
    Phone,
    MapPin
} from 'lucide-react';

export default function RegisterPage() {
    const [userType, setUserType] = useState<'buyer' | 'business'>('buyer');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
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

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        {/* Register Card */}
                        <Card className="border-0 shadow-2xl">
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-3xl mb-2">Create Account</CardTitle>
                                <CardDescription className="text-base">
                                    Join MaxAgroTech and start transforming agriculture
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {/* User Type Selection */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-3 block">I am a</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => setUserType('buyer')}
                                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${userType === 'buyer'
                                                        ? 'border-[#4EBE38] bg-[#4EBE38]/5 shadow-lg shadow-[#4EBE38]/20'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${userType === 'buyer'
                                                            ? 'bg-gradient-to-br from-[#4EBE38] to-[#24981C]'
                                                            : 'bg-gray-100'
                                                        }`}>
                                                        <ShoppingCart className={`h-6 w-6 ${userType === 'buyer' ? 'text-white' : 'text-gray-600'}`} />
                                                    </div>
                                                    <span className={`text-sm font-semibold ${userType === 'buyer' ? 'text-[#4EBE38]' : 'text-gray-700'}`}>
                                                        Buyer/Processor
                                                    </span>
                                                    {userType === 'buyer' && (
                                                        <CheckCircle2 className="h-5 w-5 text-[#4EBE38]" />
                                                    )}
                                                </div>
                                            </button>
                                            <button
                                                onClick={() => setUserType('business')}
                                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${userType === 'business'
                                                        ? 'border-[#0140AC] bg-[#0140AC]/5 shadow-lg shadow-[#0140AC]/20'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${userType === 'business'
                                                            ? 'bg-gradient-to-br from-[#000074] to-[#0140AC]'
                                                            : 'bg-gray-100'
                                                        }`}>
                                                        <Building2 className={`h-6 w-6 ${userType === 'business' ? 'text-white' : 'text-gray-600'}`} />
                                                    </div>
                                                    <span className={`text-sm font-semibold ${userType === 'business' ? 'text-[#0140AC]' : 'text-gray-700'}`}>
                                                        Business/Enterprise
                                                    </span>
                                                    {userType === 'business' && (
                                                        <CheckCircle2 className="h-5 w-5 text-[#0140AC]" />
                                                    )}
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Form Fields */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    placeholder="+234 XXX XXX XXXX"
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Business-specific fields */}
                                    {userType === 'business' && (
                                        <>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {/* Business Name */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Business Name *</label>
                                                    <div className="relative">
                                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="Your Company Ltd"
                                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Location *</label>
                                                    <div className="relative">
                                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="Lagos, Nigeria"
                                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Password Fields */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Password */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Password *</label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="••••••••"
                                                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">Confirm Password *</label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    placeholder="••••••••"
                                                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-200 focus:border-[#4EBE38] focus:ring-2 focus:ring-[#4EBE38]/20 outline-none transition-all"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="flex items-start gap-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="mt-1 rounded border-gray-300 text-[#4EBE38] focus:ring-[#4EBE38]"
                                        />
                                        <label htmlFor="terms" className="text-sm text-gray-600">
                                            I agree to the{' '}
                                            <Link href="#" className="text-[#4EBE38] hover:text-[#24981C] font-medium">
                                                Terms of Service
                                            </Link>
                                            {' '}and{' '}
                                            <Link href="#" className="text-[#4EBE38] hover:text-[#24981C] font-medium">
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>

                                    {/* Create Account Button */}
                                    <Button
                                        size="lg"
                                        className={`w-full h-12 text-base font-semibold shadow-lg ${userType === 'buyer'
                                                ? 'bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] shadow-[#4EBE38]/25'
                                                : 'bg-gradient-to-r from-[#000074] to-[#0140AC] hover:from-[#0140AC] hover:to-[#000074] shadow-[#0140AC]/25'
                                            } text-white`}
                                    >
                                        Create Account
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>

                                    <Separator />

                                    {/* Sign In Link */}
                                    <div className="text-center text-sm text-gray-600">
                                        Already have an account?{' '}
                                        <Link href="/login" className="text-[#4EBE38] hover:text-[#24981C] font-semibold">
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
