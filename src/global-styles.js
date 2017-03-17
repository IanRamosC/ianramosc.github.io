import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    font-size: 18px;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
  }

  body {
    padding: 10px;
    background-color: #10171E;
    font-family: 'Ubuntu Mono', 'Courier';
    color: #FFF;
  }

  #root {
    height: 100%;
  }
`;
