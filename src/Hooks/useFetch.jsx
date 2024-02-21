import React, { useState, useEffect } from "react";
import ApiRequest from "../Services/Axios/Configs/Config";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const abortController = new AbortController()
  useEffect(() => {
    const ResponseResult = ApiRequest(`${url}` , {signal: abortController.signal}).then((ResponseResult) => {
      setDatas(ResponseResult.data);
    });
    return () => {
      abortController.abort()
    }
  }, [url]);
  return { datas };
};

export default useFetch;
