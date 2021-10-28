import React from 'react';

import { Container, Item, Frame, Image, About, Title, Inner, Name, Info } from './styles/ship';

const Ship = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

Ship.Container = function ShipContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Ship.Image = function ShipImage({ src, ...restProps }) {
  return (
    <Frame {...restProps}>
      <Image src={src} />
    </Frame>
  );
};

Ship.About = function ShipAbout({ children, ...restProps }) {
  return <About {...restProps}>{children}</About>;
};

Ship.Inner = function ShipInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Ship.Name = function ShipName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Ship.Title = function ShipTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Ship.Info = function ShipInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

export default Ship;
