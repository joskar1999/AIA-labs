import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  width: 150px;
  margin: 8px 0;
  height: ${props => props.height};
  background: lightgray;
`;

export const ActionButton = styled.button`
  margin: 8px 16px;
  padding: 8px;
  border: 2px solid black;
  font-weight: bold;
  font-size: 16px;
  background: lightblue;
`;