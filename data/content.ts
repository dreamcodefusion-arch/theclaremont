export const hotelInfo = {
  name: "The Claremont",
  tagline: "Where the Hills Hold Still",
  brandStatement:
    "The Claremont is a boutique hill retreat in Kasauli, Himachal Pradesh, where pine-forested calm meets curated comfort. Here, mornings open with mountain air on your balcony, and evenings glow with the warmth of Himalayan sunsets.",
  location: "Kimmughat, Kasauli, Himachal Pradesh",
  address: "Kimmughat, Near Dochi–Jabli Road, Kasauli, Himachal Pradesh 173204",
  phone: "+91 98765 43210",
  email: "stay@theclaremontKasauli.com",
  whatsapp: "+91 98765 43210",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
};

export const heroHeadlines = [
  { main: "Where the Hills Hold Still", sub: "A boutique mountain retreat in the pine forests of Kasauli." },
  { main: "Your Balcony. The Hills. Nothing Else.", sub: "Curated comfort in the calm of Kasauli." },
  { main: "Quiet Peaks, Warm Rooms", sub: "Premium stays in the heart of Himachal's most serene town." },
];

export const rooms = [
  {
    id: "luxury-room",
    name: "Luxury Room",
    subtitle: null,
    tagline: "Refined Comfort in the Hills",
    description:
      "Thoughtfully designed for guests who value quiet luxury and impeccable service. Sink into deep comfort with interiors that bring the calm of Kasauli indoors — warm tones, curated furnishings, and attentive housekeeping daily.",
    features: ["King Bed", "Hill-facing View", "En-suite Bathroom", "Daily Housekeeping", "Free Wi-Fi", "Room Service"],
    occupancy: "2 Adults",
    gradient: "from-amber-900 via-stone-800 to-amber-950",
    accentHex: "#B8935A",
    featured: false,
    cta: "Enquire for Luxury Room",
  },
  {
    id: "royal-room-balcony",
    name: "Royal Room",
    subtitle: "with Balcony",
    tagline: "Wake Up to the Sound of the Hills",
    description:
      "Step onto your private balcony and let the Kasauli hills greet you every morning. Spacious, serene, and genuinely special — this room was designed for those who came to breathe, rest, and feel the hills.",
    features: ["King Bed", "Private Balcony", "Panoramic Hill View", "Sitting Area", "En-suite Bathroom", "Free Wi-Fi"],
    occupancy: "2 Adults",
    gradient: "from-green-950 via-emerald-900 to-pine-dark",
    accentHex: "#4A6741",
    featured: true,
    cta: "Enquire for Royal Room",
  },
  {
    id: "business-room-balcony",
    name: "Business Room",
    subtitle: "with Balcony",
    tagline: "Focus by Day, Calm by Evening",
    description:
      "Designed for the discerning traveler who needs clarity by day and calm by evening. A dedicated work desk, strong Wi-Fi, and a private balcony with hill views make this room a productive retreat.",
    features: ["Queen Bed", "Private Balcony", "Work Desk", "High-Speed Wi-Fi", "En-suite Bathroom", "Daily Housekeeping"],
    occupancy: "2 Adults",
    gradient: "from-slate-800 via-slate-700 to-slate-900",
    accentHex: "#8B9EA8",
    featured: false,
    cta: "Enquire for Business Room",
  },
];

export const amenities = [
  {
    id: "wifi",
    name: "Free Wi-Fi",
    microcopy: "Stay connected on your terms. High-speed internet throughout the property — fast enough to work, quiet enough to forget about it.",
    icon: "wifi",
  },
  {
    id: "parking",
    name: "Free Parking",
    microcopy: "Arrive and settle in without a second thought. Complimentary self-parking for all guests, right at the property.",
    icon: "car",
  },
  {
    id: "restaurant",
    name: "In-House Restaurant",
    microcopy: "Start your mornings right. Our restaurant serves a curated menu with regional flavors and fresh ingredients — comfort food at altitude.",
    icon: "restaurant",
  },
  {
    id: "housekeeping",
    name: "Daily Housekeeping",
    microcopy: "A fresh, well-made space every morning. Our team ensures your room always feels like the first night — turned down, tidy, and welcoming.",
    icon: "sparkles",
  },
  {
    id: "frontdesk",
    name: "24-Hour Front Desk",
    microcopy: "We're always here when you need us. Our team is on hand around the clock to assist with anything — from itineraries to early check-in requests.",
    icon: "clock",
  },
  {
    id: "balcony",
    name: "Balcony Views",
    microcopy: "Select rooms feature private balconies overlooking the Kasauli hills — the perfect spot for a quiet morning with tea and a view that does the talking.",
    icon: "mountain",
  },
];

export const attractions = [
  {
    id: "manki-point",
    name: "Manki Point",
    distance: "~3 km",
    type: "Nature & Viewpoint",
    description:
      "The highest accessible point in Kasauli, offering sweeping 360° views of the Shivalik Hills and the Indo-Gangetic plains stretching below. A must-visit for any Kasauli guest.",
    gradient: "from-sky-900 to-blue-950",
  },
  {
    id: "gilbert-trail",
    name: "Gilbert Nature Trail",
    distance: "~2 km",
    type: "Trek & Nature Walk",
    description:
      "A serene forest trail winding through deodar cedar and pine trees, ideal for early morning walks, birdwatching, and quiet moments with the mountains.",
    gradient: "from-emerald-900 to-green-950",
  },
  {
    id: "shirdi-sai-baba",
    name: "Shirdi Sai Baba Mandir",
    distance: "~4 km",
    type: "Spiritual",
    description:
      "A beautifully maintained temple nestled in the hills, drawing visitors who seek peace, reflection, and a moment of quiet spirituality amid Kasauli's natural beauty.",
    gradient: "from-orange-900 to-amber-950",
  },
  {
    id: "central-research-institute",
    name: "Central Research Institute",
    distance: "~3.5 km",
    type: "Heritage & Culture",
    description:
      "One of India's oldest biomedical research institutes, housed in a charming colonial-era campus. The grounds are open for guided walks through its historic architecture.",
    gradient: "from-stone-800 to-stone-900",
  },
  {
    id: "krishna-bhavan",
    name: "Krishna Bhavan Mandir",
    distance: "~5 km",
    type: "Spiritual",
    description:
      "A tranquil hilltop temple offering a calm spiritual experience and beautiful views of the surrounding pine forests and distant mountain ridges.",
    gradient: "from-violet-900 to-purple-950",
  },
];

export const gallery = [
  { id: 1, label: "Morning Mist Over the Hills", aspect: "tall", gradient: "from-slate-600 via-blue-900 to-green-950" },
  { id: 2, label: "Balcony Sunrise View", aspect: "wide", gradient: "from-orange-900 via-amber-800 to-rose-900" },
  { id: 3, label: "Pine Forest Trail", aspect: "square", gradient: "from-emerald-900 via-green-800 to-green-950" },
  { id: 4, label: "Royal Room Interior", aspect: "wide", gradient: "from-amber-900 via-stone-700 to-amber-950" },
  { id: 5, label: "Valley View at Dusk", aspect: "tall", gradient: "from-indigo-900 via-purple-800 to-rose-900" },
  { id: 6, label: "Hotel Exterior at Dawn", aspect: "square", gradient: "from-stone-700 via-green-900 to-stone-900" },
  { id: 7, label: "Balcony Morning Light", aspect: "square", gradient: "from-amber-700 via-yellow-800 to-orange-900" },
  { id: 8, label: "Pine Canopy Walk", aspect: "tall", gradient: "from-green-800 via-emerald-700 to-teal-900" },
  { id: 9, label: "Misty Kasauli Evening", aspect: "wide", gradient: "from-slate-700 via-blue-800 to-indigo-900" },
];

export const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    origin: "New Delhi",
    rating: 5,
    text: "The balcony view at The Claremont was worth every penny. We sat with morning chai watching mist roll over the hills — one of those travel moments you don't forget.",
    roomType: "Royal Room with Balcony",
    date: "November 2024",
  },
  {
    id: 2,
    name: "Vikram & Priya Menon",
    origin: "Chandigarh",
    rating: 5,
    text: "Exceptionally clean, well-maintained property with incredibly warm staff. The restaurant food was simple and delicious. Perfect for a quick, calming Kasauli escape.",
    roomType: "Luxury Room",
    date: "October 2024",
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    origin: "Mumbai",
    rating: 5,
    text: "Came for a workcation and couldn't have chosen better. The Business Room had strong Wi-Fi, a good desk, and a stunning balcony view to reset between calls.",
    roomType: "Business Room with Balcony",
    date: "December 2024",
  },
  {
    id: 4,
    name: "Meera & Arjun Rajput",
    origin: "Jaipur",
    rating: 5,
    text: "The Claremont gave us exactly what we were looking for — quiet, comfortable, and beautifully surrounded. The staff helped plan our Manki Point visit. Brilliant weekend.",
    roomType: "Royal Room with Balcony",
    date: "September 2024",
  },
];

export const faqs = [
  {
    q: "Where exactly is The Claremont located?",
    a: "The Claremont is located in the Kimmughat area, on the Dochi–Jabli side of Kasauli, Himachal Pradesh. Nestled among pine forests with scenic hill views, it is well connected by road from Chandigarh (approx. 65 km) and Shimla.",
  },
  {
    q: "What room types are available?",
    a: "We offer three room categories: the Luxury Room, the Royal Room with Balcony, and the Business Room with Balcony. All rooms are thoughtfully designed with comfort and natural aesthetics in mind.",
  },
  {
    q: "Is free parking available at the hotel?",
    a: "Yes, complimentary self-parking is available for all guests for the duration of their stay.",
  },
  {
    q: "Is Wi-Fi available throughout the property?",
    a: "Yes, high-speed free Wi-Fi is available throughout the property — in all rooms, common areas, and the in-house restaurant.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be arranged subject to availability — please contact us in advance.",
  },
  {
    q: "What nearby attractions can guests visit?",
    a: "Kasauli has wonderful spots close by: Manki Point (panoramic viewpoint), Gilbert Nature Trail (forest walk), Shirdi Sai Baba Mandir, Central Research Institute (heritage campus), and Krishna Bhavan Mandir. Our team is happy to help plan day excursions.",
  },
  {
    q: "Is The Claremont suitable for a peaceful weekend getaway?",
    a: "Absolutely. The property is designed around tranquility — no loud commercial areas, peaceful natural surroundings, and rooms that invite you to slow down. It is ideal for couples, families, solo travelers, and anyone seeking a calming hill retreat.",
  },
  {
    q: "Does the hotel have an in-house restaurant?",
    a: "Yes. Our restaurant is open for breakfast, lunch, and dinner, offering a menu that blends regional dishes with familiar favorites, all prepared fresh daily.",
  },
];

export const ctaCopy = [
  "Reserve Your Hill Retreat",
  "Book Your Stay at The Claremont",
  "Check Room Availability",
  "Plan Your Kasauli Escape",
];

export const trustItems = [
  { label: "Free Parking", icon: "car" },
  { label: "Free Wi-Fi", icon: "wifi" },
  { label: "Restaurant", icon: "restaurant" },
  { label: "Scenic Balconies", icon: "mountain" },
  { label: "24-hr Front Desk", icon: "clock" },
];
