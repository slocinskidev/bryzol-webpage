import React from 'react';
import MenuLayout from '../layouts/MenuLayout';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import FacebookButton from '../components/FacebookButton/FacebookButton';

const IndexPage = () => (
  <MenuLayout>
    <Header />
    <FacebookButton />
    <Navigation />
  </MenuLayout>
);

export default IndexPage;