import Select from 'react-select';
import styled from 'styled-components';

export const StyledSelect = styled(Select)``;

export const customStyles = {
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
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'var(--accentColor)',
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
    },
    '&:focus': {
      border: 'none',
      boxShadow: 'none',
    },
    color: 'var(--logoHeaderColor)',
    /* другие стили для контейнера селекта */
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--headerColor)',
    width: '100px',
    border: '1px solid var(--accentColor)',
    outline: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'transparent',
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
    fontWeight: 'var(--fontWeight500)',
    border: 'none',
    outline: 'none',
    backgroundColor: 'var(--headerColor)',
    '&:hover': {
      color: 'var(--accentColor)',
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
    },
  }),
};
