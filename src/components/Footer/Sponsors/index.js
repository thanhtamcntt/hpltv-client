import React from 'react';
import { DivSponsors, TextTitle, TextContent } from './styles';

function Sponsors() {
  return (
    <DivSponsors>
      <TextTitle>Sponsor</TextTitle>
      <TextContent>
        Cisco - Amazon - Google - Azure - LinkedIn
        <br />
        IBM - Facebook - Tesla - Appel - Microsoft
        <br />
        Ofppt - 1337
      </TextContent>
    </DivSponsors>
  );
}

export default Sponsors;
