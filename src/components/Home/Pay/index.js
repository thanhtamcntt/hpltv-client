import React from 'react';
import { ColPay, DivPay, RowPay } from './styles';
import ItemPay from './ItemPay';

function Pay() {
  return (
    <DivPay>
      <RowPay>
        <ColPay span={8} md={12} lg={8} sm={12} xs={24}>
          <ItemPay
            title="Basic"
            resolution="480p"
            quality="Good"
            price="MAD65"
          />
        </ColPay>
        <ColPay span={8} md={12} lg={8} sm={12} xs={24}>
          <ItemPay
            title="Standard"
            resolution="1080p"
            quality="Better"
            price="MAD95"
          />
        </ColPay>
        <ColPay span={8} md={12} lg={8} sm={12} xs={24}>
          <ItemPay
            title="Premium"
            resolution="4K+HDR"
            quality="Best"
            price="MAD125"
          />
        </ColPay>
      </RowPay>
    </DivPay>
  );
}

export default Pay;
