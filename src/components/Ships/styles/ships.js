import styled from 'styled-components/macro';

export const Title = styled.p`
  color: #868686;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.2px;
  margin-top: 36px;
  margin-bottom: 17px;

  @media (max-width: 1000px) {
    margin-top: 17px;
    margin-left: 15px;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) and (max-width: 1400px) {
    justify-content: center;
    align-items: center;
  }
`;
