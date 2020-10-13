import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import bxsShareAlt from '@iconify/icons-bx/bxs-share-alt';
import outlineEmail from '@iconify/icons-ic/outline-email';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.box};
  margin: 10px;
`;

const StyledHeaderWrapper = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'avatar name'
    'avatar name';
`;

const StyledAvatarWrapper = styled.img`
  margin: 0;
  width: 75px;
  height: 75px;
  background-image: url(${({ avatar }) => avatar});
  border: 2px solid white;
  background-size: cover;
  grid-area: avatar;

  @media (min-width: 400px) {
    width: 100px;
    height: 100px;
  }
`;

const StyledName = styled.h3`
  margin: 0 0 0 10px;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  grid-area: name;
  align-self: center;
  text-align: left;

  @media (min-width: 400px) {
    font-size: ${({ theme }) => theme.font.h3};
    margin: 0 0 0 10px;
  }
`;

const StyledContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const StyledContactElements = styled.div`
  display: grid;
`;

const Telephone = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
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
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Email = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
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
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const EmailIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const ShareIcon = styled(Icon)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  width: 35px;
  height: 35px;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const ContactCard = ({ name, tel, email, avatar }) => {
  const telTo = `tel:${tel.split(' ').join('')}`;
  const mailTo = `mailto:${email}`;

  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledAvatarWrapper avatar={avatar} alt={`Zdjęcie ${name}`} />
        <StyledName>{name}</StyledName>
      </StyledHeaderWrapper>
      <StyledContactWrapper>
        <StyledContactElements>
          <Telephone href={telTo}>
            <TelephoneIcon icon={telephoneIcon} />
            {tel}
          </Telephone>
          <Email href={mailTo}>
            <EmailIcon icon={outlineEmail} />
            {email}
          </Email>
        </StyledContactElements>
        {/* <ShareIcon icon={bxsShareAlt} /> */}
      </StyledContactWrapper>
    </StyledWrapper>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ContactCard;
