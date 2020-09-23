import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import Gallery from '../components/Gallery/Gallery';
import SEO from '../components/Seo/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const PageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const GalleryPage = ({ location }) => {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Galeria" pathname={location.pathname} />
        <PageHeaderWrapper>
          <PageHeader title="Galeria" subtitle="Kliknij by powiększyć zdjęcie" />
        </PageHeaderWrapper>
        <Gallery />
      </Wrapper>
    </Layout>
  );
};

export default GalleryPage;
