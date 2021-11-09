import React from 'react';

import {
  Container,
  Item,
  Frame,
  Image,
  About,
  Title,
  BannerTitle,
  Inner,
  Name,
  Info,
} from './styles/ship';

const Ship = ({ children, ...restProps }: { children: React.ReactNode }): JSX.Element => {
  return <Item {...restProps}>{children}</Item>;
};

Ship.Container = function ShipContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Container {...restProps}>{children}</Container>;
};

Ship.Image = function ShipImage({
  src,
  ...restProps
}: {
  src: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Frame {...restProps}>
      <Image src={src} />
    </Frame>
  );
};

Ship.About = function ShipAbout({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <About {...restProps}>{children}</About>;
};

Ship.Inner = function ShipInner({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Inner {...restProps}>{children}</Inner>;
};

Ship.Name = function ShipName({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Name {...restProps}>{children}</Name>;
};

Ship.Title = function ShipTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Title {...restProps}>{children}</Title>;
};

Ship.BannerTitle = function ShipBannerTitle({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <BannerTitle {...restProps}>{children}</BannerTitle>;
};

Ship.Info = function ShipInfo({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Info {...restProps}>{children}</Info>;
};

export default Ship;
