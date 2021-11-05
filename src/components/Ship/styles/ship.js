import styled from 'styled-components/macro';

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

export const Item = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 360px;
  overflow: hidden;
`;

export const Frame = styled.div`
  width: 100%;
  height: 200px;
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const About = styled.div`
  padding: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 13px;
`;

export const Inner = styled.div`
  margin-bottom: 5px;

  &:first-of-type {
    margin-top: 14px;
  }
`;

export const Title = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.2px;
  margin-right: 30px;
`;

export const BannerTitle = styled(Title)`
  font-size: 16px;
  margin-right: 0;
  margin-top: 36px;
  margin-bottom: 17px;

  @media (max-width: 1000px) {
    margin-top: 17px;
    margin-left: 15px;
  }
`;

export const Info = styled.p`
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
`;
