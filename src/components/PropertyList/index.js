import React from 'react';
import styled from 'styled-components';
import PropertyItem from './PropertyItem';

const PropUL = styled.ul`
  margin: 0;
  list-style-type: none;
`;

const PropertyList = (props) => (
  <PropUL>
    {props.urls.map(item => <PropertyItem key={item.name} item={item}/>)}
  </PropUL>
);

export default PropertyList;
