import { useState } from 'react';
import { RoomSelectionContext } from '../context/RoomSelectionContext';

export default function RoomSelectionProvider({ items = [], children }) {
    const [selectedId, setSelectedId] = useState(null);

    const selectedItem = items.find(
        (item) => String(item.id) === String(selectedId)
    ) || null;

    const selectRoom = (id) => {
        console.log('Provider: встановлюємо selectedId в:', id);
        setSelectedId(id);
    };

    const clearSelection = () => {
        setSelectedId(null);
    };

    return (
        <RoomSelectionContext.Provider
            value={{
                selectedId,
                selectedItem,
                selectRoom,
                clearSelection,
            }}
        >
            {children}
        </RoomSelectionContext.Provider>
    );
}