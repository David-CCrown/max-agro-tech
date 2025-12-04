'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    ShoppingCart,
    MapPin,
    Star,
    Filter,
    Search,
    Sparkles,
    Package,
    TrendingUp,
    Shield
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    unit: string;
    location: string;
    seller: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    image: string;
    quality: 'Premium' | 'Standard' | 'Organic';
}

export default function MarketplacePage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

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

    const products: Product[] = [
        {
            id: '1',
            name: 'Fresh Ginger Root',
            category: 'Fresh Produce',
            price: 2500,
            unit: 'kg',
            location: 'Kaduna',
            seller: 'Musa Farms',
            rating: 4.8,
            reviews: 124,
            inStock: true,
            image: '/products/ginger-1.jpg',
            quality: 'Premium'
        },
        {
            id: '2',
            name: 'Organic Ginger',
            category: 'Fresh Produce',
            price: 3200,
            unit: 'kg',
            location: 'Kano',
            seller: 'Green Valley Co-op',
            rating: 4.9,
            reviews: 89,
            inStock: true,
            image: '/products/ginger-2.jpg',
            quality: 'Organic'
        },
        {
            id: '3',
            name: 'Dried Ginger Slices',
            category: 'Processed',
            price: 4500,
            unit: 'kg',
            location: 'Abuja',
            seller: 'AgroProcess Ltd',
            rating: 4.7,
            reviews: 56,
            inStock: true,
            image: '/products/ginger-3.jpg',
            quality: 'Premium'
        },
        {
            id: '4',
            name: 'Ginger Powder',
            category: 'Processed',
            price: 5000,
            unit: 'kg',
            location: 'Lagos',
            seller: 'SpiceWorks',
            rating: 4.6,
            reviews: 78,
            inStock: true,
            image: '/products/ginger-4.jpg',
            quality: 'Standard'
        },
        {
            id: '5',
            name: 'Baby Ginger',
            category: 'Fresh Produce',
            price: 2800,
            unit: 'kg',
            location: 'Plateau',
            seller: 'Highland Farmers',
            rating: 4.8,
            reviews: 45,
            inStock: true,
            image: '/products/ginger-5.jpg',
            quality: 'Premium'
        },
        {
            id: '6',
            name: 'Ginger Rhizomes (Bulk)',
            category: 'Fresh Produce',
            price: 2200,
            unit: 'kg',
            location: 'Kaduna',
            seller: 'Northern Agro Alliance',
            rating: 4.5,
            reviews: 112,
            inStock: true,
            image: '/products/ginger-6.jpg',
            quality: 'Standard'
        }
    ];

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.seller.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a4d2e] via-[#24981C] to-[#4EBE38]">
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

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="hero-badge mb-6">
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Marketplace
                            </Badge>
                        </div>

                        <h1 className="hero-headline text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] text-white mb-4">
                            Quality Ginger
                            <br />
                            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                                Direct from Farmers
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
                            Browse premium ginger products from verified farmers across Northern Nigeria
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products or sellers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/40 focus:bg-white/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace Section */}
            <section className="animate-section py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(category)}
                                className={selectedCategory === category
                                    ? 'bg-gradient-to-r from-[#4EBE38] to-[#24981C] text-white'
                                    : ''}
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4EBE38]/10 to-transparent rounded-full blur-2xl" />

                                {/* Product Image Placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-[#4EBE38]/20 to-[#24981C]/20 flex items-center justify-center">
                                    <Package className="h-20 w-20 text-[#4EBE38]/40" />
                                    <div className="absolute top-3 right-3">
                                        <Badge className={`${product.quality === 'Organic' ? 'bg-green-500' :
                                            product.quality === 'Premium' ? 'bg-blue-500' :
                                                'bg-gray-500'
                                            } text-white border-0`}>
                                            {product.quality}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="relative">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <CardTitle className="text-xl mb-1">{product.name}</CardTitle>
                                            <CardDescription className="flex items-center gap-1 text-sm">
                                                <MapPin className="h-3 w-3" />
                                                {product.location}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-semibold">{product.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Seller:</span>
                                            <span className="text-sm font-semibold text-gray-900">{product.seller}</span>
                                        </div>
                                        <div className="flex items-baseline justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-[#4EBE38]">₦{product.price.toLocaleString()}</span>
                                                <span className="text-sm text-gray-600">/{product.unit}</span>
                                            </div>
                                            {product.inStock && (
                                                <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                                                    In Stock
                                                </Badge>
                                            )}
                                        </div>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#4EBE38] to-[#24981C] hover:from-[#24981C] hover:to-[#4EBE38] text-white"
                                        >
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            Add to Cart
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                            <p className="text-gray-500">Try adjusting your filters or search query</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: Shield, title: 'Quality Assured', desc: 'All products verified for quality' },
                            { icon: TrendingUp, title: 'Fair Pricing', desc: 'Direct from farmers, no middlemen' },
                            { icon: Package, title: 'Fast Delivery', desc: 'Quick and reliable logistics' }
                        ].map((feature, i) => (
                            <Card key={i} className="text-center border-0 shadow-lg">
                                <CardContent className="pt-8">
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4EBE38] to-[#24981C] mb-4 shadow-lg">
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
