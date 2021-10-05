import { Loader } from "../loader/Loader";

import "./suggestions.scss";

export const Suggestions = ({skuList,search,suggestionSelectHandler,loading,skuDetailsHandler}) => {
  console.log("loading",loading)
  return loading ? (
    <Loader />
    ) : (
    <ul className="suggestions">
      {skuList.list? 
          skuList.list.map(({ sku_id, sku_name }, index) => (
            <li
              key={sku_id}
              onClick={() => {
                suggestionSelectHandler(sku_name);
                skuDetailsHandler(index);
              }}
              className={`${skuList.cursor === index ? "active" : ""}`}
            >
              {sku_name}
            </li>
          ))
        : !search && <p>Not Found..!</p>}
    </ul>
  );
};