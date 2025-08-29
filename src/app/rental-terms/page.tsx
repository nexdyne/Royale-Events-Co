"use client";

import React from 'react';
import { FileText, ArrowLeft, Phone, Mail, Calendar, CheckCircle, AlertTriangle, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RentalTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/policies"
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Terms & Policies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Rental Terms & Conditions
              </h1>
              <p className="text-lg opacity-90">
                Complete terms and conditions for all rental services
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
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Agreement Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              These Rental Terms and Conditions ("Agreement") govern the rental of equipment and services provided by Royale Events & Co ("Company," "we," "us," or "our") to you ("Client," "you," or "your"). By booking our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>

          {/* Rental Agreement Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Rental Agreement Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Booking Confirmation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All rentals require a signed rental agreement and payment of a 50% deposit to confirm your booking. The remaining balance is due 7 days prior to your event date. Bookings are not confirmed until both the signed agreement and deposit are received.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Rental Period
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Standard rental periods are 24 hours unless otherwise specified. Delivery typically occurs 2-4 hours before your event start time, and pickup is scheduled within 24 hours after your event ends. Extended rental periods may be available for an additional fee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Delivery & Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide delivery, setup, and pickup services within our service area. Setup includes basic arrangement of rental items as discussed during consultation. Complex arrangements or specific styling requests may incur additional fees. Client must provide clear access to the event location.
                </p>
              </div>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Client Responsibilities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Care of Rental Items
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Client is responsible for the proper care and use of all rental items during the rental period. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Using items only for their intended purpose</li>
                  <li>Protecting items from damage, theft, or loss</li>
                  <li>Keeping items clean and in good condition</li>
                  <li>Not allowing smoking near fabric items</li>
                  <li>Supervising children around rental equipment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Venue Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Client must ensure the venue is suitable for the rental items and that all necessary permissions are obtained. This includes adequate space, proper flooring, electrical access (if required), and compliance with venue policies. Any venue restrictions must be communicated to us prior to delivery.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Access & Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Client must provide safe and secure access to the event location for delivery, setup, and pickup. This includes ensuring pathways are clear, providing necessary keys or access codes, and being available during scheduled delivery and pickup times.
                </p>
              </div>
            </div>
          </div>

          {/* Damage & Loss Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Damage & Loss Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Normal Wear vs. Damage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Normal wear and tear is expected and included in rental fees. However, client is responsible for any damage beyond normal use, including but not limited to: stains, tears, burns, structural damage, or missing components. We will assess damage charges based on repair or replacement costs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Replacement Costs</h3>
                <p className="text-gray-600 leading-relaxed">
                  In case of loss or irreparable damage, client will be charged the full replacement cost of the item. Replacement costs are based on current market prices for equivalent items. We will provide detailed invoices for all damage or replacement charges.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Schedule</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>50% deposit required to confirm booking</li>
                  <li>Remaining balance due 7 days before event date</li>
                  <li>Late payment fees may apply for overdue balances</li>
                  <li>Additional charges (damage, extra time, etc.) due within 30 days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accepted Payment Methods</h3>
                <p className="text-gray-600 leading-relaxed">
                  We accept cash, check, credit cards (Visa, MasterCard, American Express), and bank transfers. A 3% processing fee applies to credit card payments. Checks should be made payable to "Royale Events & Co."
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cancellation Policy</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                <p className="text-yellow-800 font-medium">Cancellation fees apply based on timing</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-900 font-medium">30+ days before event</span>
                <span className="text-green-600 font-semibold">Full refund minus $50 processing fee</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-900 font-medium">15-29 days before event</span>
                <span className="text-yellow-600 font-semibold">50% refund</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-900 font-medium">7-14 days before event</span>
                <span className="text-orange-600 font-semibold">25% refund</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-900 font-medium">Less than 7 days</span>
                <span className="text-red-600 font-semibold">No refund</span>
              </div>
            </div>
          </div>

          {/* Liability & Insurance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Liability & Insurance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Royale Events & Co maintains comprehensive general liability insurance. However, our liability is limited to the rental value of the equipment. We are not responsible for indirect, consequential, or incidental damages arising from the use of rental items.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Client assumes full responsibility for the safety of guests and proper use of rental items. Client agrees to indemnify and hold harmless Royale Events & Co from any claims, damages, or injuries arising from the use of rental equipment during the rental period.
                </p>
              </div>
            </div>
          </div>

          {/* Force Majeure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Force Majeure</h2>
            <p className="text-gray-600 leading-relaxed">
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to: acts of God, natural disasters, government regulations, labor disputes, or other unforeseeable events. In such cases, we will work with clients to reschedule or provide alternative solutions when possible.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to clarify any terms or answer your questions about our rental policies.
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
