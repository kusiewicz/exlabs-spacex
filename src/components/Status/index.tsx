import React from 'react';

import { Container } from './styles/status';

const Status = ({ children, ...restProps }: { children: React.ReactNode }): JSX.Element => {
  return <Container {...restProps}>{children}</Container>;
};

export default Status;
