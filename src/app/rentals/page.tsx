"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Crown, 
  Camera, 
  Sparkles, 
  Users, 
  Check, 
  ArrowRight,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  weekendPrice: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
  specs: string;
}

interface Subcategory {
  name: string;
  products: Product[];
}

interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategories: { [key: string]: Subcategory };
}

export default function RentalsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('chairs');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('throne-chairs');

  const categories: { [key: string]: Category } = {
    chairs: {
      name: 'Chairs',
      icon: Crown,
      subcategories: {
        'throne-chairs': {
          name: 'Throne Chairs',
          products: [
            {
              id: 1,
              name: 'Royal Genesis Throne Chair',
              tagline: 'The Crown Jewel of Event Seating',
              price: 150,
              weekendPrice: 200,
              image: 'throne-gold',
              badge: 'Most Popular',
              badgeColor: 'bg-orange-500',
              features: [
                'Premium velvet upholstery',
                'Gold ornate detailing',
                'Professional setup included',
                'Perfect for weddings & baby showers',
                'Complimentary cleaning'
              ],
              specs: 'Dimensions: 48"H x 32"W x 30"D'
            },
            {
              id: 2,
              name: 'Royal Majesty Throne Chair',
              tagline: 'Elegance Meets Comfort',
              price: 175,
              weekendPrice: 225,
              image: 'throne-silver',
              badge: 'Premium',
              badgeColor: 'bg-purple-500',
              features: [
                'Luxury leather upholstery',
                'Silver & crystal accents',
                'LED lighting options',
                'Custom color matching available',
                'White glove delivery'
              ],
              specs: 'Dimensions: 50"H x 34"W x 32"D'
            },
            {
              id: 3,
              name: 'Royal Princess Throne Chair',
              tagline: 'Perfect for Little Royalty',
              price: 125,
              weekendPrice: 150,
              image: 'throne-pink',
              badge: 'Kids Favorite',
              badgeColor: 'bg-pink-500',
              features: [
                'Child-safe materials',
                'Pink & gold design',
                'Perfect height for photos',
                'Matching footstool included',
                'Easy to clean fabric'
              ],
              specs: 'Dimensions: 36"H x 24"W x 22"D'
            }
          ]
        },
        'event-chairs': {
          name: 'Event Chairs',
          products: [
            {
              id: 4,
              name: 'Elegant Chiavari Chair',
              tagline: 'Classic Wedding Elegance',
              price: 8,
              weekendPrice: 12,
              image: 'chiavari-gold',
              badge: 'Wedding Favorite',
              badgeColor: 'bg-green-500',
              features: [
                'Available in gold, silver, white',
                'Comfortable cushioned seat',
                'Stackable for easy transport',
                'Complimentary cushion',
                'Bulk pricing available'
              ],
              specs: 'Weight capacity: 300lbs'
            },
            {
              id: 5,
              name: 'Modern Ghost Chair',
              tagline: 'Contemporary Sophistication',
              price: 12,
              weekendPrice: 16,
              image: 'ghost-clear',
              badge: 'Trending',
              badgeColor: 'bg-blue-500',
              features: [
                'Crystal clear acrylic',
                'Modern minimalist design',
                'Indoor/outdoor use',
                'Scratch resistant',
                'Pairs with any decor'
              ],
              specs: 'Weight capacity: 250lbs'
            }
          ]
        },
        'kids-chairs': {
          name: 'Kids Chairs',
          products: [
            {
              id: 6,
              name: 'Mini Royal Throne',
              tagline: 'Little Prince & Princess Seating',
              price: 75,
              weekendPrice: 100,
              image: 'mini-throne',
              badge: 'Adorable',
              badgeColor: 'bg-yellow-500',
              features: [
                'Perfect for ages 2-8',
                'Safety tested materials',
                'Multiple color options',
                'Photo-ready design',
                'Easy assembly'
              ],
              specs: 'Dimensions: 24"H x 18"W x 16"D'
            }
          ]
        }
      }
    },
    tables: {
      name: 'Tables',
      icon: Users,
      subcategories: {
        'round-tables': {
          name: 'Round Tables',
          products: [
            {
              id: 7,
              name: '60" Round Table',
              tagline: 'Perfect for 8-10 Guests',
              price: 25,
              weekendPrice: 35,
              image: 'round-table',
              badge: 'Most Requested',
              badgeColor: 'bg-green-500',
              features: [
                'Seats 8-10 guests comfortably',
                'White or natural wood finish',
                'Sturdy metal legs',
                'Linens available separately',
                'Easy setup'
              ],
              specs: 'Diameter: 60", Height: 30"'
            },
            {
              id: 8,
              name: '72" Round Table',
              tagline: 'Spacious Dining for Large Groups',
              price: 35,
              weekendPrice: 45,
              image: 'large-round-table',
              badge: 'Family Style',
              badgeColor: 'bg-blue-500',
              features: [
                'Seats 10-12 guests',
                'Premium wood construction',
                'Elegant pedestal base',
                'Perfect for family style dining',
                'Professional grade'
              ],
              specs: 'Diameter: 72", Height: 30"'
            }
          ]
        },
        'rectangular-tables': {
          name: 'Rectangular Tables',
          products: [
            {
              id: 9,
              name: '8ft Banquet Table',
              tagline: 'Classic Event Table',
              price: 20,
              weekendPrice: 28,
              image: 'banquet-table',
              badge: 'Versatile',
              badgeColor: 'bg-gray-500',
              features: [
                'Seats 8-10 guests',
                'Foldable for easy transport',
                'Durable plastic top',
                'Metal frame construction',
                'Standard event height'
              ],
              specs: '96"L x 30"W x 30"H'
            }
          ]
        },
        'cocktail-tables': {
          name: 'Cocktail Tables',
          products: [
            {
              id: 10,
              name: 'High Top Cocktail Table',
              tagline: 'Perfect for Mingling',
              price: 18,
              weekendPrice: 25,
              image: 'cocktail-table',
              badge: 'Party Essential',
              badgeColor: 'bg-orange-500',
              features: [
                'Bar height design',
                'Accommodates 4-6 standing',
                'Elegant pedestal base',
                'Indoor/outdoor use',
                'Cocktail linens available'
              ],
              specs: 'Diameter: 30", Height: 42"'
            }
          ]
        }
      }
    },
    photobooths: {
      name: 'Photo Booths',
      icon: Camera,
      subcategories: {
        '360-booth': {
          name: '360° Photo Booth',
          products: [
            {
              id: 11,
              name: '360° Royal Experience Booth',
              tagline: 'Capture Every Angle of the Celebration',
              price: 400,
              weekendPrice: 500,
              image: '360-booth',
              badge: 'Trending',
              badgeColor: 'bg-blue-500',
              features: [
                'Professional operator included',
                'Instant social media sharing',
                'Custom branding available',
                'HD video quality',
                '4-hour minimum rental',
                'Props and backdrop included'
              ],
              specs: 'Platform: 4ft diameter, Setup space: 8x8ft'
            }
          ]
        },
        'mirror-booth': {
          name: 'Mirror Photo Booth',
          products: [
            {
              id: 12,
              name: 'Magic Mirror Booth',
              tagline: 'Interactive Photo Experience',
              price: 350,
              weekendPrice: 450,
              image: 'mirror-booth',
              badge: 'Interactive',
              badgeColor: 'bg-purple-500',
              features: [
                'Touch screen interface',
                'Voice guided experience',
                'Instant prints included',
                'Custom animations',
                'Social media integration',
                'Professional attendant'
              ],
              specs: 'Mirror: 55" touchscreen, Setup: 6x6ft'
            }
          ]
        },
        'classic-booth': {
          name: 'Classic Photo Booth',
          products: [
            {
              id: 13,
              name: 'Vintage Style Photo Booth',
              tagline: 'Timeless Photo Fun',
              price: 300,
              weekendPrice: 400,
              image: 'classic-booth',
              badge: 'Classic',
              badgeColor: 'bg-green-500',
              features: [
                'Retro curtain design',
                'Instant strip prints',
                'Large prop collection',
                'Custom backdrop options',
                'Guest book creation',
                'Unlimited sessions'
              ],
              specs: 'Booth: 4x4ft, Setup space: 8x8ft'
            }
          ]
        }
      }
    },
    decor: {
      name: 'Décor & Ambience',
      icon: Sparkles,
      subcategories: {
        'flower-walls': {
          name: 'Flower Walls',
          products: [
            {
              id: 14,
              name: 'Luxury Flower Wall',
              tagline: 'Stunning Floral Backdrop',
              price: 250,
              weekendPrice: 325,
              image: 'flower-wall',
              badge: 'Instagram Ready',
              badgeColor: 'bg-pink-500',
              features: [
                'Custom color combinations',
                'Premium artificial flowers',
                'Professional installation',
                'Perfect for photos',
                '8ft x 8ft standard size',
                'Weather resistant'
              ],
              specs: 'Standard: 8x8ft, Custom sizes available'
            },
            {
              id: 15,
              name: 'Rose Gold Flower Wall',
              tagline: 'Elegant Metallic Accent',
              price: 300,
              weekendPrice: 375,
              image: 'rose-gold-wall',
              badge: 'Luxury',
              badgeColor: 'bg-orange-500',
              features: [
                'Rose gold metallic flowers',
                'Mixed texture design',
                'LED backlighting option',
                'Premium installation',
                'Custom sizing available',
                'Matching accessories'
              ],
              specs: 'Standard: 8x8ft, LED upgrade: +$50'
            }
          ]
        },
        'backdrops': {
          name: 'Backdrops',
          products: [
            {
              id: 16,
              name: 'Sequin Backdrop',
              tagline: 'Glamorous Sparkle Wall',
              price: 150,
              weekendPrice: 200,
              image: 'sequin-backdrop',
              badge: 'Glamorous',
              badgeColor: 'bg-yellow-500',
              features: [
                'Full sequin coverage',
                'Multiple color options',
                'Professional draping',
                'Wrinkle resistant',
                'Easy setup system',
                'Perfect for photos'
              ],
              specs: '8x8ft standard, Custom sizes available'
            }
          ]
        },
        'lighting': {
          name: 'Lighting & Uplights',
          products: [
            {
              id: 17,
              name: 'LED Uplighting Package',
              tagline: 'Transform Your Venue Ambiance',
              price: 200,
              weekendPrice: 275,
              image: 'led-uplights',
              badge: 'Mood Setter',
              badgeColor: 'bg-blue-500',
              features: [
                '12 wireless LED uplights',
                'Color changing capability',
                'Remote control included',
                'Professional placement',
                'Battery powered',
                'Custom programming'
              ],
              specs: 'Coverage: up to 3000 sq ft venue'
            }
          ]
        }
      }
    },
    entertainment: {
      name: 'Entertainment',
      icon: Star,
      subcategories: {
        'dance-floors': {
          name: 'Dance Floors',
          products: [
            {
              id: 18,
              name: 'LED Dance Floor',
              tagline: 'Light Up the Night',
              price: 500,
              weekendPrice: 650,
              image: 'led-dance-floor',
              badge: 'Show Stopper',
              badgeColor: 'bg-purple-500',
              features: [
                'Color changing LED panels',
                'Music reactive lighting',
                'Professional installation',
                'Weather resistant',
                'Multiple size options',
                'Custom patterns available'
              ],
              specs: 'Standard: 12x12ft, Expandable modules'
            }
          ]
        },
        'games': {
          name: 'Games & Activities',
          products: [
            {
              id: 19,
              name: 'Giant Jenga Set',
              tagline: 'Classic Fun, Supersized',
              price: 75,
              weekendPrice: 100,
              image: 'giant-jenga',
              badge: 'Family Fun',
              badgeColor: 'bg-green-500',
              features: [
                'Premium wood construction',
                'Weather resistant finish',
                'Easy setup',
                'All ages entertainment',
                'Carrying case included',
                'Custom branding available'
              ],
              specs: 'Starts at 2.5ft, builds to 5ft+'
            }
          ]
        }
      }
    }
  };

  const getCurrentProducts = (): Product[] => {
    return categories[activeCategory]?.subcategories[selectedSubcategory]?.products || [];
  };

  const getProductImage = (imageType: string) => {
    const imageMap: { [key: string]: string } = {
      'throne-gold': '/assets/images/royal-throne-chair.jpg',
      'throne-silver': '/assets/images/royal-throne-chair.jpg',
      'throne-pink': '/assets/images/royal-throne-chair.jpg',
      'chiavari-gold': '/assets/images/royal-throne-chair.jpg',
      'ghost-clear': '/assets/images/royal-throne-chair.jpg',
      'mini-throne': '/assets/images/royal-throne-chair.jpg',
      'round-table': '/assets/images/60-inch-table.webp',
      'large-round-table': '/assets/images/60-inch-table.webp',
      'banquet-table': '/assets/images/60-inch-table.webp',
      'cocktail-table': '/assets/images/60-inch-table.webp',
      '360-booth': '/assets/images/360-photo-booth.webp',
      'mirror-booth': '/assets/images/360-photo-booth.webp',
      'classic-booth': '/assets/images/360-photo-booth.webp',
      'flower-wall': '/assets/images/luxury-flower-wall.jpg',
      'rose-gold-wall': '/assets/images/luxury-flower-wall.jpg',
      'sequin-backdrop': '/assets/images/luxury-flower-wall.jpg',
      'led-uplights': '/assets/images/black-dance-floor.jpg',
      'led-dance-floor': '/assets/images/black-dance-floor.jpg',
      'giant-jenga': '/assets/images/black-dance-floor.jpg'
    };
    return imageMap[imageType] || '/assets/images/royal-throne-chair.jpg';
  };



  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury Event Rentals
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform your celebration with our premium collection of throne chairs, elegant tables, 
              stunning photo booths, and exquisite décor.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setSelectedSubcategory(Object.keys(category.subcategories)[0]);
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg'
                      : 'text-gray-600 hover:text-[#FF6B35] hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subcategory Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 space-x-6">
            {Object.entries(categories[activeCategory]?.subcategories || {}).map(([key, subcategory]) => (
              <button
                key={key}
                onClick={() => setSelectedSubcategory(key)}
                className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors duration-200 ${
                  selectedSubcategory === key
                    ? 'bg-[#FF6B35] text-white'
                    : 'text-gray-600 hover:text-[#FF6B35]'
                }`}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-2">
            {categories[activeCategory]?.subcategories[selectedSubcategory]?.name}
          </h2>
          <p className="text-gray-600">
            Premium quality rentals with professional setup and styling included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentProducts().map((product: Product) => {
            return (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Product Image */}
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src={getProductImage(product.image)} 
                      alt={product.name}
                      width={300} 
                      height={300} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#FF6B35]">${product.price}/day</span>
                    <span className="text-sm text-gray-500">Weekend: ${product.weekendPrice}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-sm text-gray-500 italic">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {/* Specifications */}
                  <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-50 rounded">
                    {product.specs}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                  >
                    Add to Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {getCurrentProducts().length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Crown className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h3>
            <p className="text-gray-500">We're adding more amazing products to this category.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Royal Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your perfect combination of rentals, or speak with our event specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#FF6B35] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            >
              Call (555) 123-ROYAL
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
