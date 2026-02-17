export interface Tour {
    id: string;
    title: string;
    slug: string;
    country: string;
    destinations: string[];
    duration: number;
    price: number;
    image: string;
    description: string;
    shortDescription: string;
    type: string[];
    badge?: string;
    included: string[];
    notIncluded?: string[];
    itinerary: { day: number; title: string; description: string; summary?: string; image?: string }[];
    gallery?: string[];
    subtitle?: string;
    nights?: number;
    styleSummary?: string;
}
