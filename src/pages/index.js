import React from 'react';
import Layout from '../layouts/layout';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import FacebookButton from '../components/FacebookButton/FacebookButton';

const IndexPage = () => (
  <Layout>
    <Header />
    <FacebookButton />
    <Navigation />
  </Layout>
);

export default IndexPage;