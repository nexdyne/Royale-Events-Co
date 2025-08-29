"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Calendar, CreditCard, Truck, Package, CheckCircle, Phone, Mail, Crown, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('booking');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Questions', icon: '?', count: 20, color: 'from-blue-500 to-blue-600' },
    { id: 'booking', name: 'Booking Process', icon: Calendar, count: 4, color: 'from-orange-500 to-orange-600' },
    { id: 'pricing', name: 'Pricing & Payments', icon: CreditCard, count: 4, color: 'from-green-500 to-green-600' },
    { id: 'delivery', name: 'Delivery & Setup', icon: Truck, count: 4, color: 'from-purple-500 to-purple-600' },
    { id: 'products', name: 'Products & Services', icon: Package, count: 4, color: 'from-pink-500 to-pink-600' },
    { id: 'policies', name: 'Policies & Terms', icon: CheckCircle, count: 4, color: 'from-indigo-500 to-indigo-600' }
  ];

  const allFaqs = {
    booking: [
      {
        question: "How far in advance should I book my event?",
        answer: "We recommend booking at least 2-4 weeks in advance for best availability, especially during peak seasons (spring and summer). However, we can often accommodate last-minute requests based on inventory availability."
      },
      {
        question: "What is the booking process?",
        answer: "Our booking process is simple: 1) Contact us with your event details, 2) We'll provide a custom quote, 3) Review and approve the proposal, 4) Pay the 25% deposit to secure your date, 5) We'll confirm all details and provide setup instructions."
      },
      {
        question: "Can I modify my order after booking?",
        answer: "Yes, you can modify your order up to 7 days before your event date. Changes made within 7 days may incur additional fees. Contact us as soon as possible to discuss any modifications."
      },
      {
        question: "Do you require a contract?",
        answer: "Yes, we provide a simple rental agreement that outlines all terms, conditions, and responsibilities. This protects both you and us, ensuring a smooth rental experience."
      }
    ],
    pricing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, check, and all major credit cards (Visa, MasterCard, American Express, Discover). Payment plans are available for larger events."
      },
      {
        question: "Do you offer discounts for multiple items?",
        answer: "Yes, we offer volume discounts for multiple items and longer rental periods. Contact us for a custom quote based on your specific needs."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! Our quotes include delivery, setup, and pickup within our service area. Additional fees only apply for special requests or extended rental periods."
      },
      {
        question: "What is your refund policy?",
        answer: "Cancellations made 14+ days in advance receive a full refund. Cancellations 7-13 days prior receive a 50% refund. We understand that events can be unpredictable and will work with you when possible."
      }
    ],
    delivery: [
      {
        question: "Do you provide setup and breakdown services?",
        answer: "Yes! All our packages include professional setup and breakdown services. Our team will arrive at your venue to set up everything according to your specifications and return after your event to handle cleanup."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve the Greater Detroit Metropolitan Area, including Detroit, Dearborn, Livonia, Troy, Novi, Plymouth, and surrounding communities. Contact us to confirm if we service your specific location."
      },
      {
        question: "How early do you arrive for setup?",
        answer: "We typically arrive 1-2 hours before your event start time to ensure everything is set up perfectly. For larger events, we may arrive earlier to accommodate the setup time needed."
      },
      {
        question: "What if I need items delivered to a venue?",
        answer: "We work with all types of venues and can coordinate with venue staff for access and setup requirements. We'll handle all logistics to ensure smooth delivery and setup."
      }
    ],
    products: [
      {
        question: "What types of throne chairs do you offer?",
        answer: "We offer a variety of throne chairs including gold, silver, and white finishes. Each chair comes with premium cushioning and can be customized with additional decorations."
      },
      {
        question: "Can I see the items in person before booking?",
        answer: "Yes! We're happy to arrange a time for you to view our inventory. We can also bring samples to your venue for larger events. Contact us to schedule an appointment."
      },
      {
        question: "Do you offer custom decorations?",
        answer: "Yes, we offer custom decoration services including themed setups, floral arrangements, and personalized touches. Let us know your vision and we'll make it happen."
      },
      {
        question: "What's included in your photo booth packages?",
        answer: "Our photo booth packages include professional lighting, props, instant prints, digital gallery access, and an attendant. We also offer 360-degree photo booth experiences."
      }
    ],
    policies: [
      {
        question: "What happens if items are damaged during my event?",
        answer: "We understand that accidents happen during celebrations. Minor wear is expected and included in our pricing. For significant damage, we'll work with you on reasonable repair or replacement costs."
      },
      {
        question: "Do you require insurance?",
        answer: "While we don't require insurance, we recommend checking with your venue as they may require event insurance. We're happy to provide certificates of insurance upon request."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We offer flexible cancellation policies. Cancellations made 14+ days in advance receive a full refund. Cancellations 7-13 days prior receive a 50% refund. We understand that events can be unpredictable and will work with you when possible."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, we require a 25% deposit to secure your booking, with the balance due on the day of your event. We accept cash, check, and major credit cards."
      }
    ]
  };

  const getCurrentFaqs = () => {
    if (selectedCategory === 'all') {
      return Object.values(allFaqs).flat();
    }
    return allFaqs[selectedCategory as keyof typeof allFaqs] || [];
  };

  const filteredFaqs = getCurrentFaqs().filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Events Completed' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Crown className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Find answers to all your questions about our royal event rental services, booking process, and policies
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions and answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = typeof category.icon === 'string' ? 'span' : category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`bg-white rounded-xl p-6 text-left transition-all ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-orange-500 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                      {typeof category.icon === 'string' ? (
                        <span className="text-white text-xl font-bold">{category.icon}</span>
                      ) : (
                        <IconComponent className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{category.count} questions</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-500">
              {filteredFaqs.length} questions
            </span>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Royale Events & Co?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our royal event experts are here to help you plan the perfect celebration. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551237692"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-ROYAL
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">View Our Packages</h3>
              <p className="text-gray-600 mb-6">Explore our curated event packages designed for every celebration</p>
              <Link
                href="/packages"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                Browse Packages <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">See Our Portfolio</h3>
              <p className="text-gray-600 mb-6">View real events and get inspired by our royal transformations</p>
              <Link
                href="/portfolio"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                View Portfolio <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Your Event</h3>
              <p className="text-gray-600 mb-6">Ready to make your event royal? Get started with a free quote</p>
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
