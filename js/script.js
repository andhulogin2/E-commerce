/* ============================================================
   NOVACART — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Master Consolidated Product Data ---------- */
  const PRODUCTS = [
    {
      id: 1,
      title: 'Aero Runner Sneaker',
      cat: 'Footwear',
      price: 128,
      old: 189,
      rating: 4.9,
      reviews: 214,
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80'
      ],
      tag: '32% OFF',
      stock: 18,
      description: 'Lightweight breathable mesh sneaker with ultra-responsive energy return cushioning engineered for daily urban running.',
      specs: { 'Material': 'Engineered Mesh', 'Sole': 'Aerofoam Cushioning', 'Color': 'Crimson / Onyx', 'Weight': '240g' }
    },
    {
      id: 2,
      title: 'Studio Wireless Headphones',
      cat: 'Audio',
      price: 189,
      old: 229,
      rating: 4.8,
      reviews: 156,
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&auto=format&fit=crop&q=80'
      ],
      tag: 'HOT',
      stock: 12,
      description: 'Premium active noise-cancelling over-ear headphones delivering studio-grade acoustics and 40-hour continuous playback.',
      specs: { 'Driver Size': '40mm Neodymium', 'Battery Life': '40 Hours', 'Connectivity': 'Bluetooth 5.3', 'ANC': 'Adaptive Active Noise Control' }
    },
    {
      id: 3,
      title: 'Minimalist Chrono Watch',
      cat: 'Accessories',
      price: 96,
      old: 140,
      rating: 4.7,
      reviews: 320,
      img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80'
      ],
      tag: '31% OFF',
      stock: 24,
      description: 'Precision Japanese quartz timepiece featuring a slim brushed stainless steel case and genuine Italian leather strap.',
      specs: { 'Movement': 'Japanese Quartz', 'Water Resistance': '5 ATM / 50m', 'Case Diameter': '40mm', 'Strap': '20mm Genuine Leather' }
    },
    {
      id: 4,
      title: 'Everyday Canvas Tote',
      cat: 'Bags',
      price: 42,
      old: null,
      rating: 4.6,
      reviews: 88,
      img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80'
      ],
      tag: 'NEW',
      stock: 30,
      description: 'Durable heavy-gauge organic cotton canvas tote bag with reinforced handles and interior padded laptop compartment.',
      specs: { 'Material': '16oz Organic Cotton Canvas', 'Capacity': '22 Liters', 'Laptop Sleeve': 'Fits 15" Laptops', 'Closure': 'Magnetic Snap' }
    },
    {
      id: 5,
      title: 'Nimbus Cloud Sunglasses',
      cat: 'Eyewear',
      price: 68,
      old: 95,
      rating: 4.5,
      reviews: 132,
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80'
      ],
      tag: '28% OFF',
      stock: 15,
      description: 'Hand-crafted acetate frame sunglasses fitted with TAC polarized UV400 lenses for maximum clarity and eye protection.',
      specs: { 'Frame': 'Italian Acetate', 'Lens': 'Polarized TAC UV400', 'Gender': 'Unisex', 'Includes': 'Hard Case & Cloth' }
    },
    {
      id: 6,
      title: 'Terra Leather Backpack',
      cat: 'Bags',
      price: 154,
      old: null,
      rating: 4.9,
      reviews: 271,
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80'
      ],
      tag: null,
      stock: 8,
      description: 'Full-grain vegetable-tanned leather commuter backpack with waterproof zippers and ergonomic shoulder harness.',
      specs: { 'Leather': 'Full-Grain Cowhide', 'Volume': '18 Liters', 'Hardware': 'Solid Brass', 'Weight': '1.1 kg' }
    },
    {
      id: 7,
      title: 'Pulse Fitness Band',
      cat: 'Electronics',
      price: 79,
      old: 110,
      rating: 4.4,
      reviews: 199,
      img: 'https://images.unsplash.com/photo-1575311373937-de4c8988e46e?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1575311373937-de4c8988e46e?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=700&auto=format&fit=crop&q=80'
      ],
      tag: '28% OFF',
      stock: 22,
      description: 'AMOLED smart fitness tracker with continuous heart rate monitoring, SPO2 sensor, 50m water resistance, and 14-day battery life.',
      specs: { 'Display': '1.47" AMOLED Touchscreen', 'Sensors': 'Heart Rate, SpO2, Motion', 'Water Resistance': '5 ATM', 'Battery': '14 Days' }
    },
    {
      id: 8,
      title: 'Oak Grain Desk Lamp',
      cat: 'Home',
      price: 58,
      old: null,
      rating: 4.7,
      reviews: 64,
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=700&auto=format&fit=crop&q=80'
      ],
      tag: 'NEW',
      stock: 14,
      description: 'Minimalist solid oak and anodized aluminum LED desk lamp featuring touch dimming and integrated wireless phone charger base.',
      specs: { 'Material': 'Oak Wood & Aluminum', 'Light Source': 'Eye-Care LED 3000K-5000K', 'Power': '10W Wireless Charge', 'Dimmer': 'Touch Stepless' }
    },
    {
      id: 101,
      title: 'Studio Wireless Headphones',
      cat: 'Audio',
      price: 189,
      old: null,
      rating: 4.8,
      reviews: 156,
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 12,
      description: 'Active noise cancelling studio headphones.',
      specs: { 'Driver': '40mm', 'Battery': '40h' }
    },
    {
      id: 102,
      title: 'Pulse Fitness Band',
      cat: 'Wearables',
      price: 79,
      old: 110,
      rating: 4.4,
      reviews: 199,
      img: 'https://images.unsplash.com/photo-1575311373937-de4c8988e46e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1575311373937-de4c8988e46e?w=700&auto=format&fit=crop&q=80'],
      tag: '28% OFF',
      stock: 22,
      description: 'Fitness tracker with SpO2 and 14-day battery.',
      specs: { 'Display': 'AMOLED', 'Waterproof': '50m' }
    },
    {
      id: 103,
      title: 'UltraHD 4K Curved Monitor',
      cat: 'Computing',
      price: 349,
      old: null,
      rating: 4.9,
      reviews: 84,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&auto=format&fit=crop&q=80'],
      tag: 'FEATURED',
      stock: 7,
      description: '34-inch 1500R curved Ultrawide 4K IPS display with 144Hz refresh rate, HDR400, and 99% sRGB color gamut.',
      specs: { 'Screen Size': '34" Curved 1500R', 'Resolution': '3440 x 1440 4K', 'Refresh Rate': '144Hz', 'Ports': 'HDMI 2.1, DisplayPort, USB-C' }
    },
    {
      id: 104,
      title: 'Quantum Mechanical Keyboard',
      cat: 'Accessories',
      price: 129,
      old: null,
      rating: 4.7,
      reviews: 210,
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&auto=format&fit=crop&q=80'],
      tag: 'POPULAR',
      stock: 19,
      description: 'Compact 75% wireless mechanical keyboard with hot-swappable tactile switches, RGB backlighting, and CNC aluminum frame.',
      specs: { 'Layout': '75% Compact', 'Switch Type': 'Hot-Swappable Tactile', 'Connectivity': 'Wireless 2.4GHz / Bluetooth' }
    },
    {
      id: 105,
      title: 'AeroDrone 4K Pro',
      cat: 'Drones',
      price: 499,
      old: null,
      rating: 4.9,
      reviews: 62,
      img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 5,
      description: 'Ultra-compact folding drone equipped with 3-axis stabilized 4K 60fps camera.',
      specs: { 'Camera': '4K/60fps', 'Flight Time': '38 Minutes' }
    },
    {
      id: 106,
      title: 'SoundSphere Portable Speaker',
      cat: 'Audio',
      price: 89,
      old: null,
      rating: 4.6,
      reviews: 143,
      img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 25,
      description: '360-degree room-filling acoustic Bluetooth speaker featuring IP67 waterproof rating.',
      specs: { 'Power': '30W RMS', 'Playtime': '20 Hours' }
    },
    {
      id: 107,
      title: 'Horizon Smartwatch Series 7',
      cat: 'Wearables',
      price: 219,
      old: null,
      rating: 4.8,
      reviews: 315,
      img: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1510017803434-a899398421b3?w=700&auto=format&fit=crop&q=80'],
      tag: 'HOT',
      stock: 11,
      description: 'Advanced health smartwatch with ECG monitoring, GPS tracking, and OLED display.',
      specs: { 'Display': '1.39" OLED', 'Health': 'ECG, HR, SpO2' }
    },
    {
      id: 108,
      title: 'OmniCharge MagSafe Dock',
      cat: 'Accessories',
      price: 45,
      old: null,
      rating: 4.5,
      reviews: 98,
      img: 'https://images.unsplash.com/photo-1622445268465-8438b6580459?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1622445268465-8438b6580459?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 30,
      description: '3-in-1 magnetic wireless charging station for smartphone, smartwatch, and earbuds.',
      specs: { 'Output': '15W Fast Charge', 'Material': 'Zinc Alloy' }
    },
    {
      id: 201,
      title: 'Aero Runner Sneaker',
      cat: 'Footwear',
      price: 128,
      old: 189,
      rating: 4.9,
      reviews: 214,
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80'],
      tag: '32% OFF',
      stock: 18,
      description: 'Lightweight urban running sneaker.',
      specs: { 'Material': 'Mesh', 'Sole': 'Aerofoam' }
    },
    {
      id: 202,
      title: 'Minimalist Chrono Watch',
      cat: 'Accessories',
      price: 96,
      old: 140,
      rating: 4.7,
      reviews: 320,
      img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80'],
      tag: '31% OFF',
      stock: 24,
      description: 'Precision Japanese quartz timepiece.',
      specs: { 'Movement': 'Quartz', 'Strap': 'Leather' }
    },
    {
      id: 203,
      title: 'Everyday Canvas Tote',
      cat: 'Bags',
      price: 42,
      old: null,
      rating: 4.6,
      reviews: 88,
      img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 30,
      description: 'Durable heavy-gauge organic cotton canvas tote bag.',
      specs: { 'Material': 'Canvas', 'Capacity': '22L' }
    },
    {
      id: 204,
      title: 'Nimbus Cloud Sunglasses',
      cat: 'Eyewear',
      price: 68,
      old: 95,
      rating: 4.5,
      reviews: 132,
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80'],
      tag: '28% OFF',
      stock: 15,
      description: 'Acetate frame sunglasses with polarized lenses.',
      specs: { 'Frame': 'Acetate', 'UV': 'UV400' }
    },
    {
      id: 205,
      title: 'Terra Leather Backpack',
      cat: 'Bags',
      price: 154,
      old: null,
      rating: 4.9,
      reviews: 271,
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 8,
      description: 'Full-grain leather commuter backpack.',
      specs: { 'Material': 'Leather', 'Volume': '18L' }
    },
    {
      id: 206,
      title: 'Urban Denim Jacket',
      cat: 'Outerwear',
      price: 112,
      old: null,
      rating: 4.7,
      reviews: 189,
      img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 16,
      description: 'Heavyweight 14oz raw indigo denim trucker jacket featuring custom brass hardware and timeless relaxed fit silhouette.',
      specs: { 'Fabric': '100% Cotton 14oz Denim', 'Fit': 'Relaxed Trucker', 'Color': 'Raw Indigo Blue', 'Care': 'Machine Wash Cold' }
    },
    {
      id: 207,
      title: 'Wool Blend Trench Coat',
      cat: 'Outerwear',
      price: 245,
      old: null,
      rating: 4.9,
      reviews: 104,
      img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&auto=format&fit=crop&q=80'],
      tag: 'HOT',
      stock: 6,
      description: 'Tailored double-breasted trench coat crafted from premium Australian merino wool blend with belted waist.',
      specs: { 'Material': 'Merino Wool Blend', 'Lining': 'Viscose Satin', 'Fit': 'Tailored' }
    },
    {
      id: 208,
      title: 'Silk Satin Evening Dress',
      cat: 'Womenswear',
      price: 185,
      old: null,
      rating: 4.8,
      reviews: 162,
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 9,
      description: 'Elegant bias-cut Mulberry silk slip gown featuring delicate adjustable cowl neck.',
      specs: { 'Fabric': '100% Mulberry Silk', 'Fit': 'Bias Cut' }
    },
    {
      id: 301,
      title: 'Oak Grain Desk Lamp',
      cat: 'Lighting',
      price: 58,
      old: null,
      rating: 4.7,
      reviews: 64,
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 14,
      description: 'Minimalist solid oak LED desk lamp.',
      specs: { 'Material': 'Oak & Aluminum', 'Power': '10W' }
    },
    {
      id: 302,
      title: 'Barista Pro Espresso Machine',
      cat: 'Appliances',
      price: 289,
      old: null,
      rating: 4.9,
      reviews: 142,
      img: 'https://images.unsplash.com/photo-1517668808822-9ebe02f2a698?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebe02f2a698?w=700&auto=format&fit=crop&q=80'],
      tag: 'TOP SELLER',
      stock: 10,
      description: '15-bar Italian pump espresso machine with integrated thermo-coil heating, commercial micro-foam steam wand.',
      specs: { 'Pump': '15-Bar Italian', 'Water Tank': '1.8L', 'Power': '1450W' }
    },
    {
      id: 303,
      title: 'Digital Air Fryer XL',
      cat: 'Appliances',
      price: 119,
      old: 149,
      rating: 4.8,
      reviews: 210,
      img: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=700&auto=format&fit=crop&q=80'],
      tag: '20% OFF',
      stock: 20,
      description: '5.8-quart rapid air circulation air fryer with 8 one-touch digital presets.',
      specs: { 'Capacity': '5.8 Quarts', 'Presets': '8 Digital Touch' }
    },
    {
      id: 304,
      title: 'Ceramic Cookware Set',
      cat: 'Cookware',
      price: 149,
      old: null,
      rating: 4.9,
      reviews: 95,
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 12,
      description: '10-piece non-toxic ceramic non-stick cookware set.',
      specs: { 'Pieces': '10 Pots & Pans', 'Coating': 'Ceramic' }
    },
    {
      id: 305,
      title: 'Smart Robot Vacuum Cleaner',
      cat: 'Appliances',
      price: 279,
      old: null,
      rating: 4.6,
      reviews: 178,
      img: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=700&auto=format&fit=crop&q=80'],
      tag: 'SMART HOME',
      stock: 15,
      description: 'LiDAR laser navigation robot vacuum & mop combo with 3000Pa suction.',
      specs: { 'Navigation': 'LiDAR Laser', 'Suction': '3000Pa' }
    },
    {
      id: 306,
      title: 'Memory Foam Ergonomic Pillow',
      cat: 'Bedding',
      price: 48,
      old: null,
      rating: 4.7,
      reviews: 119,
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 18,
      description: 'Contour ergonomic memory foam pillow for neck and shoulder support.',
      specs: { 'Material': 'Memory Foam', 'Cover': 'Bamboo Washable' }
    },
    {
      id: 307,
      title: 'Japanese Chef Knife Set',
      cat: 'Cutlery',
      price: 89,
      old: null,
      rating: 4.9,
      reviews: 230,
      img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1593618998160-e34014e67546?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 14,
      description: 'High-carbon Japanese stainless steel kitchen knife set with ergonomic pakkawood handles.',
      specs: { 'Steel': 'VG-10 High Carbon', 'Handle': 'Pakkawood' }
    },
    {
      id: 308,
      title: 'Ultrasonic Aroma Diffuser',
      cat: 'Decor',
      price: 36,
      old: null,
      rating: 4.5,
      reviews: 84,
      img: 'https://images.unsplash.com/photo-1602928321679-560b4139c901?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1602928321679-560b4139c901?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 22,
      description: '300ml essential oil ultrasonic diffuser with 7 ambient LED light modes.',
      specs: { 'Capacity': '300ml', 'Timer': '1h/3h/6h/ON' }
    },
    {
      id: 401,
      title: 'UltraSound Portable Speaker',
      cat: 'Audio',
      price: 49,
      old: 98,
      rating: 4.9,
      reviews: 310,
      img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop&q=80'],
      tag: '50% OFF',
      stock: 40,
      description: 'Ultra-compact rugged Bluetooth speaker with IPX7 waterproof rating.',
      specs: { 'Power': '15W', 'Waterproof': 'IPX7' }
    },
    {
      id: 407,
      title: 'Smart Fitness Tracker',
      cat: 'Sports',
      price: 59,
      old: 89,
      rating: 4.7,
      reviews: 174,
      img: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=700&auto=format&fit=crop&q=80'],
      tag: '35% OFF',
      stock: 28,
      description: 'Lightweight sports band featuring multi-sport tracking and step counting.',
      specs: { 'Display': 'OLED', 'Battery': '10 Days' }
    },
    {
      id: 501,
      title: 'Everyday Canvas Tote',
      cat: 'Bags',
      price: 42,
      old: null,
      rating: 4.6,
      reviews: 88,
      img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 30,
      description: 'Organic cotton canvas tote with laptop sleeve.',
      specs: { 'Material': 'Cotton', 'Volume': '22L' }
    },
    {
      id: 502,
      title: 'Oak Grain Desk Lamp',
      cat: 'Home',
      price: 58,
      old: null,
      rating: 4.7,
      reviews: 64,
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 14,
      description: 'Solid oak LED desk lamp.',
      specs: { 'Power': '10W Wireless Charge', 'Material': 'Oak Wood' }
    },
    {
      id: 503,
      title: 'AeroDrone 4K Pro',
      cat: 'Electronics',
      price: 499,
      old: null,
      rating: 4.9,
      reviews: 62,
      img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 5,
      description: 'Folding drone with 4K 60fps camera.',
      specs: { 'Camera': '4K 60fps', 'Flight Time': '38m' }
    },
    {
      id: 504,
      title: 'Quantum Earbuds Pro',
      cat: 'Audio',
      price: 129,
      old: null,
      rating: 4.8,
      reviews: 41,
      img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 22,
      description: 'Wireless earbuds with spatial 3D audio.',
      specs: { 'ANC': 'Active', 'Battery': '32 Hours' }
    },
    {
      id: 505,
      title: 'Luxe Velvet Blazer',
      cat: 'Fashion',
      price: 175,
      old: null,
      rating: 4.9,
      reviews: 53,
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 7,
      description: 'Single-breasted velvet blazer with silk lining.',
      specs: { 'Material': 'Velvet', 'Fit': 'Slim Tailored' }
    },
    {
      id: 506,
      title: 'Smart Air Purifier HEPA',
      cat: 'Home',
      price: 149,
      old: null,
      rating: 4.7,
      reviews: 77,
      img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 12,
      description: 'True HEPA air purifier filtering 99.97% of airborne allergens and dust.',
      specs: { 'Filter': 'True HEPA H13', 'Coverage': '450 sq ft' }
    },
    {
      id: 507,
      title: 'Carbon Fiber Bike Helmet',
      cat: 'Sports',
      price: 95,
      old: null,
      rating: 4.8,
      reviews: 39,
      img: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 10,
      description: 'Aerodynamic carbon fiber road cycling helmet.',
      specs: { 'Safety': 'MIPS Protection', 'Weight': '210g' }
    },
    {
      id: 508,
      title: 'Radiant Hydra Serum',
      cat: 'Beauty',
      price: 46,
      old: null,
      rating: 4.9,
      reviews: 94,
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 35,
      description: 'Hyaluronic acid and niacinamide facial serum.',
      specs: { 'Volume': '50ml', 'Key Ingredient': 'Hyaluronic Acid 2%' }
    },
    {
      id: 601,
      title: 'Radiant Hydra Serum',
      cat: 'Beauty',
      price: 46,
      old: null,
      rating: 4.9,
      reviews: 94,
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 35,
      description: 'Hydrating face serum for all skin types.',
      specs: { 'Volume': '50ml', 'Formulation': 'Vegan' }
    },
    {
      id: 602,
      title: 'Sonic Facial Cleansing Brush',
      cat: 'Tools',
      price: 78,
      old: 92,
      rating: 4.8,
      reviews: 112,
      img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&auto=format&fit=crop&q=80'],
      tag: '15% OFF',
      stock: 17,
      description: 'Silicone sonic facial cleansing brush.',
      specs: { 'Material': 'Silicone', 'Pulsations': '8000/min' }
    },
    {
      id: 603,
      title: 'Organic Botanicals Facial Oil',
      cat: 'Skincare',
      price: 52,
      old: null,
      rating: 4.9,
      reviews: 89,
      img: 'https://images.unsplash.com/photo-1608248597261-8332586b3260?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1608248597261-8332586b3260?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 21,
      description: '100% cold-pressed organic botanical facial elixir.',
      specs: { 'Volume': '30ml', 'Type': 'Organic Cold-Pressed' }
    },
    {
      id: 604,
      title: 'Velvet Matte Liquid Lipstick',
      cat: 'Cosmetics',
      price: 28,
      old: null,
      rating: 4.6,
      reviews: 175,
      img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 40,
      description: 'Long-lasting smudge-proof velvet matte liquid lipstick.',
      specs: { 'Finish': 'Velvet Matte', 'Duration': '16 Hours' }
    },
    {
      id: 605,
      title: 'Luxe Ionic Hair Dryer',
      cat: 'Haircare',
      price: 149,
      old: null,
      rating: 4.9,
      reviews: 204,
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 14,
      description: 'High-speed brushless ionic hair dryer with magnetic styling nozzles.',
      specs: { 'Motor': '110,000 RPM Brushless', 'Heat Settings': '4 Temperatures' }
    },
    {
      id: 606,
      title: 'Detoxifying Charcoal Clay Mask',
      cat: 'Skincare',
      price: 34,
      old: null,
      rating: 4.7,
      reviews: 130,
      img: 'https://images.unsplash.com/photo-1567928269937-ae146e45b428?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1567928269937-ae146e45b428?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 26,
      description: 'Pore-refining activated charcoal and bentonite clay face mask.',
      specs: { 'Weight': '100g', 'Key Ingredient': 'Activated Charcoal' }
    },
    {
      id: 607,
      title: 'Silk Therapy Hair Serum',
      cat: 'Haircare',
      price: 42,
      old: null,
      rating: 4.8,
      reviews: 86,
      img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 30,
      description: 'Weightless silk protein hair treatment serum for smooth frizz-free shine.',
      specs: { 'Volume': '100ml', 'Benefit': 'Heat Protect & Shine' }
    },
    {
      id: 608,
      title: 'Rose Gold Quartz Face Roller',
      cat: 'Tools',
      price: 26,
      old: null,
      rating: 4.5,
      reviews: 140,
      img: 'https://images.unsplash.com/photo-1512290900673-700200411926?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1512290900673-700200411926?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 18,
      description: 'Dual-ended genuine rose quartz facial roller for lymphatic drainage.',
      specs: { 'Stone': '100% Rose Quartz', 'Frame': 'Rose Gold Alloy' }
    },
    {
      id: 701,
      title: 'Smart Fitness Tracker',
      cat: 'Fitness Tech',
      price: 59,
      old: 89,
      rating: 4.7,
      reviews: 174,
      img: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=700&auto=format&fit=crop&q=80'],
      tag: '35% OFF',
      stock: 28,
      description: 'Sports tracking band with GPS distance calculation.',
      specs: { 'Display': 'OLED', 'Battery': '10 Days' }
    },
    {
      id: 702,
      title: 'Trail Runner Pro Sneakers',
      cat: 'Footwear',
      price: 135,
      old: null,
      rating: 4.9,
      reviews: 198,
      img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 14,
      description: 'All-terrain Vibram rubber trail running shoe.',
      specs: { 'Outsole': 'Vibram', 'Waterproof': 'Gore-Tex' }
    },
    {
      id: 703,
      title: 'Carbon Fiber Bike Helmet',
      cat: 'Accessories',
      price: 95,
      old: null,
      rating: 4.8,
      reviews: 39,
      img: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=700&auto=format&fit=crop&q=80'],
      tag: 'NEW',
      stock: 10,
      description: 'Aerodynamic road cycling helmet with MIPS safety system.',
      specs: { 'Material': 'Carbon Fiber', 'Vents': '18 Vents' }
    },
    {
      id: 704,
      title: 'Non-Slip Yoga & Fitness Mat',
      cat: 'Fitness',
      price: 42,
      old: null,
      rating: 4.7,
      reviews: 145,
      img: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 25,
      description: '6mm eco-friendly TPE extra thick non-slip workout exercise mat.',
      specs: { 'Thickness': '6mm', 'Material': 'Eco TPE', 'Dimensions': '72" x 24"' }
    },
    {
      id: 705,
      title: 'Adjustable Cast Iron Dumbbell Set',
      cat: 'Fitness',
      price: 169,
      old: null,
      rating: 4.9,
      reviews: 210,
      img: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=700&auto=format&fit=crop&q=80'],
      tag: 'PRO GEAR',
      stock: 8,
      description: '5-to-52.5 lb quick-adjust cast iron dumbbell set.',
      specs: { 'Range': '5 to 52.5 lbs', 'Material': 'Cast Iron' }
    },
    {
      id: 706,
      title: 'Waterproof 3-Season Camping Tent',
      cat: 'Outdoor Gear',
      price: 210,
      old: null,
      rating: 4.8,
      reviews: 88,
      img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 7,
      description: 'Lightweight 2-person double layer waterproof backpack camping tent.',
      specs: { 'Capacity': '2 Person', 'Waterproof': '3000mm Rating', 'Weight': '2.4 kg' }
    },
    {
      id: 707,
      title: 'Insulated Hydration Backpack',
      cat: 'Accessories',
      price: 65,
      old: null,
      rating: 4.6,
      reviews: 114,
      img: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 20,
      description: 'Outdoor hiking backpack with leak-proof 2L hydration water bladder.',
      specs: { 'Bladder': '2L BPA-Free', 'Bag Capacity': '15L' }
    },
    {
      id: 708,
      title: 'Heavy Duty Resistance Band Kit',
      cat: 'Fitness',
      price: 29,
      old: null,
      rating: 4.7,
      reviews: 162,
      img: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 35,
      description: 'Set of 5 stackable latex workout exercise bands with handles and door anchor.',
      specs: { 'Resistance': 'Up to 150 lbs total', 'Includes': '5 Bands, Handles, Ankle Straps' }
    },
    {
      id: 801,
      title: 'Quantum Mechanical Keyboard',
      cat: 'Accessories',
      price: 129,
      old: null,
      rating: 4.7,
      reviews: 210,
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 19,
      description: 'Wireless 75% mechanical keyboard with hot-swappable switches.',
      specs: { 'Layout': '75%', 'Switch': 'Tactile' }
    },
    {
      id: 802,
      title: 'Terra Leather Backpack',
      cat: 'Bags',
      price: 154,
      old: null,
      rating: 4.9,
      reviews: 271,
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 8,
      description: 'Full-grain leather commuter backpack.',
      specs: { 'Material': 'Leather', 'Volume': '18L' }
    },
    {
      id: 803,
      title: 'Barista Pro Espresso Machine',
      cat: 'Appliances',
      price: 289,
      old: null,
      rating: 4.9,
      reviews: 142,
      img: 'https://images.unsplash.com/photo-1517668808822-9ebe02f2a698?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebe02f2a698?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 10,
      description: '15-bar Italian pump espresso machine.',
      specs: { 'Pump': '15-Bar', 'Power': '1450W' }
    },
    {
      id: 804,
      title: 'Horizon Smartwatch Series 7',
      cat: 'Wearables',
      price: 219,
      old: null,
      rating: 4.8,
      reviews: 315,
      img: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1510017803434-a899398421b3?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 11,
      description: 'Smartwatch with ECG monitoring and OLED display.',
      specs: { 'Display': 'OLED', 'GPS': 'Dual-Band' }
    },
    {
      id: 805,
      title: 'Luxe Velvet Blazer',
      cat: 'Fashion',
      price: 175,
      old: null,
      rating: 4.9,
      reviews: 53,
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 7,
      description: 'Tailored single-breasted velvet blazer.',
      specs: { 'Material': 'Velvet', 'Fit': 'Slim' }
    },
    {
      id: 806,
      title: 'UltraHD 4K Curved Monitor',
      cat: 'Computing',
      price: 349,
      old: null,
      rating: 4.9,
      reviews: 84,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&auto=format&fit=crop&q=80'],
      tag: null,
      stock: 7,
      description: '34-inch 1500R curved 4K IPS display.',
      specs: { 'Screen': '34"', 'Resolution': '4K' }
    }
  ];

  const wishlisted = new Set();
  const cart = new Set();

  /* ---------- Render homepage offer/deal sections ---------- */
  function productCardHTML(p) {
    const oldPrice = p.old ? `<span class="price-old">$${p.old.toFixed(2)}</span>` : '';
    const tag = p.tag ? `<span class="product-tag">${p.tag}</span>` : '';
    return `
      <div class="product-card fade-in" data-id="${p.id}">
        <div class="product-media">
          ${tag}
          <button class="wish-btn" data-id="${p.id}" aria-label="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="product-info">
          <span class="product-cat">${p.cat}</span>
          <h3 class="product-title">${p.title}</h3>
          <div class="product-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} · ${p.reviews}</div>
          <div class="product-price-row">
            <div class="price-group"><span class="price">$${p.price.toFixed(2)}</span>${oldPrice}</div>
            <button class="add-cart-btn" data-id="${p.id}" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>`;
  }

  function starString(rating) {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  // 1. Today's Deals (flash sale strip - discounted items)
  const todaysDealsRow = document.getElementById('todaysDealsRow');
  if (todaysDealsRow) {
    const dealProducts = [];
    const seenTitles = new Set();
    PRODUCTS.forEach(p => {
      if (p.old && p.old > p.price && !seenTitles.has(p.title) && dealProducts.length < 6) {
        seenTitles.add(p.title);
        dealProducts.push(p);
      }
    });
    todaysDealsRow.innerHTML = dealProducts.map(p => productCardHTML(p)).join('');
  }

  // 2. New Arrivals (tagged NEW)
  const newArrivalsRow = document.getElementById('newArrivalsRow');
  if (newArrivalsRow) {
    const newProducts = [];
    const seenNew = new Set();
    PRODUCTS.forEach(p => {
      if (p.tag === 'NEW' && !seenNew.has(p.title) && newProducts.length < 6) {
        seenNew.add(p.title);
        newProducts.push(p);
      }
    });
    if (newProducts.length < 6) {
      PRODUCTS.forEach(p => {
        if (!seenNew.has(p.title) && newProducts.length < 6) {
          seenNew.add(p.title);
          newProducts.push(p);
        }
      });
    }
    newArrivalsRow.innerHTML = newProducts.map(p => productCardHTML(p)).join('');
  }

  // 3. Trending Now (compact - top 4 rated)
  const trendingCompactRow = document.getElementById('trendingCompactRow');
  if (trendingCompactRow) {
    const trendingProducts = [];
    const seenTrend = new Set();
    const sorted = [...PRODUCTS].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    for (const p of sorted) {
      if (!seenTrend.has(p.title)) {
        seenTrend.add(p.title);
        trendingProducts.push(p);
      }
      if (trendingProducts.length >= 4) break;
    }
    trendingCompactRow.innerHTML = trendingProducts.map(p => productCardHTML(p)).join('');
  }

  // Scroll arrow handlers for horizontal scroll rows
  function initScrollArrows(prevId, nextId, rowId) {
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const row = document.getElementById(rowId);
    if (prevBtn && nextBtn && row) {
      prevBtn.addEventListener('click', () => row.scrollBy({ left: -300, behavior: 'smooth' }));
      nextBtn.addEventListener('click', () => row.scrollBy({ left: 300, behavior: 'smooth' }));
    }
  }
  initScrollArrows('dealsScrollPrev', 'dealsScrollNext', 'todaysDealsRow');
  initScrollArrows('newScrollPrev', 'newScrollNext', 'newArrivalsRow');

  /* ---------- Wishlist & cart interactions (event delegation) ---------- */
  const wishBadge = document.getElementById('wishBadge');
  const cartBadge = document.getElementById('cartBadge');

  document.addEventListener('click', (e) => {
    const wishBtn = e.target.closest('.wish-btn');
    if (wishBtn) {
      const id = wishBtn.dataset.id;
      const icon = wishBtn.querySelector('i');
      if (wishlisted.has(id)) {
        wishlisted.delete(id);
        wishBtn.classList.remove('active');
        icon.className = 'fa-regular fa-heart';
      } else {
        wishlisted.add(id);
        wishBtn.classList.add('active');
        icon.className = 'fa-solid fa-heart';
      }
      if (wishBadge) wishBadge.textContent = wishlisted.size;
    }

    const cartBtn = e.target.closest('.add-cart-btn');
    if (cartBtn) {
      const id = cartBtn.dataset.id;
      cart.add(id);
      if (cartBadge) cartBadge.textContent = cart.size;
      cartBtn.classList.add('added');
      cartBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => {
        cartBtn.classList.remove('added');
        cartBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
      }, 1200);
    }
  });

  /* ---------- Ripple effect ---------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ripple');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    circle.className = 'ripple-circle';
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  });

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');
  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 40;
      navbar.classList.toggle('scrolled', scrolled);
      if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
      updateActiveNavLink();
    }, { passive: true });
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = ['home', 'shop', 'collections', 'deals', 'about', 'contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  const navLinkMap = {};
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      navLinkMap[href.slice(1)] = link;
    }
  });
  function updateActiveNavLink() {
    if (!sections.length) return;
    let current = sections[0]?.id;
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec.id; });
    Object.entries(navLinkMap).forEach(([id, link]) => link.classList.toggle('active', id === current));
  }

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    }));
  }

  /* ---------- Search panel ---------- */
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  if (searchToggle && searchPanel && searchClose && searchInput) {
    searchToggle.addEventListener('click', () => {
      searchPanel.classList.add('open');
      setTimeout(() => searchInput.focus(), 300);
    });
    searchClose.addEventListener('click', () => searchPanel.classList.remove('open'));
  }

  /* ---------- Category Bar & All Categories Dropdown ---------- */
  const allCategoriesBtn = document.getElementById('allCategoriesBtn');
  const allCategoriesPanel = document.getElementById('allCategoriesPanel');

  if (allCategoriesBtn && allCategoriesPanel) {
    function toggleCategoryPanel(show) {
      const isOpen = show !== undefined ? show : !allCategoriesPanel.classList.contains('open');
      allCategoriesPanel.classList.toggle('open', isOpen);
      allCategoriesBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    allCategoriesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCategoryPanel();
    });

    // Prevent clicks inside panel from closing it
    allCategoriesPanel.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close on click outside
    document.addEventListener('click', () => {
      if (allCategoriesPanel.classList.contains('open')) {
        toggleCategoryPanel(false);
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && allCategoriesPanel.classList.contains('open')) {
        toggleCategoryPanel(false);
        allCategoriesBtn.focus();
      }
    });
  }

  /* ---------- Dark mode toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  let savedTheme = 'light';
  try { savedTheme = window.localStorage ? (localStorage.getItem('novacart-theme') || 'light') : 'light'; } catch (err) { savedTheme = 'light'; }
  if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
        root.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
      try { localStorage.setItem('novacart-theme', isDark ? 'light' : 'dark'); } catch (err) { /* storage unavailable */ }
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.stat-num');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(el) {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  /* ---------- Scroll fade-in ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => fadeObserver.observe(el));
    document.querySelectorAll('.product-card.fade-in').forEach(el => fadeObserver.observe(el));
  }

  /* ---------- Hero parallax ---------- */
  const heroVisual = document.querySelector('.hero-visual');
  const heroSec = document.querySelector('.hero');
  if (heroVisual && heroSec && window.matchMedia('(pointer: fine)').matches) {
    heroSec.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5);
      const y = (e.clientY / innerHeight - 0.5);
      heroVisual.querySelectorAll('.floating-card').forEach(card => {
        const depth = parseInt(card.dataset.depth || 20, 10);
        card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
  }

  /* ---------- Trending carousel ---------- */
  const track = document.getElementById('carouselTrack');
  const carNext = document.getElementById('carNext');
  const carPrev = document.getElementById('carPrev');

  if (track && carNext && carPrev) {
    const trendData = [...PRODUCTS].reverse();
    const trendHTML = trendData.map(p => `
      <div class="trend-card">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="ti"><h4>${p.title}</h4><span>$${p.price.toFixed(2)}</span></div>
      </div>`).join('');
    track.innerHTML = trendHTML + trendHTML;

    let carPos = 0;
    const cardWidth = 236;
    let autoScrollTimer;

    function carouselStep(dir = 1) {
      const maxScroll = track.scrollWidth / 2;
      carPos += dir * cardWidth;
      if (carPos >= maxScroll) carPos = 0;
      if (carPos < 0) carPos = maxScroll - cardWidth;
      track.scrollTo({ left: carPos, behavior: 'smooth' });
    }

    carNext.addEventListener('click', () => { carouselStep(1); resetAutoScroll(); });
    carPrev.addEventListener('click', () => { carouselStep(-1); resetAutoScroll(); });

    function startAutoScroll() {
      autoScrollTimer = setInterval(() => carouselStep(1), 3000);
    }
    function resetAutoScroll() {
      clearInterval(autoScrollTimer);
      startAutoScroll();
    }
    startAutoScroll();
    track.addEventListener('mouseenter', () => clearInterval(autoScrollTimer));
    track.addEventListener('mouseleave', startAutoScroll);

    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; clearInterval(autoScrollTimer); }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) carouselStep(diff > 0 ? 1 : -1);
      startAutoScroll();
    }, { passive: true });
  }

  /* ---------- Countdown timer ---------- */
  const cdHours = document.getElementById('dealCdHours') || document.getElementById('cdHours');
  const cdMinutes = document.getElementById('dealCdMinutes') || document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('dealCdSeconds') || document.getElementById('cdSeconds');
  if (cdHours && cdMinutes && cdSeconds) {
    let countdownTarget = Date.now() + (5 * 3600 + 42 * 60 + 18) * 1000;
    function updateCountdown() {
      let remaining = Math.max(0, countdownTarget - Date.now());
      if (remaining <= 0) {
        countdownTarget = Date.now() + 6 * 3600 * 1000;
        remaining = 6 * 3600 * 1000;
      }
      const h = Math.floor(remaining / 3600000);
      const m = Math.floor((remaining % 3600000) / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      cdHours.textContent = String(h).padStart(2, '0');
      cdMinutes.textContent = String(m).padStart(2, '0');
      cdSeconds.textContent = String(s).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------- Testimonial slider ---------- */
  const testiTrack = document.getElementById('testiTrack');
  const testiDotsWrap = document.getElementById('testiDots');
  if (testiTrack && testiDotsWrap) {
    const testiCards = testiTrack.children.length;
    let testiIndex = 0;

    for (let i = 0; i < testiCards; i++) {
      const dot = document.createElement('span');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToTesti(i));
      testiDotsWrap.appendChild(dot);
    }
    const testiDots = testiDotsWrap.querySelectorAll('.testi-dot');

    function goToTesti(i) {
      testiIndex = i;
      testiTrack.style.transform = `translateX(-${i * 100}%)`;
      testiDots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }
    let testiTimer = setInterval(() => goToTesti((testiIndex + 1) % testiCards), 4500);
    testiTrack.parentElement.addEventListener('mouseenter', () => clearInterval(testiTimer));
    testiTrack.parentElement.addEventListener('mouseleave', () => {
      testiTimer = setInterval(() => goToTesti((testiIndex + 1) % testiCards), 4500);
    });
  }

  /* ---------- Newsletter validation ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const formMsg = document.getElementById('formMsg');
  if (newsletterForm && newsletterEmail && formMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) {
        newsletterEmail.classList.add('invalid');
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.className = 'form-msg error';
        return;
      }
      newsletterEmail.classList.remove('invalid');
      formMsg.textContent = `You're in! Confirmation sent to ${email}.`;
      formMsg.className = 'form-msg success';
      newsletterForm.reset();
    });
  }

  /* ---------- Interactive Cart Page Controls ---------- */
  const cartContainer = document.getElementById('cartItemsList');
  if (cartContainer) {
    function recalculateCart() {
      const items = cartContainer.querySelectorAll('.cart-item-card');
      let subtotal = 0;
      items.forEach(item => {
        const unitPrice = parseFloat(item.dataset.price || '0');
        const qtyVal = parseInt(item.querySelector('.qty-val').textContent, 10);
        subtotal += unitPrice * qtyVal;
      });
      const shipping = subtotal > 0 ? (subtotal > 150 ? 0 : 15.00) : 0;
      const tax = subtotal * 0.08;
      const total = subtotal + shipping + tax;

      const subEl = document.getElementById('cartSubtotal');
      const shipEl = document.getElementById('cartShipping');
      const taxEl = document.getElementById('cartTax');
      const totEl = document.getElementById('cartTotal');

      if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
      if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
      if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
      if (totEl) totEl.textContent = `$${total.toFixed(2)}`;
    }

    cartContainer.addEventListener('click', (e) => {
      const stepperBtn = e.target.closest('.qty-btn');
      if (stepperBtn) {
        const qtyVal = stepperBtn.parentElement.querySelector('.qty-val');
        let count = parseInt(qtyVal.textContent, 10);
        if (stepperBtn.classList.contains('plus')) count++;
        else if (stepperBtn.classList.contains('minus') && count > 1) count--;
        qtyVal.textContent = count;
        recalculateCart();
      }

      const removeBtn = e.target.closest('.cart-item-remove');
      if (removeBtn) {
        const itemCard = removeBtn.closest('.cart-item-card');
        itemCard.style.opacity = '0';
        itemCard.style.transform = 'scale(0.9)';
        itemCard.style.transition = 'all 0.3s';
        setTimeout(() => {
          itemCard.remove();
          recalculateCart();
          if (cartContainer.children.length === 0) {
            cartContainer.innerHTML = '<div class="empty-state" style="text-align:center; padding:3rem;"><i class="fa-solid fa-bag-shopping" style="font-size:3rem; color:var(--text-muted); margin-bottom:1rem;"></i><h3>Your cart is empty</h3><p style="color:var(--text-muted); margin:0.5rem 0 1.5rem;">Explore our collections to find products you love.</p><a href="electronics.html" class="btn btn-primary">Start Shopping</a></div>';
          }
        }, 300);
      }
    });

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        checkoutBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
        setTimeout(() => {
          checkoutBtn.innerHTML = '<i class="fa-solid fa-check"></i> Order Placed!';
          checkoutBtn.style.background = 'var(--secondary)';
          setTimeout(() => {
            window.location.href = 'orders.html';
          }, 1200);
        }, 1000);
      });
    }
  }

  /* ---------- Interactive Orders Page Accordion ---------- */
  const ordersList = document.getElementById('ordersList');
  if (ordersList) {
    ordersList.addEventListener('click', (e) => {
      const header = e.target.closest('.order-header');
      if (header) {
        const card = header.closest('.order-card');
        card.classList.toggle('open');
      }
    });
  }

  /* ---------- Interactive Wishlist Page Move/Remove ---------- */
  const wishlistGrid = document.getElementById('wishlistGrid');
  if (wishlistGrid) {
    wishlistGrid.addEventListener('click', (e) => {
      const moveBtn = e.target.closest('.move-to-cart-btn');
      if (moveBtn) {
        moveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Moved to Cart';
        moveBtn.style.background = 'var(--secondary)';
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = parseInt(badge.textContent || '0', 10) + 1;
      }
      const removeBtn = e.target.closest('.remove-wish-btn');
      if (removeBtn) {
        const card = removeBtn.closest('.product-card');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = 'all 0.3s';
        setTimeout(() => card.remove(), 300);
      }
    });
  }

  /* ---------- Filter Chips & Sort Select ---------- */
  document.querySelectorAll('.filter-chips').forEach(chipsGroup => {
    chipsGroup.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (chip) {
        chipsGroup.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }
    });
  });

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Loading...';
      setTimeout(() => {
        loadMoreBtn.innerHTML = 'All Products Loaded';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.7';
      }, 800);
    });
  }

  /* ---------- Interactive Checkout Page ---------- */
  const paymentMethods = document.querySelectorAll('.payment-method-card');
  const cardInputsGroup = document.getElementById('cardInputsGroup');

  if (paymentMethods.length) {
    paymentMethods.forEach(card => {
      card.addEventListener('click', () => {
        paymentMethods.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        if (cardInputsGroup) {
          cardInputsGroup.style.display = radio.value === 'card' ? 'block' : 'none';
        }
      });
    });
  }

  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutSection = document.getElementById('checkoutSection');

  if (checkoutForm && checkoutSection) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const placeBtn = document.getElementById('placeOrderBtn');
      if (placeBtn) {
        placeBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Placing Order...';
        placeBtn.disabled = true;
      }

      setTimeout(() => {
        checkoutSection.innerHTML = `
          <div class="confirmation-card fade-in in-view">
            <div class="confirmation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p style="color:var(--text-muted);">Thank you for your purchase. We have sent a confirmation email to your address.</p>
            <div class="order-num-badge">Order ID: #NC-2026-9948</div>
            
            <div style="background:var(--bg); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-soft); margin:1.5rem 0; text-align:left;">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.9rem;">
                <span style="color:var(--text-muted);">Delivery Estimate:</span>
                <strong>July 28, 2026</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.9rem;">
                <span style="color:var(--text-muted);">Items Purchased:</span>
                <strong>3 Items ($446.04)</strong>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
                <span style="color:var(--text-muted);">Payment Method:</span>
                <strong>Credit Card (ending 4242)</strong>
              </div>
            </div>

            <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:2rem;">
              <a href="orders.html" class="btn btn-ghost">View Order Status</a>
              <a href="index.html" class="btn btn-primary ripple">Continue Shopping <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>`;
      }, 900);
    });
  }

  /* ---------- Product Detail Page (PDP) Renderer ---------- */
  const pdpMainContainer = document.getElementById('pdpMainContainer');
  const pdpNotFoundState = document.getElementById('pdpNotFoundState');

  if (pdpMainContainer && pdpNotFoundState) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = PRODUCTS.find(p => String(p.id) === String(productId));

    if (!product) {
      pdpMainContainer.style.display = 'none';
      pdpNotFoundState.style.display = 'block';
    } else {
      document.title = `${product.title} — NovaCart`;
      pdpNotFoundState.style.display = 'none';
      pdpMainContainer.style.display = 'block';

      // Populate basic info
      document.getElementById('pdpCategory').textContent = product.cat;
      document.getElementById('pdpTitle').textContent = product.title;
      document.getElementById('pdpStars').textContent = starString(product.rating);
      document.getElementById('pdpReviewCount').textContent = `${product.rating} · ${product.reviews} customer reviews`;
      document.getElementById('pdpPrice').textContent = `$${product.price.toFixed(2)}`;

      const oldPriceEl = document.getElementById('pdpOldPrice');
      if (product.old) {
        oldPriceEl.textContent = `$${product.old.toFixed(2)}`;
        oldPriceEl.style.display = 'inline';
      } else {
        oldPriceEl.style.display = 'none';
      }

      const tagEl = document.getElementById('pdpTag');
      if (product.tag) {
        tagEl.textContent = product.tag;
        tagEl.style.display = 'inline-block';
      } else {
        tagEl.style.display = 'none';
      }

      // Stock status
      const stockEl = document.getElementById('pdpStockBadge');
      if (product.stock && product.stock <= 5) {
        stockEl.className = 'stock-badge low-stock';
        stockEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Only ${product.stock} left in stock - order soon`;
      } else {
        stockEl.className = 'stock-badge in-stock';
        stockEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> In Stock (${product.stock || 15} available)`;
      }

      // Description
      document.getElementById('pdpDescription').textContent = product.description || 'Premium quality curated item designed with modern aesthetics and top performance.';

      // Specs
      const specsGrid = document.getElementById('pdpSpecsGrid');
      if (specsGrid && product.specs) {
        specsGrid.innerHTML = Object.entries(product.specs).map(([k, v]) => `
          <div class="spec-item">
            <span class="spec-key">${k}:</span>
            <span class="spec-val">${v}</span>
          </div>
        `).join('');
      }

      // Images Gallery
      const mainImg = document.getElementById('pdpMainImg');
      const thumbList = document.getElementById('pdpThumbList');
      const galleryImgs = (product.images && product.images.length > 0) ? product.images : [product.img];

      mainImg.src = galleryImgs[0];
      mainImg.alt = product.title;

      thumbList.innerHTML = galleryImgs.map((imgUrl, i) => `
        <img src="${imgUrl}" alt="${product.title} thumb" class="pdp-thumb-img ${i === 0 ? 'active' : ''}" data-src="${imgUrl}">
      `).join('');

      thumbList.addEventListener('click', (e) => {
        const thumb = e.target.closest('.pdp-thumb-img');
        if (thumb) {
          thumbList.querySelectorAll('.pdp-thumb-img').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          mainImg.src = thumb.dataset.src;
        }
      });

      // Quantity Stepper
      const pdpQtyVal = document.getElementById('pdpQtyVal');
      const pdpQtyMinus = document.getElementById('pdpQtyMinus');
      const pdpQtyPlus = document.getElementById('pdpQtyPlus');
      let qty = 1;

      if (pdpQtyMinus && pdpQtyPlus && pdpQtyVal) {
        pdpQtyMinus.addEventListener('click', () => {
          if (qty > 1) {
            qty--;
            pdpQtyVal.textContent = qty;
          }
        });
        pdpQtyPlus.addEventListener('click', () => {
          qty++;
          pdpQtyVal.textContent = qty;
        });
      }

      // Add to Cart
      const pdpAddCartBtn = document.getElementById('pdpAddCartBtn');
      if (pdpAddCartBtn) {
        pdpAddCartBtn.addEventListener('click', () => {
          for (let i = 0; i < qty; i++) cart.add(String(product.id));
          const cartBadge = document.getElementById('cartBadge');
          if (cartBadge) cartBadge.textContent = cart.size;
          pdpAddCartBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added to Cart';
          pdpAddCartBtn.style.background = 'var(--secondary)';
          setTimeout(() => {
            pdpAddCartBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
            pdpAddCartBtn.style.background = '';
          }, 1500);
        });
      }

      // Add to Wishlist
      const pdpWishBtn = document.getElementById('pdpWishBtn');
      if (pdpWishBtn) {
        pdpWishBtn.addEventListener('click', () => {
          const icon = pdpWishBtn.querySelector('i');
          if (wishlisted.has(String(product.id))) {
            wishlisted.delete(String(product.id));
            icon.className = 'fa-regular fa-heart';
            pdpWishBtn.style.color = '';
          } else {
            wishlisted.add(String(product.id));
            icon.className = 'fa-solid fa-heart';
            pdpWishBtn.style.color = 'var(--primary)';
          }
          const wishBadge = document.getElementById('wishBadge');
          if (wishBadge) wishBadge.textContent = wishlisted.size;
        });
      }

      // Section A: Recommended For You (personalized pseudo-random catalog selection)
      const recsGrid = document.getElementById('pdpRecsGrid');
      if (recsGrid) {
        const otherProducts = PRODUCTS.filter(p => String(p.id) !== String(product.id));
        // Sort deterministically based on product ID to give each PDP a unique recommendation mix
        const recommended = [...otherProducts]
          .sort((a, b) => ((a.id * 17 + product.id * 3) % 29) - ((b.id * 17 + product.id * 3) % 29))
          .slice(0, 4);
        recsGrid.innerHTML = recommended.map(p => productCardHTML(p)).join('');
      }

      // Section B: You Might Also Like (same category with padding fallback)
      const relatedGrid = document.getElementById('pdpRelatedGrid');
      if (relatedGrid) {
        let sameCatProducts = PRODUCTS.filter(p => p.cat === product.cat && String(p.id) !== String(product.id));
        if (sameCatProducts.length < 4) {
          const fallbackProducts = PRODUCTS.filter(p => p.cat !== product.cat && String(p.id) !== String(product.id));
          sameCatProducts = sameCatProducts.concat(fallbackProducts.slice(0, 4 - sameCatProducts.length));
        }
        const related = sameCatProducts.slice(0, 4);
        relatedGrid.innerHTML = related.map(p => productCardHTML(p)).join('');
      }
    }
  }

  /* ---------- Global Product Card Navigation Listener ---------- */
  document.addEventListener('click', (e) => {
    // Exclude action buttons, inputs, links, or controls
    if (e.target.closest('.wish-btn, .add-cart-btn, .move-to-cart-btn, .remove-wish-btn, button, input, select, a')) {
      return;
    }
    const card = e.target.closest('.product-card');
    if (card && card.dataset.id) {
      const isInsidePages = window.location.pathname.includes('/pages/');
      const targetUrl = isInsidePages ? `product.html?id=${card.dataset.id}` : `pages/product.html?id=${card.dataset.id}`;
      window.location.href = targetUrl;
    }
  });

  /* ---------- Account Navbar State & Auth Logic ---------- */
  function updateNavAccountState() {
    const accountToggle = document.getElementById('accountToggle');
    const accountPanel = document.getElementById('accountPanel');
    if (!accountToggle) return;

    const storedUser = localStorage.getItem('novacart-user');
    const isInsidePages = window.location.pathname.includes('/pages/');
    const pagePrefix = isInsidePages ? '' : 'pages/';

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const initial = user.name ? user.name.trim()[0].toUpperCase() : 'U';
        
        accountToggle.innerHTML = `<span class="user-avatar-badge">${initial}</span>`;
        accountToggle.title = user.name || 'Account';

        if (accountPanel) {
          accountPanel.innerHTML = `
            <div class="account-panel-header">
              <div class="user-avatar-lg">${initial}</div>
              <div class="user-info-text">
                <strong class="user-name">${user.name || 'Shopper'}</strong>
                <span class="user-email">${user.email || ''}</span>
              </div>
            </div>
            <ul class="account-panel-menu">
              <li><a href="${pagePrefix}orders.html"><i class="fa-solid fa-box"></i> My Orders</a></li>
              <li><a href="${pagePrefix}wishlist.html"><i class="fa-regular fa-heart"></i> Wishlist</a></li>
              <li><button type="button" id="signOutBtn" class="account-menu-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out</button></li>
            </ul>`;

          const signOutBtn = accountPanel.querySelector('#signOutBtn');
          if (signOutBtn) {
            signOutBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              localStorage.removeItem('novacart-user');
              accountPanel.classList.remove('active');
              accountToggle.setAttribute('aria-expanded', 'false');
              updateNavAccountState();
            });
          }
        }
      } catch (e) {
        localStorage.removeItem('novacart-user');
        updateNavAccountState();
      }
    } else {
      accountToggle.innerHTML = `<i class="fa-regular fa-user"></i>`;
      accountToggle.title = "Sign In";
      if (accountPanel) {
        accountPanel.innerHTML = '';
        accountPanel.classList.remove('active');
      }
    }
  }

  // Account Toggle Click Handler
  const accountToggle = document.getElementById('accountToggle');
  const accountPanel = document.getElementById('accountPanel');

  if (accountToggle) {
    accountToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const storedUser = localStorage.getItem('novacart-user');
      const isInsidePages = window.location.pathname.includes('/pages/');

      if (!storedUser) {
        // Logged out: Navigate to signin.html
        window.location.href = isInsidePages ? 'signin.html' : 'pages/signin.html';
      } else if (accountPanel) {
        // Logged in: Toggle dropdown panel
        const isActive = accountPanel.classList.toggle('active');
        accountToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      }
    });
  }

  // Outside click & ESC key handler for account panel
  document.addEventListener('click', (e) => {
    if (accountPanel && accountPanel.classList.contains('active')) {
      if (!e.target.closest('.account-nav-wrapper')) {
        accountPanel.classList.remove('active');
        if (accountToggle) accountToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && accountPanel && accountPanel.classList.contains('active')) {
      accountPanel.classList.remove('active');
      if (accountToggle) accountToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Sign In & Sign Up Form Handlers ---------- */
  const togglePassBtn = document.getElementById('togglePasswordBtn');
  const signinPass = document.getElementById('signinPassword');
  if (togglePassBtn && signinPass) {
    togglePassBtn.addEventListener('click', () => {
      const type = signinPass.type === 'password' ? 'text' : 'password';
      signinPass.type = type;
      togglePassBtn.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });
  }

  const toggleSignupPassBtn = document.getElementById('toggleSignupPassBtn');
  const signupPass = document.getElementById('signupPassword');
  if (toggleSignupPassBtn && signupPass) {
    toggleSignupPassBtn.addEventListener('click', () => {
      const type = signupPass.type === 'password' ? 'text' : 'password';
      signupPass.type = type;
      toggleSignupPassBtn.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });
  }

  const toggleSignupConfirmBtn = document.getElementById('toggleSignupConfirmBtn');
  const signupConfirmPass = document.getElementById('signupConfirmPassword');
  if (toggleSignupConfirmBtn && signupConfirmPass) {
    toggleSignupConfirmBtn.addEventListener('click', () => {
      const type = signupConfirmPass.type === 'password' ? 'text' : 'password';
      signupConfirmPass.type = type;
      toggleSignupConfirmBtn.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });
  }

  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signinEmail').value.trim();
      const rawName = email.split('@')[0].replace(/[\._]/g, ' ');
      const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

      localStorage.setItem('novacart-user', JSON.stringify({ name: formattedName, email: email }));
      window.location.href = '../index.html';
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const pass = document.getElementById('signupPassword').value;
      const confirmPass = document.getElementById('signupConfirmPassword').value;
      const passErrorMsg = document.getElementById('passErrorMsg');

      if (pass !== confirmPass) {
        if (passErrorMsg) passErrorMsg.style.display = 'block';
        return;
      }
      if (passErrorMsg) passErrorMsg.style.display = 'none';

      localStorage.setItem('novacart-user', JSON.stringify({ name: name, email: email }));
      window.location.href = '../index.html';
    });
  }

  /* ---------- Initial state ---------- */
  updateNavAccountState();
  updateActiveNavLink();
});
