import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 60px auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  &:invalid {
    box-shadow: 0px 0px 0px 3px red;
  }

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
  outline: none;

  &:hover,
  &:target,
  &:focus {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const StyledHeading = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.color.dark};
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

const ToastifyContainer = styled.div`
  display: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  display: inline-block;
  margin-top: 40px;
  width: 80px;
  height: 80px;
  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary} transparent
      ${({ theme }) => theme.color.secondary} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

const ContactForm = () => {
  const [isSent, setSent] = useState(null);
  const [isError, setError] = useState(null);

  return (
    <StyledWrapper>
      <ToastContainer autoClose={3000} />
      <StyledHeading>Formularz kontaktowy</StyledHeading>
      <Formik
        initialValues={{ name: '', email: '', tel: '', message: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Imię i nazwisko jest wymagane'),
          email: Yup.string()
            .email('Email jest niepoprawny')
            .required('Email jest wymagany'),
          tel: Yup.number()
            .typeError('Proszę o wprowadzenie poprawnego numeru telefonu')
            .integer()
            .positive()
            .required('Telefon jest wymagany'),
          message: Yup.string().required('Treść wiadomości jest wymagana'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post(
              'https://us-central1-bryzol-webpage-contact-f-971f1.cloudfunctions.net/sendEmail',
              values,
            )
            .then(res => {
              setSubmitting(false);
              setSent(!isSent);
              resetForm();
            })
            .catch(err => {
              setSubmitting(false);
              setError(!isError);
            });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            {isSubmitting ? (
              <Loader />
            ) : (
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
                <ErrorMessage component={StyledErrorMessage} name="name" />
                <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
                <StyledInput
                  id="email"
                  type="e-mail"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage component={StyledErrorMessage} name="email" />
                <StyledLabel htmlFor="tel">Nr telefonu</StyledLabel>
                <StyledInput
                  id="tel"
                  type="text"
                  name="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                />
                <ErrorMessage component={StyledErrorMessage} name="tel" />
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
                <ErrorMessage component={StyledErrorMessage} name="message" />
                <Button type="submit" disabled={isSubmitting}>
                  Wyślij
                </Button>
              </StyledForm>
            )}
          </>
        )}
      </Formik>
      <ToastifyContainer>
        {isSent
          ? toast.success('Wiadomość została wysłana', {
              position: toast.POSITION.TOP_CENTER,
            })
          : ''}
        {isError
          ? toast.error(
              `Wiadomość nie została wysłana! 
              Spróbuj ponownie lub napisz do nas bezpośrednio`,
              {
                position: toast.POSITION.TOP_CENTER,
              },
            )
          : ''}
      </ToastifyContainer>
    </StyledWrapper>
  );
};

export default ContactForm;
