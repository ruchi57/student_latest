import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store/RootStore';

const App = () => (
  // <Provider store={store}>
    <Counter/>
    // </Provider>
  // {/* constructor() {
  //   super();
  //   this.state = {
  //     articles: [
  //       { title: "React Redux Tutorial for Beginners", id: 1 },
  //       { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
  //     ]
  //   };
  // }
  // render() {
  //   const { articles } = this.state;
  //   return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  // } */}
  
)


export default App;
