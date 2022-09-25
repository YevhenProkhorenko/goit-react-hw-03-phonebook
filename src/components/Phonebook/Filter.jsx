import React from 'react';
import PropTypes from 'prop-types';
import css from '../Phonebook/Phonebook.module.scss';

export default function Filter({ filter, onChange }) {
  return (
    <div>
      <label className={(css.labelText, css.formFlex)}>
        Find contacts by name:
        <input
          className={css.inputStyles}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.defaultProps = {
  filter: '',
};
///Якщо вказати filter: PropTypes.string.isRequired, то в консолі видає Warning: Failed prop type: The prop `filter` is marked as required in `Filter`, but its value is `undefined`.
///Однак, якщо поставити Filter.defaultProps, то помилка не виникає, це нормальна практика, чи "костилі" і є правильніше рішення?
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
