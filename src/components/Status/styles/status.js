import styled from 'styled-components/macro';

export const Container = styled.button`
  padding: 3px 6px;
  background-color: ${({ recovered }) => (recovered ? '#6FB46E' : '#BE4E35')};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  position: relative;
  bottom: 2px;
  left: 5px;
`;
