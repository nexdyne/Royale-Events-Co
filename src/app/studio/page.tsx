"use client";

import React from 'react';
import { 
  Camera, 
  Palette, 
  Crown, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Image, 
  Video, 
  Star,
  User,
  Briefcase,
  PartyPopper,
  Cake
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Studio Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Capture Moments, Create Memories - All in Royal Style
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-4xl mx-auto">
            From intimate portraits to grand celebrations, our professional studio provides the perfect setting 
            for capturing your special moments with luxury equipment and expert photographers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#packages"
              className="bg-white text-[#FF6B35] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Packages
            </Link>
            <Link
              href="#portfolio"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            >
              See Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Studio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Why Choose Our Studio?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine professional equipment, an expert team, and luxury amenities to create 
              the perfect photography experience for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Equipment */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Professional Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art cameras, lighting, and accessories for perfect shots every time.
              </p>
            </div>

            {/* Multiple Backdrops */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Multiple Backdrops</h3>
              <p className="text-gray-600">
                Extensive collection of professional backdrops to match any theme or style.
              </p>
            </div>

            {/* Royal Props & Accessories */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Royal Props & Accessories</h3>
              <p className="text-gray-600">
                Throne chairs, luxury props, and elegant accessories for royal-themed shoots.
              </p>
            </div>

            {/* Expert Team */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Professional photographers and stylists with years of experience in luxury photography.
              </p>
            </div>

            {/* High-Resolution Photos */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Image className="h-8 w-8 text-white" alt="High-resolution photos" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">High-Resolution Photos</h3>
              <p className="text-gray-600">
                Professional editing and retouching for stunning, high-quality images.
              </p>
            </div>

            {/* Video Options */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Video Options</h3>
              <p className="text-gray-600">
                Professional videography services to capture moving memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Packages */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Studio Photography Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your photography needs. All sessions include professional editing and an online gallery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mini Session */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Quick & Sweet
                </div>
                <h3 className="text-2xl font-bold text-[#1A365D] mb-2">Mini Session</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$299</div>
                <p className="text-gray-600 mb-6">1 hour | 25+ edited Photos</p>
                
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    1-hour studio session
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional photographer
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    3 backdrop options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic props included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    25+ edited high-resolution photos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Online gallery for sharing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Digital delivery
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-6">
                  <strong>Perfect For:</strong> Individual Portraits, Couple & Small Family
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg inline-block text-center hover:shadow-lg transition-all duration-300"
                  >
                    Book This Package
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-[#FF6B35] text-[#FF6B35] font-semibold py-3 rounded-lg inline-block text-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
                  >
                    View Add-Ons
                  </Link>
                </div>
              </div>
            </div>

            {/* Signature Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#FF6B35]">
              <div className="text-center">
                <div className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-[#1A365D] mb-2">Signature Experience</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$599</div>
                <p className="text-gray-600 mb-6">2 hours | 75+ edited Photos</p>
                
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    2-hour studio session
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional photographer & assistant
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    5 backdrop options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full prop collection access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    75+ edited high-resolution photos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional retouching
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Online gallery for sharing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Digital delivery
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-6">
                  <strong>Perfect For:</strong> Birthday Celebrations, Anniversary Sessions, Family Portraits
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg inline-block text-center hover:shadow-lg transition-all duration-300"
                  >
                    Book This Package
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-[#FF6B35] text-[#FF6B35] font-semibold py-3 rounded-lg inline-block text-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
                  >
                    View Add-Ons
                  </Link>
                </div>
              </div>
            </div>

            {/* Royal Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Premium
                </div>
                <h3 className="text-2xl font-bold text-[#1A365D] mb-2">Royal Experience</h3>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">$999</div>
                <p className="text-gray-600 mb-6">3 hours | 150+ edited Photos</p>
                
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    3-hour studio session
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Lead photographer + assistant
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited backdrop options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full prop collection access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    150+ edited high-resolution photos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional retouching
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Same-day preview gallery
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Online gallery for sharing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Digital delivery
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Print release included
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-6">
                  <strong>Perfect For:</strong> Weddings, Corporate Galas, Fashion Shoots
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg inline-block text-center hover:shadow-lg transition-all duration-300"
                  >
                    Book This Package
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-[#FF6B35] text-[#FF6B35] font-semibold py-3 rounded-lg inline-block text-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
                  >
                    View Add-Ons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our work across different photography styles and occasions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Weddings */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">Weddings</h3>
              <p className="text-[#FF6B35] font-semibold">200+ Sessions</p>
            </div>

            {/* Portraits */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">Portraits</h3>
              <p className="text-[#FF6B35] font-semibold">200+ Sessions</p>
            </div>

            {/* Events */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">Events</h3>
              <p className="text-[#FF6B35] font-semibold">100+ Events</p>
            </div>

            {/* Corporate */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">Corporate</h3>
              <p className="text-[#FF6B35] font-semibold">75+ Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real clients who chose our studio for their special moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
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
                  <p className="text-sm text-gray-500">Maternity Shoot, Detroit</p>
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
                "Professional service from start to finish. The setup was perfect and the quality of photos exceeded our expectations. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A365D]">David Chen</h4>
                  <p className="text-sm text-gray-500">Corporate Event, Birmingham</p>
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
                  <p className="text-sm text-gray-500">Birthday Party, Royal Oak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Book Your Studio Session</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours to confirm your session details.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Session Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]">
                    <option value="">Select session type</option>
                    <option value="portrait">Portrait</option>
                    <option value="family">Family</option>
                    <option value="maternity">Maternity</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Package</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]">
                    <option value="">Select package</option>
                    <option value="mini">Mini Session ($299)</option>
                    <option value="signature">Signature Experience ($599)</option>
                    <option value="royal">Royal Experience ($999)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  placeholder="How many people will be in the session?"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] resize-none"
                  placeholder="Tell us about your vision, special requirements, or any questions you have..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Submit Booking Request
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              We'll contact you within 24 hours to confirm your session details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Crown className="h-8 w-8" />
                <div>
                  <h2 className="text-2xl font-bold">Royale Events & Co</h2>
                  <p className="text-lg opacity-90">Professional Studio Services</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Visit Our Studio</h3>
                <p className="opacity-90">
                  Our state-of-the-art studio is equipped with professional lighting, 
                  multiple backdrops, and luxury props to create the perfect setting for your photos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Studio Location</h4>
                  <p className="opacity-90">123 Royal Avenue, Detroit, MI 48201</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="opacity-90">(555) 123-ROYAL</p>
                  <p className="text-sm opacity-75">Mon-Fri: 9AM-6PM | Sat-Sun: By Appointment</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="opacity-90">studio@royaleeventsco.com</p>
                  <p className="text-sm opacity-75">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
