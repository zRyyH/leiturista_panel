import { DIRECTUS } from '@/constants/global';
import directus from '@/lib/directus';
import { updateItem, readItems } from '@directus/sdk';

async function getAll() {
    const data = await directus.request(
        readItems(DIRECTUS.COLLECTIONS.LEITURAS_UNIDADES, {
            filter: {
                status: { _eq: 'pendente' },
            },
            fields: [
                '*,medidor_unidade_id.*.*',
                '*,leitura_condominio_id.condominio_id.*'
            ],
            limit: -1,
        })
    );

    console.log(data);

    return data;
}

async function getById(id) {
    const data = await directus.request(
        readItems(DIRECTUS.COLLECTIONS.LEITURAS_UNIDADES, {
            filter: {
                id: { _eq: id },
                status: { _eq: 'pendente' },
            },
            fields: ['*.*.*.*.*.*'],
            limit: -1,
        })
    );

    return data[0];
}

async function updateById(id, item) {
    const data = await directus.request(
        updateItem(DIRECTUS.COLLECTIONS.LEITURAS_UNIDADES, id, item)
    );

    return data;
}

export default {
    getAll: getAll,
    getById: getById,
    updateById: updateById
};