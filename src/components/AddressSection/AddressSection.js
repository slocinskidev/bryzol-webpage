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
  padding: 0 0 20px 0;
`;

const MapIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const StyledAddressList = styled.ul`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  list-style: none;
  font-weight: 500;
`;

const AddressSection = ({ dinners }) => {
  return (
    <StyledWrapper>
      <MapIcon icon={bxMap}>Map Icon</MapIcon>
      <StyledAddressList>
        <li>ul. Bramkowa 3</li>
        <li>44-240 Żory</li>
        {dinners && <li>godz. 14:00 - 19:00</li>}
      </StyledAddressList>
    </StyledWrapper>
  );
};

export default AddressSection;
