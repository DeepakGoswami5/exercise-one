import React, {useState} from 'react'
import { Search } from "../search/Search"
import api from "../../api/index"
import { SkuDetails } from "../skuDetails/SkuDetails"

export const SkuSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [skuList,setSkuList] = useState({
        list: [],
        cursor: 0,
    });
    const [currentSKU, setCurrentSKU] = useState(null);

    const searchHandler = (e) => {
        setSearchText(e.target.value);
        getData(e.target.value)
    };

    const getData = async (value) => {
        const data = await api.getSkuName(value)
        const { sku } = data
        setSkuList({
            ...skuList,
            list:sku,
        })
    }

    const suggestionSelectHandler = (value) => {
        setSearchText(value);
        setSkuList({
          ...skuList,
        });
      };
    
    const skuDetailsHandler = (index) => {
        console.log("index: ", index, skuList.list[index]);
        setCurrentSKU(skuList.list[index]);
    };

    return (
        <div className="wrapper">
            <Search
                searchText={searchText}
                searchHandler={searchHandler}
                skuList={skuList}
                skuDetailsHandler={skuDetailsHandler}
                suggestionSelectHandler={suggestionSelectHandler}
            >
            </Search>
            <SkuDetails currentSKU={currentSKU} />
        </div>
    )
}
