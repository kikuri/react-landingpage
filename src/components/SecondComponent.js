import React, { Component } from 'react';

import logo01 from '../images/second-img.jpg';


class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '移動可能なシェアハウス',
      description: 'あああああああああああああああ',
      form: '気にいって頂けましたか？',
    };
  }

  render() {
    return(
      <div>
        <img src={logo01} className="App-second-img" alt="second-img"/>
        <div><p>{this.state.title}</p></div>
      </div>
    )
  }


}

export default SecondComponent;
