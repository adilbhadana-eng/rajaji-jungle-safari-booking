export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export const FAQ_CATEGORIES = [
  "How to Reach",
  "Safari & Booking",
  "Wildlife & Experience",
  "Practical Info",
] as const;

export const FAQS: FAQ[] = [
  {
    q: "How do I reach Rajaji National Park from Rishikesh, Haridwar or Dehradun?",
    a: "Rajaji National Park is located along the foothills between Haridwar (≈9–28 km), Rishikesh (≈18 km) and Dehradun (≈25 km). NH-58 connects directly from Delhi (≈230 km, 5–6 hrs). Pickups from hotels, railway stations and airport are available. For detailed gate directions and distances, explore our [How to Reach Guide](/how-to-reach).",
    category: "How to Reach",
  },
  {
    q: "Which is the nearest airport and railway station to Rajaji?",
    a: "The nearest airport is Jolly Grant Airport (DED) in Dehradun, approx. 35–40 km (about an hour drive) to Chilla Gate. The main railheads are Haridwar Junction (HW) and Yog Nagari Rishikesh Railway Station. Check full transport details on our [How to Reach Page](/how-to-reach).",
    category: "How to Reach",
  },
  {
    q: "Do you arrange pickup and drop to the safari gates?",
    a: "Yes. We arrange hassle-free pickup and drop by 4×4 Gypsy or private vehicle from hotels, resorts, railway stations, and the airport across Rishikesh, Haridwar, and Dehradun. Read our [How to Reach & Pickup Guide](/how-to-reach) or contact our coordinators.",
    category: "How to Reach",
  },
  {
    q: "What does Sukoon Safari offer?",
    a: "Sukoon Safari offers wildlife and nature experiences across Rajaji National Park, including jungle safaris, tiger and leopard sightings, elephant experiences, birding, wildlife photography, nature walks, jungle walks, nature trails and Van Gujjar tribal experiences.",
    category: "Safari & Booking",
  },
  {
    q: "Which zones of Rajaji National Park do you cover?",
    a: "We facilitate safari and nature experiences across the permitted and operational zones of Rajaji National Park, subject to forest department regulations and availability.",
    category: "Safari & Booking",
  },
  {
    q: "Can I book a safari with an experienced guide and driver?",
    a: "Yes. Our experiences are conducted with experienced drivers, guides and naturalists who have extensive knowledge of Rajaji's forests and wildlife.",
    category: "Safari & Booking",
  },
  {
    q: "How can I book a Sukoon Safari experience?",
    a: "You can contact our team through WhatsApp or phone. Share your preferred date, number of guests and experience, and our team will assist you with the available options.",
    category: "Safari & Booking",
  },
  {
    q: "Do I need to book my safari in advance?",
    a: "Advance booking is recommended, especially during peak seasons, weekends and holidays. Availability is subject to park permits and forest department regulations.",
    category: "Safari & Booking",
  },
  {
    q: "Do you offer bird-watching and bird-photography tours?",
    a: "Yes. We offer dedicated birding and bird-photography experiences for visitors interested in exploring Rajaji's rich avian diversity.",
    category: "Wildlife & Experience",
  },
  {
    q: "Can I book a wildlife photography experience?",
    a: "Yes. We can arrange wildlife and bird-photography experiences with knowledgeable local guides and naturalists, subject to park rules and wildlife conditions.",
    category: "Wildlife & Experience",
  },
  {
    q: "Do you offer Van Gujjar tribal experiences?",
    a: "Yes. We offer authentic cultural experiences that introduce visitors to the heritage, lifestyle and traditions of the Van Gujjar community, with respect for local customs and community consent.",
    category: "Wildlife & Experience",
  },
  {
    q: "Is wildlife sighting guaranteed?",
    a: "No. Wildlife sightings are completely natural and cannot be guaranteed. Our team focuses on providing a knowledgeable and responsible experience while respecting wildlife and its habitat.",
    category: "Wildlife & Experience",
  },
  {
    q: "Do you provide customized wildlife experiences?",
    a: "Yes. Depending on availability and applicable park regulations, we can help plan experiences around wildlife, birding, photography, nature walks and cultural exploration.",
    category: "Wildlife & Experience",
  },
  {
    q: "What is the best time to visit Rajaji National Park?",
    a: "The ideal time depends on the experience you are looking for, such as wildlife, birding or nature exploration. Our team can help you choose the most suitable season and experience.",
    category: "Practical Info",
  },
  {
    q: "Do you follow responsible wildlife-tourism practices?",
    a: "Absolutely. We encourage responsible tourism by respecting wildlife, maintaining appropriate distances, following park regulations and promoting awareness about nature and local communities.",
    category: "Practical Info",
  },
];

/** First 5 FAQs shown on the home page */
export const HOME_FAQS: FAQ[] = FAQS.slice(0, 5);
