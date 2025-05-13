import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { RefreshCw, AlertCircle } from 'lucide-react';
import styles from './Chart.module.css';

export default function Chart({
    title,
    data = [],
    lineColor = '#3b82f6',
    height = 300,
    width = '100%',
    showGrid = true,
    showTooltip = true,
    showLegend = false,
    xAxisDataKey = 'name',
    lineDataKey = 'value',
    emptyStateMessage = 'Sem dados disponíveis',
    isLoading = false,
    onRefresh,
    className = '',
}) {
    // Verifica se há dados
    const hasData = data && data.length > 0;

    // Renderiza estado de carregamento
    if (isLoading) {
        return (
            <div className={`${styles.chartContainer} ${className}`} style={{ height, width }}>
                {title && <h3 className={styles.chartTitle}>{title}</h3>}
                <div className={styles.placeholder}>
                    <RefreshCw size={24} className={styles.loadingIcon} />
                    <p>Carregando dados...</p>
                </div>
            </div>
        );
    }

    // Renderiza estado vazio
    if (!hasData) {
        return (
            <div className={`${styles.chartContainer} ${className}`} style={{ height, width }}>
                {title && <h3 className={styles.chartTitle}>{title}</h3>}
                <div className={styles.placeholder}>
                    <AlertCircle size={24} />
                    <p>{emptyStateMessage}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.chartContainer} ${className}`} style={{ height, width }}>
            <div className={styles.chartHeader}>
                {title && <h3 className={styles.chartTitle}>{title}</h3>}
                {onRefresh && (
                    <button onClick={onRefresh} className={styles.refreshButton}>
                        <RefreshCw size={16} />
                    </button>
                )}
            </div>

            <div className={styles.chartContent}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                    >
                        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
                        <XAxis
                            dataKey={xAxisDataKey}
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            axisLine={{ stroke: '#e5e7eb' }}
                            tickLine={{ stroke: '#e5e7eb' }}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            axisLine={{ stroke: '#e5e7eb' }}
                            tickLine={{ stroke: '#e5e7eb' }}
                        />
                        {showTooltip && <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                borderRadius: '0.25rem',
                                border: '1px solid #e5e7eb',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                fontSize: '0.75rem'
                            }}
                        />}
                        {showLegend && <Legend
                            wrapperStyle={{ fontSize: '0.75rem', marginTop: '0.5rem' }}
                        />}
                        <Line
                            type="monotone"
                            dataKey={lineDataKey}
                            stroke={lineColor}
                            strokeWidth={2}
                            dot={{ stroke: lineColor, strokeWidth: 2, r: 3, fill: 'white' }}
                            activeDot={{ r: 5, stroke: 'white', strokeWidth: 1 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}