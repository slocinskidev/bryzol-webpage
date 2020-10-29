import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import bxsShareAlt from '@iconify/icons-bx/bxs-share-alt';
import outlineEmail from '@iconify/icons-ic/outline-email';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  width: calc(100vw - 20px);
  max-width: 380px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: ${({ theme }) => theme.shadow.box};
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledName = styled.h3`
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  width: 100%;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.color.dark};
`;

const Telephone = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
  margin-right: 20px;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.secondary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Email = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const EmailIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.secondary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const MinimalistContactCard = ({ name, tel, email }) => {
  const telTo = `tel:${tel.split(' ').join('')}`;
  const mailTo = `mailto:${email}`;

  return (
    <StyledWrapper>
      <StyledName>{name}</StyledName>
      <Telephone href={telTo}>
        <TelephoneIcon icon={telephoneIcon} />
        {tel}
      </Telephone>
      <Email href={mailTo}>
        <EmailIcon icon={outlineEmail} />
        {email}
      </Email>
    </StyledWrapper>
  );
};

MinimalistContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default MinimalistContactCard;
