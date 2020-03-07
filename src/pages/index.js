import React from 'react';
import Layout from '../layouts/layout';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import FacebookButton from '../components/FacebookButton/FacebookButton';

const IndexPage = () => (
  <Layout>
    <Header />
    <FacebookButton />
    <Menu />
    <Footer />
  </Layout>
);

export default IndexPage;