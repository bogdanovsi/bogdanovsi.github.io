import React from 'react';

export default class Frmw001 extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  change(v) {
    this.setState(({ value }) => ({ value: v }))
  }
  render(){
    return (
      <div>
        <input value={ this.state.value }
               onChange={({ target: {value: v}}) => this.change(v)} />
        <input value={ this.state.value }
               onChange={({ target: {value: v}}) => this.change(v)} />
      </div>
    )
  }
}