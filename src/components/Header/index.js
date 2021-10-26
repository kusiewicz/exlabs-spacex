import React from 'react';

import { Container, Arrow, Frame, Logo } from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Arrow = function HeaderArrow({ action, ...restProps }) {
  return (
    <Arrow
      role="button"
      name={action === 'previous' ? 'previous' : 'next'}
      aria-label={action === 'previous' ? 'previous' : 'next'}
      {...restProps}
    />
  );
};

Header.Frame = function HeaderFrame({ children }) {
  return <Frame>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo role="banner" {...restProps} />;
};

export default Header;
