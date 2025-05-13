import { useEffect, useState } from 'react';
import { fetchData } from '@/core/services/dataFetcher';

export function useData({ collection, fields, filter, sort, deep, limit }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    async function load() {
        try {
            const result = await fetchData(collection, fields, filter, sort, deep, limit);
            setData(result);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, [collection, JSON.stringify(fields), JSON.stringify(filter), JSON.stringify(sort), JSON.stringify(deep)]);

    return { data, loading, error };
}