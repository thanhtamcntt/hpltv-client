import styled from 'styled-components';

export const ButtonCustomerSupport = styled.button`
  background: var(--bg-customer);
  cursor: pointer;
  color: #fff;
  position: fixed;
  right: 2rem;
  top: 85vh;
  border-radius: 100%;
  padding: 0.5rem;
  z-index: 10000;
  & svg {
    font-size: 34px;
  }
`;
