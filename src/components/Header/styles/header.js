import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding-top: 60px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    padding: 25px 30px 0px 30px;
  }
`;

export const Arrow = styled.div`
  transform: ${({ direction }) => (direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)')};
  ${({ disabled }) => disabled && 'pointer-events: none'};
  border: solid white;
  border-width: 0 4px 4px 0;
  padding: 7px;
  width: 0;
  height: 0;
  cursor: pointer;

  :hover {
    border-color: gray;
  }
`;

export const Frame = styled.div`
  height: 35px;
  width: 300px;

  @media (max-width: 800px) {
    height: 30px;
    width: 185px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 12px;
  }
`;
