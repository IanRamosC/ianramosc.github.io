import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
  }

  body {
    padding: 10px;
    background-color: #10171E;
    font-family: 'Ubuntu Mono', 'Courier';
    color: #FFF;
  }
`;
