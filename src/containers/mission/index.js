import React from 'react';
import { InfoBox } from '../../components';

export const MissionContainer = () => {
  return (
    <InfoBox>
      <InfoBox.Inner>
        <InfoBox.Group>
          <InfoBox.Title>MISSSION</InfoBox.Title>
          <InfoBox.Info fontSize="42px" bold>
            Starlink-12 v1.0
          </InfoBox.Info>
        </InfoBox.Group>
        <InfoBox.Group>
          <InfoBox.Title>ROCKET</InfoBox.Title>
          <InfoBox.Info>Falcon 9</InfoBox.Info>
        </InfoBox.Group>
      </InfoBox.Inner>

      <InfoBox.Inner>
        <InfoBox.Group>
          <InfoBox.Title>LAUNCH DATE</InfoBox.Title>
          <InfoBox.Info>20 JAN 2021</InfoBox.Info>
        </InfoBox.Group>
        <InfoBox.Group>
          <InfoBox.Title>LAUNCH SITE</InfoBox.Title>
          <InfoBox.Info>KSC LC 39A</InfoBox.Info>
        </InfoBox.Group>
      </InfoBox.Inner>
    </InfoBox>
  );
};
