import React from 'react';
import { DivItemSocial, TextContact, DivIcon, DivLink } from './styles';

function ItemSocialMedia(props) {
  const { iconContact, href, text } = props;
  return (
    <DivItemSocial href={href}>
      <DivIcon>{iconContact}</DivIcon>
      <DivLink>
        <TextContact>{text}</TextContact>
      </DivLink>
    </DivItemSocial>
  );
}

export default ItemSocialMedia;
