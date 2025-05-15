'use client';

import { useMetrics } from '@/app/panel/hooks/useMetrics';
import DataTable from '@/components/ui/DataTable';
import Loading from '@/components/ui/Loading';
import Chart from '@/components/ui/Chart';
import styles from './Metric.module.css';

export default function MetricSection({ tipoConsumo }) {
    const { loading, headers, rowsAgua, consumosAgua, consumosGas, rowsGas } = useMetrics()

    const consumos = tipoConsumo ? consumosGas : consumosAgua;
    const rows = tipoConsumo ? rowsGas : rowsAgua;

    if (loading) {
        return <Loading fullPage text="Carregando..." />
    };

    return (
        <div className={styles.metricContainer}>
            <Chart
                title="Consumos Mensais"
                lineColor="#3b82f6"
                showLegend={true}
                data={consumos}
                height={400}
            />



            <DataTable
                headers={headers}
                hoverable={true}
                variant="default"
                size="medium"
                rows={rows}
            />
        </div>
    );
}