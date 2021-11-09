import styled from 'styled-components/macro';

interface ContainerProps {
  recovered?: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 3px 5px;
  background-color: ${({ recovered }) => (recovered ? '#6FB46E' : '#BE4E35')};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  position: relative;
  bottom: 2px;
  left: 10px;
`;
