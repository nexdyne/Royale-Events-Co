"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Crown, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const categories = [
    'All Posts',
    'Event Planning Tips',
    'Throne Chair Styling',
    'Real Event Recaps',
    'Vendor Spotlights'
  ];

  const featuredArticle = {
    id: 1,
    title: "10 Essential Tips for Planning Your Dream Wedding",
    excerpt: "From venue selection to timeline management, discover the insider secrets that will make your wedding planning journey smooth and stress-free.",
    author: "Mercy Johnson",
    date: "2024-12-15",
    readTime: "10 min read",
    image: "/assets/images/weddings.jpg",
    tags: ["Wedding Planning", "Tips", "Throne"],
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Corporate Event Success: A Complete Guide",
      excerpt: "Learn how to plan and execute corporate events that engage attendees and achieve business objectives with strategic planning and attention to detail.",
      author: "David Williams",
      date: "2024-12-10",
      readTime: "8 min read",
      image: "/assets/images/ballroom.jpg",
      tags: ["Corporate Events"],
      category: "Event Planning Tips"
    },
    {
      id: 3,
      title: "Baby Shower Planning Made Easy",
      excerpt: "Create a memorable baby shower celebration that honors the mom-to-be with our comprehensive planning guide and royal styling tips.",
      author: "Mercy Johnson",
      date: "2024-12-08",
      readTime: "12 min read",
      image: "/assets/images/baby-shower.jpg",
      tags: ["Baby Shower"],
      category: "Event Planning Tips"
    },
    {
      id: 4,
      title: "Royal Throne Chair Styling for Weddings",
      excerpt: "Transform your wedding ceremony and reception into a truly royal affair with elegant throne chair styling and professional tips.",
      author: "David Williams",
      date: "2024-12-05",
      readTime: "15 min read",
      image: "/assets/images/royal-throne-chair.jpg",
      tags: ["Throne Chairs"],
      category: "Throne Chair Styling"
    },
    {
      id: 5,
      title: "Birthday Party Throne Chair Ideas",
      excerpt: "Make any birthday celebration feel truly special with royal throne chair styling that transforms the birthday star into the guest of honor.",
      author: "Mercy Johnson",
      date: "2024-12-03",
      readTime: "10 min read",
      image: "/assets/images/royal-throne-chair.jpg",
      tags: ["Birthday Party"],
      category: "Throne Chair Styling"
    },
    {
      id: 6,
      title: "Gold vs Silver: Choosing Your Throne Chair Finish",
      excerpt: "Expert guide to choosing between gold and silver throne chair finishes for your special event and venue considerations.",
      author: "David Williams",
      date: "2024-11-30",
      readTime: "7 min read",
      image: "/assets/images/royal-throne-chair.jpg",
      tags: ["Throne Chairs"],
      category: "Throne Chair Styling"
    },
    {
      id: 7,
      title: "The Smith Wedding: A Royal Affair in Detroit",
      excerpt: "Go behind the scenes of a stunning royal-themed wedding in Detroit featuring throne chairs and luxury furniture transformations.",
      author: "Mercy Johnson",
      date: "2024-11-28",
      readTime: "12 min read",
      image: "/assets/images/weddings.jpg",
      tags: ["Real Event Recaps"],
      category: "Real Event Recaps"
    },
    {
      id: 8,
      title: "Princess Ava's 5th Birthday Celebration",
      excerpt: "See how we created a magical princess party for 5-year-old Ava with throne chairs and royal decorations for an unforgettable celebration.",
      author: "David Williams",
      date: "2024-11-25",
      readTime: "10 min read",
      image: "/assets/images/dinner.jpg",
      tags: ["Birthday Party"],
      category: "Real Event Recaps"
    },
    {
      id: 9,
      title: "Corporate Gala: Ford Motor Company Annual Event",
      excerpt: "See how Royale Events & Co elevated Ford's corporate gala with throne chairs and luxury furniture for a sophisticated business event.",
      author: "Mercy Johnson",
      date: "2024-11-22",
      readTime: "14 min read",
      image: "/assets/images/ballroom.jpg",
      tags: ["Corporate Events"],
      category: "Real Event Recaps"
    },
    {
      id: 10,
      title: "Vendor Spotlight: Detroit's Premier Florists",
      excerpt: "Discover Detroit's top florists who create stunning arrangements that perfectly complement throne chairs and royal furniture.",
      author: "David Williams",
      date: "2024-11-20",
      readTime: "11 min read",
      image: "/assets/images/luxury-flower-wall.jpg",
      tags: ["Vendor Spotlights"],
      category: "Vendor Spotlights"
    },
    {
      id: 11,
      title: "Photography Partners: Capturing Royal Moments",
      excerpt: "Meet Detroit's top photographers who specialize in capturing throne chairs and royal furniture for stunning event photography.",
      author: "Mercy Johnson",
      date: "2024-11-18",
      readTime: "9 min read",
      image: "/assets/images/360-photo-booth.webp",
      tags: ["Vendor Spotlights"],
      category: "Vendor Spotlights"
    },
    {
      id: 12,
      title: "5 DIY Decorations That Complement Throne Chairs",
      excerpt: "Create stunning DIY decorations that complement throne chairs perfectly with budget-friendly projects for royal-themed events.",
      author: "David Williams",
      date: "2024-11-15",
      readTime: "13 min read",
      image: "/assets/images/luxury-flower-wall.jpg",
      tags: ["DIY"],
      category: "Event Planning Tips"
    },
    {
      id: 13,
      title: "DIY Photo Booth Props for Royal Events",
      excerpt: "Create stunning DIY photo booth props for royal events with throne chairs including crowns, scepters, and royal decorations.",
      author: "Mercy Johnson",
      date: "2024-11-12",
      readTime: "10 min read",
      image: "/assets/images/360-photo-booth.webp",
      tags: ["DIY"],
      category: "Event Planning Tips"
    },
    {
      id: 14,
      title: "Budget-Friendly Centerpieces for Royal Tables",
      excerpt: "Create stunning budget-friendly centerpieces that complement throne chairs perfectly with elegant designs for royal events.",
      author: "David Williams",
      date: "2024-11-10",
      readTime: "12 min read",
      image: "/assets/images/60-inch-table.webp",
      tags: ["DIY"],
      category: "Event Planning Tips"
    }
  ];

  const recentPosts = blogPosts.slice(0, 5);

  const popularTags = [
    "Wedding Planning",
    "Throne Chairs",
    "Corporate Events",
    "Birthday Party",
    "DIY",
    "Tips"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Crown className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Blog & Resources</h1>
          </div>
          <h2 className="text-xl mb-8 opacity-90">
            Your Ultimate Guide to Royal Event Planning, Styling Tips, and Industry Insights
          </h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-[#FF6B35] shadow-lg'
                    : 'text-white border border-white hover:bg-white hover:text-[#FF6B35]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <div className="mb-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Article
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${featuredArticle.id}`}
                      className="inline-flex items-center space-x-2 bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#FF8C42] transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#FF6B35] font-medium hover:text-[#FF8C42] transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-lg hover:bg-[#FF8C42] transition-colors font-semibold">
                    Load More Articles
                  </button>
                </div>
              )}

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <Crown className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stay Updated */}
              <div className="bg-[#FF6B35] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="mb-4 opacity-90">
                  Get the latest royal event planning tips and exclusive offers delivered to your inbox.
                </p>
                <button className="w-full bg-white text-[#FF6B35] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#FF6B35] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Need Help Planning? */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Planning?</h3>
                <p className="text-gray-600 mb-4">
                  Our expert team is here to help you create the perfect royal celebration.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#FF8C42] transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-ROYAL</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border border-[#FF6B35] text-[#FF6B35] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Get Free Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Royal Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our expert team to create an unforgettable celebration that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#FF6B35] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (555) 123-ROYAL</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Get Your Free Quote</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
