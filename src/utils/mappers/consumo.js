import { formatarMesReferencia, formatarData } from '../data';
import { DASHBOARD } from '@/core/config/global';

const fmtBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const formatMetro = v => v != null ? `${v} m³` : DASHBOARD.NO_DATA;
const formatCurrency = v => v != null ? fmtBRL.format(v) : DASHBOARD.NO_DATA;

export function mapConsumoAgua(registros) {
    return registros.map(r => {
        const totalAgua = (r.consumo_agua_fria ?? 0) + (r.consumo_agua_quente ?? 0);
        const mesRef = r.leitura_agua_fria_id?.leitura_condominio_id.mes_de_referencia;
        const dataLeituraAtual = r.leitura_agua_fria_id?.leitura_condominio_id.data_da_leitura;
        const proximaLeitura = r.leitura_agua_fria_id?.leitura_condominio_id.data_da_proxima_leitura;

        return {
            consumo: formatMetro(totalAgua),
            mes_referencia: mesRef != null ? formatarMesReferencia(mesRef) : DASHBOARD.NO_DATA,
            data_leitura_atual: dataLeituraAtual != null ? formatarData(dataLeituraAtual) : DASHBOARD.NO_DATA,
            proxima_leitura: proximaLeitura != null ? formatarData(proximaLeitura) : DASHBOARD.NO_DATA,
            leitura: `Fria: ${formatMetro(r.leitura_agua_fria_id?.leitura)} Quente: ${formatMetro(r.leitura_agua_quente_id?.leitura)}`,
            leitura_anterior: `Fria: ${formatMetro(r.leitura_agua_fria_anterior_id?.leitura)} Quente: ${formatMetro(r.leitura_agua_quente_anterior_id?.leitura)}`,
            fotos: [
                {
                    id: 1,
                    src: r.leitura_agua_fria_id?.foto_id.id,
                    description: 'Água Fria',
                    title: 'Leitura Atual',
                },
                {
                    id: 2,
                    src: r.leitura_agua_quente_id?.foto_id.id,
                    description: 'Água Quente',
                    title: 'Leitura Atual',
                },
                {
                    id: 3,
                    src: r.leitura_agua_fria_anterior_id?.foto_id.id,
                    description: 'Água Fria',
                    title: 'Leitura Anterior',
                },
                {
                    id: 4,
                    src: r.leitura_agua_quente_anterior_id?.foto_id.id,
                    description: 'Água Quente',
                    title: 'Leitura Anterior',
                },
            ],
            valor_residual: formatCurrency(r.valor_residual_agua),
            valor_individual: formatCurrency(r.valor_individual_agua),
            valor_total: formatCurrency(r.valor_total_agua),
        };
    });
}

export function mapConsumoGas(registros) {
    return registros.map(r => {
        const mesRef = r.leitura_gas_id?.leitura_condominio_id.mes_de_referencia;
        const dataLeituraAtual = r.leitura_gas_id?.leitura_condominio_id.data_da_leitura;
        const proximaLeitura = r.leitura_gas_id?.leitura_condominio_id.data_da_proxima_leitura;

        return {
            consumo: formatMetro(r.consumo_gas),
            mes_referencia: mesRef != null ? formatarMesReferencia(mesRef) : DASHBOARD.NO_DATA,
            data_leitura_atual: dataLeituraAtual != null ? formatarData(dataLeituraAtual) : DASHBOARD.NO_DATA,
            proxima_leitura: proximaLeitura != null ? formatarData(proximaLeitura) : DASHBOARD.NO_DATA,
            leitura: formatMetro(r.leitura_gas_id?.leitura),
            leitura_anterior: formatMetro(r.leitura_gas_anterior_id?.leitura),
            fotos: [
                r.leitura_gas_id?.foto_id.id,
                r.leitura_gas_anterior_id?.foto_id.id,
            ],
            valor_total: formatCurrency(r.valor_total_gas),
        };
    });
}
