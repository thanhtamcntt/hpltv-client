import React from 'react';
import {
  ColTop,
  ColBot,
  DivFooter,
  RowFooter,
  RowFooterTop,
  ColFooterTop,
  DivContentFooter,
} from './styles';
import SocialMedia from './SocialMedia';
import Sponsors from './Sponsors';
import Company from './Company';
import CopyRight from './Copyright';

function Footer() {
  return (
    <DivFooter>
      <DivContentFooter>
        <RowFooter>
          <ColTop span={24}>
            <RowFooterTop>
              <ColFooterTop
                span={8}
                sm={12}
                md={12}
                lg={8}
                xs={24}
                className="footer-top">
                <SocialMedia />
              </ColFooterTop>
              <ColFooterTop
                span={8}
                sm={12}
                md={12}
                lg={8}
                xs={24}
                className="footer-top">
                <Sponsors />
              </ColFooterTop>
              <ColFooterTop span={8} xs={24} sm={24} md={24} lg={8}>
                <Company />
              </ColFooterTop>
            </RowFooterTop>
          </ColTop>
          <ColBot span={24}>
            <CopyRight />
          </ColBot>
        </RowFooter>
      </DivContentFooter>
    </DivFooter>
  );
}

export default Footer;
