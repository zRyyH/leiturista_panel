'use client';

import { useData } from '@/core/hooks/useData';
import { formatCubicMeters, formatBRL, formatDateMini } from '@/utils/formatters';

export function useMetrics() {
    const { data, loading, error } = useData({
        fields: ['*.*.*.*.*.*'],
        collection: 'consumos_unidades',
    });

    const headers = [
        { key: 'id', label: 'ID' },
        { key: 'date', label: 'Data' },
        { key: 'consumption', label: 'Consumo' },
        { key: 'value', label: 'Valor' },
    ];

    const consumosAgua = [];
    const consumosGas = [];
    const rowsAgua = []
    const rowsGas = [];
    const valores = {};

    if (!loading) {
        data.forEach((info) => {
            const {
                id,
                leitura_agua_fria_id,
                leitura_gas_id,
                consumo_agua_fria,
                consumo_agua_quente,
                consumo_gas,
                valor_total_agua,
                valor_total_gas } = info;

            consumosAgua.push({
                value: consumo_agua_fria + consumo_agua_quente,
                name: formatDateMini(leitura_agua_fria_id.leitura_condominio_id.mes_de_referencia),
            });

            consumosGas.push({
                value: consumo_gas,
                name: formatDateMini(leitura_gas_id?.leitura_condominio_id.mes_de_referencia),
            });

            rowsAgua.push({
                id,
                consumption: formatCubicMeters(consumo_agua_fria + consumo_agua_quente),
                value: formatBRL(valor_total_agua),
                date: formatDateMini(leitura_agua_fria_id.leitura_condominio_id.mes_de_referencia),
            });

            rowsGas.push({
                id,
                value: formatBRL(valor_total_gas),
                date: formatDateMini(leitura_gas_id?.leitura_condominio_id.mes_de_referencia),
                consumption: formatCubicMeters(consumo_gas),
            });
        });
    }

    return {
        consumosAgua,
        consumosGas,
        rowsAgua,
        rowsGas,
        loading,
        headers,
        error,
    };
}