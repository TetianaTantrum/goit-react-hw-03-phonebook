import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
  padding: 0;
`;
export const Button = styled.button`
  font-size: 14px;
  text-align: center;
  padding: 5px 10px;
  color: white;
  background-color: #5e5e73;
  border-radius: 5px;
  max-width: 150px;
`;
