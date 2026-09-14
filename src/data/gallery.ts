import { PHOTOS } from "./images";
import type { Photo } from "../lib/types";

export interface GalleryItem {
  id: string;
  title: string;
  zoneId: "chilla" | "chilla-wali" | "ranipur" | "jhilmil-jheel" | "motichur" | "wildlife";
  zoneName: string;
  category: "Wildlife" | "Landscape" | "Safari" | "Birds";
  description: string;
  photo: Photo;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "chilla", label: "Chilla Zone" },
  { id: "chilla-wali", label: "Chilla Wali (Leopard)" },
  { id: "ranipur", label: "Ranipur Zone" },
  { id: "jhilmil-jheel", label: "Jhilmil Jheel" },
  { id: "motichur", label: "Motichur Zone" },
  { id: "wildlife", label: "Birds & Wildlife" },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "chilla-1",
    title: "Asian Elephant in Chilla",
    zoneId: "chilla",
    zoneName: "Chilla Zone",
    category: "Wildlife",
    description: "Elephants traversing the riverbed forests of Chilla during morning safari.",
    photo: PHOTOS.elephantForest,
  },
  {
    id: "chilla-wali-1",
    title: "Leopard on Forest Trail",
    zoneId: "chilla-wali",
    zoneName: "Chilla Wali",
    category: "Wildlife",
    description: "Leopard resting in the natural rocky habitat of Chilla Wali.",
    photo: PHOTOS.leopardLogs,
  },
  {
    id: "jhilmil-1",
    title: "Swamp Deer in Wetland Meadow",
    zoneId: "jhilmil-jheel",
    zoneName: "Jhilmil Jheel",
    category: "Wildlife",
    description: "The unique wetland ecosystem of Jhilmil Jheel Conservation Reserve.",
    photo: PHOTOS.chitalMeadow,
  },
  {
    id: "ranipur-1",
    title: "Forest Canopy & Wildlife in Ranipur",
    zoneId: "ranipur",
    zoneName: "Ranipur Zone",
    category: "Landscape",
    description: "Serene misty forest trails in Ranipur range of Rajaji.",
    photo: PHOTOS.chitalFog,
  },
  {
    id: "chilla-2",
    title: "4x4 Gypsy Crossing Riverbed",
    zoneId: "chilla",
    zoneName: "Chilla Zone",
    category: "Safari",
    description: "Exploring the diverse terrain of Chilla in an open 4x4 Gypsy.",
    photo: PHOTOS.heroJeep,
  },
  {
    id: "wildlife-1",
    title: "Indian Peafowl in Full Plumage",
    zoneId: "wildlife",
    zoneName: "Birds & Wildlife",
    category: "Birds",
    description: "Vibrant avian life across Rajaji's rich biodiversity belt.",
    photo: PHOTOS.peacockPortrait,
  },
  {
    id: "motichur-1",
    title: "Quiet Trails of Motichur",
    zoneId: "motichur",
    zoneName: "Motichur Zone",
    category: "Landscape",
    description: "Peaceful nature trails and sal forest canopies in Motichur.",
    photo: PHOTOS.greenRoad,
  },
  {
    id: "chilla-wali-2",
    title: "Safari Vehicle in Dense Forest",
    zoneId: "chilla-wali",
    zoneName: "Chilla Wali",
    category: "Safari",
    description: "Patient tracking and photography drive in dense forest corridors.",
    photo: PHOTOS.jeepLush,
  },
  {
    id: "jhilmil-2",
    title: "Elephant and Wetland Birds",
    zoneId: "jhilmil-jheel",
    zoneName: "Jhilmil Jheel",
    category: "Wildlife",
    description: "Wetland waterholes sustaining diverse species throughout the season.",
    photo: PHOTOS.elephantLake,
  },
  {
    id: "wildlife-2",
    title: "Peacocks on Forest Bough",
    zoneId: "wildlife",
    zoneName: "Birds & Wildlife",
    category: "Birds",
    description: "Over 300 bird species recorded in the Shivalik foothills.",
    photo: PHOTOS.peacocksBranch,
  },
  {
    id: "ranipur-2",
    title: "Deer at Woodland Waterhole",
    zoneId: "ranipur",
    zoneName: "Ranipur Zone",
    category: "Wildlife",
    description: "Spotted deer gathering at forest water sources in Ranipur.",
    photo: PHOTOS.deerWaterhole,
  },
  {
    id: "chilla-3",
    title: "Elephant Herd on Open Grassland",
    zoneId: "chilla",
    zoneName: "Chilla Zone",
    category: "Wildlife",
    description: "A herd moving through Chilla's extensive grasslands.",
    photo: PHOTOS.elephantGrassland,
  },
  {
    id: "motichur-2",
    title: "Morning Mist over Foothills",
    zoneId: "motichur",
    zoneName: "Motichur Zone",
    category: "Landscape",
    description: "Dawn light filtering through the Shivalik forest hills.",
    photo: PHOTOS.mistRoad,
  },
  {
    id: "wildlife-3",
    title: "Bengal Tiger Encounter",
    zoneId: "jhilmil-jheel",
    zoneName: "Jhilmil Jheel",
    category: "Wildlife",
    description: "Majestic tiger sighting captured in the forest undergrowth.",
    photo: PHOTOS.tigerClose,
  },
  {
    id: "safari-group-1",
    title: "Safari Expedition Start",
    zoneId: "chilla",
    zoneName: "Chilla Zone",
    category: "Safari",
    description: "Guests heading out from the forest check post with licensed guides.",
    photo: PHOTOS.jeepGroup,
  },
];
