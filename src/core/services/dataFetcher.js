import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';

export async function fetchData(collection, fields = ['*'], filter = {}, sort = [], deep = 1, limit = -1) {
    const data = await directus.request(
        readItems(collection, {
            limit,
            fields,
            filter,
            deep,
            sort
        })
    );

    return data;
}