"use client";

import { 
  Crown, 
  Heart, 
  Shield, 
  Users, 
  Sparkles, 
  Settings, 
  Target, 
  CheckCircle, 
  Clock, 
  ThumbsUp, 
  Zap, 
  Tag, 
  Award, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Excellence in Every Detail",
      description: "We believe that every celebration deserves perfection. From the smallest detail to the grandest gesture, we ensure everything meets our royal standards."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Built on honesty and transparency, we deliver exactly what we promise. Your trust is the foundation of every relationship we build."
    },
    {
      icon: Users,
      title: "Family-Centered Service",
      description: "Every client is treated like family. We understand that your celebration is personal, and we honor that with care and respect."
    },
    {
      icon: Sparkles,
      title: "Innovation & Creativity",
      description: "We continuously evolve our offerings and approach, bringing fresh, new, and creative solutions to make your event truly unique."
    },
    {
      icon: Settings,
      title: "Quality Without Compromise",
      description: "We never cut corners. Every item in our inventory is meticulously maintained and every service is delivered with pride."
    },
    {
      icon: Target,
      title: "Client-First Approach",
      description: "Your vision drives everything we do. We listen, understand, and execute with your satisfaction as our ultimate goal."
    }
  ];

  const teamMembers = [
    {
      icon: Crown,
      title: "Founders",
      subtitle: "Visionaries & Leaders",
      description: "Driven by a passion for excellence and a commitment to transforming the event rental industry. Our founders bring years of experience in hospitality and customer service, ensuring every client receives the royal treatment they deserve."
    },
    {
      icon: Users,
      title: "Our Team",
      subtitle: "Dedicated Professionals",
      description: "From our customer service specialists to our delivery and setup crew, every team member shares our commitment to excellence. We're not just colleagues - we're a family united by the mission to make your celebrations unforgettable."
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Pristine Equipment",
      description: "Every item is thoroughly cleaned, inspected, and maintained to royal standards before delivery."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time delivery, professional setup, and responsive customer support throughout your event."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our service with a commitment to exceed your expectations every time."
    },
    {
      icon: Zap,
      title: "Stress-Free Experience",
      description: "From planning to cleanup, we handle the details so you can focus on enjoying your celebration."
    },
    {
      icon: Tag,
      title: "Competitive Pricing",
      description: "Royal quality doesn't mean royal prices. We offer exceptional value for premium service."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Hundreds of successful events and countless satisfied families trust us with their special moments."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Our Team",
      info: "(555) 123-ROYAL",
      detail: "Available 7 days a week"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@royaleevents.com",
      detail: "Response within 24 hours"
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      info: "Free planning session",
      detail: "30-minute consultation"
    }
  ];

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
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Born from Disappointment, Built to Elevate Every Celebration
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="h-6 w-6 text-[#FF6B35]" />
              <h2 className="text-4xl font-bold text-[#1A365D]">Our Story</h2>
            </div>
            <p className="text-xl text-gray-600">
              The journey that led us to create something extraordinary
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We've all been there - excited for a celebration, only to be disappointed by worn-out rental items, careless setups, and a complete lack of customer care. It's frustrating, it's disappointing, and frankly, it's unacceptable.
            </p>
            
            <p className="font-semibold text-[#1A365D]">
              Then came the final spark.
            </p>
            
            <p>
              While helping my cousin plan her daughter's birthday celebration, we encountered the same old problems: dirty, damaged chairs and tables, poor service, and no sense of pride in the work being done. That moment made it clear - something had to change.
            </p>

            <div className="bg-orange-50 border-l-4 border-[#FF6B35] p-6 my-8">
              <p className="font-semibold text-[#1A365D] mb-2">
                From that experience, a vision was born:
              </p>
              <p className="text-gray-700">
                To create a company that elevates every event - delivering beautiful, well-maintained rentals and extraordinary service that makes every guest feel special.
              </p>
            </div>

            <p>
              Royale Events & Co. was founded on that mission - to treat every family, every client, and every celebration with the care, elegance, and excellence it deserves.
            </p>

            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-[#1A365D] mb-4">
                "Because we believe every event should feel royal."
              </p>
              <div className="text-gray-600">
                <p className="font-semibold">With love and dedication,</p>
                <p className="text-xl font-bold text-[#1A365D]">Mercy & David</p>
                <p className="text-sm">Founders, Royale Events & Co</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">Mission & Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and the standards we uphold in every interaction
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#FF6B35] w-12 h-12 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A365D]">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To transform every celebration into a royal experience by providing impeccable rental services, pristine equipment, and extraordinary customer care that exceeds expectations and creates unforgettable memories for families and their guests.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#FF6B35] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals dedicated to making your events extraordinary
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#FF6B35] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A365D] mb-2">{member.title}</h3>
                  <p className="text-lg text-[#FF6B35] font-semibold mb-4">{member.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Royale Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">Why Choose Royale Events & Co?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart and why families trust us with their most important celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#FF6B35] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Experience Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Royal Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of families who have trusted us to make their celebrations extraordinary. Let us bring the royal touch to your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </button>
            <button className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Us Today</span>
            </button>
            <button className="bg-white text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <ArrowRight className="h-5 w-5" />
              <span>Get Custom Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Let's Create Something Royal Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-6">
              Let's Create Something Royal Together
            </h2>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-[#FF6B35] mb-1">{method.info}</p>
                  <p className="text-gray-600">{method.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FF8C42] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Royal Experience</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Our Portfolio</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
