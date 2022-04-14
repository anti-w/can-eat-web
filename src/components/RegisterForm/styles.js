import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  height: 100vh;
  justify-content: center ;
  align-items: center ;  
  img{
    margin-left: 8rem;
  }

  p{
    display: flex ;
    width: 100% ;
    justify-content: center ;
    align-items: center ;
    color:${theme.menuIcon} ;
  }
  p a{
    color: ${theme.heading};
    cursor: pointer ;
    margin-left: 0.5rem;
  }

  @media ${theme.media.lteMedium}{
    img{
      display: none ;
    }`}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    border: 2px solid gray;
    padding-top: 5rem;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    padding: 2rem 2.5rem;
    border-radius: 15px;
    margin-right: 4.2rem;
    background-color: ${theme.formBg};

    form {
      width: 100%;
      border-radius: 10px;
      border: 2px solid gray;
      padding: 1.25rem 1rem;
    }

    label {
      font-weight: bold;
      font-size: 1.3rem;
      display: flex;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.heading};
    }

    input[type='text'],
    input[type='email'],
    input[type='password'] {
      display: flex;
      width: 85%;
      height: 3.6rem;
      padding: 0.6rem 1.2rem;
      font-size: 1.3rem;
      background-color: #fff;
      border: 0.2rem solid #282828;
      border-radius: 0.4rem;
    }

    @media ${theme.media.lteMedium} {
      width: 40rem;
      margin-right: 0;
    }
  `}
`;
export const FormControl = styled.div`
  margin-bottom: 2rem;
`;
export const HeadingContainer = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    margin-bottom: 1.5rem;

    h2 {
      font-weight: 300;
      font-size: 22px;
    }
    h3 {
      padding: 1rem;
      font-weight: 500;
      font-size: 18px;

      color: ${theme.menuIcon};
    }
  `}
`;

export const FooterForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
      color: ${theme.white};
      cursor: pointer;
      border: none;
      width: 18rem;
      height: 4.2rem;
      border-radius: 0.5rem;
      background: ${theme.heading};
    }
  `}
`;
