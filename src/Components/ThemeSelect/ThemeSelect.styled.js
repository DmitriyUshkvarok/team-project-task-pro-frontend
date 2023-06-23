import Select from 'react-select';
import styled, { keyframes } from 'styled-components';

export const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: 'var(--logoHeaderColor)',
    '&:hover': {
      color: 'var(--accentColor)',
      cursor: 'pointer',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--logoHeaderColor)',
    '&:hover': {
      color: 'var(--accentColor)',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    border: 'none',
    outline: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    borderColor: state.isFocused ? 'transparent' : provided.borderColor,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'var(--accentColor)',
      filter:
        'drop-shadow(0 0 20px var(--accentColor)) drop-shadow(0 0 30px var(--accentColor))',
      transition: 'var(--transition)',
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
    },
    '&:focus': {
      border: 'none',
      boxShadow: 'none',
      borderColor: 'transparent',
      outline: 'none',
    },
    '& span': {
      border: 'none',
    },
    color: 'var(--logoHeaderColor)',
    /* другие стили для контейнера селекта */
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--headerColor)',
    width: '100px',
    height: '107px',
    border: '1px solid var(--accentColor)',
    display: 'inline-flex',
    rowGap: '4px',
    outline: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '8px',
    '&:hover': {
      color: 'var(--accentColor)',
    },
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    color: 'var(--logoHeaderColor)',
  }),
  option: (provided) => ({
    ...provided,
    color: 'var(--logoHeaderColor)',
    fontSize: '14px',
    opacity: '50%',
    fontWeight: 'var(--fontWeight400)',
    border: 'none',
    outline: 'none',
    textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'var(--headerColor)',
    '&:hover': {
      color: 'var(--accentColor)',
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
    },
  }),
};
