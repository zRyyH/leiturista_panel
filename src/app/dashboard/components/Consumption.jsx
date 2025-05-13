'use client';

import { useConsumoUnidade } from '@/app/dashboard/hooks/useConsumoUnidade';
import ListCards from '@/app/dashboard/hooks/ListCards';
import styles from './Consumption.module.css';

export default function Consumption({ tipoConsumo }) {
    const { loading, consumoAgua, consumoGas } = useConsumoUnidade();

    const consumo = !tipoConsumo ? consumoAgua : consumoGas;
    const icon = !tipoConsumo ? 'Droplet' : 'Flame';
    const color = !tipoConsumo ? 'blue' : 'red';

    if (loading) {
        return <div className={styles.loadingContainer}>Loading...</div>;
    }

    return (
        <div className={styles.consumptionContainer}>
            <ListCards cards={[
                {
                    id: 1,
                    title: 'Leitura Atual',
                    label1: 'Data',
                    value1: consumo.data_leitura,
                    label2: 'Leitura',
                    value2: consumo.leitura,
                    color: color,
                    icon: icon,
                },
                {
                    id: 2,
                    title: 'Leitura Anterior',
                    label1: 'Data',
                    value1: consumo.data_leitura_anterior,
                    label2: 'Leitura',
                    value2: consumo.leitura_anterior,
                    color: color,
                    icon: icon,
                },
                {
                    id: 3,
                    title: 'Volume Medido',
                    label1: 'Volume',
                    value1: consumo.consumo,
                    color: color,
                    icon: icon,
                },
                {
                    id: 4,
                    title: 'Valor Individual',
                    label1: 'Valor',
                    value1: consumo.valor_individual,
                    color: color,
                    icon: icon,
                    infoText: 'Esse valor é o valor individual.',
                },
                {
                    id: 5,
                    title: 'Valor Residual',
                    label1: 'Valor',
                    value1: consumo.valor_residual,
                    color: color,
                    icon: icon,
                    infoText: 'Esse valor é o valor residual.',
                },
                {
                    id: 6,
                    title: 'Valor Leitura',
                    label1: 'Valor',
                    value1: consumo.valor_da_medicao,
                    color: color,
                    icon: icon,
                    infoText: 'Esse valor é o preço cobrado por medição.',
                }
            ]} />

            <ListCards cards={[
                {
                    id: 1,
                    title: 'Mês Referência',
                    label1: 'Data',
                    value1: consumo.data_referencia,
                    customColor: '#777',
                    icon: 'Calendar',
                },
                {
                    id: 2,
                    title: 'Proxima Leitura',
                    label1: 'Data',
                    value1: consumo.data_proxima_leitura,
                    customColor: '#777',
                    icon: 'Calendar',
                },
                {
                    id: 3,
                    title: 'Total a Pagar',
                    label1: 'Valor',
                    value1: consumo.valor_total,
                    customColor: '#777',
                    icon: 'DollarSign',
                },
            ]} />
        </div>
    );
}