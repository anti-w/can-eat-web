import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  ${({ theme }) => css`
  border: 2px solid gray;
    padding-top: 5rem;
    font-size: 1.4rem;
    width: 46.5rem;
    height: 52.5rem;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    border-radius: 15px;
    margin-right: 4.2rem;
    background-color: ${theme.formBg};
  
    form{
      width: 100%;
      border-radius: 10px;
      border: 2px solid gray;
      padding: 1.25rem 1rem;
      padding-bottom: -1rem;
    }

    label {
      font-weight: bold;
      display: flex;
      margin-bottom: 5px;
      color: ${({theme})=> theme.heading}
    }

    input[type='text'],
    input[type='email'],
    input[type='password'] {
      display: flex;
      width: 85%;
      height: 3.6rem;
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      line-height: 1.42857143;
      color: #000;
      background-color: #fff;
      border: 0.2rem solid #282828;
      border-radius: 0.4rem;
    }

    @media ${theme.media.lteMedium}{
    width: 40rem;
    margin-right: 0;
    }
  `}
`;

export const FormControl = styled.div`
  margin-bottom: 2rem;
`;

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

export const HeadingContainer = styled.div`
  ${({ theme }) => css`
  justify-content: center ;
  margin-bottom: 3rem;
  
  h2 {
    font-weight: 200;
  }
  h3{
    margin:1rem 0 ;
    font-weight: bold ;
    color:${theme.menuIcon};
    padding-left: 1rem;
  }`}

`;

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: center ;
  align-items: center ;
  margin-top: 8rem ;
  

  img{
    margin-left: 8rem;
  }

  p{
    display: flex ;
    width: 100% ;
    justify-content: center ;
    align-items: center ;
    color:${theme.menuIcon} ;
    font-size: 1.4rem ;
  }
  p a{
    color: ${theme.heading};
    cursor: pointer ;
    margin-left: 0.5rem;
  }

  @media ${theme.media.lteMedium}{
    padding-top: 6rem ;
    img{
      display: none ;
    }`
  }
`;