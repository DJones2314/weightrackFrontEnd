import React, { Component } from 'react';

class Questionbox extends Component {
    render() {
        return (
             <div id="questionBox">
                <input className="question" type="text/email" placeholder="please enter your email"></input>
                <input className="" type="text" placeholder="please enter your name"></input>
                <textarea id="detail" placeholder="What is your Question?"></textarea>
            </div>
        );
    }
}
export default Questionbox;