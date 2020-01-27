import {LOGIN, LOGOUT} from '../actions/auth';

const initialState = {
    login: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            console.log('redux logout2')
            return Object.assign({}, state, {
                login:true
            });
        case LOGOUT:
            console.log('redux logout2')
            return Object.assign({}, state, {
                login:false
            });
        default:
            return state;
    }
};