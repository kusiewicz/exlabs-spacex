import React from 'react';

import { Container, Text } from './styles/button';

const Button = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
