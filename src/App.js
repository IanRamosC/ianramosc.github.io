import React, { Component } from 'react';

import CodeWrapper from './components/CodeWrapper';
import Comment from './components/Comment';
import Selector from './components/Selector';
import PropertyList from './components/PropertyList';
import LangSwitcher from './components/LangSwitcher';

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
      lang: "",
      langs: []
    };

    this.switchLanguage = this.switchLanguage.bind(this);
  }

  switchLanguage(lang) {
    let content = LangManager.setLanguage(lang);
    this.setState({ lang, content });
  }

  componentDidMount() {
    let lang = LangManager.getLanguage();
    let content = LangManager.getContent(lang);
    let langs = LangManager.getLanguages();

    this.setState({ lang, content, langs });
  }

  render() {
    let { comment, urls } = this.state.content;

    return (
      <CodeWrapper>
        <LangSwitcher switchLanguage={this.switchLanguage} currentLang={this.state.lang} langs={this.state.langs} />
        <div>
          <Comment>{comment}</Comment>
          <Selector>#ian-website</Selector> { '{' }
            <PropertyList urls={urls} />
          {'}'}
        </div>
      </CodeWrapper>
    );
  }
}

export default App;
