export function sellItem(seller, price, energy) {
    return function(dispatch) {
        dispatch({type: 'SELL', payload: {address: seller, price, energy}});
    };
}

export function buyItem(id) {
    return function(dispatch) {
        dispatch({type: 'BUY', payload: id});
    };
}
