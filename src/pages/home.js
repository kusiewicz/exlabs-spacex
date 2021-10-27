import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { apolloData } from '../lib/apolloData';
import { MainContainer } from '../containers/main';

import logo from '../assets/images/logo.png';

export const Home = () => {
  const [missionData, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    apolloData()
      .catch((err) => console.log(err))
      .then((data) => setData(data.data.launchesPast));
  }, []);

  console.log(id);

  return (
    <>
      {missionData.length > 1 ? (
        <>
          <Header>
            <Header.Arrow
              disabled={id === 0}
              action="previous"
              direction="left"
              onClick={() => setId((id) => (id -= 1))}
            />
            <Header.Frame>
              <Header.Logo src={logo} />
            </Header.Frame>
            <Header.Arrow
              disabled={id === missionData.length - 1}
              action="next"
              direction="right"
              onClick={() => setId((id) => (id += 1))}
            />
          </Header>
          <MainContainer id={id} data={missionData[id]} />
        </>
      ) : (
        <h1>Loading screen...</h1>
      )}
    </>
  );
};

export default Home;
