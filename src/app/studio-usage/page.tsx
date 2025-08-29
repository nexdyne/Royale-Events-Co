"use client";

import React from 'react';
import { Crown, Building, ArrowLeft, Phone, Mail, Calendar, CheckCircle, AlertTriangle, Clock, Camera, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StudioUsage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/policies"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Terms & Policies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Studio Usage Terms
              </h1>
              <p className="text-lg opacity-90">
                Guidelines and policies for using our studio facilities
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: December 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Effective Date: December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Studio Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg mr-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Studio Facility Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our professional studio facility is designed to provide the perfect backdrop for your special events, photo shoots, and celebrations. These terms govern the use of our studio space and ensure a safe, enjoyable experience for all clients.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Camera className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Photo-Ready Space</h3>
                <p className="text-sm text-gray-600">Professional lighting and backdrops</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Event Hosting</h3>
                <p className="text-sm text-gray-600">Perfect for intimate celebrations</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Full Amenities</h3>
                <p className="text-sm text-gray-600">Climate control and power access</p>
              </div>
            </div>
          </div>

          {/* Booking & Scheduling */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Booking & Scheduling</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Reservation Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Studio bookings require advance reservation with a minimum 48-hour notice. All bookings must include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Signed studio usage agreement</li>
                  <li>50% deposit payment</li>
                  <li>Detailed event description and guest count</li>
                  <li>Proof of liability insurance (for events over 25 guests)</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Studio Hours & Availability
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Standard Hours</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Monday - Friday: 9:00 AM - 10:00 PM</li>
                        <li>Saturday: 8:00 AM - 11:00 PM</li>
                        <li>Sunday: 10:00 AM - 9:00 PM</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Extended Hours</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Available upon request</li>
                        <li>Additional fees apply</li>
                        <li>Subject to availability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Minimum Booking Duration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Studio rentals have a 2-hour minimum booking duration. This includes setup and cleanup time. Additional time can be booked in 30-minute increments. Early arrival or late departure requires prior approval and may incur additional charges.
                </p>
              </div>
            </div>
          </div>

          {/* Studio Rules & Guidelines */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Studio Rules & Guidelines</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Capacity & Safety Limits
                </h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-3">
                  <p className="text-yellow-800 font-medium">Maximum occupancy: 50 guests</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For safety and comfort, our studio has a strict maximum capacity of 50 guests. This limit includes all attendees, vendors, photographers, and event staff. Exceeding this limit may result in immediate event termination without refund.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Prohibited Items & Activities
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Strictly Prohibited</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Smoking or vaping anywhere in the facility</li>
                      <li>Open flames, candles, or sparklers</li>
                      <li>Confetti, glitter, or rice</li>
                      <li>Alcoholic beverages (unless pre-approved)</li>
                      <li>Loud music after 9:00 PM</li>
                      <li>Pets (except service animals)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requires Approval</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Professional photography equipment</li>
                      <li>Additional lighting setups</li>
                      <li>Catering and food service</li>
                      <li>Decorations requiring wall mounting</li>
                      <li>Live entertainment or DJs</li>
                      <li>Special effects or fog machines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Cleanliness & Maintenance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients are responsible for leaving the studio in the same condition as received. This includes removing all decorations, disposing of trash, and cleaning up any spills. A cleaning fee of $150 will be charged for excessive cleanup requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Equipment & Amenities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Equipment & Amenities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Included Amenities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Professional lighting system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Climate control (heating/cooling)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Sound system with Bluetooth</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Multiple power outlets</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Backdrop options (white, black, gray)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Basic furniture (chairs, tables)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Restroom facilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Secure parking area</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment Usage Guidelines</h3>
                <p className="text-gray-600 leading-relaxed">
                  All studio equipment must be used properly and with care. Clients are responsible for any damage to studio equipment or facilities. Our staff will provide a brief orientation on equipment usage upon arrival. Unauthorized modification of lighting or sound equipment is strictly prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Payment & Cancellation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Payment & Cancellation Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Studio Rental Rates</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">Weekday Rate</h4>
                      <p className="text-2xl font-bold text-blue-600">$150/hour</p>
                      <p className="text-sm text-gray-600">Monday - Thursday</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">Weekend Rate</h4>
                      <p className="text-2xl font-bold text-blue-600">$200/hour</p>
                      <p className="text-sm text-gray-600">Friday - Sunday</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">Extended Hours</h4>
                      <p className="text-2xl font-bold text-blue-600">+$50/hour</p>
                      <p className="text-sm text-gray-600">Outside standard hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">7+ days before booking</span>
                    <span className="text-green-600 font-semibold">Full refund</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">3-6 days before booking</span>
                    <span className="text-yellow-600 font-semibold">50% refund</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">1-2 days before booking</span>
                    <span className="text-orange-600 font-semibold">25% refund</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-900 font-medium">Same day cancellation</span>
                    <span className="text-red-600 font-semibold">No refund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liability & Insurance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Liability & Insurance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Responsibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients assume full responsibility for their guests and any damages that occur during the rental period. This includes damage to studio equipment, facilities, or injury to guests. Clients are required to maintain appropriate supervision of all attendees, especially children.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance Requirements</h3>
                <p className="text-gray-600 leading-relaxed">
                  For events with more than 25 guests, clients must provide proof of general liability insurance with minimum coverage of $1,000,000. This insurance must name Royale Events & Co as an additional insured party. Smaller events may proceed with signed liability waiver.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Studio Usage?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help you plan the perfect studio experience for your event.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="opacity-90">(555) 123-ROYAL</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="opacity-90">hello@royaleevents.com</p>
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
