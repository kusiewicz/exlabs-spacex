import { React } from 'react';
import { InfoBox, Button, Status } from '../../components';
import { getFormattedData } from '../../utils/getFormattedData';

export const MainContainer = ({ data }, recovered = true) => {
  console.log(data);
  const { missionName, rocket, date, site, siteLong } = getFormattedData(data);

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
          <Button>LEARN MORE</Button>
        </InfoBox.Inner>

        <InfoBox.Inner>
          <InfoBox.Group>
            <InfoBox.Title>LAUNCH DATE</InfoBox.Title>
            <InfoBox.Info>{date}</InfoBox.Info>
          </InfoBox.Group>
          <InfoBox.Group>
            <InfoBox.Title>LAUNCH SITE</InfoBox.Title>
            <InfoBox.Info>{site}</InfoBox.Info>
          </InfoBox.Group>
        </InfoBox.Inner>
      </InfoBox>
    </>
  );
};
