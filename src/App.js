import React, { Component } from 'react';
import LangManager from './translation/LangManager';

import './global-styles';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      content: {
        comment: "",
        urls: []
      },
      lang: ""
    };
  }

  componentDidMount() {
    let lang = LangManager.getLanguage();
    let content = LangManager.getContent(lang);

    this.setState({ lang, content });
  }

  render() {
    let { comment, urls } = this.state.content;

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
