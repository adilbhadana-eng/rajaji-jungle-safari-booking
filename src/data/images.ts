import type { Photo } from "../lib/types";

/**
 * Local image file map — all images stored in /public/images/
 * Filename is SEO-friendly and maps 1-to-1 from the Pexels photo ID.
 * Sizes are the natural dimensions of the locally downloaded file.
 */
const LOCAL_FILENAMES: Record<number, string> = {
  15456562: "rajaji-safari-jeep-morning-trail",
  29666812: "rajaji-safari-vehicle-forest",
  35396258: "rajaji-tusker-elephant-jungle",
  35396257: "rajaji-elephant-forest-habitat",
  35671094: "rajaji-elephant-grassland",
  19546341: "rajaji-elephant-wetland-egrets",
  36530920: "rajaji-bengal-tiger-forest-path",
  30889521: "rajaji-tiger-crossing-forest",
  36785736: "rajaji-tiger-sunlit-clearing",
  32144810: "rajaji-tiger-close-jungle",
  35663756: "rajaji-tiger-forest-road",
  16444281: "rajaji-safari-jeep-group",
  16444287: "rajaji-safari-jeep-forest-track",
  34050614: "rajaji-wildlife-photographer",
  29392022: "rajaji-misty-morning-forest-road",
  4134467:  "rajaji-sal-forest-road-green",
  35151768: "rajaji-pine-mist-himalayan-hills",
  38044214: "rishikesh-ganges-sunset-hills",
  19041829: "haridwar-aerial-ganges-forest",
  17162124: "rajaji-chital-deer-meadow",
  19927601: "rajaji-chital-foggy-forest",
  11004396: "rajaji-spotted-deer-trees",
  37755073: "rajaji-deer-waterhole",
  17469081: "rajaji-leopard-fallen-logs",
  23354936: "rajaji-peacock-blue-portrait",
  37839947: "rajaji-peacocks-tree-branch",
};

/**
 * Returns the local path for a photo, ignoring the w/h params since
 * we serve a single high-res copy. The browser handles sizing via CSS.
 * Falls back to Pexels CDN for any photo not yet downloaded locally.
 */
export const photo = (p: Photo, w = 1200, _h = 800): string => {
  const localName = LOCAL_FILENAMES[p.id];
  if (localName) {
    return `/images/${localName}.webp`;
  }
  // Fallback to Pexels for any image not in local map
  return `https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.${p.ext ?? "jpeg"}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${_h}`;
};

export const PHOTOS = {
  heroJeep: {
    id: 15456562,
    ext: "jpeg",
    alt: "Jeep on a misty morning safari trail inside Rajaji National Park, Uttarakhand",
    credit: "Shantum Singh",
    width: 1680,
    height: 1050,
  },
  heroAlt: {
    id: 29666812,
    ext: "png",
    alt: "Off-road safari vehicle driving through Rajaji National Park forest",
    credit: "Shantum Singh",
    width: 1200,
    height: 800,
  },
  tuskerJungle: {
    id: 35396258,
    alt: "Tusker elephant standing in dense green jungle in Rajaji National Park",
    credit: "Sanket Mishra",
    width: 1200,
    height: 800,
  },
  elephantForest: {
    id: 35396257,
    alt: "Indian elephant moving through its forest habitat in Chilla zone, Rajaji",
    credit: "Sanket Mishra",
    width: 1200,
    height: 800,
  },
  elephantGrassland: {
    id: 35671094,
    alt: "Asian elephant walking across an open grassland in Rajaji on a sunny day",
    credit: "Sabik Nisam",
    width: 1200,
    height: 800,
  },
  elephantLake: {
    id: 19546341,
    alt: "Asian elephant standing among egrets near a wetland in Rajaji National Park",
    credit: "Andreas Schnabl",
    width: 1200,
    height: 800,
  },
  tigerPath: {
    id: 36530920,
    alt: "Bengal tiger walking along a dirt track in Rajaji National Park forest",
    credit: "Raghavendra Narayan",
    width: 1200,
    height: 800,
  },
  tigerCrossing: {
    id: 30889521,
    alt: "Bengal tiger crossing a forest path inside Rajaji National Park",
    credit: "Amey Bhavsar",
    width: 1200,
    height: 800,
  },
  tigerStride: {
    id: 36785736,
    alt: "Bengal tiger striding through a sunlit forest clearing in Rajaji",
    credit: "Jayesh Krishna Althi",
    width: 1200,
    height: 800,
  },
  tigerClose: {
    id: 32144810,
    alt: "Close view of a Bengal tiger in green jungle undergrowth inside Rajaji National Park",
    credit: "Azemat Azemat",
    width: 1200,
    height: 800,
  },
  tigerRoad: {
    id: 35663756,
    alt: "Bengal tiger walking on a forest road in Rajaji National Park safari zone",
    credit: "Pranav Chaugule",
    width: 1800,
    height: 900,
  },
  jeepGroup: {
    id: 16444281,
    alt: "Travellers preparing for a 4x4 Gypsy safari in Rajaji National Park",
    credit: "Keegan Checks",
    width: 1200,
    height: 800,
  },
  jeepLush: {
    id: 16444287,
    alt: "Safari vehicle paused on an unpaved forest road inside Rajaji National Park",
    credit: "Keegan Checks",
    width: 1200,
    height: 800,
  },
  photographer: {
    id: 34050614,
    alt: "Wildlife photographer capturing a tiger during an Indian jungle safari",
    credit: "Abhinav Goswami",
    width: 1200,
    height: 800,
  },
  mistRoad: {
    id: 29392022,
    alt: "Forest road shrouded in early morning mist in Rajaji National Park",
    credit: "Regan Dsouza",
    width: 1200,
    height: 800,
  },
  greenRoad: {
    id: 4134467,
    alt: "Narrow road winding between dense Sal forest in Rajaji National Park",
    credit: "Luis Dalvan",
    width: 1200,
    height: 800,
  },
  pineMist: {
    id: 35151768,
    alt: "Misty pine and Sal forest on a Shivalik hillside near Rajaji National Park",
    credit: "Arto Suraj",
    width: 1200,
    height: 800,
  },
  rishikeshSunset: {
    id: 38044214,
    alt: "The Ganges at Rishikesh with Shivalik mountains at sunset near Rajaji National Park",
    credit: "Ekam Juneja",
    width: 1200,
    height: 800,
  },
  haridwarAerial: {
    id: 19041829,
    alt: "Aerial view of Haridwar with the Ganges and forested Shivalik hills",
    credit: "Soubhagya Maharana",
    width: 1200,
    height: 800,
  },
  chitalMeadow: {
    id: 17162124,
    alt: "Herd of chital spotted deer walking through a forest meadow in Rajaji National Park",
    credit: "Nis Vagabond",
    width: 1200,
    height: 800,
  },
  chitalFog: {
    id: 19927601,
    alt: "Chital deer grazing in a foggy forest in Rajaji National Park",
    credit: "Sabik Nisam",
    width: 1200,
    height: 800,
  },
  chitalTrees: {
    id: 11004396,
    alt: "Spotted deer grazing under trees in Rajaji National Park forest",
    credit: "dj jog",
    width: 1200,
    height: 800,
  },
  deerWaterhole: {
    id: 37755073,
    alt: "Spotted deer drinking at a forest waterhole in Rajaji National Park",
    credit: "Aditi Patel",
    width: 1200,
    height: 800,
  },
  leopardLogs: {
    id: 17469081,
    alt: "Leopard resting on fallen logs in Rajaji National Park forest",
    credit: "Vinayak P Miskin",
    width: 1200,
    height: 800,
  },
  peacockPortrait: {
    id: 23354936,
    alt: "Close portrait of an Indian peacock with vivid blue plumage in Rajaji National Park",
    credit: "Eclipse Chasers",
    width: 1200,
    height: 800,
  },
  peacocksBranch: {
    id: 37839947,
    alt: "Two peacocks perched on a tree branch in Rajaji National Park wildlife sanctuary",
    credit: "Manish Sharma",
    width: 1200,
    height: 800,
  },
} satisfies Record<string, Photo>;
