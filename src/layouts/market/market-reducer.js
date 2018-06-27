export const mock_buy = [
    {
        id: 0,
        address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
        price: 5,
        energy: 100,
    }, {
        id: 1,
        address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
        price: 2,
        energy: 10,
    }, {
        id: 2,
        address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
        price: 14,
        energy: 24,
    }, {
        id: 3,
        address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
        price: 90,
        energy: 90,
    }, {
        id: 4,
        address: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
        price: 12,
        energy: 31,
    },
];

const initialState = {
    items: mock_buy,
    id: 5,
};

const userReducer = (state = initialState, action) => {
    if (action.type === 'SELL')
    {
        const new_buy = action.payload;
        new_buy.id = state.id;
        const updated = [...state.items, new_buy];
        return {
            ...state,
            id: state.id + 1,
            items: updated,
        };
    }

    if (action.type === 'BUY')
    {
        const filtered = state.items.filter(i => i.id !== action.payload.id);
        return {
            ...state,
            items: filtered,
        };
    }

    return state
}

export default userReducer
