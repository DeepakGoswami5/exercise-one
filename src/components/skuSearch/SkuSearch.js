import React, {useState} from 'react'
import { Search } from "../search/Search"
import api from "../../api/index"

export const SkuSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [skuList,setSkuList] = useState(null);

    const searchHandler = (e) => {
        setSearchText(e.target.value);
        getData(e.target.value)
    };

    const getData = async (value) => {
        const data = await api.getSkuName(value)
        setSkuList(data.sku)
        console.log("skuList",skuList)
    }

    return (
        <div className="wrapper">
            <Search
                searchText={searchText}
                searchHandler={searchHandler}
                skuList={skuList}
            >
            </Search>
        </div>
    )
}
