import React from 'react';

import { Container, Title } from './styles/ships';

export const Ships = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Ships.Title = function ShipTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default Ships;
