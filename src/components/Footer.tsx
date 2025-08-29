import React from 'react';
import { Crown, MessageCircle, HelpCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Royale Events & Co</h4>
                <p className="text-sm text-gray-400">Royal Event Rentals</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Premium event rentals and studio services in the Greater Detroit Metropolitan Area. 
              Making every event royal since 2020.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Greater Detroit Metropolitan Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-ROYAL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@royaleevents.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <div className="space-y-2 text-sm">
              <Link href="/packages" className="text-gray-400 hover:text-white transition-colors block">
                Packages
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors block">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors block">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors block">
                Blog & Resources
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <div className="space-y-2 text-sm">
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors block flex items-center">
                <HelpCircle className="h-4 w-4 mr-1" />
                FAQ
              </Link>
              <Link href="/rental-terms" className="text-gray-400 hover:text-white transition-colors block">
                Rental Terms
              </Link>
              <Link href="/studio-usage" className="text-gray-400 hover:text-white transition-colors block">
                Studio Usage
              </Link>
              <Link href="/venue-policies" className="text-gray-400 hover:text-white transition-colors block">
                Venue Policies
              </Link>
              <Link href="/refund-cancellation" className="text-gray-400 hover:text-white transition-colors block">
                Refund Policy
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors block">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                Live Chat
              </Link>
              <a href="tel:5551237692" className="text-gray-400 hover:text-white transition-colors block flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                Emergency Line
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Royale Events & Co. All rights reserved. Making Every Event Royal.</p>
        </div>
      </div>
    </footer>
  );
}
