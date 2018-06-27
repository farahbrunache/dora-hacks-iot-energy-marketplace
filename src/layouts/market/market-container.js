import { connect } from 'react-redux'
import Market from "./Market";
import {buyItem, sellItem} from "./market-actions";


const mapStateToProps = (state, ownProps) => {
    return {
        market: state.market,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyItem: (data) => {
            dispatch(buyItem(data))
        },
        sellItem: (data) => {
            dispatch(sellItem(data))
        },
    }
}

const MarketContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Market)

export default MarketContainer
