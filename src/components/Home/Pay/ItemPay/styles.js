import styled from 'styled-components';

export const DivItemPay = styled.div`
  width: 85%;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 80%;
    margin: 0 auto 60px;
  }

  @media (max-width: 767px) {
    width: 85%;
    margin: 0 auto 40px;
  }

  @media (max-width: 575px) {
    width: 70%;
    margin: 0 auto 20px;
  }
`;
export const TitleType = styled.h3`
  background: var(--bg-pay);
  color: var(--white);
  padding: 16px 0;
  font-size: 18px;
  margin: 0;
`;
export const DivService = styled.div`
  padding: 0 3px 0 20px;
`;
export const TextService = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  margin: 30px 0;
  & span {
    color: rgba(255, 102, 250, 1);
  }
`;
export const DivServicePack = styled.div`
  padding: 0 5px 0 20px;
`;
export const TextServicePack = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  margin: 30px 0;
  & > span {
    width: 50%;
    text-align: left;
    & span {
      color: rgba(255, 102, 250, 1);
    }
  }
`;
export const ButtonBuy = styled.button`
  background: var(--bg-pay);
  color: var(--white);
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;
