import { PackageModel } from '@/models/package';
import { events } from '../data/events';
import { packages } from '@/data/packages';
import { products } from '../data/products';
import { ProductModel } from '@/models/product';
import { EventModel } from '@/models/event'; 

const eventsCache: EventModel[] = []; 

export const fetchEvents = async (): Promise<EventModel[]> => {
    if (eventsCache.length > 0)
    {
        console.log('returns cached events');
        return eventsCache; 
    } 
    eventsCache.push(...events);
    console.log('fetches events');
    return eventsCache;
};

export const fetchPackages = async (id: string) => {
    const pack = packages.find((p: PackageModel) => p.id === id);
    if (!pack) console.warn(`Package with id ${id} not found`);
    return pack || null;
};

export const fetchProducts = async (id: string) => {
    const product = products.find((p: ProductModel) => p.id === id);
    if (!product) console.warn(`Product with id ${id} not found`);
    return product || null;
};

// export const fetchAccessories = async (id: string) => {
//     const response = await fetch('');
//     return response.json();
// };
