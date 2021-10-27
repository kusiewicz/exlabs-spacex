import React from 'react';

import { Container } from './styles/status';

const Status = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Status;
