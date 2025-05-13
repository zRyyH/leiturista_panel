import React from 'react';
import { Table, ChevronDown, ChevronUp, Info } from 'lucide-react';
import styles from './DataTable.module.css';

export default function DataTable({
    title,
    headers = [],
    rows = [],
    caption,
    variant = 'default',
    size = 'medium',
    bordered = false,
    striped = false,
    hoverable = true,
    className = '',
    showTableIcon = false,
    infoTooltip,
    onHeaderClick,
    sortColumn,
    sortDirection,
}) {
    const variantClass = styles[`variant-${variant}`] || styles['variant-default'];
    const sizeClass = styles[`size-${size}`] || styles['size-medium'];

    return (
        <div className={`${styles.tableContainer} ${className}`}>
            {/* {title && (
                <div className={styles.tableHeader}>
                    {showTableIcon && <Table size={16} className={styles.tableIcon} />}
                    <h3 className={styles.tableTitle}>{title}</h3>
                    {infoTooltip && (
                        <div className={styles.tooltipContainer}>
                            <Info size={14} className={styles.infoIcon} />
                            <span className={styles.tooltip}>{infoTooltip}</span>
                        </div>
                    )}
                </div>
            )} */}

            <div className={styles.tableWrapper}>
                <table
                    className={`
                        ${styles.table} 
                        ${variantClass} 
                        ${sizeClass}
                        ${bordered ? styles.bordered : ''}
                        ${striped ? styles.striped : ''}
                        ${hoverable ? styles.hoverable : ''}
                    `}
                    style={{ tableLayout: 'auto' }}
                >
                    {caption && <caption className={styles.caption}>{caption}</caption>}

                    <thead className={styles.tableHead}>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={`header-${index}`}
                                    className={`
                                        ${styles.th}
                                        ${header.width ? styles[`width-${header.width}`] : ''}
                                        ${header.align ? styles[`align-${header.align}`] : ''}
                                        ${onHeaderClick ? styles.sortable : ''}
                                    `}
                                    style={header.width && !styles[`width-${header.width}`] ? { width: header.width } : {}}
                                    onClick={onHeaderClick ? () => onHeaderClick(header.key || index) : undefined}
                                >
                                    <div className={styles.headerContent}>
                                        <span>{header.label}</span>
                                        {onHeaderClick && sortColumn === (header.key || index) && (
                                            <span className={styles.sortIcon}>
                                                {sortDirection === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className={styles.tableBody}>
                        {rows.map((row, rowIndex) => (
                            <tr key={`row-${rowIndex}`} className={styles.tr}>
                                {Array.isArray(row) ? (
                                    row.map((cell, cellIndex) => (
                                        <td
                                            key={`cell-${rowIndex}-${cellIndex}`}
                                            className={`
                                                ${styles.td}
                                                ${headers[cellIndex]?.align ? styles[`align-${headers[cellIndex].align}`] : ''}
                                            `}
                                        >
                                            {cell}
                                        </td>
                                    ))
                                ) : (
                                    headers.map((header, cellIndex) => (
                                        <td
                                            key={`cell-${rowIndex}-${cellIndex}`}
                                            className={`
                                                ${styles.td}
                                                ${header.align ? styles[`align-${header.align}`] : ''}
                                            `}
                                        >
                                            {row[header.key || `column-${cellIndex}`]}
                                        </td>
                                    ))
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}