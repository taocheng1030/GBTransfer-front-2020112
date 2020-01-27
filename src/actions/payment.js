import api from '../services/api'

//payment actions
export const GET_RECIPIENTS = 'GET_RECIPIENTS';
export const CALC_FEE = 'CALC_FEE';
export const TRANSFER = 'TRANSFER';
export const GET_EXCHANGE_RATE = 'GET_EXCHANGE_RATE';
export const REQUEST_WITHDRAW = 'REQUEST_WITHDRAW';
export const CREATE_PAYPAL_PAYMENT = 'CREATE_PAYPAL_PAYMENT';
export const EXECUTE_PAYPAL_PAYMENT = 'EXECUTE_PAYPAL_PAYMENT';
export const CHARGE_STRIPE = 'CHARGE_STRIPE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_MY_WALLET = 'GET_MY_WALLET';
export const FETCHING_MY_WALLET = 'FETCHING_MY_WALLET';
export const GET_USERS = 'GET_USERS'

export const getUsers = () => {
    return (dispatch) => {
        api.getUsers((err, res) => {
            if (!!res && res.error == null && err == null) {
                dispatch({
                    type: GET_USERS,
                    data: res.result
                });
            }
        })
    }
}

export const getFamilyFriend = () => {
    return (dispatch) => {
        console.log('call getFamilyFriend', localStorage.currentUser)
        var user = JSON.parse(localStorage.currentUser)
        api.getFamilyFriend(user.user.id, null, (err, res) => {
            console.log('getFamilyFriend err, res', err, res)
            if (!!res && res.error == null && err == null) {
                var userList = []
                res.result.map((ret) => {
                    ret.users.map(o => {
                        userList.push(o)
                    })
                })

                console.log('userList', userList)
                dispatch({
                    type: GET_RECIPIENTS,
                    data: userList
                });
            }
        })
    }
}

export const getMyWallet = () => {
    return (dispatch) => {
        dispatch({
            type: FETCHING_MY_WALLET
        });
        api.getMyWallet((err, res) => {
            console.log('getMyWallet err, res', err, res)
            if (!!res && res.error == null && err == null) {
                dispatch({
                    type: GET_MY_WALLET,
                    data: res.result
                });
            }
        })
    }
}

export const getCurrencies = () => {
    return (dispatch) => {
        api.getCurrencies((err, res) => {
            console.log('getCurrencies err, res', err, res)
            if (!!res && res.error == null && err == null) {
                dispatch({
                    type: GET_CURRENCIES,
                    data: res.result
                });
            }
        })
    }
}