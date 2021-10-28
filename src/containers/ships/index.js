import React from 'react';
import { Ship, Ships } from '../../components';

export const ShipContainer = ({ ships }) => {
  console.log(ships);
  return (
    <>
      <Ships.Title>RESCUE SHIPS</Ships.Title>
      <Ships>
        {ships.map((ship) => (
          <>
            <Ship>
              <Ship.Image src={ship.image} />
              <Ship.About>
                <Ship.Name>{ship.name}</Ship.Name>
                <Ship.Inner>
                  <Ship.Title>HOME PORT</Ship.Title>
                  <Ship.Info>{ship.home_port}</Ship.Info>
                </Ship.Inner>
                <Ship.Inner>
                  <Ship.Title>WEIGHT [KG]</Ship.Title>
                  <Ship.Info>{ship.weight_kg ? ship.weight_kg : '- - -'}</Ship.Info>
                </Ship.Inner>
              </Ship.About>
            </Ship>
          </>
        ))}
      </Ships>
    </>
  );
};