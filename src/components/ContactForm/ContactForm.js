/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 40px auto;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  position: relative;
  display: block;
  border: 2px solid ${({ theme }) => theme.color.primary};
  background: none;
  font-family: Montserrat;
  font-size: 1.6rem;
  height: ${({ as }) => (as ? '200px' : 'auto')};
  width: 100%;
`;

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  font-weight: 700;
  pointer-events: none;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  margin: 20px 0 0;
  padding: 10px 30px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 700;
`;

const StyledHeading = styled.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const StyledError = styled.p`
  color: red;
`;

const ContactForm = () => (
  <StyledWrapper>
    <StyledHeading>Formularz kontaktowy</StyledHeading>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Pole wymagane';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Niewłaściwy adres email';
        }
        if (!values.name) {
          errors.name = 'Pole wymagane';
        }

        if (!values.message) {
          errors.message = 'Pole wymagane';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Imię i nazwisko</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledError>{errors.name && touched.name && errors.name}</StyledError>
          <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
          <StyledInput
            id="email"
            type="e-mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <StyledError>{errors.email && touched.email && errors.email}</StyledError>
          <StyledLabel>Wiadomość</StyledLabel>
          <StyledInput
            as="textarea"
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <StyledError>{errors.message && touched.message && errors.message}</StyledError>
          <Button disabled={isSubmitting}>Wyślij</Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default ContactForm;
