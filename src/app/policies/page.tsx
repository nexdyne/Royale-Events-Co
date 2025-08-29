"use client";

import React from 'react';
import { Crown, FileText, Building, Shield, RefreshCw, Lock, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Policies() {
  const policies = [
    {
      id: 'rental-terms',
      title: 'Rental Terms & Conditions',
      description: 'Complete terms and conditions for all rental services, including equipment usage, responsibilities, and general rental policies.',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      lastUpdated: 'December 2024'
    },
    {
      id: 'studio-usage',
      title: 'Studio Usage Terms',
      description: 'Specific terms and guidelines for using our studio facilities, including booking procedures, usage rules, and facility policies.',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      lastUpdated: 'December 2024'
    },
    {
      id: 'venue-policies',
      title: 'Venue Policies',
      description: 'Comprehensive policies regarding venue requirements, access restrictions, setup guidelines, and venue-specific terms.',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      lastUpdated: 'December 2024'
    },
    {
      id: 'refund-cancellation',
      title: 'Refund & Cancellation Policy',
      description: 'Detailed information about our refund procedures, cancellation timelines, deposit policies, and related terms.',
      icon: RefreshCw,
      color: 'from-green-500 to-green-600',
      lastUpdated: 'December 2024'
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Our commitment to protecting your privacy, including data collection, usage, storage, and your rights regarding personal information.',
      icon: Lock,
      color: 'from-red-500 to-red-600',
      lastUpdated: 'December 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Policies
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Legal Clarity & Transparency for Your Peace of Mind
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            We believe in complete transparency. Review our comprehensive policies to understand your rights, our commitments, and the terms that govern our royal event services.
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Policies & Terms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any policy below to view the complete terms and conditions. All policies are regularly updated to ensure clarity and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
              const IconComponent = policy.icon;
              return (
                <Link
                  key={policy.id}
                  href={`/${policy.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                >
                  <div className="p-8">
                    <div className={`bg-gradient-to-r ${policy.color} p-4 rounded-lg inline-block mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {policy.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {policy.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Updated: {policy.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-orange-600 font-medium">
                        <span>Read Policy</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Legal Notice & Updates
              </h3>
              <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
                <p>
                  These policies are effective as of December 2024 and govern all services provided by Royale Events & Co. 
                  We reserve the right to update these policies at any time, and changes will be posted on this page.
                </p>
                <p>
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and policies. 
                  If you have any questions about our policies, please contact us directly.
                </p>
                <p className="font-medium text-gray-900">
                  For immediate assistance or policy clarification, contact us at (555) 123-ROYAL or hello@royaleevents.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Questions About Our Policies?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Our team is here to help clarify any terms or answer your questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:5551237692"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (555) 123-ROYAL
            </Link>
            <Link
              href="/contact"
              className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
            >
              Email Us
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}