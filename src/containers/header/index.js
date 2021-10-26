import React from 'react';
import { Header } from '../../components';
import logo from '../../assets/images/logo.png';

export const HeaderContainer = () => {
  return (
    <Header>
      <Header.Arrow action="previous" direction="left" />
      <Header.Frame>
        <Header.Logo src={logo} />
      </Header.Frame>
      <Header.Arrow action="next" direction="right" />
    </Header>
  );
};
