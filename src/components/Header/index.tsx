import React from 'react';

import { Container, Arrow, Frame, Logo } from './styles/header';

const Header = ({ children, ...restProps }: { children: React.ReactNode }): JSX.Element => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Arrow = function HeaderArrow({
  action,
  ...restProps
}: {
  action: string;
  name?: string;
}): JSX.Element {
  return (
    <Arrow
      role="button"
      name={action === 'previous' ? 'previous' : 'next'}
      aria-label={action === 'previous' ? 'previous' : 'next'}
      {...restProps}
    />
  );
};

Header.Frame = function HeaderFrame({ children }: { children: React.ReactNode }): JSX.Element {
  return <Frame>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ ...restProps }): JSX.Element {
  return <Logo role="banner" {...restProps} />;
};

export default Header;
