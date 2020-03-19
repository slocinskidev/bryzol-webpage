import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle'
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/PageHeader/PageHeader';


const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

const ChildreenWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const PageLayout = ({ children, title }) => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledWrapper>
            <PageHeader title={title}/>
            <ChildreenWrapper>
              {children}
            </ChildreenWrapper>
            <Footer />
          </StyledWrapper>
        </>
      </ThemeProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageLayout;