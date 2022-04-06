import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      font-weight: bold;
      display: flex;
      margin-bottom: 5px;
    }

    input[type='email'],
    input[type='password'] {
      display: block;
      width: 25rem;
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 0.1rem solid #ccc;
      border-radius: 0.4rem;
    }
  `}
`;
export const FormControl = styled.div`
  margin-bottom: 2rem;
`;
