import { PHOTOS } from "./images";
import type { Photo } from "../lib/types";

export interface SafariZone {
  id: string;
  name: string;
  blurb: string;
  detail: string;
  location: string;
  distances: string;
  mapQuery: string;
  trackLength: string;
  terrain: string;
  keyWildlife: string[];
  duration: string;
  season: string;
  bestFor: string[];
  photo: Photo;
  popular?: boolean;
}

export const RAJAJI_ZONES: SafariZone[] = [
  {
    id: "jhilmil-jheel",
    name: "Jhilmil Jheel Zone",
    blurb: "A rare conservation wetland reserve housing the endangered Swamp Deer (Barasingha), tigers, and rich aquatic birdlife.",
    detail: "A globally significant 3,783-hectare community conservation wetland along the Ganga floodplains. Jhilmil Jheel is the only habitat in Uttarakhand supporting the endangered Northern Swamp Deer (Barasingha). It is also home to tigers, leopards, wild elephants, otters, and thousands of winter migratory waterfowl.",
    location: "Ransoo / Tantwala Gate, Laksar Road, Haridwar District",
    distances: "22 km from Haridwar · 42 km from Rishikesh · 68 km from Dehradun",
    mapQuery: "Jhilmil+Jheel+Conservation+Reserve+Uttarakhand",
    trackLength: "30 km wetland & meadow loop",
    terrain: "Riverine wetlands, tall reed grasslands, oxbow lakes, and marshlands",
    keyWildlife: ["Swamp Deer (Barasingha)", "Royal Bengal Tigers", "Asian Elephants", "Smooth-coated Otters", "Migratory Birds"],
    duration: "2–5 hours",
    season: "15 October – 30 June",
    bestFor: ["Swamp Deer (Barasingha)", "Birdwatching & Photography", "Tiger & Leopard Territory"],
    photo: PHOTOS.chitalMeadow,
    popular: true,
  },
  {
    id: "ranipur",
    name: "Ranipur Zone",
    blurb: "Rugged rocky Shivalik terrain closest to Haridwar, known for leopard movements, raptor birding, and nilgai.",
    detail: "Located right on the southwestern fringes of Haridwar near the BHEL township, Ranipur offers dramatic rocky landscapes and steep forested hills. It serves as a crucial wildlife corridor connecting Shivalik hills, with frequent sightings of nilgai (blue bull), sambar deer, leopards, and over 150 species of resident and migratory birds.",
    location: "Ranipur Gate, Near BHEL Sector / Shivalik Nagar, Haridwar",
    distances: "8 km from Haridwar Railway Station · 32 km from Rishikesh · 52 km from Dehradun",
    mapQuery: "Ranipur+Gate+Rajaji+National+Park+Haridwar",
    trackLength: "24 km hill & valley track",
    terrain: "Rugged foothills, mixed scrub forests, and rocky cliffside tracks",
    keyWildlife: ["Leopards", "Nilgai (Blue Bull)", "Chowsingha (Four-horned Antelope)", "Porcupines", "Vultures & Eagles"],
    duration: "2–4 hours",
    season: "15 November – 15 June",
    bestFor: ["Close to Haridwar", "Nilgai & Deer", "Rugged Hill Safari"],
    photo: PHOTOS.leopardLogs,
    popular:true
  },
  {
    id: "chilla",
    name: "Chilla Zone",
    blurb: "Rajaji's most celebrated wildlife safari zone with high elephant density and scenic Ganga riverbed views.",
    detail: "Spanning across diverse grassland and mixed deciduous forests, Chilla is the primary safari gateway in Rajaji National Park. Its 36-kilometre circular safari track passes through dry riverbeds (Raus), freshwater waterholes, and dense Sal canopies, offering the highest probability of spotting wild elephant herds, sambar, barking deer, and varied bird species.",
    location: "Chilla Entry Gate, Near Chilla Barrage, Ganga River East Bank, Pauri Garhwal Road",
    distances: "12 km from Haridwar · 18 km from Rishikesh · 45 km from Dehradun",
    mapQuery: "Chilla+Range+Rajaji+National+Park+Gate",
    trackLength: "36 km wilderness route",
    terrain: "Open grasslands, dry riverbeds (Rau), and dense Sal forest",
    keyWildlife: ["Asian Elephants", "Spotted Deer (Chital)", "Sambar", "Wild Boar", "King Cobras", "Peafowl & Hornbills"],
    duration: "2–4 hours",
    season: "15 November – 15 June",
    bestFor: ["Classic Wildlife Safari", "Asian Elephants", "First-time Visitors"],
    photo: PHOTOS.elephantForest,
    popular: true,
  },
  {
    id: "chilla-wali",
    name: "Chilla Wali",
    blurb: "A specialized trail renowned for leopard photography, Shivalik ridge lookouts, and tranquil deep jungle tracks.",
    detail: "A specialized route branching off the Chilla-Gohri forest belt, Chilla Wali winds deeper into rocky Shivalik contours and secluded ravine ridges. Preferred by serious wildlife photographers and naturalists for leopard tracking, macro biodiversity, and serene off-the-beaten-path safari drives.",
    location: "Chilla-Gohri Forest Sector, Access via Chilla Gate, Haridwar-Rishikesh Link",
    distances: "14 km from Haridwar · 20 km from Rishikesh · 48 km from Dehradun",
    mapQuery: "Chilla+Forest+Rest+House+Rajaji",
    trackLength: "28 km ridge & ravine trail",
    terrain: "Rocky Shivalik ridges, undulating slopes, and secluded stream valleys",
    keyWildlife: ["Leopards", "Barking Deer (Kakar)", "Goral", "Yellow-Throated Marten", "Raptors & Owls"],
    duration: "2–4 hours",
    season: "15 November – 15 June",
    bestFor: ["Leopard Photography", "Wildlife Observation", "Scenic Ridge Views"],
    photo: PHOTOS.jeepLush,
  },
  {
    id: "motichur",
    name: "Motichur Zone",
    blurb: "Serene towering Sal tree corridors along NH-58, ideal for birdwatching, peaceful drives, and elephant sightings.",
    detail: "Situated directly along the Dehradun-Haridwar national highway, Motichur is characterized by towering old-growth Sal canopies, quiet forest trails, and freshwater streams. It is an integral corridor for elephant migration between Rajaji and Corbett landscapes, providing a calm, crowds-free jungle experience.",
    location: "Motichur Gate, NH-58 Haridwar-Rishikesh Highway, Near Raiwala",
    distances: "9 km from Haridwar · 14 km from Rishikesh · 38 km from Dehradun",
    mapQuery: "Motichur+Gate+Rajaji+National+Park",
    trackLength: "26 km Sal forest corridor",
    terrain: "Towering ancient Sal canopies, perennial forest streams, and flat tracks",
    keyWildlife: ["Asian Elephants", "Spotted Deer", "Indian Crested Porcupine", "Langurs & Rhesus Macaques", "Jungle Fowl"],
    duration: "2–4 hours",
    season: "15 November – 15 June",
    bestFor: ["Peaceful Forest Experience", "Tall Sal Tree Canopies", "Quick Highway Access"],
    photo: PHOTOS.heroAlt,
  },
];
