import React, {useState} from 'react'
import { Search } from "../search/Search"
import api from "../../api/index"
import { SkuDetails } from "../skuDetails/SkuDetails"
import './skuSearch.scss'

export const SkuSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [skuList,setSkuList] = useState({
        list: [],
        cursor: 0,
    });
    const [currentSKU, setCurrentSKU] = useState({});
    const [loading, setLoading] = useState(false);

    const searchHandler = (e) => {
        setSearchText(e.target.value);
        getData(e.target.value)
    };

    const getData = async (value) => {
        setLoading(true);
        const data = await api.getSkuName(value)
        if(data){
            const { sku } = data
            setSkuList({
                ...skuList,
                list:sku,
            })
            setLoading(false);
        }else{
            alert("Internal Server Error")
        }
    }

    const suggestionSelectHandler = (value) => {
        setSearchText(value);
        setSkuList({
          ...skuList,
        });
      };
    
    const skuDetailsHandler = (index) => {
        if(skuList.list[index]){
            setCurrentSKU(skuList.list[index]);
        }
    };
    

    return (
        <div className="wrapper">
            <Search
                searchText={searchText}
                searchHandler={searchHandler}
                skuList={skuList}
                skuDetailsHandler={skuDetailsHandler}
                suggestionSelectHandler={suggestionSelectHandler}
                loading={loading}
                setSkuList={setSkuList}
                setSearchText={setSearchText}
            >
            </Search>
            <SkuDetails currentSKU={currentSKU} />
        </div>
    )
}
