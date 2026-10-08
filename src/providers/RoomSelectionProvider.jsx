import { useState } from 'react';
import { RoomSelectionContext } from '../context/RoomSelectionContext';

export default function RoomSelectionProvider({ items, children }) {
    const [selectedId, setSelectedId] = useState(null);
    const selectedItem = items.find((item) => item.id === selectedId);

    function selectRoom(id) {
        if (items.some((item) => item.id === id)) {
            setSelectedId(id);
        }
    }

    function clearSelection() {
        setSelectedId(null);
    }

    return (
        <RoomSelectionContext.Provider value={{ selectedId, selectedItem, selectRoom, clearSelection }}>
            {children}
        </RoomSelectionContext.Provider>
    );
}
