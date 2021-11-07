import React from 'react';

import { Container, Text } from './styles/button';

interface ButtonProps {
  children: React.ReactNode;
  name: string;
  aria: string;
}

const Button = ({ children, name, aria, ...restProps }: ButtonProps): JSX.Element => {
  return (
    <Container role="button" name={name} aria-label={aria} {...restProps}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
