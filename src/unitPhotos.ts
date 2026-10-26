// One photo per unit. Logistics, Ads and Foodworks are Unsplash (free licence, no credit
// required): OYtFO_heZ1Y, CGpifH3FjOA, yvzzemH8-J0.
import logistics from './assets/photos/logistics.webp';
import ads from './assets/photos/ads.webp';
import garage from './assets/photos/mpv.webp';
import foodworks from './assets/photos/foodworks.webp';
import type { UnitSlug } from './i18n';

export const unitPhotos: Record<UnitSlug, ImageMetadata> = { logistics, ads, garage, foodworks };

// 'Tachi Logistics' -> 'logistics'
export const slugOf = (name: string) => name.split(' ')[1].toLowerCase() as UnitSlug;

// Page path for a unit in a language, e.g. ('en', 'ads') -> '/en/ads/'.
export const unitHref = (lang: 'id' | 'en', slug: UnitSlug) => `${lang === 'id' ? '' : '/en'}/${slug}/`;
