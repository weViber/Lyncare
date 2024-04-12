import "./SearchFilter.css";
import { brand, model, goods } from "../../data/FilterData";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [checkedBrand, setCheckedBrand] = useState("");
  const [checkedModel, setCheckedModel] = useState("");
  const [checkedGoods, setCheckedGoods] = useState("");
  const [products, setProducts] = useState("");
  const [link, setLink] = useState("");
  useEffect(() => {
    if (checkedGoods) {
      const item = goods.find((good) => good.model_2 === checkedGoods);
      setProducts(item.product);
      setLink(item.link);
    }
  }, [checkedGoods]);

  return (
    <div id="searchWraps">
      <div id="searchContainer">
        <h2 id="searchNotice">
          <span id="searchSpan">
            내 차에 맞는 디블럭 필터를
            <br class="mb_br" /> 지금 바로 찾아보세요!
          </span>
        </h2>
        <div id="selectSection">
          <select
            onChange={(e) => {
              setCheckedBrand(e.target.value);
            }}
          >
            <option value="">제조사를 선택하세요</option>
            {brand.map((action, index) => (
              <option value={action.brand} key={index}>
                {action.brand}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => {
              setCheckedModel(e.target.value);
            }}
          >
            <option value="">차종을 선택하세요</option>
            {checkedBrand &&
              model
                .filter((item) => item.brand === checkedBrand)
                .map((action, index) => (
                  <option value={action.model} key={index}>
                    {action.model}
                  </option>
                ))}
          </select>
          <select
            onChange={(e) => {
              setCheckedGoods(e.target.value);
            }}
          >
            <option value="">세부 차종을 선택하세요</option>
            {checkedModel &&
              goods
                .filter((item) => item.model_1 === checkedModel)
                .map((action, index) => (
                  <option value={action.model_2} key={index}>
                    {action.model_2}
                  </option>
                ))}
          </select>
          {/* <button id="searchBtn" onclick="result();">
            검색
          </button> */}
        </div>
        <div id="resultPage">
          <p id="result">
            내 차에 맞는 필터는
            <br />
            <span id="underLine">
              {checkedGoods ? (
                products
              ) : (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
              )}
            </span>
            입니다.
          </p>
        </div>
        {link && (<div>
          <a className="LinkBtn" href={link}>구매하러 가기</a>
        </div>)}
      </div>
    </div>
  );
};
export default SearchFilter;
