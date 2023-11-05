import styled from '@emotion/styled';
import { blue } from '@mui/material/colors';

const Base = styled

export const Form = styled.form`

> h1 {
  font-size: 32px;
}


  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  padding: 0 8px;
  margin-top: 10px;
`;

export const SignInButton = styled.button`
  width: 60%;
  height: 40px;
  color: white;
  border-radius: 8px;
  background-color: #016FB9;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;
