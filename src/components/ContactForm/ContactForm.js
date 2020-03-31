import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 120px auto 40px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  position: relative;
  display: block;
  border: 0;
  outline: none;
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.primary};
  background: none;
  font-family: Montserrat;
  font-size: 1.6rem;
  height: ${({ as }) => (as ? '200px' : 'auto')};
  width: 100%;
  transition: box-shadow 0.2s ease;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.color.secondary};
  }
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
  cursor: pointer;
  margin: 20px 0 0;
  padding: 10px 30px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 700;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.secondary};
  }
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
    <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post(
            'https://us-central1-bryzol-webpage-contact-f-971f1.cloudfunctions.net/sendEmail',
            values,
          )
          .then(res => {
            toast.success('Mail został wysłany...');
            resetForm();
            setSubmitting(false);
          })
          .catch(err => {
            toast.error(
              'Wystąpił błąd w wysyłaniu maila... Spróbuj ponownie lub napisz do nas bezpośrednio',
            );
            setSubmitting(false);
          });
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
          <Button type="submit" disabled={isSubmitting}>
            Wyślij
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default ContactForm;
