import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  ${({ theme }) => css`
    border: 2px solid gray;
    width:50.5rem;//a
    align-items: center ;
    justify-content: center ;
    padding: 3rem 2.5rem;
    border-radius: 15px;
    margin-right:4.2rem ;
    background-color: ${theme.formBg};
  
    form{
      border-radius: 10px ;
      border: 2px solid gray;
      padding: 1rem 2rem 0rem 2rem;
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
      display: block;
      width: 100%;
      height: 4.2rem ;//a
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      line-height: 1.42857143;
      color: #000 ;
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

  label{
    font-size: small;
    color:${theme.menuIcon};
    font-weight: 200;
  }
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
    margin-bottom: 2rem;
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