import { GET_RECIPIENTS, GET_CURRENCIES, GET_MY_WALLET, FETCHING_MY_WALLET, GET_USERS } from '../actions/payment';

const paymentInitialState = {
    recipients: [],
    currencies: [],
    wallet: [],
    allusers: [],
};

export default (state = paymentInitialState, action = {}) => {
    switch (action.type) {
        case GET_RECIPIENTS:
            return {
                ...state,
                recipients: action.data
            };
        case FETCHING_MY_WALLET:
            return {
                ...state,
                fetchingWallet: true
            };
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: action.data
            };
        case GET_MY_WALLET:
            return {
                ...state,
                wallet: action.data,
                fetchingWallet: false
            };
        case GET_USERS:
            return {
                ...state,
                allusers: action.data,
            };
        default:
            return state;
    }
}