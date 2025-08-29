"use client";

import React from 'react';
import { Shield, ArrowLeft, Phone, Mail, Calendar, CheckCircle, AlertTriangle, Clock, MapPin, Truck, Key } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VenuePolicies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/policies"
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Terms & Policies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Venue Policies
              </h1>
              <p className="text-lg opacity-90">
                Comprehensive policies for venue requirements and guidelines
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
          
          {/* Venue Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-lg mr-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Venue Policy Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              These venue policies ensure successful delivery, setup, and pickup of rental equipment at your chosen location. Compliance with these policies helps guarantee a smooth event experience and protects both our equipment and your venue.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <Truck className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Delivery Access</h3>
                <p className="text-sm text-gray-600">Clear pathways for equipment transport</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Key className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Venue Coordination</h3>
                <p className="text-sm text-gray-600">Proper permissions and access</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Safety Compliance</h3>
                <p className="text-sm text-gray-600">Meeting all venue requirements</p>
              </div>
            </div>
          </div>

          {/* Venue Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Venue Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Access Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Venues must provide adequate access for delivery and setup of rental equipment:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Minimum 36-inch wide doorways and pathways</li>
                  <li>Clear, unobstructed route from parking to event space</li>
                  <li>Elevator access for venues above ground floor (if applicable)</li>
                  <li>Adequate parking space for delivery vehicles</li>
                  <li>Level surfaces for equipment placement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Space & Layout Specifications
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Minimum Space Requirements</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Throne chairs: 4ft x 4ft per chair</li>
                        <li>Round tables (60"): 8ft x 8ft per table</li>
                        <li>Photo booth: 10ft x 10ft minimum</li>
                        <li>Dance floor: Custom sizing available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Ceiling & Structural</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Minimum 8ft ceiling height</li>
                        <li>Stable flooring (no soft grass/sand)</li>
                        <li>Weather protection for outdoor events</li>
                        <li>Adequate ventilation for guest comfort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Electrical & Power Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For events requiring electrical equipment (LED lighting, photo booths, sound systems), venues must provide access to standard 110V electrical outlets within 50 feet of setup area. Extension cords and power distribution will be provided by our team when necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Venue Coordination */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Venue Coordination</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Client Responsibilities
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Clients must coordinate with venue management and ensure all necessary permissions are obtained:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Obtain written permission for rental equipment delivery and setup</li>
                  <li>Provide venue contact information and any special instructions</li>
                  <li>Communicate venue rules and restrictions to our team</li>
                  <li>Ensure venue staff are aware of delivery and pickup schedules</li>
                  <li>Provide access codes, keys, or security clearance as needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Venue Communication
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We require direct communication with venue coordinators at least 48 hours before delivery. This includes confirming delivery times, access procedures, and any last-minute venue restrictions. Failure to coordinate may result in delivery delays or additional fees.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Venue Restrictions & Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All venue-specific rules and restrictions must be communicated to our team in advance. This includes noise restrictions, setup time limitations, decoration policies, and any prohibited items. We will work within venue guidelines but cannot guarantee service if restrictions prevent safe equipment delivery or setup.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery & Setup Policies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Delivery & Setup Policies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Setup Time Requirements</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-3">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                    <p className="text-yellow-800 font-medium">Minimum 4-hour setup window required</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our team requires a minimum 4-hour window for delivery, setup, and final arrangements. This ensures proper installation and allows time for any necessary adjustments. Rush setups may be available for an additional fee but cannot be guaranteed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Schedule Coordination</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Standard Delivery Windows</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Morning: 8:00 AM - 12:00 PM</li>
                      <li>Afternoon: 1:00 PM - 5:00 PM</li>
                      <li>Evening: 6:00 PM - 10:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Special Arrangements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Early morning delivery (before 8 AM)</li>
                      <li>Late evening delivery (after 10 PM)</li>
                      <li>Weekend and holiday delivery</li>
                      <li>Same-day delivery (subject to availability)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pickup Procedures</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipment pickup is typically scheduled within 24 hours after your event ends. Venues must remain accessible for pickup, and all rental items must be ready for collection (clean and in the same condition as delivered). Extended pickup arrangements can be made for an additional daily rental fee.
                </p>
              </div>
            </div>
          </div>

          {/* Special Venue Types */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Special Venue Types</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outdoor Venues</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Outdoor events require additional considerations and may incur supplementary fees:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Weather protection plan required (tents, covered areas)</li>
                  <li>Stable, level ground for equipment placement</li>
                  <li>Access to power source within 100 feet</li>
                  <li>Backup indoor location in case of severe weather</li>
                  <li>Additional setup time for outdoor installations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Private Residences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Home-based events have specific requirements to protect both property and equipment. This includes adequate space for delivery vehicles, protection of flooring and landscaping, and clear pathways through the home. Additional insurance may be required for high-value equipment in residential settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Venues</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hotels, banquet halls, and event centers often have specific vendor requirements including insurance certificates, delivery scheduling, and setup protocols. We maintain relationships with many local venues and can provide necessary documentation and coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Fees & Charges */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Additional Fees & Charges</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Venue-Related Surcharges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Difficult access venues</span>
                    <span className="text-purple-600 font-semibold">$75 - $150</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Stairs/elevator required (per floor)</span>
                    <span className="text-purple-600 font-semibold">$50</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Extended distance from parking</span>
                    <span className="text-purple-600 font-semibold">$25 - $100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">Rush delivery/setup</span>
                    <span className="text-purple-600 font-semibold">25% surcharge</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-900 font-medium">Outdoor venue setup</span>
                    <span className="text-purple-600 font-semibold">$100 - $200</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Venue Damage Policy</h3>
                <p className="text-gray-600 leading-relaxed">
                  While we take every precaution to protect venue property, clients are responsible for any damage to venue facilities caused during delivery, setup, or pickup. This includes damage to floors, walls, landscaping, or other venue property. We carry liability insurance but clients should verify coverage with their venue.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Venue Questions or Concerns?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our team can help assess your venue and ensure successful delivery and setup.
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
