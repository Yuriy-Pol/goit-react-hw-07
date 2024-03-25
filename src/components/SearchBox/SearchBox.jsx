import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const searchBarId = useId();
  const selectNameFilter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.find}>
      <label htmlFor={searchBarId}>Find contact by name</label>
      <input
        className={css.searchBar}
        type="text"
        name="searchBar"
        id={searchBarId}
        value={selectNameFilter}
        onChange={handleSearch}
      />
    </div>
  );
}
