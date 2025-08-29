"use client";

import { useState } from 'react';
import { 
  Crown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0); // Start with first FAQ open

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak with our royal team",
      info: "(555) 123-ROYAL",
      detail: "Available 7 days a week",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Get a detailed response",
      info: "hello@royaleevents.com",
      detail: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      subtitle: "Instant assistance",
      info: "Chat with our team",
      detail: "Available during business hours",
      action: "Start Chat"
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      subtitle: "Free planning session",
      info: "30-minute consultation",
      detail: "Personalized event planning",
      action: "Schedule Now"
    }
  ];

  const businessHours = [
    { day: "Monday", time: "9:00 AM - 7:00 PM", isToday: false },
    { day: "Tuesday", time: "9:00 AM - 7:00 PM", isToday: false },
    { day: "Wednesday", time: "9:00 AM - 7:00 PM", isToday: true },
    { day: "Thursday", time: "9:00 AM - 7:00 PM", isToday: false },
    { day: "Friday", time: "9:00 AM - 8:00 PM", isToday: false },
    { day: "Saturday", time: "10:00 AM - 6:00 PM", isToday: false },
    { day: "Sunday", time: "12:00 PM - 5:00 PM", isToday: false }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my event?",
      answer: "We recommend booking at least 4-6 weeks in advance for optimal availability. However, we can often accommodate last-minute requests depending on our inventory and schedule."
    },
    {
      question: "Do you deliver and set up the rental items?",
      answer: "Yes! We provide full delivery, setup, and pickup services. Our professional team ensures everything is perfectly arranged according to your specifications."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. Cancellations made 14+ days before your event receive a full refund. Cancellations within 7-14 days receive a 50% refund. Please contact us to discuss your specific situation."
    },
    {
      question: "Can I see the items before my event?",
      answer: "Absolutely! We encourage clients to visit our showroom to see our royal furniture and décor items in person. Schedule an appointment to ensure we have everything available for viewing."
    },
    {
      question: "Do you offer package discounts?",
      answer: "Yes! We offer several curated packages with significant savings. Additionally, orders over $1,000 automatically receive a 10% discount. Contact us for custom package pricing."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the greater Detroit metropolitan area, including Birmingham, Troy, Bloomfield Hills, Royal Oak, and surrounding communities. Contact us to confirm service in your area."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to Make Your Event Royal? Let's Start Planning Your Perfect Celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that works best for you to start planning your royal event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.subtitle}</p>
                  <p className="text-lg font-semibold text-[#FF6B35] mb-2">{method.info}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.detail}</p>
                  <button className="w-full bg-gray-100 text-[#1A365D] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div>
                <h3 className="text-3xl font-bold text-[#1A365D] mb-6">Send Us a Message</h3>
                <p className="text-gray-600 mb-8">
                  Tell us about your event and we'll create a custom quote just for you
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                        required
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="baby-shower">Baby Shower</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Guest Count</label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      >
                        <option value="">Select guest count</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-200">101-200 guests</option>
                        <option value="200+">200+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Event</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Describe your vision, specific items you're interested in, or any questions you have..."
                      rows={5}
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#1A365D] mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-[#FF6B35] mr-3" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((day, index) => (
                    <div key={index} className={`flex justify-between items-center py-2 px-3 rounded-lg ${day.isToday ? 'bg-orange-50 border border-orange-200' : ''}`}>
                      <span className="font-medium text-gray-900">{day.day}</span>
                      <span className="text-gray-600">{day.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-center text-red-800">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Event Day Emergency
                </h3>
                <p className="mb-4 text-red-700">
                  Need immediate assistance on your event day?
                </p>
                <a href="tel:555-123-7692" className="text-2xl font-bold text-[#FF6B35] flex items-center justify-center space-x-2 hover:text-[#FF8C42] transition-colors">
                  <Phone className="h-6 w-6" />
                  <span>(555) 123-7692</span>
                </a>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#1A365D] mb-6">Why Choose Royale Events?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">24-hour response guarantee</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Free consultation and planning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional delivery and setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pristine, well-maintained equipment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our royal event services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-[#1A365D]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#FF6B35] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Social */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-[#1A365D] mb-6 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#FF6B35] mr-3" />
                Service Area
              </h3>
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-[#FF6B35]" />
                <h4 className="text-xl font-semibold mb-2">Greater Detroit Metropolitan Area</h4>
                <p className="text-gray-600 mb-4">
                  We proudly serve Detroit, Birmingham, Troy, Bloomfield Hills, Royal Oak, and surrounding communities
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Service Radius:</strong> 30 miles from downtown Detroit</p>
                  <p><strong>Delivery:</strong> Free within 15 miles, nominal fee beyond</p>
                </div>
              </div>
            </div>

            {/* Social Media & Reviews */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#1A365D] mb-6">Follow Our Royal Journey</h3>
                <p className="text-gray-600 mb-6">
                  See our latest events and get inspiration for your celebration
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-[#1A365D] rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1A365D] rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1A365D] rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1A365D] rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-[#1A365D] mb-6">Client Reviews</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600">5.0 out of 5 stars</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#FF6B35]">150+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FF6B35]">300+</div>
                      <div className="text-sm text-gray-600">Events Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FF6B35]">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait to make your event royal. Contact us today and let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(555) 123-ROYAL</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
