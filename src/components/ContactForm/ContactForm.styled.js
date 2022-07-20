import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 15px 200px 15px 15px;
  margin: 20px 0 20px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Input = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
`;

export const Label = styled.div`
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin: 10px auto 10px 0;
  padding: 8px;
  border: 1px;
  border-radius: 10px;
  box-shadow: 5px 2px 2px grey;
  cursor: pointer;
  :hover {
    background-color: green;
    box-shadow: 5px 2px 2px #123912;
    color: white;
  }
`;
