import React from 'react';
import { createStore } from 'redux';

const initialState = {
    name: '',
    address: '',
    city:'',
    state:'',
    zipcode:'',
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';


function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
        return
        case UPDATE_ADDRESS:
        return
        case UPDATE_CITY:
        return
        case UPDATE_STATE:
        return
        case UPDATE_ZIPCODE:
        return
    }
}
// refer to past project







export default createStore(reducer);