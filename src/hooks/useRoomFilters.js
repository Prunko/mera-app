import { useSearchParams } from 'react-router';

export default function useRoomFilters(items = []) {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('q') ?? '';
    const availableOnly = searchParams.get('available') === '1';

    const normalizedQuery = query.trim().toLowerCase();

    const visibleItems = items.filter((item) => {
        if (!item) return false;
        const nameMatches = String(item.name || '').toLowerCase().includes(normalizedQuery);
        const isAvailable = item.status ? item.status === 'available' : item.isAvailable ?? true;
        return nameMatches && (!availableOnly || isAvailable);
    });

    function setQuery(value) {
        const next = new URLSearchParams(searchParams);
        if (value === '') next.delete('q');
        else next.set('q', value);
        setSearchParams(next, { replace: true });
    }

    function setAvailableOnly(value) {
        const next = new URLSearchParams(searchParams);
        if (value) next.set('available', '1');
        else next.delete('available');
        setSearchParams(next);
    }

    function resetFilters() {
        const next = new URLSearchParams(searchParams);
        next.delete('q');
        next.delete('available');
        setSearchParams(next);
    }

    return { query, setQuery, availableOnly, setAvailableOnly, visibleItems, resetFilters };
}
