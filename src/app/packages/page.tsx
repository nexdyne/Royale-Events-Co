"use client";

import React, { useState } from 'react';
import { 
  Crown, 
  Star, 
  Check, 
  Phone,
  Mail,
  Sparkles,
  Gift,
  Calculator,
  Plus,
  Minus,
  Heart,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  X,
  Edit,
  ShoppingCart,
  MessageCircle,
  Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PackageItem {
  item: string;
  removable: boolean;
  price: number;
}

interface Package {
  id: string;
  name: string;
  tier: string;
  popular?: boolean;
  originalPrice: number;
  price: number;
  savings: number;
  description: string;
  perfectFor: string;
  includes: PackageItem[];
  addOns?: AddOn[];
  removedItems?: PackageItem[];
  addedItems?: PackageItem[];
}

interface AddOn {
  name: string;
  price: number;
  description: string;
}



interface PackageBuilder {
  chairs: number;
  tables: number;
  photoBooth: boolean;
  photoBoothMirror: boolean;
  flowerWall: boolean;
  uplighting: boolean;
  danceFloor: boolean;
  backdrop: boolean;
  redCarpet: boolean;
  cocktailTables: boolean;
}

export default function Packages() {
  const [activeOccasion, setActiveOccasion] = useState('wedding');

  const [customizeMode, setCustomizeMode] = useState(false);
  const [customizedPackage, setCustomizedPackage] = useState<Package | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [packageBuilder, setPackageBuilder] = useState<PackageBuilder>({
    chairs: 0,
    tables: 0,
    photoBooth: false,
    photoBoothMirror: false,
    flowerWall: false,
    uplighting: false,
    danceFloor: false,
    backdrop: false,
    redCarpet: false,
    cocktailTables: false
  });
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const occasions = [
    { id: 'wedding', name: 'Weddings', icon: Heart },
    { id: 'birthday', name: 'Birthday Parties', icon: Gift },
    { id: 'corporate', name: 'Corporate Events', icon: Award },
    { id: 'baby', name: 'Baby Showers', icon: Sparkles },
    { id: 'anniversary', name: 'Anniversaries', icon: Crown }
  ];

  const builderProducts = [
    { id: 'chairs', name: 'Royal Throne Chairs', price: 75, unit: 'each' },
    { id: 'tables', name: 'Round Tables (60")', price: 25, unit: 'each' },
    { id: 'photoBooth', name: '360° Photo Booth', price: 500, unit: 'package', description: 'Includes props and custom backdrop' },
    { id: 'photoBoothMirror', name: 'Mirror Photo Booth', price: 400, unit: 'package', description: 'Interactive mirror with props' },
    { id: 'flowerWall', name: 'Luxury Flower Wall', price: 350, unit: 'package', description: '8x8 ft backdrop' },
    { id: 'uplighting', name: 'LED Uplighting Package', price: 300, unit: 'package', description: '12 wireless LED lights' },
    { id: 'danceFloor', name: 'LED Dance Floor', price: 600, unit: 'package', description: '16x16 ft illuminated floor' },
    { id: 'backdrop', name: 'Sequin Backdrop', price: 200, unit: 'package', description: '10x8 ft shimmer backdrop' },
    { id: 'redCarpet', name: 'Red Carpet Entrance', price: 150, unit: 'package', description: '50 ft luxury carpet' },
    { id: 'cocktailTables', name: 'Cocktail Tables', price: 35, unit: 'each', description: 'High-top tables with linens' }
  ];

  const packages = {
    wedding: [
      {
        id: 'royal-wedding',
        name: 'Royal Wedding Package',
        tier: 'luxury',
        popular: true,
        originalPrice: 3299,
        price: 2899,
        savings: 400,
        description: 'The ultimate luxury wedding experience with everything you need for your royal celebration.',
        perfectFor: 'Grand weddings, luxury celebrations, 100-200 guests',
        includes: [
          { item: '20 Royal Throne Chairs (Bride & Groom + VIP seating)', removable: true, price: 1500 },
          { item: '25 Round tables with luxury linens', removable: true, price: 625 },
          { item: '200 Chiavari chairs in gold or silver', removable: false, price: 0 },
          { item: '360° Photo Booth with custom backdrop', removable: true, price: 500 },
          { item: 'LED uplighting package (12 lights)', removable: true, price: 300 },
          { item: 'Luxury flower wall (8x8 ft)', removable: true, price: 350 },
          { item: 'Red carpet entrance (50 ft)', removable: true, price: 150 },
          { item: 'Professional event coordination', removable: false, price: 0 },
          { item: 'Setup and breakdown service', removable: false, price: 0 },
          { item: 'Emergency backup equipment', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Additional throne chairs', price: 75, description: 'Per chair' },
          { name: 'Upgraded photo booth package', price: 500, description: 'Premium props and custom branding' },
          { name: 'Live music setup', price: 800, description: 'Sound system and microphones' },
          { name: 'Extended service hours', price: 300, description: 'Additional 3 hours of service' },
          { name: 'Champagne toast setup', price: 250, description: 'Glasses and serving trays' },
          { name: 'Cake cutting ceremony', price: 150, description: 'Special knife and serving set' }
        ]
      },
      {
        id: 'elegant-wedding',
        name: 'Elegant Wedding Package',
        tier: 'premium',
        originalPrice: 2199,
        price: 1899,
        savings: 300,
        description: 'Perfect balance of elegance and value for your special day.',
        perfectFor: 'Medium weddings, elegant celebrations, 75-150 guests',
        includes: [
          { item: '10 Royal Throne Chairs for head table', removable: true, price: 750 },
          { item: '20 Round tables with standard linens', removable: true, price: 500 },
          { item: '150 Chiavari chairs', removable: false, price: 0 },
          { item: 'Mirror photo booth with props', removable: true, price: 400 },
          { item: 'String lighting package', removable: true, price: 200 },
          { item: 'Flower wall backdrop (6x6 ft)', removable: true, price: 250 },
          { item: 'Basic event coordination', removable: false, price: 0 },
          { item: 'Setup and breakdown service', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Upgrade to 360° photo booth', price: 400, description: 'Full 360-degree experience' },
          { name: 'Additional throne chairs', price: 75, description: 'Per chair' },
          { name: 'LED dance floor', price: 600, description: '16x16 ft illuminated floor' },
          { name: 'Cocktail tables', price: 200, description: 'Set of 6 high-top tables' },
          { name: 'Upgraded linens', price: 300, description: 'Premium fabric and colors' }
        ]
      },
      {
        id: 'intimate-wedding',
        name: 'Intimate Wedding Package',
        tier: 'starter',
        originalPrice: 1299,
        price: 1099,
        savings: 200,
        description: 'Beautiful essentials for intimate wedding celebrations.',
        perfectFor: 'Small weddings, intimate celebrations, 30-75 guests',
        includes: [
          { item: '6 Royal Throne Chairs', removable: true, price: 450 },
          { item: '10 Round tables with linens', removable: true, price: 250 },
          { item: '75 Chiavari chairs', removable: false, price: 0 },
          { item: 'Classic photo booth', removable: true, price: 300 },
          { item: 'Basic lighting setup', removable: true, price: 150 },
          { item: 'Sequin backdrop', removable: true, price: 200 },
          { item: 'Setup and breakdown service', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Flower wall upgrade', price: 300, description: 'Upgrade to luxury flower wall' },
          { name: 'Additional tables', price: 50, description: 'Per table with linens' },
          { name: 'Upgraded lighting', price: 200, description: 'LED uplighting package' },
          { name: 'Throne chair upgrade', price: 150, description: 'Upgrade to premium throne chairs' }
        ]
      }
    ],
    birthday: [
      {
        id: 'royal-birthday',
        name: 'Royal Birthday Bash',
        tier: 'luxury',
        popular: true,
        originalPrice: 1899,
        price: 1599,
        savings: 300,
        description: 'Make them feel like royalty on their special day.',
        perfectFor: 'Milestone birthdays, luxury celebrations, 50-100 guests',
        includes: [
          { item: '6 Royal Throne Chairs (birthday royalty)', removable: true, price: 450 },
          { item: '15 Round tables with themed linens', removable: true, price: 375 },
          { item: '100 Event chairs', removable: false, price: 0 },
          { item: '360° Photo Booth with birthday props', removable: true, price: 500 },
          { item: 'LED dance floor', removable: true, price: 600 },
          { item: 'Themed backdrop wall', removable: true, price: 250 },
          { item: 'Birthday coordination service', removable: false, price: 0 },
          { item: 'Setup and breakdown', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Kids throne chairs', price: 60, description: 'Mini throne chairs for children' },
          { name: 'Additional photo booth time', price: 200, description: 'Extra 2 hours' },
          { name: 'DJ setup', price: 400, description: 'Sound system and music' },
          { name: 'Balloon arch', price: 300, description: 'Custom color balloon decoration' }
        ]
      },
      {
        id: 'celebration-party',
        name: 'Celebration Party Package',
        tier: 'premium',
        originalPrice: 1299,
        price: 1099,
        savings: 200,
        description: 'Perfect for memorable birthday celebrations.',
        perfectFor: 'Birthday parties, celebrations, 30-75 guests',
        includes: [
          { item: '4 Royal Throne Chairs', removable: true, price: 300 },
          { item: '10 Round tables', removable: true, price: 250 },
          { item: '75 Event chairs', removable: false, price: 0 },
          { item: 'Mirror photo booth', removable: true, price: 400 },
          { item: 'Basic lighting', removable: true, price: 150 },
          { item: 'Balloon backdrop', removable: true, price: 150 },
          { item: 'Setup and breakdown', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Upgrade to LED dance floor', price: 400, description: 'Add illuminated dance floor' },
          { name: 'Additional decorations', price: 150, description: 'Extra themed decorations' },
          { name: 'Cake table setup', price: 100, description: 'Special cake display table' }
        ]
      },
      {
        id: 'fun-party',
        name: 'Fun Party Package',
        tier: 'starter',
        originalPrice: 899,
        price: 749,
        savings: 150,
        description: 'Essential fun for birthday celebrations.',
        perfectFor: 'Casual birthdays, family parties, 20-50 guests',
        includes: [
          { item: '2 Royal Throne Chairs', removable: true, price: 150 },
          { item: '8 Round tables', removable: true, price: 200 },
          { item: '50 Event chairs', removable: false, price: 0 },
          { item: 'Classic photo booth', removable: true, price: 300 },
          { item: 'Basic decorations', removable: true, price: 100 },
          { item: 'Setup service', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Additional throne chairs', price: 75, description: 'Per chair' },
          { name: 'Upgrade photo booth', price: 200, description: 'Mirror photo booth upgrade' },
          { name: 'Party games setup', price: 150, description: 'Fun party games and activities' }
        ]
      }
    ],
    corporate: [
      {
        id: 'executive-corporate',
        name: 'Executive Corporate Package',
        tier: 'luxury',
        popular: true,
        originalPrice: 2499,
        price: 2199,
        savings: 300,
        description: 'Impress clients and colleagues with executive-level elegance.',
        perfectFor: 'Corporate galas, award ceremonies, 100-300 guests',
        includes: [
          { item: '12 Royal Throne Chairs (executive seating)', removable: true, price: 900 },
          { item: '30 Round tables with premium linens', removable: true, price: 750 },
          { item: '300 Chiavari chairs', removable: false, price: 0 },
          { item: 'Professional photo booth', removable: true, price: 500 },
          { item: 'Stage and podium setup', removable: true, price: 400 },
          { item: 'Corporate lighting package', removable: true, price: 350 },
          { item: 'AV equipment setup', removable: true, price: 600 },
          { item: 'Professional event coordination', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Live streaming setup', price: 800, description: 'Professional live streaming equipment' },
          { name: 'Additional AV equipment', price: 400, description: 'Extra microphones and speakers' },
          { name: 'VIP lounge area', price: 600, description: 'Exclusive seating area with cocktail tables' },
          { name: 'Corporate branding', price: 500, description: 'Custom branded backdrops and signage' }
        ]
      }
    ],
    baby: [
      {
        id: 'royal-baby',
        name: 'Royal Baby Package',
        tier: 'luxury',
        popular: true,
        originalPrice: 1599,
        price: 1399,
        savings: 200,
        description: 'Celebrate your little prince or princess in royal style.',
        perfectFor: 'Baby showers, gender reveals, 40-80 guests',
        includes: [
          { item: '4 Royal Throne Chairs (parents & grandparents)', removable: true, price: 300 },
          { item: '12 Round tables with baby-themed linens', removable: true, price: 300 },
          { item: '80 Event chairs', removable: false, price: 0 },
          { item: 'Baby-themed photo booth', removable: true, price: 400 },
          { item: 'Soft lighting package', removable: true, price: 200 },
          { item: 'Baby shower backdrop', removable: true, price: 250 },
          { item: 'Gift table setup', removable: true, price: 100 },
          { item: 'Setup and coordination', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Diaper cake display', price: 150, description: 'Beautiful diaper cake centerpiece' },
          { name: 'Baby games setup', price: 200, description: 'Fun baby shower games and activities' },
          { name: 'Balloon arch', price: 250, description: 'Pink, blue, or neutral balloon arch' },
          { name: 'Dessert table setup', price: 300, description: 'Special dessert display table' }
        ]
      }
    ],
    anniversary: [
      {
        id: 'golden-anniversary',
        name: 'Golden Anniversary Package',
        tier: 'luxury',
        popular: true,
        originalPrice: 2099,
        price: 1899,
        savings: 200,
        description: 'Celebrate decades of love with golden elegance.',
        perfectFor: 'Milestone anniversaries, family celebrations, 50-150 guests',
        includes: [
          { item: '8 Royal Throne Chairs (couple & family)', removable: true, price: 600 },
          { item: '20 Round tables with elegant linens', removable: true, price: 500 },
          { item: '150 Chiavari chairs', removable: false, price: 0 },
          { item: 'Romantic photo booth', removable: true, price: 450 },
          { item: 'Ambient lighting package', removable: true, price: 300 },
          { item: 'Anniversary backdrop', removable: true, price: 250 },
          { item: 'Memory table setup', removable: true, price: 150 },
          { item: 'Professional coordination', removable: false, price: 0 }
        ],
        addOns: [
          { name: 'Anniversary slideshow', price: 400, description: 'Digital photo slideshow display' },
          { name: 'Champagne toast setup', price: 300, description: 'Elegant champagne service' },
          { name: 'Live music setup', price: 600, description: 'Sound system for live entertainment' },
          { name: 'Memory book station', price: 200, description: 'Guest book and memory station' }
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "Can I customize any package?",
      answer: "Absolutely! Every package can be customized. You can add or remove items, upgrade components, and include additional services. Our package customization tool lets you see real-time pricing as you make changes."
    },
    {
      question: "What's included in setup and breakdown?",
      answer: "Our professional team handles complete setup 2-3 hours before your event and full breakdown within 2 hours after. This includes delivery, installation, styling, and removal of all rental items."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans for packages over $1,000. You can split payments over 3-6 months with no interest. Contact us to discuss payment options that work for your budget."
    },
    {
      question: "What if I need to change my event date?",
      answer: "We understand plans change! You can reschedule your event up to 30 days before the original date without penalty, subject to availability. Changes within 30 days may incur a small rescheduling fee."
    },
    {
      question: "Are there any hidden fees?",
      answer: "Never! Our package prices include everything listed. The only additional costs would be optional add-ons you choose, delivery fees for locations over 25 miles, or damage fees if items are damaged during your event."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 4-8 weeks in advance for optimal availability, especially during peak wedding season (May-October). However, we can often accommodate last-minute bookings based on inventory availability."
    }
  ];

  const calculatePackageTotal = () => {
    let total = 0;
    Object.entries(packageBuilder).forEach(([key, value]) => {
      const product = builderProducts.find(p => p.id === key);
      if (product) {
        if (typeof value === 'boolean' && value) {
          total += product.price;
        } else if (typeof value === 'number') {
          total += product.price * value;
        }
      }
    });
    
    // Apply 10% discount for orders over $1000
    if (total > 1000) {
      total = total * 0.9;
    }
    
    return total;
  };

  const calculateCustomizedPrice = (pkg: Package) => {
    if (!customizedPackage || customizedPackage.id !== pkg.id) return pkg.price;
    
    let basePrice = pkg.price;
    
    // Subtract removed items
    customizedPackage.removedItems?.forEach(item => {
      basePrice -= item.price;
    });
    
    // Add selected add-ons
    selectedAddOns.forEach(addOn => {
      basePrice += addOn.price;
    });
    
    return basePrice;
  };

  const toggleCustomizeMode = (pkg: Package) => {
    setCustomizeMode(true);
    setCustomizedPackage({
      ...pkg,
      removedItems: [],
      addedItems: []
    });
    setSelectedAddOns([]);
  };

  const togglePackageItem = (item: PackageItem) => {
    if (!customizedPackage) return;
    
    const isRemoved = customizedPackage.removedItems?.some(removed => removed.item === item.item) || false;
    
    if (isRemoved) {
      // Add back to package
      setCustomizedPackage(prev => prev ? {
        ...prev,
        removedItems: prev.removedItems?.filter(removed => removed.item !== item.item) || []
      } : null);
    } else {
      // Remove from package
      if (item.removable) {
        setCustomizedPackage(prev => prev ? {
          ...prev,
          removedItems: [...(prev.removedItems || []), item]
        } : null);
      }
    }
  };

  const toggleAddOn = (addOn: AddOn) => {
    const isSelected = selectedAddOns.some(selected => selected.name === addOn.name);
    
    if (isSelected) {
      setSelectedAddOns(prev => prev.filter(selected => selected.name !== addOn.name));
    } else {
      setSelectedAddOns(prev => [...prev, addOn]);
    }
  };

  const updateBuilderQuantity = (productId: keyof PackageBuilder, change: number) => {
    setPackageBuilder(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] as number || 0) + change)
    }));
  };

  const toggleBuilderItem = (productId: keyof PackageBuilder) => {
    setPackageBuilder(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const toggleExpanded = (packageId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }));
  };

  const closeCustomizeMode = () => {
    setCustomizeMode(false);
    setCustomizedPackage(null);
    setSelectedAddOns([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Header />

      {/* Customize Package Modal */}
      {customizeMode && customizedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#1A365D]">Customize {customizedPackage.name}</h2>
                <button 
                  onClick={closeCustomizeMode}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Package Items */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D] mb-4">Package Items</h3>
                  <div className="space-y-3">
                    {customizedPackage.includes.map((item, index) => {
                      const isRemoved = customizedPackage.removedItems?.some(removed => removed.item === item.item) || false;
                      return (
                        <div 
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            isRemoved ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                          }`}
                        >
                          <div className="flex-1">
                            <span className={`text-sm ${isRemoved ? 'line-through text-red-600' : 'text-green-700'}`}>
                              {item.item}
                            </span>
                            {item.price > 0 && (
                              <span className="text-xs text-gray-500 ml-2">(${item.price})</span>
                            )}
                          </div>
                          {item.removable && (
                            <button
                              onClick={() => togglePackageItem(item)}
                              className={`px-3 py-1 rounded text-xs font-medium ${
                                isRemoved 
                                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                  : 'bg-red-100 text-red-700 hover:bg-red-200'
                              }`}
                            >
                              {isRemoved ? 'Add Back' : 'Remove'}
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Add-Ons */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D] mb-4">Available Add-Ons</h3>
                  <div className="space-y-3">
                    {customizedPackage.addOns?.map((addOn, index) => {
                      const isSelected = selectedAddOns.some(selected => selected.name === addOn.name);
                      return (
                        <div 
                          key={index}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            isSelected ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200 hover:bg-orange-50'
                          }`}
                          onClick={() => toggleAddOn(addOn)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-[#1A365D]">{addOn.name}</div>
                              <div className="text-sm text-gray-600">{addOn.description}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-[#FF6B35]">+${addOn.price}</div>
                              <div className={`w-4 h-4 rounded border-2 ${
                                isSelected ? 'bg-[#FF6B35] border-[#FF6B35]' : 'border-gray-300'
                              }`}>
                                {isSelected && <Check className="h-3 w-3 text-white" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold">Customized Package Total</div>
                    <div className="text-sm opacity-90">
                      {customizedPackage.removedItems && customizedPackage.removedItems.length > 0 && `${customizedPackage.removedItems.length} items removed • `}
                      {selectedAddOns.length > 0 && `${selectedAddOns.length} add-ons selected`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${calculateCustomizedPrice(customizedPackage).toLocaleString()}</div>
                    <div className="text-sm opacity-90">
                      Save ${(customizedPackage.originalPrice - calculateCustomizedPrice(customizedPackage)).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={closeCustomizeMode}
                  className="flex-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Book Customized Package
                </button>
                <button 
                  onClick={closeCustomizeMode}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl font-bold mb-6">Curated Event Packages</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Save money and simplify planning with our expertly curated packages. 
            Everything you need for unforgettable celebrations, bundled with royal savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Browse Packages
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300">
              Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Packages by Occasion */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-4">Packages by Occasion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your event type to see our curated packages designed specifically for your celebration
            </p>
          </div>

          {/* Occasion Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {occasions.map((occasion) => {
              const Icon = occasion.icon;
              return (
                <button
                  key={occasion.id}
                  onClick={() => setActiveOccasion(occasion.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeOccasion === occasion.id
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg'
                      : 'bg-white text-[#1A365D] border-2 border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35]'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{occasion.name}</span>
                </button>
              )
            })}
          </div>

          {/* Package Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {packages[activeOccasion]?.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Package Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex space-x-2">
                      {pkg.popular && (
                        <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white px-3 py-1 rounded-full text-xs font-medium">
                          MOST POPULAR
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                        pkg.tier === 'luxury' ? 'bg-purple-100 text-purple-700' :
                        pkg.tier === 'premium' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {pkg.tier}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A365D] mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-gray-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                    <span className="text-3xl font-bold text-[#FF6B35]">
                      ${customizeMode && customizedPackage?.id === pkg.id ? 
                        calculateCustomizedPrice(pkg).toLocaleString() : 
                        pkg.price.toLocaleString()
                      }
                    </span>
                  </div>
                  
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    Save ${pkg.savings}
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    <strong>Perfect For:</strong> {pkg.perfectFor}
                  </p>
                </div>

                {/* Package Includes */}
                <div className="p-6">
                  <h4 className="font-semibold text-[#1A365D] mb-3">Package Includes:</h4>
                  <div className="space-y-2 mb-4">
                    {pkg.includes.slice(0, expandedItems[pkg.id] ? pkg.includes.length : 6).map((item, index) => {
                      const itemData = typeof item === 'string' ? { item, removable: false, price: 0 } : item;
                      const isRemoved = customizedPackage?.id === pkg.id && 
                        customizedPackage.removedItems.some(removed => removed.item === itemData.item);
                      
                      return (
                        <div key={index} className={`flex items-start space-x-2 ${isRemoved ? 'opacity-50' : ''}`}>
                          <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isRemoved ? 'text-red-500' : 'text-green-500'}`} />
                          <span className={`text-sm ${isRemoved ? 'line-through text-red-600' : 'text-gray-700'}`}>
                            {itemData.item}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  
                  {pkg.includes.length > 6 && (
                    <button
                      onClick={() => toggleExpanded(pkg.id)}
                      className="text-[#FF6B35] text-sm font-medium hover:text-[#FF8C42] flex items-center space-x-1"
                    >
                      <span>{expandedItems[pkg.id] ? 'Show Less' : `+${pkg.includes.length - 6} More Items`}</span>
                      {expandedItems[pkg.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Book This Package
                  </button>
                  <button 
                    onClick={() => toggleCustomizeMode(pkg)}
                    className="w-full border-2 border-[#FF6B35] text-[#FF6B35] py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Customize Package</span>
                  </button>
                </div>

                {/* Popular Add-Ons */}
                <div className="p-6 pt-0">
                  <h5 className="font-semibold text-[#1A365D] mb-3">Popular Add-Ons:</h5>
                  <div className="space-y-2">
                    {pkg.addOns.slice(0, 3).map((addOn, index) => {
                      const isSelected = selectedAddOns.some(selected => selected.name === addOn.name);
                      return (
                        <div 
                          key={index} 
                          className={`flex justify-between items-center text-sm cursor-pointer p-2 rounded transition-all ${
                            isSelected ? 'bg-orange-50 border border-orange-200' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => toggleAddOn(addOn)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              isSelected ? 'bg-[#FF6B35] border-[#FF6B35]' : 'border-gray-300'
                            }`}>
                              {isSelected && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <span className="text-gray-700">{addOn.name}</span>
                          </div>
                          <span className="text-[#FF6B35] font-medium">+${addOn.price}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Builder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-4">Custom Package Builder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your own package by selecting exactly what you need. Get instant pricing and save with bulk discounts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-8">Build Your Package</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {builderProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1A365D]">{product.name}</h4>
                      {product.description && (
                        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#FF6B35]">${product.price}</div>
                      <div className="text-xs text-gray-500">{product.unit}</div>
                    </div>
                  </div>
                  
                  {product.unit === 'each' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateBuilderQuantity(product.id, -1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          disabled={!packageBuilder[product.id]}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{packageBuilder[product.id] || 0}</span>
                        <button
                          onClick={() => updateBuilderQuantity(product.id, 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        ${((packageBuilder[product.id] || 0) * product.price).toLocaleString()}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={packageBuilder[product.id] || false}
                          onChange={() => toggleBuilderItem(product.id)}
                          className="rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                        />
                        <span className="text-sm text-gray-700">Include in package</span>
                      </label>
                      <div className="text-sm font-medium text-gray-700">
                        {packageBuilder[product.id] ? `$${product.price.toLocaleString()}` : '$0'}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Package Total */}
            <div className="border-t border-gray-200 pt-6">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-lg p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Your Package Total</h3>
                    {calculatePackageTotal() > 1000 && (
                      <p className="text-sm opacity-90">10% bulk discount applied!</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${calculatePackageTotal().toLocaleString()}</div>
                    {calculatePackageTotal() > 1000 && (
                      <div className="text-sm opacity-90">
                        You save ${(calculatePackageTotal() / 0.9 - calculatePackageTotal()).toFixed(0)}!
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-white text-[#FF6B35] py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Get This Quote</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300">
                    <MessageCircle className="h-5 w-5" />
                    <span>Talk to Support for Help</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Support CTA */}
            <div className="mt-8 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Headphones className="h-8 w-8 text-blue-600" />
                  <h4 className="text-xl font-semibold text-blue-900">Need Help Customizing Your Package?</h4>
                </div>
                <p className="text-blue-700 mb-4">
                  Our package experts are here to help you create the perfect combination for your event. 
                  Get personalized recommendations, exclusive bundle deals, and professional guidance to make your celebration unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call (555) 123-ROYAL</span>
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Free Consultation</span>
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Start Live Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-4">Why Choose Our Packages?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curated packages offer unbeatable value and convenience for your special events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">Save Money</h3>
              <p className="text-gray-600">
                Package deals save you 15-25% compared to individual rentals. More value for your celebration budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">Simplify Planning</h3>
              <p className="text-gray-600">
                Everything coordinated in one package. No need to source multiple vendors or worry about compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">Expert Curation</h3>
              <p className="text-gray-600">
                Each package is designed by event professionals to ensure perfect harmony and stunning results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-4">Package Success Stories</h2>
            <p className="text-xl text-gray-600">See how our packages have made celebrations unforgettable</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The Royal Wedding Package was absolutely perfect! Every detail was handled with care, and our guests couldn't stop talking about the throne chairs. Worth every penny!"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-[#1A365D]">Sarah & Michael Johnson</div>
                <div className="text-sm text-[#FF6B35]">Royal Wedding Package</div>
                <div className="text-sm text-gray-500">Beverly Hills, CA</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "My daughter felt like a true princess! The 360° photo booth was a huge hit, and the setup was flawless. Royale Events made her 16th birthday unforgettable."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-[#1A365D]">Jennifer Martinez</div>
                <div className="text-sm text-[#FF6B35]">Royal Birthday Bash</div>
                <div className="text-sm text-gray-500">Los Angeles, CA</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional service from start to finish. The corporate package impressed our clients and the throne chairs added that perfect touch of elegance to our gala."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-[#1A365D]">David Chen</div>
                <div className="text-sm text-[#FF6B35]">Executive Corporate Package</div>
                <div className="text-sm text-gray-500">Downtown LA, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Questions & Answers */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A365D] mb-4">Package Questions & Answers</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our event packages</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-[#1A365D]">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Book */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Book Your Perfect Package?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our package experts are standing by to help you choose the perfect combination for your royal celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Call Our Experts</h3>
              <p className="mb-4 opacity-90">(555) 123-ROYAL</p>
              <p className="text-sm opacity-75">Available 7 days a week</p>
            </div>

            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="mb-4 opacity-90">packages@royaleevents.com</p>
              <p className="text-sm opacity-75">Response within 24 hours</p>
            </div>

            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Schedule Consultation</h3>
              <p className="mb-4 opacity-90">Free package planning</p>
              <p className="text-sm opacity-75">30-minute consultation</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
