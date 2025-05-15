'use client';

import { useConsumoUnidade } from '@/app/panel/hooks/useConsumoUnidade';
import GenericCard from '@/components/ui/GenericCard';
import styles from './Consumption.module.css';
import Loading from '@/components/ui/Loading';

export default function Consumption({ tipoConsumo }) {
    const { loading, consumoAgua, consumoGas } = useConsumoUnidade();

    const consumo = !tipoConsumo ? consumoAgua : consumoGas;
    const icon = !tipoConsumo ? 'Droplet' : 'Flame';
    const color = !tipoConsumo ? 'blue' : 'red';

    if (loading) {
        return <Loading fullPage text="Carregando..." />
    };

    return (
        <div className={styles.consumptionContainer}>
            <GenericCard
                title={'Leitura Atual'}
                field1Label={'Data'}
                field1Value={consumo.data_leitura}
                field2Label={'Leitura'}
                field2Value={consumo.leitura}
                color={color}
                icon={icon}
                key={1}
            />

            <GenericCard
                title={'Leitura Anterior'}
                field1Label={'Data'}
                field1Value={consumo.data_leitura_anterior}
                field2Label={'Leitura'}
                field2Value={consumo.leitura_anterior}
                color={color}
                icon={icon}
                key={2}
            />

            <GenericCard
                title={'Volume Medido'}
                field1Label={'Data'}
                field1Value={consumo.data_leitura}
                field2Label={'Leitura'}
                field2Value={consumo.consumo}
                color={color}
                icon={icon}
                key={3}
            />

            <GenericCard
                title={'Valor Individual'}
                field1Label={'Valor'}
                field1Value={consumo.valor_individual}
                color={color}
                icon={icon}
                key={4}
            />

            <GenericCard
                title={'Valor Residual'}
                field1Label={'Valor'}
                field1Value={consumo.valor_residual}
                color={color}
                icon={icon}
                key={5}
            />

            <GenericCard
                title={'Valor Leitura'}
                field1Label={'Valor'}
                field1Value={consumo.valor_da_medicao}
                color={color}
                icon={icon}
                key={6}
            />

            <GenericCard
                title={'Mês Referência'}
                field1Label={'Data'}
                field1Value={consumo.data_referencia}
                customColor={'#CDEAC0'}
                icon={'Calendar'}
                key={7}
            />

            <GenericCard
                title={'Proxima Leitura'}
                field1Label={'Valor'}
                field1Value={consumo.data_proxima_leitura}
                customColor={'#CDEAC0'}
                icon={'Calendar'}
                key={8}
            />

            <GenericCard
                title={'Total a Pagar'}
                field1Label={'Valor'}
                field1Value={consumo.valor_total}
                customColor={'#CDEAC0'}
                icon={'DollarSign'}
                key={9}
            />
        </div>
    );
}