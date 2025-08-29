"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EventPalacePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    guestCount: '',
    location: '',
    budget: '',
    date: '',
    message: ''
  });

  const featuredVenues = [
    {
      id: 1,
      name: 'The Grand Ballroom at Detroit Marriott',
      location: 'Downtown Detroit, MI',
      capacity: '200-300 guests',
      image: '/assets/images/ballroom.jpg',
      features: [
        'Crystal chandeliers',
        'Marble floors',
        'Built-in sound system',
        'Bridal suite included',
        'Valet parking available'
      ],
      partnership: 'In partnership with Detroit Marriott',
      priceRange: '$3,000-$5,000',
      highlight: 'Perfect for elegant weddings'
    },
    {
      id: 2,
      name: 'Riverside Manor Estate',
      location: 'Birmingham, MI',
      capacity: '150-250 guests',
      image: '/assets/images/weddings.jpg',
      features: [
        'Waterfront views',
        'Historic architecture',
        'Garden ceremony space',
        'Private bridal cottage',
        'Full catering kitchen'
      ],
      partnership: 'Venue by Riverside Events',
      priceRange: '$4,000-$7,000',
      highlight: 'Luxury outdoor celebrations'
    },
    {
      id: 3,
      name: 'The Royal Loft',
      location: 'Royal Oak, MI',
      capacity: '50-100 guests',
      image: '/assets/images/dinner.jpg',
      features: [
        'Industrial chic design',
        'Exposed brick walls',
        'Professional lighting',
        'Rooftop access',
        'Full bar setup'
      ],
      partnership: 'In partnership with Royal Oak Venues',
      priceRange: '$1,500-$3,000',
      highlight: 'Intimate modern events'
    }
  ];

  const bundledPackages = [
    {
      id: 1,
      venueName: 'Grand Ballroom',
      packageName: 'Royal Wedding Package',
      price: '$8,500',
      includes: [
        'Venue rental (6 hours)',
        '2 Royal Genesis Throne Chairs',
        'Luxury Flower Wall backdrop',
        'LED uplighting package',
        '360° Photo Booth (4 hours)',
        'Red carpet entrance'
      ],
      savings: 'Save $1,200 vs. booking separately'
    },
    {
      id: 2,
      venueName: 'Riverside Manor',
      packageName: 'Garden Celebration Package',
      price: '$6,800',
      includes: [
        'Venue rental (5 hours)',
        'Outdoor ceremony setup',
        'Royal Majesty Throne Chairs (2)',
        'Mirror Photo Booth',
        'String lighting installation',
        'Cocktail tables (4)'
      ],
      savings: 'Save $900 vs. booking separately'
    },
    {
      id: 3,
      venueName: 'The Royal Loft',
      packageName: 'Intimate Luxury Package',
      price: '$4,200',
      includes: [
        'Venue rental (4 hours)',
        'Royal Princess Throne Chair',
        'Sequin backdrop',
        'Classic Photo Booth',
        'LED dance floor',
        'Uplighting (4 fixtures)'
      ],
      savings: 'Save $600 vs. booking separately'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Venue match form submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours with perfect venue matches and custom package options.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Every Event Deserves a Palace
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 opacity-90">
            Let Us Find Yours.
          </h2>
          <p className="text-lg mb-12 opacity-80 max-w-4xl mx-auto">
            "Royale Event Palace" isn't just a location — it's a promise of a royal setting for your event. 
            We partner with luxury venues to match you with the perfect palace for your celebration, 
            complete with our signature rental packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#venue-match"
              className="bg-white text-[#FF6B35] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Find My Perfect Venue
            </Link>
            <Link
              href="#featured-venues"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            >
              View Venue Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We match you with the perfect space—based on your event size, style, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Tell Us Your Vision</h3>
              <p className="text-gray-600">
                Share your event details, guest count, style preferences, and budget through our venue match form.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">We Curate Perfect Matches</h3>
              <p className="text-gray-600">
                Our team handpicks 3-5 luxury venues that match your criteria, complete with bundled rental packages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Book Your Royal Experience</h3>
              <p className="text-gray-600">
                Choose your perfect palace and rental package combination for a seamless, royal celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section id="featured-venues" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Featured Royal Venues
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of luxury venues, each offering unique charm and elegance for your special day.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredVenues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image 
                      src={venue.image} 
                      alt={venue.name}
                      width={400} 
                      height={300} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.highlight}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">{venue.name}</h3>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <span className="mr-2">📍</span>
                    {venue.location}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <span className="mr-2">👥</span>
                    {venue.capacity}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {venue.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                      {venue.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{venue.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 italic">{venue.partnership}</p>
                    <p className="text-lg font-bold text-[#FF6B35]">{venue.priceRange}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-block text-center"
                  >
                    View Details & Packages
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundled Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Venue + Rental Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save money and simplify planning with our curated venue and rental combinations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {bundledPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">{pkg.packageName}</h3>
                  <p className="text-gray-600 mb-4">at {pkg.venueName}</p>
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">{pkg.price}</div>
                  <p className="text-sm text-green-600 font-semibold">{pkg.savings}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1A365D] mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-block text-center"
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Match Form */}
      <section id="venue-match" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Find Your Perfect Palace
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Tell us about your dream event and we'll match you with the perfect venue and rental package combination.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <option value="">Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other Celebration</option>
                </select>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <option value="">Guest Count</option>
                  <option value="25-50">25-50 guests</option>
                  <option value="50-100">50-100 guests</option>
                  <option value="100-150">100-150 guests</option>
                  <option value="150-250">150-250 guests</option>
                  <option value="250+">250+ guests</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Preferred Location (e.g., Detroit, Birmingham)"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <option value="">Budget Range</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-15000">$10,000 - $15,000</option>
                  <option value="15000+">$15,000+</option>
                </select>
              </div>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your vision, style preferences, or any special requirements..."
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-[#FF6B35] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Find My Perfect Venue Match
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">
                Do you own these venues?
              </h3>
              <p className="text-gray-600">
                No, but we curate elite options and partner with the best venues in the Detroit metro area. 
                We've built relationships with luxury venues to offer you exclusive access and bundled packages.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">
                Do you charge extra for venue matching?
              </h3>
              <p className="text-gray-600">
                No extra fee! Our venue partners compensate us, or it's included as part of your rental package. 
                You get expert curation at no additional cost.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">
                Can I book just the venue without rentals?
              </h3>
              <p className="text-gray-600">
                While we specialize in complete packages, we can arrange venue-only bookings. However, 
                our bundled packages offer significant savings and a seamless planning experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600">
                We recommend booking 3-6 months in advance for popular dates. However, we often have 
                last-minute availability and can work with shorter timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
