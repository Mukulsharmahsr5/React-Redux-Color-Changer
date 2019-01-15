import React, { Component } from 'react';
import Red from './Red';
import Yellow from './Yellow';
import Green from './Green';
import configureStore from './store.js';
import * as actions from './actions.js';

class App extends Component {
  constructor(props){
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
  }

  onClickRed = () => {
    this.store.dispatch(actions.redColorAction());
  }

  onClickYellow = () => {
    this.store.dispatch(actions.yellowColorAction());
  }

  onClickGreen = () => {
    this.store.dispatch(actions.greenColorAction());
  }

  componentWillMount(){
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    return (
      <div style={{width: '1366px', height: '600px', background: this.state.color}}>
      <Red onClickRed={this.onClickRed} />
      <Yellow onClickYellow={this.onClickYellow} />
      <Green onClickGreen={this.onClickGreen} />
      <h1>Hello</h1>
      </div>
    );
  }
}
export default App;
