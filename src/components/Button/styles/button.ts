import styled from 'styled-components/macro';

export const Container = styled.button`
  border: 2px solid white;
  padding: 0;
  background: transparent;
  margin: 12px 0;

  @media (max-width: 800px) {
    margin-bottom: 25px;
    margin-top: 28px;
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  padding: 17px 35px;
  font-weight: 400;
  color: white;
`;
