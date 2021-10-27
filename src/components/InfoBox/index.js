import React from 'react';

import { Container, Title, Info, Inner, Group } from './styles/infoBox';

const InfoBox = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

InfoBox.Title = function InfoBoxTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

InfoBox.Info = function InfoBoxInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

InfoBox.Inner = function InfoBoxInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

InfoBox.Group = function InfoBoxGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

export default InfoBox;
