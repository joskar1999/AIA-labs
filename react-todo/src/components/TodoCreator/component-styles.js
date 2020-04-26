import styled from 'styled-components';

export const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  background: lightgray;
  margin: 16px auto;
  border: 2px dashed black;
`;

export const TodoForm = styled.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ApplyButton = styled.button`
  margin: 8px 16px 16px 16px;
  padding: 8px;
  border: 2px solid black;
  font-weight: bold;
  font-size: 16px;
  background: lightblue;
  width: 50%;
`;