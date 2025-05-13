'use client';

import { useData } from '@/core/hooks/useData';

export function useMetrics() {
    const { data, loading, error } = useData({
        fields: ['*.*.*.*.*.*'],
        collection: 'unidades',
    });

    const consumos = [
        {
            value: 100,
            name: '2023-10-01',
        },
        {
            value: 200,
            name: '2023-10-02',
        },
        {
            value: 300,
            name: '2023-10-03',
        },
        {
            value: 400,
            name: '2023-10-04',
        },
    ];

    const headers = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nome' },
        { key: 'description', label: 'Descrição' },
        { key: 'value', label: 'Valor' },
        { key: 'date', label: 'Data' },
    ];

    const rows = [
        { id: 1, name: 'Consumo 1', description: 'Descrição 1', value: 100, date: '2023-10-01' },
        { id: 2, name: 'Consumo 2', description: 'Descrição 2', value: 200, date: '2023-10-02' },
        { id: 3, name: 'Consumo 3', description: 'Descrição 3', value: 300, date: '2023-10-03' },
        { id: 4, name: 'Consumo 4', description: 'Descrição 4', value: 400, date: '2023-10-04' },
    ]

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
        consumos,
        profile,
        loading,
        headers,
        error,
        rows,
    };
}