'use client';

import { useData } from '@/core/hooks/useData';
import { DIRECTUS } from '@/core/config/global';

export function useImages() {
    const { data, loading, error } = useData({
        fields: ['*.*.*.*.*.*'],
        collection: 'consumos_unidades',
    });

    let aguaImageCards = [];
    let gasImageCards = [];

    if (!loading) {
        data.forEach((info) => {
            const friaAnterior = info.leitura_agua_fria_id?.foto_id.id;
            const quenteAnterior = info.leitura_agua_quente_id?.foto_id.id;
            const gasAnterior = info.leitura_gas_id?.foto_id.id;
            const fria = info.leitura_agua_fria_id?.foto_id.id;
            const quente = info.leitura_agua_quente_id?.foto_id.id;
            const gas = info.leitura_gas_id?.foto_id.id;

            aguaImageCards = [
                {
                    title: 'Água Fria',
                    src: fria ? `${DIRECTUS.ASSETS_URL}${fria}` : null,
                    description: 'Consumo de água fria atual',
                },
                {
                    title: 'Água Fria',
                    src: friaAnterior ? `${DIRECTUS.ASSETS_URL}${friaAnterior}` : null,
                    description: 'Consumo de água fria anterior',
                },
                {
                    title: 'Água Quente',
                    src: quente ? `${DIRECTUS.ASSETS_URL}${quente}` : null,
                    description: 'Consumo de água quente atual',
                },
                {
                    title: 'Água Quente',
                    src: quenteAnterior ? `${DIRECTUS.ASSETS_URL}${quenteAnterior}` : null,
                    description: 'Consumo de água quente anterior',
                },
            ];

            gasImageCards = [
                {
                    title: 'Gás',
                    src: gas ? `${DIRECTUS.ASSETS_URL}${gas}` : null,
                    description: 'Consumo de gás atual',
                },
                {
                    title: 'Gás',
                    src: gasAnterior ? `${DIRECTUS.ASSETS_URL}${gasAnterior}` : null,
                    description: 'Consumo de gás anterior',
                },
            ]
        });
    };

    return {
        aguaImageCards,
        gasImageCards,
        loading,
        error,
    };
}