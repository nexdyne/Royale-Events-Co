"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Crown, 
  Camera, 
  Building2, 
  Package, 
  ArrowRight, 
  Check, 
  Star, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Luxury Event Rentals,<br />
              <span className="text-yellow-200">Styled Shoots</span> &<br />
              <span className="text-yellow-200">Royal Spaces</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              All in One Place
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Transform your special moments into royal experiences with our luxury event rentals, 
              professional styled shoot studio, and curated venue selection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-[#FF6B35] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Book Your Royal Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white font-semibold px-10 py-4 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A365D] mb-6">Our Royal Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From luxury rentals to professional photography studios, we provide everything you need 
              to create unforgettable royal experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rentals */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center group animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Luxury Rentals</h3>
              <p className="text-gray-600 mb-6">
                Premium throne chairs, elegant tables, stunning photo booths, and exquisite décor 
                to elevate any celebration.
              </p>
              <Link href="/packages" className="text-[#FF6B35] font-semibold hover:text-[#FF8C42] transition-colors flex items-center justify-center">
                Explore Rentals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Studio */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center group animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Photography Studio</h3>
              <p className="text-gray-600 mb-6">
                Professional styled shoot space with premium lighting, backdrops, and props 
                for capturing royal moments.
              </p>
              <Link href="/studio" className="text-[#FF6B35] font-semibold hover:text-[#FF8C42] transition-colors flex items-center justify-center">
                Book Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Event Palace */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center group animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Event Palace</h3>
              <p className="text-gray-600 mb-6">
                Curated luxury venues that match your vision. We find the perfect palace 
                for your royal celebration.
              </p>
              <Link href="/contact" className="text-[#FF6B35] font-semibold hover:text-[#FF8C42] transition-colors flex items-center justify-center">
                Find Your Palace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Packages */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center group animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Royal Packages</h3>
              <p className="text-gray-600 mb-6">
                Curated bundles combining rentals, studio time, and venue access 
                for complete royal experiences.
              </p>
              <Link href="/packages" className="text-[#FF6B35] font-semibold hover:text-[#FF8C42] transition-colors flex items-center justify-center">
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A365D] mb-6">Signature Royal Collection</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover our most popular luxury rentals that transform ordinary events into royal experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Royal Throne Chair */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/assets/images/royal-throne-chair.jpg" alt="Royal Throne Chair" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">Royal Genesis Throne Chair</h3>
                <p className="text-gray-600 mb-4">Luxurious throne chair perfect for weddings, baby showers, and milestone celebrations.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#FF6B35]">$150/day</span>
                  <span className="text-sm text-gray-500">Weekend: $200</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Premium velvet upholstery
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Gold ornate detailing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Professional setup included
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Add to Quote
                </Link>
              </div>
            </div>

            {/* 360 Photo Booth */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/360-photo-booth.webp" alt="360 Photo Booth" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Trending
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">360° Royal Photo Booth</h3>
                <p className="text-gray-600 mb-4">Interactive 360-degree video experience that captures every angle of your celebration.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#FF6B35]">$400/day</span>
                  <span className="text-sm text-gray-500">4-hour minimum</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Professional operator included
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Instant social media sharing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Custom branding available
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Add to Quote
                </Link>
              </div>
            </div>

            {/* Flower Wall */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/luxury-flower-wall.jpg" alt="Luxury Flower Wall" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">Luxury Flower Wall</h3>
                <p className="text-gray-600 mb-4">Stunning backdrop featuring premium artificial flowers in your choice of colors.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#FF6B35]">$250/day</span>
                  <span className="text-sm text-gray-500">8ft x 8ft</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Custom color combinations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Professional installation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Perfect for photos
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Add to Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/packages" className="border-2 border-[#FF6B35] text-[#FF6B35] font-semibold px-8 py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FF8C42] hover:text-white transition-all duration-300 inline-flex items-center">
              View All Rentals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A365D] mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Hear from couples, families, and event planners who trusted us to make their celebrations truly royal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Royale Events & Co made our wedding absolutely magical! The throne chairs were stunning and the 360 photo booth was a huge hit with our guests. Professional service from start to finish."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A365D]">Sarah & Michael</h4>
                  <p className="text-sm text-gray-500">Wedding, June 2024</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The studio space is incredible! Perfect lighting and beautiful props made our maternity shoot absolutely perfect. The team was so professional and accommodating."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A365D]">Jessica Martinez</h4>
                  <p className="text-sm text-gray-500">Maternity Shoot, August 2024</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Our daughter's first birthday was transformed into a royal celebration! The kids' throne chair and flower wall created the perfect princess party atmosphere."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JF</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A365D]">The Johnson Family</h4>
                  <p className="text-sm text-gray-500">Birthday Party, September 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A365D] mb-6">Why Choose Royale Events & Co?</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're not just an event rental company – we're your partners in creating unforgettable royal experiences that leave lasting impressions on you and your guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Every item in our collection is carefully selected and maintained to the highest standards for your special day.
              </p>
            </div>

            {/* Service */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Full-Service Experience</h3>
              <p className="text-gray-600">
                Our experienced team handles setup, styling, and breakdown so you can focus on enjoying your celebration.
              </p>
            </div>

            {/* Flexibility */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Flexible Packages</h3>
              <p className="text-gray-600">
                From intimate gatherings to grand celebrations, we offer customizable packages to fit any event size and budget.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Royal Treatment Guaranteed</h3>
              <p className="text-gray-600 mb-6">
                Every client receives the royal treatment with personalized service, attention to detail, and memories that last a lifetime.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
              >
                Start Planning Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A365D] mb-6">Recent Royal Celebrations</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Take a glimpse at some of our recent events and see how we transform ordinary moments into royal experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/weddings.jpg" alt="Elegant Wedding" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>
              <h4 className="font-bold text-[#1A365D] mb-1">Elegant Wedding</h4>
              <p className="text-gray-600 text-sm">Detroit, MI</p>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/baby-shower.jpg" alt="Baby Shower" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>
              <h4 className="font-bold text-[#1A365D] mb-1">Baby Shower</h4>
              <p className="text-gray-600 text-sm">Birmingham, MI</p>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/ballroom.jpg" alt="Corporate Gala" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>
              <h4 className="font-bold text-[#1A365D] mb-1">Corporate Gala</h4>
              <p className="text-gray-600 text-sm">Troy, MI</p>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/assets/images/dinner.jpg" alt="Birthday Party" width={300} height={300} className="object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>
              <h4 className="font-bold text-[#1A365D] mb-1">Birthday Party</h4>
              <p className="text-gray-600 text-sm">Royal Oak, MI</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="border-2 border-[#FF6B35] text-[#FF6B35] font-semibold px-8 py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FF8C42] hover:text-white transition-all duration-300 inline-flex items-center">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Booking CTA */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Royal Experience?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's bring your vision to life with our luxury rentals, professional studio, 
                and curated venues. Your royal celebration awaits.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">(555) 123-ROYAL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span className="text-lg">hello@royaleeventsco.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Serving Greater Detroit Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Your Custom Quote</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="date" 
                  placeholder="Event Date"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
                <textarea 
                  placeholder="Tell us about your vision..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-white text-[#FF6B35] font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get My Royal Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}