import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE} from '../store';


class Wizard extends Component {
    constructor() {
        super()

    // this.state = {
    //     name: store.getState().name,
    //     address: store.getState().address,
    //     city: store.getState().city,
    //     state: store.getState().state,
    //     zipcode: store.getState().zipcode
    // }
    }


render() {

    return (
        <div>
            <div className='form-box'>
            <form>
                <input placeholder='property name'></input>
                <input placeholder='address'></input>
                <input placeholder='city'></input>
                <input placeholder='state'></input>
                <input placeholder='zip'></input>
            <Link to='/'><button>Cancel</button></Link>
            <Link to='/'><button>Submit</button></Link>
            </form>
            </div>
        </div>
    )
}
}

export default Wizard;









// <Link to='path/:id'><element></element></Link>

// 'match' to id with req.params.match