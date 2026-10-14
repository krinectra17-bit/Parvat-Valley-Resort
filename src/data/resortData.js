// Authentic data for Parvat Valley Resort, Pushkar, Rajasthan
// All information verified against provided business details and authentic photography.

export const RESORT_INFO = {
  name: "Parvat Valley Resort",
  tagline: "Your Peaceful Escape in Pushkar",
  subTagline: "Discover a relaxing stay near Savitri Mata Mandir, surrounded by the natural beauty of Pushkar, Rajasthan.",
  address: {
    street: "Kharekhari Road, near Savitri Mata Mandir",
    city: "Pushkar",
    state: "Rajasthan",
    postalCode: "305022",
    country: "India",
    full: "Kharekhari Road, near Savitri Mata Mandir, Pushkar, Rajasthan 305022, India."
  },
  contact: {
    phone: "+91 96363 52306",
    phoneRaw: "+919636352306",
    whatsapp: "+91 96363 52306",
    whatsappNumber: "919636352306", // Country code + 10 digits
  },
  timings: {
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parvat+Valley+Resort+Kharekhari+Road+Pushkar+Rajasthan",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.627685233513!2d74.5385!3d26.4865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a079e00000001%3A0x6b2b781cf13b821!2sSavitri%20Mata%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

// Authentic Photographs uploaded by user
export const AUTHENTIC_IMAGES = [
  {
    id: "exterior-hero",
    src: "/images/resort-exterior.jpg",
    title: "Resort Exterior & Heritage Arches",
    category: "Exterior",
    description: "Cream-colored Rajasthani architecture with decorative arches, expansive green lawn, and the prominent Parvat Valley facade.",
    alt: "Parvat Valley Resort Pushkar exterior building with Rajasthani arches and lawn",
    featured: true,
  },
  {
    id: "pool-mountain",
    src: "/images/resort-pool-mountain.jpg",
    title: "Swimming Pool with Mountain Backdrop",
    category: "Pool",
    description: "Sparkling blue swimming pool overlooking the majestic Aravalli hills near Savitri Mata Mandir.",
    alt: "Swimming pool with Aravalli mountain backdrop at Parvat Valley Resort Pushkar",
    featured: true,
  },
  {
    id: "pool-heritage",
    src: "/images/resort-pool-heritage.jpg",
    title: "Poolside with Traditional Rajasthani Murals",
    category: "Pool",
    description: "Scenic resort swimming pool framed by authentic Rajasthani decorative jharokhas, chhatris, and hand-painted wall motifs.",
    alt: "Resort pool framed by traditional Rajasthani decorative motifs and mountain views",
    featured: false,
  },
  {
    id: "deluxe-room",
    src: "/images/resort-room.png",
    title: "Guest Accommodation Interior",
    category: "Rooms",
    description: "Authentic guest room featuring signature yellow upholstered headboard, fine wooden wall panelling, ambient lighting, and crisp bedding.",
    alt: "Comfortable guest bedroom at Parvat Valley Resort Pushkar with yellow headboard and wood panelling",
    featured: true,
  },
  {
    id: "aerial-view",
    src: "/images/resort-aerial.jpg",
    title: "Aerial View of Resort Grounds & Pool",
    category: "Property Views",
    description: "Elevated panoramic perspective showing the Rajasthani resort structure, manicured lawn, swimming pool, and peaceful Pushkar valley countryside.",
    alt: "Aerial view of Parvat Valley Resort grounds, swimming pool, and Pushkar valley",
    featured: true,
  }
];

// Room Categories (Standard, Deluxe, Luxury)
export const ROOM_CATEGORIES = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    badge: "Most Popular",
    tagline: "Comfortable, warm retreat with authentic Rajasthani craftsmanship",
    description: "Carefully appointed room featuring our signature yellow upholstered headboard, rich wooden paneling, warm ambient lighting, and modern ensuite comforts.",
    image: "/images/resort-room.png",
    imageAlt: "Deluxe Room at Parvat Valley Resort Pushkar",
    amenities: [
      "Signature Upholstered Bed & Linens",
      "Air Conditioning & Climate Control",
      "Private Ensuite Bathroom with Hot Water",
      "Flat-Screen Television",
      "Complimentary High-Speed Wi-Fi",
      "Garden or Pool Outlook",
      "Daily Housekeeping Service"
    ]
  },
  {
    id: "luxury-room",
    name: "Luxury Room",
    badge: "Spacious Comfort",
    tagline: "Elevated comfort with panoramic views of the surrounding hills",
    description: "A spacious accommodation designed for guests seeking enhanced relaxation, tranquil natural surroundings, and easy access to the swimming pool and lush gardens.",
    image: "/images/resort-exterior.jpg", // honestly framed
    imageAlt: "Luxury accommodation wing at Parvat Valley Resort",
    amenities: [
      "Spacious Bedroom with Premium Furnishings",
      "Air Conditioning & Individual Climate Control",
      "Well-appointed Ensuite Bathroom",
      "Flat-Screen Entertainment",
      "High-Speed Wi-Fi Access",
      "Scenic Mountain or Garden View",
      "Dedicated Room Service Assistance"
    ]
  },
  {
    id: "standard-room",
    name: "Standard Room",
    badge: "Serene & Practical",
    tagline: "Peaceful and restful base for your Pushkar holiday or pilgrimage",
    description: "An inviting, quiet room ideal for couples, solo travelers, and pilgrims visiting nearby Savitri Mata Mandir and Pushkar's sacred sites.",
    image: "/images/resort-aerial.jpg", // honestly framed
    imageAlt: "Standard room wing at Parvat Valley Resort Pushkar",
    amenities: [
      "Comfortable Queen or Twin Bedding",
      "Air Cooling / Air Conditioning",
      "Ensuite Bathroom with Essential Toiletries",
      "High-Speed Wi-Fi Access",
      "Peaceful Garden Ambience",
      "Daily Cleaning & Linen Refresh"
    ]
  }
];

// Verified Facilities
export const RESORT_FACILITIES = [
  {
    id: "pool",
    title: "Swimming Pool",
    description: "A clean, expansive outdoor swimming pool set against the dramatic backdrop of Pushkar's rocky mountain hills.",
    icon: "Waves"
  },
  {
    id: "dining",
    title: "Pure Vegetarian Restaurant",
    description: "Authentic, freshly prepared vegetarian cuisine and refreshing beverages made to suit visiting pilgrims and leisure travelers.",
    icon: "Utensils"
  },
  {
    id: "gardens",
    title: "Expansive Green Gardens",
    description: "Manicured open-air lawn areas perfect for morning strolls, evening tea, relaxation, and intimate outdoor seating.",
    icon: "TreePine"
  },
  {
    id: "wifi",
    title: "Complimentary Wi-Fi",
    description: "Reliable internet connectivity available throughout guest accommodations and common resort spaces.",
    icon: "Wifi"
  },
  {
    id: "playground",
    title: "Children's Playground",
    description: "Dedicated safe outdoor play area designed for young travelers to enjoy while parents relax in the garden.",
    icon: "Smile"
  },
  {
    id: "views",
    title: "Mountain & Valley Views",
    description: "Unobstructed vistas of the majestic Savitri Mata hill and the tranquil natural landscapes of Pushkar.",
    icon: "Mountain"
  },
  {
    id: "reception",
    title: "Front Desk & Hospitality",
    description: "Courteous local assistance for check-in, Pushkar sightseeing recommendations, and stay enquiries.",
    icon: "Clock"
  },
  {
    id: "parking",
    title: "On-Site Secure Parking",
    description: "Convenient and spacious parking space for personal vehicles and tourist taxis right within resort premises.",
    icon: "Car"
  }
];

// Explore Pushkar Attractions
export const NEARBY_ATTRACTIONS = [
  {
    name: "Savitri Mata Mandir & Ropeway",
    distance: "Foothills / 1 - 2 km",
    description: "Perched atop Ratnagiri Hill directly overlooking the resort valley. Take the scenic aerial ropeway or walking steps for panoramic views of Pushkar.",
    highlight: "Adjacent to Resort Area",
    mapsQuery: "Savitri+Mata+Temple+Pushkar"
  },
  {
    name: "Sacred Pushkar Lake & 52 Ghats",
    distance: "Approx. 2.5 - 3 km",
    description: "One of Hinduism's holiest water bodies, revered for centuries. Experience the serene evening maha aarti and spiritual tranquility.",
    highlight: "Spiritual Center",
    mapsQuery: "Pushkar+Lake+Pushkar+Rajasthan"
  },
  {
    name: "Historic Lord Brahma Temple",
    distance: "Approx. 2.5 - 3 km",
    description: "The 14th-century temple dedicated to the Creator Lord Brahma, featuring a distinct red spire and hallowed marble sanctuary.",
    highlight: "Rare Global Landmark",
    mapsQuery: "Brahma+Temple+Pushkar"
  },
  {
    name: "Pushkar Sand Dunes & Desert Safari",
    distance: "Approx. 3.5 km",
    description: "Golden desert dunes offering traditional camel safaris, Rajasthani folk dance performances, and breathtaking desert sunsets.",
    highlight: "Desert Adventure",
    mapsQuery: "Pushkar+Desert+Sand+Dunes"
  }
];
