import styled from 'styled-components';

const Comment = styled.span`
  color: #6C7A89;
  display: ${props => props.sharedLine ? 'inline' : 'block'};

  &:before {
    content: '/* ';
  }

  &:after {
    content: ' */';
  }
`;

export default Comment;
