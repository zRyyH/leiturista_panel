'use client';

import ListCards from '@/components/features/ListCards';
import DataTable from '@/components/ui/DataTable';
import styles from "./MetricsAgua.module.css";
import Chart from '@/components/ui/Chart';

export default function MetricsAgua({ consumos, headers, rows }) {
    return (
        <div className={styles.metricContainer}>
            <Chart
                title="Consumos Mensais"
                lineColor="#3b82f6"
                showLegend={true}
                data={consumos}
                height={400}
            />

            <ListCards cards={[
                {
                    id: 1,
                    title: "LEITURA ATUAL",
                    value1: consumos[0].leitura_atual + ' m³',
                    label1: "LEITURA ATUAL",
                    color: "blue",
                    icon: "Droplet",
                },
                {
                    id: 2,
                    title: "LEITURA ANTERIOR",
                    value1: consumos[0].leitura_anterior + ' m³',
                    label1: "LEITURA ANTERIOR",
                    color: "blue",
                    icon: "Droplet",
                },
                {
                    id: 3,
                    title: "VOLUME",
                    value1: consumos[0].volume + ' m³',
                    label1: "VOLUME",
                    color: "blue",
                    icon: "Droplet",
                },
            ]} />

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