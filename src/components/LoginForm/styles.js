import styled, { css } from 'styled-components';
import { FooterForm as Footer, Container as ContentContainer, FormContainer as Form, HeadingContainer as Title, FormControl as FormSeparator } from '../RegisterForm/styles';

export const Remember = styled.div`
  ${({ theme }) => css`
  padding: 1.5rem;
  justify-content: space-between ;
  display: flex;
  align-items: center ;

  a{
    font-size: small ;
    cursor: pointer ;
    color: ${theme.heading};
  }`}

`; 

export const FooterForm = Footer;
export const Container = ContentContainer;
export const FormContainer = Form;
export const HeadingContainer = Title;
export const FormControl = FormSeparator;