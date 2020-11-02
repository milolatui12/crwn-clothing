import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.style';

const HomePage = () => {
  console.log('1234');
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
};

export default HomePage;
