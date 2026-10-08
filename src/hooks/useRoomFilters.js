import { useState } from 'react';

export default function useRoomFilters(items = []) {
    const [query, setQuery] = useState('');
    const [availableOnly, setAvailableOnly] = useState(false);

    const safeItems = Array.isArray(items) ? items : [];

    const visibleItems = safeItems.filter((item) => {
        if (!item) return false;

        const name = item.name ? String(item.name).toLowerCase() : '';
        const matchesQuery = name.includes(query.trim().toLowerCase());

        const isAvailable = item.status ? item.status === 'available' : item.isAvailable ?? true;
        const matchesAvailability = !availableOnly || isAvailable;

        return matchesQuery && matchesAvailability;
    });

    function resetFilters() {
        setQuery('');
        setAvailableOnly(false);
    }

    return {
        query,
        setQuery,
        availableOnly,
        setAvailableOnly,
        visibleItems,
        resetFilters,
    };
}