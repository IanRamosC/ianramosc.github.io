import styled from 'styled-components';

const UrlType = styled.a`
  color: #D35400;
  text-decoration: none;

  &:hover {
    color: #FF6A07;
  }

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
