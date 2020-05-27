import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import bxMap from '@iconify/icons-bx/bx-map';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.color.secondary};
    transition: color 0.3s ease;

    & > * {
      transition: color 0.3s ease;
    }

    &:hover > * {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const MapIcon = styled(Icon)`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const StyledAddressList = styled.ul`
  text-align: center;
  list-style: none;
  font-weight: 500;
  font-size: 1.6rem;
`;

const AddressSection = ({ dinners }) => {
  return (
    <StyledWrapper>
      <a href="https://maps.google.com/maps?ll=50.045145,18.696428&z=16&t=m&hl=en&gl=PL&mapclient=embed&daddr=Bryzol%20Catering%20Bramkowa%203%2044-240%20%C5%BBory@50.0451449,18.6964282">
        <MapIcon icon={bxMap}>Map Icon</MapIcon>
        <StyledAddressList>
          <li>ul. Bramkowa 3</li>
          <li>44-240 Żory</li>
          {dinners && <li>godz. 13:00 - 19:00</li>}
        </StyledAddressList>
      </a>
    </StyledWrapper>
  );
};

export default AddressSection;
