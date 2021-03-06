import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 53px;
  border-top: 1px solid #5c5c5d;
  border-bottom: 1px solid #5c5c5d;
  padding: 36px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 17px 15px 20px 15px;
    margin-top: 28px;
  }
`;

interface TitleProps {
  fontColor?: string;
}

export const Title = styled.p<TitleProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 1.6px;

  &:last-of-type {
    margin-top: 36px;
    margin-bottom: 17px;
  }

  @media (max-width: 800px) {
    margin-bottom: 7px;
    font-size: 14px;
  }
`;

export const Tooltip = styled.div`
  padding: 5px 10px;
  color: black;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  background-color: white;
  position: relative;
  bottom: -7px;
  left: -50px;
  display: none;
`;

interface InfoProps {
  fontSize?: string;
  mobileFontSize?: string;
  bold?: string;
}

export const Info = styled.p<InfoProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  font-weight: ${({ bold }) => bold && '500'};
  color: white;
  position: relative;
  letter-spacing: 0.3px;

  @media (max-width: 800px) {
    font-size: ${({ mobileFontSize }) => (mobileFontSize ? mobileFontSize : '16px')};
  }

  &:hover {
    + ${Tooltip} {
      display: block;
    }
  }
`;

export const Inner = styled.div`
  @media (min-width: 800px) {
    &:last-of-type {
      text-align: right;
    }
  }
`;

export const Group = styled.div`
  margin-bottom: 23px;

  @media (max-width: 800px) {
    margin-bottom: 20px;

    &:nth-of-type(2) {
      margin-bottom: 0;
    }
  }
`;
