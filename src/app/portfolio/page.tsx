"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Crown, 
  Star, 
  Heart, 
  Camera, 
  Building, 
  Baby, 
  Cake, 
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PortfolioEvent {
  id: number;
  title: string;
  location: string;
  service: string;
  description: string;
  image: string;
}

interface PortfolioCategory {
  [key: string]: PortfolioEvent[];
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('weddings');

  const categories = [
    { id: 'weddings', name: 'Weddings', icon: Heart },
    { id: 'baby', name: 'Baby Showers', icon: Baby },
    { id: 'birthday', name: 'Birthday Parties', icon: Cake },
    { id: 'styled', name: 'Styled Shoots', icon: Camera },
    { id: 'corporate', name: 'Corporate Events', icon: Building }
  ];

  const portfolioEvents: PortfolioCategory = {
    weddings: [
      {
        id: 1,
        title: "The Smith Wedding",
        location: "Detroit, MI",
        service: "Gold Throne Chairs • White Flower Wall • LED Uplighting",
        description: "A royal celebration with elegant throne chairs and luxury décor",
        image: "/assets/images/weddings.jpg"
      },
      {
        id: 2,
        title: "Sarah & Michael's Royal Day",
        location: "Birmingham, MI",
        service: "Royal Throne Set • Crystal Backdrop • 360° Photo Booth",
        description: "Luxury wedding setup with complete royal treatment",
        image: "/assets/images/royal-throne-chair.jpg"
      },
      {
        id: 3,
        title: "The Johnson Celebration",
        location: "Troy, MI",
        service: "Throne Chairs • Flower Walls • Premium Lighting",
        description: "Elegant wedding with sophisticated royal touches",
        image: "/assets/images/luxury-flower-wall.jpg"
      },
      {
        id: 4,
        title: "Royal Garden Wedding",
        location: "Bloomfield Hills, MI",
        service: "Gold Throne Chairs • Luxury Linens • Mirror Photo Booth",
        description: "Outdoor royal wedding with premium rental package",
        image: "/assets/images/ballroom.jpg"
      }
    ],
    baby: [
      {
        id: 1,
        title: "Prince Lucas Baby Shower",
        location: "Southfield, MI",
        service: "Royal Blue Theme • Crown Decorations • Throne Chair",
        description: "Royal prince themed baby shower with elegant decorations",
        image: "/assets/images/baby-shower.jpg"
      },
      {
        id: 2,
        title: "Little Princess Celebration",
        location: "Royal Oak, MI",
        service: "Pink & Gold Theme • Royal Decorations • Photo Booth",
        description: "Princess themed baby shower with luxury touches",
        image: "/assets/images/royal-throne-chair.jpg"
      },
      {
        id: 3,
        title: "Royal Baby Announcement",
        location: "Novi, MI",
        service: "Crown Centerpieces • Royal Throne • Balloon Arch",
        description: "Elegant baby shower with royal blue and gold theme",
        image: "/assets/images/luxury-flower-wall.jpg"
      },
      {
        id: 4,
        title: "Prince & Princess Twins",
        location: "West Bloomfield, MI",
        service: "Dual Theme Setup • Twin Thrones • Royal Decorations",
        description: "Special twin baby shower with double royal treatment",
        image: "/assets/images/baby-shower.jpg"
      }
    ],
    birthday: [
      {
        id: 1,
        title: "Amara's Sweet 16",
        location: "Farmington Hills, MI",
        service: "Black & Gold Theme • Throne Chair • Balloon Garland",
        description: "Sophisticated sweet 16 with royal throne and elegant balloons",
        image: "/assets/images/royal-throne-chair.jpg"
      },
      {
        id: 2,
        title: "Royal Birthday Bash",
        location: "Canton, MI",
        service: "Colorful Balloons • Throne Setup • Party Decorations",
        description: "Fun birthday party with royal chair and festive decorations",
        image: "/assets/images/dinner.jpg"
      },
      {
        id: 3,
        title: "Princess Birthday Party",
        location: "Livonia, MI",
        service: "Pink Theme • Royal Throne • Crown Decorations",
        description: "Princess themed birthday with royal throne centerpiece",
        image: "/assets/images/luxury-flower-wall.jpg"
      },
      {
        id: 4,
        title: "King's Birthday Celebration",
        location: "Dearborn, MI",
        service: "Gold & Black Theme • Throne Chair • Luxury Setup",
        description: "Regal birthday celebration with sophisticated royal theme",
        image: "/assets/images/black-dance-floor.jpg"
      }
    ],
    styled: [
      {
        id: 1,
        title: "Elegant Bridal Shoot",
        location: "Downtown Detroit, MI",
        service: "Professional Setup • Luxury Props • Throne Chairs",
        description: "Professional styled shoot with elegant royal furniture",
        image: "/assets/images/royal-throne-chair.jpg"
      },
      {
        id: 2,
        title: "Fashion Photography Session",
        location: "Belle Isle, MI",
        service: "Outdoor Setup • Royal Chairs • Professional Lighting",
        description: "Outdoor styled shoot with luxury rental furniture",
        image: "/assets/images/weddings.jpg"
      },
      {
        id: 3,
        title: "Luxury Portrait Session",
        location: "Birmingham, MI",
        service: "Studio Setup • Throne Chairs • Professional Backdrop",
        description: "Indoor luxury portrait session with royal furniture",
        image: "/assets/images/luxury-flower-wall.jpg"
      },
      {
        id: 4,
        title: "Editorial Fashion Shoot",
        location: "Midtown Detroit, MI",
        service: "Urban Setup • Royal Props • Professional Equipment",
        description: "Urban styled shoot with luxury royal furniture rentals",
        image: "/assets/images/360-photo-booth.webp"
      }
    ],
    corporate: [
      {
        id: 1,
        title: "Executive Gala Dinner",
        location: "Renaissance Center, Detroit",
        service: "Luxury Furniture • Professional Setup • Premium Lighting",
        description: "Corporate gala with sophisticated luxury furniture",
        image: "/assets/images/ballroom.jpg"
      },
      {
        id: 2,
        title: "Annual Awards Ceremony",
        location: "MGM Grand Detroit",
        service: "VIP Seating • Throne Chairs • Professional Staging",
        description: "Awards ceremony with royal VIP seating arrangements",
        image: "/assets/images/royal-throne-chair.jpg"
      },
      {
        id: 3,
        title: "Product Launch Event",
        location: "Cobo Center, Detroit",
        service: "Modern Setup • Luxury Seating • Professional Lighting",
        description: "Product launch with luxury corporate furniture rentals",
        image: "/assets/images/black-dance-floor.jpg"
      },
      {
        id: 4,
        title: "Company Milestone Celebration",
        location: "The Henry Ford, Dearborn",
        service: "Elegant Setup • Royal Furniture • Premium Service",
        description: "Corporate milestone celebration with royal treatment",
        image: "/assets/images/dinner.jpg"
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      quote: "Royale Events & Co. made our wedding look like royalty! The throne chairs were absolutely stunning and every detail was perfect. Our guests couldn't stop talking about the setup.",
      author: "Sarah & Michael Johnson",
      event: "Royal Wedding Package",
      location: "Birmingham, MI",
      rating: 5
    },
    {
      id: 2,
      quote: "My daughter felt like a true princess at her sweet 16! The throne chair and balloon setup were exactly what we envisioned. Professional service from start to finish.",
      author: "Jennifer Martinez",
      event: "Royal Birthday Bash",
      location: "Farmington Hills, MI",
      rating: 5
    },
    {
      id: 3,
      quote: "The corporate event was a huge success! The luxury furniture impressed our clients and the royal touch added that perfect element of sophistication to our gala.",
      author: "David Chen",
      event: "Executive Corporate Package",
      location: "Renaissance Center, Detroit",
      rating: 5
    },
    {
      id: 4,
      quote: "Our baby shower was absolutely magical! The royal prince theme was executed perfectly and the throne chair made for amazing photos. Highly recommend!",
      author: "Ashley Williams",
      event: "Royal Baby Shower",
      location: "Royal Oak, MI",
      rating: 5
    },
    {
      id: 5,
      quote: "Professional styled shoot made easy! The royal furniture and props elevated our photography session. The team was professional and the setup was flawless.",
      author: "Marcus Thompson",
      event: "Luxury Portrait Session",
      location: "Downtown Detroit, MI",
      rating: 5
    },
    {
      id: 6,
      quote: "Every event deserves the royal treatment! From the initial consultation to the final setup, Royale Events exceeded our expectations. The attention to detail is unmatched.",
      author: "Lisa Rodriguez",
      event: "Anniversary Celebration",
      location: "West Bloomfield, MI",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Our Work Speaks for Itself — See the Royal Touch in Action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="#gallery"
              className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Browse Gallery
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            >
              Book Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg' 
                      : 'bg-white text-[#1A365D] border-2 border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35]'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Events Gallery */}
          <div id="gallery" className="mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] text-center mb-4">Featured Events Gallery</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Discover the royal touch in every celebration we've had the honor to be part of
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {portfolioEvents[activeCategory]?.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden h-64">
                    <div className="absolute inset-0">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        width={400} 
                        height={300} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A365D] mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Service:</strong> {event.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] text-center mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Hear from our clients about their royal experience
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-[#1A365D]">{testimonial.author}</div>
                  <div className="text-[#FF6B35] font-medium">{testimonial.event}</div>
                  <div className="text-sm text-gray-500 mt-1">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us create a royal experience for your next celebration. From intimate gatherings to grand events, we bring the luxury you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Your Event</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Start a Project</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Get a Custom Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#1A365D] mb-8">Ready to Create Your Royal Moment?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="font-semibold text-[#1A365D] mb-2">Call Our Experts</h4>
              <p className="text-gray-600 mb-2">(555) 123-ROYAL</p>
              <p className="text-sm text-gray-500">Available 7 days a week</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="font-semibold text-[#1A365D] mb-2">Email Us</h4>
              <p className="text-gray-600 mb-2">portfolio@royaleevents.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="font-semibold text-[#1A365D] mb-2">Schedule Consultation</h4>
              <p className="text-gray-600 mb-2">Free portfolio planning</p>
              <p className="text-sm text-gray-500">30-minute consultation</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
