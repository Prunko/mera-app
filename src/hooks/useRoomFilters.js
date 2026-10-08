import { useState } from 'react';

export default function useRoomFilters(items) {
    const [query, setQuery] = useState('');
    const [availableOnly, setAvailableOnly] = useState(false);

    const normalizedQuery = query.trim().toLocaleLowerCase('uk');

    const visibleItems = items.filter((item) => {
        const matchesQuery = item.name.toLocaleLowerCase('uk').includes(normalizedQuery);
        const matchesAvailability = !availableOnly || item.status === 'available';
        return matchesQuery && matchesAvailability;
    });

    function resetFilters() {
        setQuery('');
        setAvailableOnly(false);
    }

    return { query, setQuery, availableOnly, setAvailableOnly, visibleItems, resetFilters };
}