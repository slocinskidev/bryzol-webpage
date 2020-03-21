import React from 'react';
import MenuLayout from '../layouts/MenuLayout';
import HeaderText from '../components/HeaderText/HeaderText';
import Navigation from '../components/Navigation/Navigation';
import FacebookButton from '../components/FacebookButton/FacebookButton';
import Background from '../components/Background/Background';

const IndexPage = () => (
  <MenuLayout>
    <HeaderText />
    <FacebookButton />
    <Navigation />
  </MenuLayout>
);

export default IndexPage;
