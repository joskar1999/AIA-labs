import React from 'react';
import { InputLabel, RowContainer, TodoInput } from './component-styles';

const InputRow = (props) => {
  return (
      <RowContainer>
        <InputLabel htmlFor={props.labelFor}>
          {props.labelName}
        </InputLabel>
        <TodoInput
            type="text"
            name={props.labelFor}
            value={props.value}
            onChange={(e) => props.onInputChange(e.target.value)}
        />
      </RowContainer>
  );
}

export default InputRow;