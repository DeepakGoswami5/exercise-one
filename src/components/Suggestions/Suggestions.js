import { Loader } from "../loader/Loader";

import "./suggestions.scss";

export const Suggestions = ({skuList,search,suggestionSelectHandler,loading,skuDetailsHandler}) => {
  return loading ? (
    <Loader />
    ) : (
    <ul className="suggestions">
      {skuList.list? 
          skuList.list.map(({ skuId, skuName }, index) => (
            <li
              key={skuId}
              onClick={() => {
                suggestionSelectHandler(skuName);
                skuDetailsHandler(index);
              }}
              className={`${skuList.cursor === index ? "active" : ""}`}
            >
              {skuName}
            </li>
          ))
        : !search && <p>Not Found..!</p>}
    </ul>
  );
};