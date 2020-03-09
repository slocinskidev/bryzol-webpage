import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../components/PageHeader/PageHeader';

const AboutPage = ({title}) => (
  <PageLayout title='O Nas'>
    <h2>O Nas</h2>
  </PageLayout>
);

AboutPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AboutPage;