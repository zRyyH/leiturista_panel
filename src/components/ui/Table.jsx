"use client";

import { useRouter, usePathname } from 'next/navigation';
import styles from './Table.module.css';
import get from 'lodash.get';

export default function Table({ data = [], columns = [], onClickRoute }) {
    const router = useRouter();
    const pathname = usePathname();

    // Função para navegar ao clicar em uma linha
    const handleRowClick = (id) => {
        // Se onClickRoute for fornecido, usa ele; caso contrário, usa a URL atual
        const baseUrl = onClickRoute || pathname;

        // Certifica-se que a URL termina com / antes de adicionar o ID
        const formattedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

        router.push(`${formattedBaseUrl}${id}`);
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={styles.tableHeader}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow} ${styles.clickableRow}`}
                            onClick={() => handleRowClick(row.id || rowIndex)}
                        >
                            {columns.map((column) => (
                                <td key={`${rowIndex}-${column.key}`} className={styles.tableCell}>
                                    {get(row, column.key, '—')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}