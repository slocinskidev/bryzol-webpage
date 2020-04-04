import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import Gallery from '../components/Gallery/Gallery';

// Pose
const PosedPageHeaderWrapper = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
});

const PosedContentWrapper = posed.div({
  visible: {
    delay: 500,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

// Style

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const StyledPageHeaderWrapper = styled(PosedPageHeaderWrapper)`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled(PosedContentWrapper)`
  width: 100%;
  height: 100%;
`;

const GalleryPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <StyledPageHeaderWrapper pose={visible ? 'visible' : 'hidden'}>
          <PageHeader title="Galeria" subtitle="Kliknij by powiększyć zdjęcie" />
        </StyledPageHeaderWrapper>
        <StyledContentWrapper pose={visible ? 'visible' : 'hidden'}>
          <Gallery />
        </StyledContentWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default GalleryPage;
