import React, { Component } from 'react';
export const SearchForm = (props) => (
    <div className="ui form">
        <label>Pet Name</label>
        <div className="ui input">
            <input type="text"  onChange={e => {
                props.onSearch(e.target.value)
            }} />
        </div>
    </div>
);