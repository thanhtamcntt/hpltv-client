import styled from 'styled-components';

export const TitleVideo = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 26px;
  margin: 0 0 20px;
`;

export const DivVideo = styled.div`
  width: 100%;
  & iframe {
    border-radius: 20px;
  }
`;

export const DivContentVideo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const DivAction = styled.div`
  margin-top: 20px;
`;

export const ButtonAction = styled.button`
  width: 70px;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  & span {
    font-size: 14px;
    text-align: center;
    width: 100%;
    padding: 4px 4px;
    font-weight: 500;
  }
`;

export const DivServer = styled.div`
  margin-top: 30px;
  text-align: left;

  & label {
    font-size: 16px;
  }

  & span {
    padding: 5px 20px;
    font-size: 16px;
  }
`;

export const RatingAction = styled.div`
  margin-top: 20px;
  & label {
    font-size: 16px;
  }
`;
