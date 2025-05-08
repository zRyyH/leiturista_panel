import directus from '@/lib/directus';
import { readMe } from '@directus/sdk';

export async function login(email, password) {
    await directus.login(email, password);
    return await directus.request(readMe({}));
}

export async function logout() {
    await directus.logout();
}

export async function getCurrentUser() {
    return await directus.request(readMe({}));
}

export async function tryRefresh() {
    return directus.refresh();
}