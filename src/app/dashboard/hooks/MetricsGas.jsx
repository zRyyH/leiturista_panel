'use client';

import ValueDisplay from '@/components/ui/ValueDisplay';
import styles from "./MetricsGas.module.css";
import Chart from '@/components/ui/Chart';

export default function MetricsGas({ consumos }) {
    return (
        <div className={styles.metricContainer}>
            <Chart
                title="Consumos Mensais"
                data={dadosConsumos}
                lineColor="#3b82f6"
                showLegend={true}
                height={400}
            />

            <div className={styles.valueDisplayContainer}>
                <ValueDisplay
                    items={[
                        { header: "LEITURA ATUAL", value: `${leituraAtual} m³` },
                        { header: "LEITURA ANTERIOR", value: `${leituraAnterior} m³` },
                        { header: "VOLUME", value: `${volume} m³` }
                    ]}
                    operators={["-", "=", ">"]}
                    variant="primary"
                    size="sm"
                />

                <ValueDisplay
                    items={[
                        { header: "CONVERSÃO", value: `${conversao} kg/m³` },
                        { header: "VALOR KG/M³", value: `R$ ${valorKgM3}` },
                        { header: "VALOR INDIVIDUAL", value: `R$ ${valorIndividual}` },
                    ]}
                    operators={["x", "=", "="]}
                    variant="primary"
                    size="sm"
                />
            </div>
        </div>
    );
}