import styled from 'styled-components';

const UrlType = styled.a`
  color: #D35400;
  text-decoration: none;

  &:before {
    content: "url(";
    color: #19B5FE;
  }

  &:after {
    content: ");";
    color: #19B5FE;
  }
`;

export default UrlType;
