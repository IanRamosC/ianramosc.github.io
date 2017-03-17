import React, { Component } from 'react';
import LangManager from './translation/LangManager';
import CodeWrapper from './components/CodeWrapper';
import Comment from './components/Comment';
import Selector from './components/Selector';
import PropertyList from './components/PropertyList';

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
      <CodeWrapper>
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
