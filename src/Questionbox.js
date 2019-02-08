import React, { Component } from 'react';
import axios from 'axios';

export default class Questionbox extends React.Component {
   state = {
    title: '',
    category: '',
    description: '',
    price:0  
  }

    handleChange = event => {
    this.setState({ title: event.target.value,
                    });}
    handleChange1 = event => {
    this.setState({ category: event.target.value,
                    });}
    handleChange2 = event => {
    this.setState({ description: event.target.value,
                    });}
    handleChange3 = event => {
    this.setState({ price: event.target.value,
                    });
      
  }

  handleSubmit = event => {
    event.preventDefault();

    const title = {
      title: this.state.title
    }
    const category = {
      category: this.state.category
    }
    const description = {
      description: this.state.description
    }
    const price = {
      price: this.state.price
    }
    
    console.log(title,category,description, price);
    console.log(this.state.title,this.state.category,this.state.description, this.state.price);     
  
    axios.post('http://localhost:8080/api/films', {  title: this.state.title,
                                                     category: this.state.category,
                                                     description: this.state.description,
                                                     price: this.state.price
                                                   }).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
    render() {
        return (
             <div id="questionBox">
                <form onSubmit={this.handleSubmit}>
                    <input className="question" type="text/email" placeholder="please enter your email"></input>
                    <input className="question" type="text" placeholder="please enter your name"></input>
                    <textarea id="detail" placeholder="What is your Question?"></textarea>
                </form>
            </div>
        );
    }
};
 