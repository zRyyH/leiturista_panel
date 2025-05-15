'use client';

import { useMetrics } from '@/app/panel/hooks/useMetrics';
import DataTable from '@/components/ui/DataTable';
import Loading from '@/components/ui/Loading';
import styles from './History.module.css';

export default function MetricSection({ tipoConsumo }) {
    const { loading, headers, consumosAgua, consumosGas } = useMetrics();

    const consumos = tipoConsumo ? consumosGas : consumosAgua;

    if (loading) {
        return <Loading fullPage text="Carregando..." />
    };

    return (
        <div className={styles.historyContainer}>
            <DataTable
                headers={headers}
                hoverable={true}
                variant="default"
                size="medium"
                rows={consumos}
            />
        </div>
    );
}