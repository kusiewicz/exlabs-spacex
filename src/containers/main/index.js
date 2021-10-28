import { React, useState, useEffect } from 'react';
import { InfoBox, Button, Status } from '../../components';
import { ShipContainer } from '../ships';
import { getFormattedData } from '../../utils/getFormattedData';

export const MainContainer = ({ data }) => {
  const { missionName, rocket, date, mobileDate, site, siteLong, ships, recovered } =
    getFormattedData(data);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <InfoBox>
        <InfoBox.Inner>
          <InfoBox.Group>
            <InfoBox.Title>MISSSION</InfoBox.Title>
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
            <InfoBox.Info>{width > 800 ? date : mobileDate}</InfoBox.Info>
          </InfoBox.Group>
          <InfoBox.Group>
            <InfoBox.Title>LAUNCH SITE</InfoBox.Title>
            <InfoBox.Info>{site}</InfoBox.Info>
            <InfoBox.Tooltip>{siteLong}</InfoBox.Tooltip>
          </InfoBox.Group>
        </InfoBox.Inner>
      </InfoBox>
      <ShipContainer ships={ships} />
    </>
  );
};
