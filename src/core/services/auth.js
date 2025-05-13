import { readMe, readItems } from '@directus/sdk';
import { DIRECTUS } from '@/core/config/global';
import directus from '@/lib/directus';

export async function login(email, password) {
    await directus.login(email, password);
    return await directus.request(readMe({ fields: ['*.*'] }));
}

export async function logout() {
    await directus.logout();
}

export async function getCurrentUser() {
    const data = await directus.request(readMe({ fields: ['*.*'] }));
    return data;
}

export async function getUserDetails(userId) {
    const data = await directus.request(
        readItems(DIRECTUS.COLLECTIONS.RESIDENTES, {
            filter: {
                usuario_id: {
                    _eq: userId,
                }
            },
            fields: ['*.*'], limit: -1,
        })
    );
    return data[0];
}

export async function tryRefresh() {
    return directus.refresh();
}