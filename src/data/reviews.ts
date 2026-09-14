export interface Review {
  name: string;
  trip: string;
  text: string;
  avatar?: string;
  rating?: number;
  handle?: string;
  tag?: string;
}

export const SAMPLE_REVIEWS: Review[] = [
  {
    name: "Dr. Aman Verma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    trip: "Chilla Zone, Rajaji National Park",
    tag: "Chilla Morning Safari",
    rating: 5,
    text: "Spotting a herd of wild elephants crossing the dry riverbed at sunrise in Chilla was unforgettable! The gypsy driver was extraordinarily patient and knowledgeable about tracking wildlife.",
  },
  {
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    trip: "Motichur Range, Rajaji",
    tag: "Family Jeep Safari",
    rating: 5,
    text: "We booked a morning safari for our family from Haridwar. Everything was punctual, and our guide pointed out hornbills, spotted deer, and fresh leopard pugmarks. Outstanding service!",
  },
  {
    name: "Rohan & Sneha Kapoor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    trip: "Jhilmil Jheel Conservation Reserve",
    tag: "Swamp Deer Trail",
    rating: 5,
    text: "Fantastic experience from start to finish! We sighted rare Swamp Deer in the wetlands and countless migratory birds. The permit paperwork was handled completely hassle-free.",
  },
  {
    name: "Vikram Sengupta",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    trip: "Ranipur Zone, Rajaji",
    tag: "Evening Forest Drive",
    rating: 5,
    text: "Prompt communication on WhatsApp with instant gate entry confirmation. The forest silence in Ranipur was serene, and we spotted sambar deer and wild boars up close. Highly recommended!",
  },
  {
    name: "Ananya Deshmukh",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    trip: "Chilla Wali Zone, Rajaji",
    tag: "Photography Safari",
    rating: 5,
    text: "As a wildlife photographer, having a driver who understands lighting and animal patience is key. Sukoon Safari provided an expert naturalist who knew every bend of the raw Shivalik hills.",
  },
  {
    name: "Col. Rajesh Nair",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    trip: "Dhikala Zone, Corbett & Rajaji",
    tag: "Corbett Extension",
    rating: 5,
    text: "Top-notch professionalism. The gypsy was spotless, government permits verified beforehand, and our driver respected park regulations while giving us the thrilling encounter of a lifetime.",
  }
];