import React from 'react'
import './Search.scss'
import { Suggestions } from '../Suggestions/Suggestions'

export const Search = ({
    searchText,
    searchHandler,
    skuList,
}) => {
    console.log("skuList",skuList)
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Type to search for a service"
                onChange={searchHandler}
            >
            </input>
            <Suggestions skuList={skuList}/>
        </div>
    )
}
