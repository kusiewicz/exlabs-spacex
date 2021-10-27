import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import { MainContainer } from '../main';
import { apolloData } from '../../lib/apolloData';
import logo from '../../assets/images/logo.png';

export const HeaderContainer = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    apolloData()
      .catch((err) => console.log(err))
      .then((data) => setData(data.data.launchesPast));
  }, []);

  console.log(id, data);

  return (
    <>
      <Header>
        <Header.Arrow action="previous" direction="left" onClick={() => setId((id) => (id -= 1))} />
        <Header.Frame>
          <Header.Logo src={logo} />
        </Header.Frame>
        <Header.Arrow action="next" direction="right" onClick={() => setId((id) => (id += 1))} />
      </Header>
      <MainContainer />
    </>
  );
};
