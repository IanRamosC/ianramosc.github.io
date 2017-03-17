import React from 'react';
import PropertyKey from './PropertyKey';
import UrlType from './UrlType';

const PropertyItem = (props) => {
  let {name, url, prefix} = props.item;
  return (
    <li>
      <PropertyKey>{name}</PropertyKey>
      <UrlType href={prefix + url} target="_blank">{url}</UrlType>
    </li>
  );
};

export default PropertyItem;
