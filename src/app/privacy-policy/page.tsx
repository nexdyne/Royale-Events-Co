"use client";

import React from 'react';
import { Crown, Lock, ArrowLeft, Phone, Mail, Calendar, CheckCircle, AlertTriangle, Clock, Shield, Eye, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/policies"
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Terms & Policies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Privacy Policy
              </h1>
              <p className="text-lg opacity-90">
                Our commitment to protecting your personal information
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
          
          {/* Privacy Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy Commitment</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Royale Events & Co, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <Database className="h-6 w-6 text-red-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Data Protection</h3>
                <p className="text-sm text-gray-600">Secure storage and handling of your information</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <Eye className="h-6 w-6 text-red-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Transparency</h3>
                <p className="text-sm text-gray-600">Clear information about data usage</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <UserCheck className="h-6 w-6 text-red-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Your Rights</h3>
                <p className="text-sm text-gray-600">Control over your personal data</p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Personal Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We collect personal information that you provide directly to us when booking our services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and delivery addresses</li>
                  <li>Event details (date, location, guest count)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences and special requests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  When you visit our website or use our services, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and search terms used</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Third-Party Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We may receive information about you from third parties such as social media platforms (if you connect your accounts), venue partners, or other service providers involved in your event planning.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use your information primarily to provide our rental services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Processing and fulfilling your rental orders</li>
                  <li>Coordinating delivery, setup, and pickup schedules</li>
                  <li>Communicating about your event and any changes</li>
                  <li>Processing payments and managing billing</li>
                  <li>Providing customer support and assistance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Operations</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We also use your information for legitimate business purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Improving our services and website functionality</li>
                  <li>Analyzing usage patterns and customer preferences</li>
                  <li>Developing new products and services</li>
                  <li>Maintaining security and preventing fraud</li>
                  <li>Complying with legal obligations and regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Communications</h3>
                <p className="text-gray-600 leading-relaxed">
                  With your consent, we may use your information to send you promotional materials, event planning tips, and updates about our services. You can opt out of marketing communications at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing & Disclosure</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  <p className="text-yellow-800 font-medium">We do not sell your personal information to third parties</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may share your information with trusted third-party service providers who help us operate our business:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Payment processors for secure transaction handling</li>
                  <li>Delivery and logistics partners for equipment transport</li>
                  <li>Cloud storage providers for data backup and security</li>
                  <li>Email service providers for communication</li>
                  <li>Analytics providers for website improvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may disclose your information when required by law, such as in response to court orders, legal proceedings, or government requests. We may also share information to protect our rights, property, or safety, or that of our customers or others.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner as part of the business assets, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security & Protection</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We implement comprehensive security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technical Safeguards</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security updates and patches</li>
                      <li>Firewall and intrusion detection systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Administrative Safeguards</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Limited access to personal information</li>
                      <li>Employee training on data protection</li>
                      <li>Regular security audits and assessments</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Event-related information is typically retained for 7 years for business and tax purposes, while marketing information is kept until you opt out or request deletion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Breach Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the unlikely event of a data breach, we will promptly investigate, take corrective action, and notify affected individuals and relevant authorities as required by law.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Privacy Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Access your personal information</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Correct inaccurate information</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Request deletion of your data</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Opt out of marketing communications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Request data portability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Restrict processing of your data</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  To exercise any of these rights, please contact us at hello@royaleevents.com or call (555) 123-ROYAL. We will respond to your request within 30 days and may require verification of your identity to protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies & Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website. We use cookies for essential site functions, analytics, and improving user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Children's Privacy</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <p className="text-blue-800 font-medium">We do not knowingly collect information from children under 13</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Policy Updates</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                For significant changes that affect your rights, we will provide additional notice through email or other direct communication methods. Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h2>
            <p className="text-lg mb-6 opacity-90">
              We're committed to protecting your privacy. Contact us with any questions about this policy or how we handle your information.
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
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm opacity-90">
                <strong>Privacy Officer:</strong> For specific privacy concerns or data requests, you can also contact our Privacy Officer directly at privacy@royaleevents.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
