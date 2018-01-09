import React, { Component } from 'react';
import logo01 from '../images/logo02.png';
import header_img from '../images/header-img.png';

class HeaderHero extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '旅をするように暮らそう。',
        description: 'あああああああああああああああ',
        form: '気にいって頂けましたか？',
      };
    }

    render() {
      return(
        <div>
          <header className="App-header">
            <div className="App-header-left">
              <img src={logo01} className="App-logo" alt="logo" />
              <p className="App-header-title">新しいコンセプトのシェアハウス</p>
            </div>
            <div className="App-header-right">
              <p className="header-inquiry">お問い合わせ</p>
              <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
              <p className="header-JP">JP</p>
              <p className="header-EN">EN</p>
            </div>
          </header>
          <div className="App-body">
            <img src={header_img} className="App-header-img" alt="header-img" />
            <div className="img-in-title">
              <p className="img-in-title-headline">{this.state.title}</p>
              <p className="img-in-title-description">{this.state.description}</p>
              <p className="img-in-title-form">{this.state.form}</p>
              <div className="img-in-title-form-name"><p>名前</p></div>
              <div className="img-in-title-form-mailadress"><p>メールアドレス</p></div>
              <div className="img-in-title-form-comfirm"><p>知らせを受ける</p></div>
            </div>
          </div>
        </div>
      );
    }
}

export default HeaderHero;
