import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { 
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const Comment = styled.span`
  display: ${props => props.sharedLine ? 'inline' : 'block'};
  color: #6C7A89;
  white-space: nowrap;
  overflow: hidden;
  animation: ${props => props.sharedLine? 'none' : typing + ' 2.5s linear'};

  &:before {
    content: '/* ';
  }

  &:after {
    content: ' */';
  }
`;

export default Comment;
