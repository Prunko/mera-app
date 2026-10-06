// src/data/items.js
export const roomItems = [
    {
        id: 'room-101',
        name: 'Кімната №101 (2-місна)',
        type: 'Блочний тип',
        price: 1200,
        status: 'available',
        statusLabel: 'Є вільні місця',
        description: 'Світла кімната з ремонтом, двома ліжками, письмовими столами та окремим санвузлом на блок.'
    },
    {
        id: 'room-205',
        name: 'Кімната №205 (3-місна)',
        type: 'Коридорний тип',
        price: 950,
        status: 'available',
        statusLabel: 'Є вільні місця',
        description: 'Простора кімната на 2 поверсі, повністю мебльована, кухонна зона на поверсі.'
    },
    {
        id: 'room-312',
        name: 'Кімната №312 (2-місна)',
        type: 'Блочний тип',
        price: 1200,
        status: 'soldout',
        statusLabel: 'Немає місць',
        description: 'Затишна кімната з балконом та чудовим краєвидом на парк. Усі місця зайняті.'
    }
];