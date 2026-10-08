import { useContext } from 'react';
import { RoomSelectionContext } from '../context/RoomSelectionContext';

export default function useRoomSelection() {
    const context = useContext(RoomSelectionContext);
    if (!context) {
        throw new Error('useRoomSelection must be used within RoomSelectionProvider');
    }
    return context;
}
