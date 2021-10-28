import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { apolloData } from '../lib/apolloData';
import { MainContainer } from '../containers/main';

import logo from '../assets/images/logo.png';

export const Home = () => {
  const [missionsData, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    apolloData()
      .catch((err) => console.log(err))
      .then((data) => setData(data.data.launchesPast));
  }, []);

  return (
    <>
      {missionsData.length > 1 ? (
        <>
          <Header>
            <Header.Arrow
              /* Buttons will be disabled when there is no next/previous mission in the missionsData array */
              disabled={id === 0}
              action="previous"
              direction="left"
              onClick={() => setId((id) => (id -= 1))}
            />
            <Header.Frame>
              <Header.Logo src={logo} />
            </Header.Frame>
            <Header.Arrow
              disabled={id === missionsData.length - 1}
              action="next"
              direction="right"
              onClick={() => setId((id) => (id += 1))}
            />
          </Header>
          <MainContainer id={id} data={missionsData[id]} />
        </>
      ) : (
        <h1>loading..</h1>
      )}
    </>
  );
};

export default Home;
