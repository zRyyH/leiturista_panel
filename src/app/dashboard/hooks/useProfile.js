'use client';

import { useData } from '@/core/hooks/useData';

export function useConsumoUnidade() {
    const { data, loading, error } = useData({
        fields: ['*.*.*.*.*.*'],
        collection: 'unidades',
    });

    let profile = {};

    if (!loading) {
        data.forEach((info) => {
            const condo = info.condominio_id;
            const empresa = condo?.empresa_id;

            profile = {
                id: info.id,
                empresa_email: empresa.usuario_id.email,
                endereco: empresa.endereco,
                logo: empresa.foto_id.id,
                condominio: condo.nome,
                empresa: empresa.nome,
                numero: info.numero,
                bloco: info.bloco,
            };
        });
    }

    return {
        profile,
        loading,
        error,
    };
}