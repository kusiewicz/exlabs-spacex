import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 63px 0;
  border-top: 1px solid #5c5c5d;
  border-bottom: 1px solid #5c5c5d;
  padding: 36px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #868686;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 1.6px;

  &:first-of-type {
    margin-bottom: 12px;
  }
`;

export const Info = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  font-weight: ${({ bold }) => bold && '500'};
  color: white;
  margin-bottom: 23px;
`;

export const Inner = styled.div`
  &:last-of-type {
    text-align: right;
  }
`;

export const Group = styled.div``;
