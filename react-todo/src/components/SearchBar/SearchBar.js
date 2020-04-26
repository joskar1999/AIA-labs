import React from 'react';
import SortPicker from '../SortingPicker/SortPicker';
import { SearchContainer, SearchInput } from './component-styles';
import { searchHint } from '../../constants/constants';

const SearchBar = (props) => {
  const sortItems = (alg) => {
    props.onSort(alg);
  }

  return (
      <SearchContainer>
        <SearchInput
            type="text"
            placeholder={searchHint}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
        <SortPicker onSortSelected={sortItems}/>
      </SearchContainer>
  );
};

export default SearchBar;