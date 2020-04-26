import React from 'react';
import { PageHeader, TitleWrapper } from './component-styles';

const TitleBar = (props) => {
  return (
      <TitleWrapper>
        <PageHeader>
          {props.title}
        </PageHeader>
      </TitleWrapper>
  );
};

export default TitleBar;