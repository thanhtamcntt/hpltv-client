import styled from 'styled-components';

export const DivCheckout = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const DivHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
  & > div {
    margin: 0 auto;

    width: 100%;
    max-width: 1200px;
  }
`;

export const DivContainer = styled.div`
  margin: 60px auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  justify-content: space-between;
`;

export const DivInfo = styled.div`
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
  background-color: var(--white);
  flex: 1;
  margin-right: 20px;
  height: 100%;
`;

export const DivContent = styled.div`
  text-align: left;
`;
export const Title = styled.h2`
  margin: 0 0 26px 0;
`;
export const DivProductInfo = styled.div``;

export const ListInfo = styled.ul`
  list-style: square;
  margin-left: 20px;
`;
export const ItemInfo = styled.li`
  margin-bottom: 20px;
`;
export const DivFooter = styled.div``;
