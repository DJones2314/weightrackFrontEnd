import React, { Component } from 'react';
import Questionbox from './Questionbox';
import { Route } from 'react-router-dom';
import Home from './Home';
import './WeightRoom.jpg';


class Mainbody extends Component {
    render() {
        return (
             <div id="mainBody">
                <Route exact path='/Home' component={Home} />
                <Route exact path='/question' component={Questionbox} />
            </div>
        );
    }
}
export default Mainbody;