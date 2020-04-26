import {
  alphabetic,
  alphabeticReverse,
  noSort,
  ratingAscending,
  ratingDescending
} from '../constants/constants';

const alphabeticAsc = (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
const alphabeticDsc = (a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
const ratingAsc = (a, b) => a.rating > b.rating ? 1 : -1;
const ratingDsc = (a, b) => a.rating < b.rating ? 1 : -1;
const sortDefault = (a, b) => a.id > b.id ? 1 : -1;

export const getSortFunction = (alg) => {
  switch (alg) {
    case alphabetic:
      return alphabeticAsc;
    case alphabeticReverse:
      return alphabeticDsc;
    case ratingAscending:
      return ratingAsc;
    case ratingDescending:
      return ratingDsc;
    case noSort:
      return sortDefault;
    default:
      return sortDefault;
  }
}