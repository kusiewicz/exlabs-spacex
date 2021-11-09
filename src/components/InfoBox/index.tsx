import React from 'react';

import { Container, Title, Info, Inner, Tooltip, Group } from './styles/infoBox';

const InfoBox = ({ children, ...restProps }: { children: React.ReactNode }): JSX.Element => {
  return <Container {...restProps}>{children}</Container>;
};

InfoBox.Title = function InfoBoxTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Title {...restProps}>{children}</Title>;
};

InfoBox.Info = function InfoBoxInfo({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Info {...restProps}>{children}</Info>;
};

InfoBox.Inner = function InfoBoxInner({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Inner {...restProps}>{children}</Inner>;
};

InfoBox.Tooltip = function InfoBoxGroup({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Tooltip {...restProps}>{children}</Tooltip>;
};

InfoBox.Group = function InfoBoxGroup({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Group {...restProps}>{children}</Group>;
};

export default InfoBox;
