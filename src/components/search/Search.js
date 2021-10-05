import React from 'react'
import './Search.scss'
import { Suggestions } from '../Suggestions/Suggestions'

export const Search = ({
    loading,
    searchText,
    searchHandler,
    skuList,
    skuDetailsHandler,
    suggestionSelectHandler,
    setSkuList,
    setSearchText,
}) => {

    const handleKeyDown = (e) => {
        const { list, cursor } = skuList;
        console.log("e.keyCode",e.keyCode,cursor)
        if (e.keyCode === 38 && cursor > 0) {
            setSkuList((prevState) => ({
            ...prevState,
            cursor: prevState.cursor - 1,
          }));
        } else if (e.keyCode === 40 && cursor < list.length) {
            setSkuList((prevState) => ({
            ...prevState,
            cursor: prevState.cursor + 1,
          }));
        }
    };
    
    const keyPressHandler = ({ key }) => {
        const firstSuggestion = skuList.list[0];
        if (key === "Enter" || firstSuggestion) {
            setSkuList({
            list: [],
            cursor: 0,
        });
        let suggestion;
        if (!skuList.cursor) {
            suggestion = firstSuggestion.sku_name;
        }else{
            suggestion = skuList.list[skuList.cursor].sku_name;
        }
        setSearchText(suggestion);
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Type to search for a service"
                onChange={searchHandler}
                onKeyDown={handleKeyDown}
                onKeyPress={(e) => {
                    keyPressHandler(e);
                    skuDetailsHandler(skuList.cursor);
                }}
            >
            </input>
            <Suggestions 
                skuList={skuList}
                suggestionSelectHandler={suggestionSelectHandler}
                searchText={searchText}
                searchHandler={searchHandler}
                skuDetailsHandler={skuDetailsHandler}
                loading={loading}
            />
        </div>
    )
}
