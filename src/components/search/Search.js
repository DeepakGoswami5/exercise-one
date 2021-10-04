import React from 'react'
import './Search.scss'
import { Suggestions } from '../Suggestions/Suggestions'

export const Search = ({
    searchText,
    searchHandler,
    skuList,
    skuDetailsHandler,
    suggestionSelectHandler,
}) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Type to search for a service"
                onChange={searchHandler}
            >
            </input>
            <Suggestions 
                skuList={skuList}
                suggestionSelectHandler={suggestionSelectHandler}
                searchText={searchText}
                searchHandler={searchHandler}
                skuDetailsHandler={skuDetailsHandler}
            />
        </div>
    )
}
