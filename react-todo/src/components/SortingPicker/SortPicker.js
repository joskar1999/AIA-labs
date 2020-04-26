import React from 'react';
import { SortButton, SortGroup } from './component-styles';
import {
  alphabetic,
  alphabeticReverse,
  ratingAscending,
  ratingDescending,
  noSort
} from '../../constants/constants';

const SortPicker = (props) => {
  const algorithms = [alphabetic, alphabeticReverse, ratingAscending, ratingDescending, noSort];
  return (
      <SortGroup>
        {algorithms.map(alg => {
          return (
              <SortButton
                  name={alg}
                  onClick={(e) => props.onSortSelected(e.target.name)}
              >
                {alg}
              </SortButton>
          );
        })}
      </SortGroup>
  );
};

export default SortPicker;