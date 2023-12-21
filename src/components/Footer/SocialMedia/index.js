import React from 'react';
import { DivSocial, TextTitle, ListContact } from './styles';
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  PhoneOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import ItemSocialMedia from './ItemSocial';

function SocialMedia() {
  return (
    <DivSocial>
      <TextTitle>Social Media Links</TextTitle>
      <ListContact>
        <ItemSocialMedia
          iconContact={<GithubOutlined />}
          href="https://github.com/LocHoang03"
          text="LocHoang03"
        />
        <ItemSocialMedia
          iconContact={<LinkedinOutlined />}
          href="/"
          text="Loc Hoang"
        />
        <ItemSocialMedia
          iconContact={<TwitterOutlined />}
          href="/"
          text="28. Hoang Phuoc Loc"
        />
        <ItemSocialMedia
          iconContact={<PhoneOutlined />}
          href="tel:+84967936728"
          text="+84967936728"
        />
        <ItemSocialMedia
          iconContact={<FacebookOutlined />}
          href="https://www.facebook.com/"
          text="Loc Hoang"
        />
      </ListContact>
    </DivSocial>
  );
}

export default SocialMedia;
