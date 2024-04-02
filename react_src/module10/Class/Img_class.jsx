//rce

import React, { Component } from 'react'

export class Img_class extends Component {

    // call when comp load/birth
    componentDidMount(){
        console.log('DidMount');
    }

    componentWillUnmount(){
        console.log('WillUnmount');
    }

  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/600/92c952" width="100px" alt="" />
      </div>
    )
  }
}

export default Img_class