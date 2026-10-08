import useRoomFilters from '../hooks/useRoomFilters';
import useRoomSelection from '../hooks/useRoomSelection';
import RoomFilters from '../components/rooms/RoomFilters';
import RoomList from '../components/rooms/RoomList';

export default function HomePage({ items = [], onNavigateToRequest }) {
    const { selectRoom } = useRoomSelection();
    const { query, setQuery, availableOnly, setAvailableOnly, visibleItems, resetFilters } = useRoomFilters(items);

    const handleSelectAndNavigate = (id) => {
        console.log('Обраний ID кімнати:', id); 
        if (id) {
            selectRoom(id); 
            if (onNavigateToRequest) {
                onNavigateToRequest(); 
            }
        }
    };

    return (
        <div className="page-container">
            <RoomFilters
                query={query}
                availableOnly={availableOnly}
                onQueryChange={setQuery}
                onAvailableOnlyChange={setAvailableOnly}
                onReset={resetFilters}
            />
            <RoomList
                items={visibleItems}
                onSelectRoom={handleSelectAndNavigate}
            />
        </div>
    );
}