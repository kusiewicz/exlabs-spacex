import React, { useState, useEffect } from 'react';
import { Header, Loading } from '../components';
import { apolloData } from '../lib/apolloData';
import { MainContainer } from '../containers/main';

import logo from '../assets/images/logo.png';

export const Home = () => {
  const [missionData, setData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    apolloData(id)
      .catch((err) => console.log(err))
      .then((data) => setData(data.data.launchLatest));
  }, [id]);

  return (
    <>
      {Object.keys(missionData).length > 1 ? (
        <>
          <Header>
            <Header.Arrow
              /* Buttons will be disabled when there is no next/previous mission in the missionsData array */
              disabled={id <= 1}
              action="previous"
              direction="left"
              onClick={() => {
                setData([]);
                setId((id) => (id -= 1));
              }}
            />
            <Header.Frame>
              <Header.Logo src={logo} />
            </Header.Frame>
            <Header.Arrow
              disabled={id === 108}
              action="next"
              direction="right"
              onClick={() => {
                setData([]);
                setId((id) => (id += 1));
              }}
            />
          </Header>
          <MainContainer id={id} data={missionData} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
