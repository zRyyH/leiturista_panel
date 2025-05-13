'use client';

import { formatBRL, formatCubicMeters, formatDateExtenso, formatDateMini } from '@/utils/formatters';
import { replaceEmptyAndNull } from '@/utils/normalizer';
import { useData } from '@/core/hooks/useData';

export function useConsumoUnidade() {
    const { data, loading, error } = useData({
        sort: ['-leitura_agua_fria_id.leitura_condominio_id.mes_de_referencia'],
        fields: [
            '*.*',
            '*,leitura_agua_fria_id.leitura_condominio_id.*',
            'leitura_agua_fria_id.leitura_condominio_id.condominio_id.configuracao_id.*',
        ],
        collection: 'consumos_unidades',
    });

    let consumoAgua = {}
    let consumoGas = null;

    data.forEach((info) => {
        const condo = info?.leitura_agua_fria_id?.leitura_condominio_id;
        const config = condo?.condominio_id?.configuracao_id;

        consumoAgua = {
            data_leitura_anterior: formatDateExtenso(info.leitura_agua_fria_anterior_id?.data_leitura),
            data_referencia: formatDateMini(condo.mes_de_referencia),
            data_leitura: formatDateExtenso(condo.data_da_leitura),
            data_proxima_leitura: formatDateExtenso(condo.data_da_proxima_leitura),

            leitura: formatCubicMeters(info.leitura_agua_fria_id?.leitura),
            leitura_anterior: formatCubicMeters(info.leitura_agua_fria_anterior_id?.leitura),

            consumo: formatCubicMeters(info.consumo_agua_fria + info.consumo_agua_quente),

            valor_individual: formatBRL(info.valor_individual_agua),
            valor_da_medicao: formatBRL(config.valor_da_medicao),
            valor_residual: formatBRL(info.valor_residual_agua),
            valor_total: formatBRL(info.valor_total_agua),
        }

        if (info.leitura_gas_id?.leitura) {
            consumoGas = {
                data_leitura_anterior: formatDateExtenso(info.leitura_gas_anterior_id?.data_leitura),
                data_referencia: formatDateMini(condo.mes_de_referencia),
                data_leitura: formatDateExtenso(condo.data_da_leitura),
                data_proxima_leitura: formatDateExtenso(condo.data_da_proxima_leitura),

                leitura: formatCubicMeters(info.leitura_gas_id?.leitura),
                leitura_anterior: formatCubicMeters(info.leitura_gas_anterior_id?.leitura),

                consumo: formatCubicMeters(info.consumo_gas),

                valor_individual: formatBRL(info.valor_gas),
                valor_da_medicao: formatBRL(config.valor_da_medicao),
                valor_residual: formatBRL(info.valor_gas),
                valor_total: formatBRL(info.valor_total_gas),
            }
        }
    })

    return {
        consumoAgua: replaceEmptyAndNull(consumoAgua, '-'),
        consumoGas: replaceEmptyAndNull(consumoGas, '-'),
        data: replaceEmptyAndNull(data, '-'),
        loading,
        error,
    };
}