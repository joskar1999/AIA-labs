import React from 'react';
import { ActionButton, ControlsContainer } from './component-styles';
import { deleteLabel, editLabel, saveLabel } from '../../constants/constants';

const ContextChange = (props) => {
  return (
      <ControlsContainer height={props.height}>
        <ActionButton
            onClick={props.onEdit}>{props.isEditMode ? saveLabel : editLabel}</ActionButton>
        <ActionButton onClick={props.onDelete}>{deleteLabel}</ActionButton>
      </ControlsContainer>
  );
};

export default ContextChange;