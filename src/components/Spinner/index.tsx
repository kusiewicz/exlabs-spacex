import React from 'react';

import { Container, Spinner } from './styles/spinner';

const Loading = (): JSX.Element => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
