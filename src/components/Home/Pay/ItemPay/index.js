import React from 'react';
import {
  DivItemPay,
  TitleType,
  DivService,
  DivServicePack,
  ButtonBuy,
  TextService,
  TextServicePack,
} from './styles';
import { CheckOutlined } from '@ant-design/icons';

function ItemPay(props) {
  return (
    <DivItemPay>
      <TitleType>{props.title}</TitleType>
      <DivService>
        <TextService>
          Watch all your want. Ad-free. <CheckOutlined />
        </TextService>
        <TextService>
          Recommendations just for you. <CheckOutlined />
        </TextService>
        <TextService>
          Change or cancel your plan anytime. <CheckOutlined />
        </TextService>
      </DivService>
      <DivServicePack>
        <TextServicePack>
          <span>Resolution</span>
          <span>
            {props.resolution}&nbsp;
            <CheckOutlined />
          </span>
        </TextServicePack>
        <TextServicePack>
          <span>Video quality</span>
          <span>
            {props.quality}&nbsp;
            <CheckOutlined />
          </span>
        </TextServicePack>
        <TextServicePack>
          <span>Monthly price</span>
          <span>
            {props.price}&nbsp;
            <CheckOutlined />
          </span>
        </TextServicePack>
      </DivServicePack>
      <ButtonBuy>Buy</ButtonBuy>
    </DivItemPay>
  );
}

export default ItemPay;
