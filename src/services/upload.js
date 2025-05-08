import directus from '@/lib/directus';
import { uploadFiles } from '@directus/sdk';

export async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await directus.request(uploadFiles(formData));

    return response;
}