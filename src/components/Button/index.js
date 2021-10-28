import React from 'react';

import { Container, Text } from './styles/button';

const Button = ({ children, name, aria, ...restProps }) => {
  return (
    <Container role="button" name={name} aria-label={aria} {...restProps}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
