import React from 'react';
import styled from 'styled-components';

const LangUL = styled.ul`
  position: absolute;
  top: 10px;
  left: 50%;
  display: inline-block;
  margin: 0px;
  padding: 0px;
  border-radius: 2px;
  transform: translateX(-50%);
  list-style-type: none;
  overflow: hidden;
`;

const LangLI = styled.li`
  display: inline;
  float: left;
  padding: 5px 8px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #222;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const LangSwitcher = (props) => {
  let currLang = props.currentLang;

  return (
    <LangUL>
      {props.langs.map(lang => (
        <LangLI
          key={lang}
          onClick={() => props.switchLanguage(lang)}
          className={currLang !== lang || 'active'}
        >
          {lang}
        </LangLI>
      ))}
    </LangUL>
  );
};

export default LangSwitcher;
