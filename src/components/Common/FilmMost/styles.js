import { Col, Row } from 'antd';
import styled from 'styled-components';

export const DivListFilm = styled.div`
  width: 95%;
  margin-bottom: 40px;
  border: 2px solid var(--color-most-film);
`;

export const TitleList = styled.h2`
  padding-top: 0.5rem;
  margin: 0 16px 10px;
  color: var(--black);
  font-size: 18px;
`;

export const ListFilm = styled.ul`
  border-top: 2px solid var(--color-most-film);
  & li:nth-child(2n) {
    background-color: #ffe9e9;
  }
`;
export const Item = styled.li`
  padding: 0.8rem;
`;
export const RowItem = styled(Row)``;
export const ColItem = styled(Col)``;
export const ImageItem = styled.img`
  width: 100%;
  height: 80px;
`;

export const TextFilm = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--black);
  margin: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;

  &:hover {
    color: var(--white);
  }
`;
