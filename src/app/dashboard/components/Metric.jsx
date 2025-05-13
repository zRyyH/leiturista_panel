'use client';

import { useMetrics } from '@/app/dashboard/hooks/useMetrics';
import DataTable from '@/components/ui/DataTable';
import styles from './Consumption.module.css';
import Chart from '@/components/ui/Chart';

export default function MetricSection() {
    const { loading, headers, rows, consumos } = useMetrics()

    return (
        <div className={styles.metricContainer}>
            <Chart
                title="Consumos Mensais"
                lineColor="#3b82f6"
                showLegend={true}
                data={consumos}
                height={400}
            />

            {/* {cards.map((card) => (
                <ImageCard
                    key={card.id}
                    src={DIRECTUS.ASSETS_URL + card.src}
                    description={card.description}
                    onClick={card.onClick}
                    title={card.title}
                />
            ))} */}

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