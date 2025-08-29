"use client";

import React from 'react';
import { Crown, RefreshCw, ArrowLeft, Phone, Mail, Calendar, CheckCircle, AlertTriangle, Clock, DollarSign, XCircle, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundCancellation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/policies"
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Terms & Policies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <RefreshCw className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Refund & Cancellation Policy
              </h1>
              <p className="text-lg opacity-90">
                Clear guidelines for refunds, cancellations, and modifications
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
          
          {/* Policy Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg mr-3">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Policy Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that event planning can be unpredictable. Our refund and cancellation policy is designed to be fair to both our clients and our business, while providing clear guidelines for various scenarios that may arise.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <RotateCcw className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Flexible Options</h3>
                <p className="text-sm text-gray-600">Multiple refund tiers based on timing</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Clock className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Clear Timelines</h3>
                <p className="text-sm text-gray-600">Transparent deadlines and processes</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Fair Processing</h3>
                <p className="text-sm text-gray-600">Quick and transparent refund handling</p>
              </div>
            </div>
          </div>

          {/* Cancellation Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Cancellation Timeline & Refunds</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-medium">Refund amounts are calculated from the original event date</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">30+ Days Before Event</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Full Refund Available
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Cancellations made 30 or more days before your event date are eligible for a full refund minus a $50 processing fee.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Refund Amount:</strong> 100% of deposit and payments minus $50 processing fee<br/>
                      <strong>Processing Time:</strong> 5-7 business days
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">15-29 Days Before Event</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      50% Refund
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Cancellations made 15-29 days before your event date are eligible for a 50% refund of all payments made.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Refund Amount:</strong> 50% of total payments made<br/>
                      <strong>Processing Time:</strong> 7-10 business days
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">7-14 Days Before Event</h3>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      25% Refund
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Cancellations made 7-14 days before your event date are eligible for a 25% refund of all payments made.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Refund Amount:</strong> 25% of total payments made<br/>
                      <strong>Processing Time:</strong> 7-10 business days
                    </p>
                  </div>
                </div>

                <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Less Than 7 Days Before Event</h3>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      No Refund
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Cancellations made less than 7 days before your event date are not eligible for refunds due to committed resources and lost opportunity costs.
                  </p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="text-sm text-gray-700">
                      <strong>Refund Amount:</strong> No refund available<br/>
                      <strong>Alternative:</strong> Credit toward future booking (expires in 12 months)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modification Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Event Modification Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Date Changes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Event date changes are subject to availability and may incur additional fees:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Date changes 30+ days before original event: No additional fee</li>
                  <li>Date changes 15-29 days before: $100 modification fee</li>
                  <li>Date changes 7-14 days before: $200 modification fee</li>
                  <li>Date changes less than 7 days: Subject to availability, $300 fee</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Package Modifications
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Adding items to your rental package can be done up to 7 days before your event, subject to availability. Removing items follows the same refund schedule as cancellations. Modifications that result in a lower total may be subject to the cancellation policy for the reduced amount.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Venue Changes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Venue changes may affect delivery fees and setup requirements. New venue must be assessed for accessibility and requirements. Additional fees may apply for venue changes made less than 14 days before the event.
                </p>
              </div>
            </div>
          </div>

          {/* Special Circumstances */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Special Circumstances</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Weather-Related Cancellations
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  For outdoor events affected by severe weather conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>National Weather Service warnings for your area qualify for full refund</li>
                  <li>Light rain or minor weather does not qualify for weather cancellation</li>
                  <li>Indoor backup plans are encouraged and may affect weather policy</li>
                  <li>Weather cancellations must be made at least 4 hours before delivery</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Medical Emergencies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cancellations due to serious medical emergencies (hospitalization of client or immediate family) may be eligible for special consideration. Documentation may be required, and each case will be reviewed individually for possible full or partial refund outside normal policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Force Majeure Events
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Events beyond our control (natural disasters, government restrictions, venue closures) that prevent service delivery will result in full refunds or rescheduling options at no additional cost. This includes pandemic-related restrictions or mandatory venue closures.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Refund Process</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Request a Refund</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>Contact us immediately by phone at (555) 123-ROYAL or email hello@royaleevents.com</li>
                    <li>Provide your booking confirmation number and event details</li>
                    <li>Specify the reason for cancellation or modification</li>
                    <li>Submit any required documentation (for special circumstances)</li>
                    <li>Receive written confirmation of your refund amount and timeline</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Processing</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Payment Method</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Credit card: 5-7 business days</li>
                      <li>Bank transfer: 7-10 business days</li>
                      <li>Check: 10-14 business days</li>
                      <li>Cash: Immediate upon request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Required Information</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Original booking confirmation</li>
                      <li>Photo ID verification</li>
                      <li>Original payment method details</li>
                      <li>Signed cancellation form</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Confirmation</h3>
                <p className="text-gray-600 leading-relaxed">
                  All refunds will be confirmed in writing with the exact amount and expected processing time. You will receive email confirmation when the refund has been processed and when you should expect to see the credit in your account.
                </p>
              </div>
            </div>
          </div>

          {/* No-Show Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. No-Show Policy</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-red-800 font-medium">No-shows result in forfeiture of all payments</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                If our team arrives for delivery and setup but cannot access the venue or contact the client, this constitutes a "no-show." No-shows result in forfeiture of all payments made, as our team and equipment have been committed to your event.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">To Avoid No-Show Status:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Ensure venue access is available during scheduled delivery window</li>
                  <li>Provide accurate contact information and be reachable by phone</li>
                  <li>Communicate any last-minute changes immediately</li>
                  <li>Confirm delivery details 24-48 hours before your event</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Need to Cancel or Modify Your Booking?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us immediately to discuss your options and ensure the best possible outcome.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Call Us Immediately</p>
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
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm opacity-90">
                <strong>Emergency Contact:</strong> For same-day cancellations or urgent matters, call our emergency line at (555) 123-ROYAL and press 1 for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
