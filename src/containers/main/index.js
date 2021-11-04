import { React, useState, useEffect } from 'react';
import { InfoBox, Button, Status } from '../../components';
import { ShipContainer } from '../ships';
import { getFormattedData } from '../../utils/getFormattedData';

export const MainContainer = ({ data }) => {
  console.log('rendered');
  const { missionName, rocket, date, mobileDate, site, siteLong, ships, recovered } =
    getFormattedData(data);

  const [screen, setScreen] = useState(window.innerWidth <= 800 ? 'small' : 'large');

  const checkWidth = () => {
    if (window.innerWidth <= 800) {
      setScreen('small');
    } else {
      setScreen('large');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return (
    <>
      <InfoBox>
        <InfoBox.Inner>
          <InfoBox.Group>
            <InfoBox.Title>MISSION</InfoBox.Title>
            <InfoBox.Info fontSize="42px" mobileFontSize="34px" bold>
              {missionName}
            </InfoBox.Info>
          </InfoBox.Group>
          <InfoBox.Group>
            <InfoBox.Title>ROCKET</InfoBox.Title>
            <InfoBox.Info>
              {rocket}
              {recovered ? <Status recovered>RECOVERED</Status> : <Status>UNRECOVERED</Status>}
            </InfoBox.Info>
          </InfoBox.Group>
          <Button name="Learn more" aria="Learn more">
            LEARN MORE
          </Button>
        </InfoBox.Inner>

        <InfoBox.Inner>
          <InfoBox.Group>
            <InfoBox.Title>LAUNCH DATE</InfoBox.Title>
            <InfoBox.Info>{screen === 'large' ? date : mobileDate}</InfoBox.Info>
          </InfoBox.Group>
          <InfoBox.Group>
            <InfoBox.Title>LAUNCH SITE</InfoBox.Title>
            <InfoBox.Info>{site}</InfoBox.Info>
            <InfoBox.Tooltip>{siteLong}</InfoBox.Tooltip>
          </InfoBox.Group>
        </InfoBox.Inner>
      </InfoBox>

      {ships && <ShipContainer ships={ships} />}
    </>
  );
};
