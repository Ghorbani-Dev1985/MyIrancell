import React, { useState, useEffect } from "react";
import ApiRequest from "../Services/Axios/Configs/Config";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const ResponseResult = ApiRequest(`${url}`)
    .then((ResponseResult) => {
      setDatas(ResponseResult.data);
    });
  }, [url]);
  return { datas };
};

export default useFetch;
