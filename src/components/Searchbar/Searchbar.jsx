import s from './Searchbar.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
export default function Searchbar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        setInputValue(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            alert('Put some request!');
            return;
        }
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form className={s.searchForm} onSubmit={handleSubmit}>
            <input
                className={s.searchFormInput}
                type="search"
                value={inputValue}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search some movies"
            />
            <button type="text" className={s.searchFormButton}>
                Search
            </button>
        </form>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
