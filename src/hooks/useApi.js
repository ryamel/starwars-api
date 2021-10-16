import {useEffect, useState} from 'react';
import axios from 'axios';
let source;


export default function useApi(apiList) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let promises = [];
    for (let i = 0; i < apiList.length; i++) {
      source = axios.CancelToken.source();
      promises.push(axios.get(apiList[i], {cancelToken: source.token}));
    }

    Promise.all(promises)
      .then(res => {
        let temp = [];
        for (let i=0; i < res.length; i++) {
          temp.push(res[i].data);
        }
        setData(temp);
      })
      .catch(err => console.log(err))

    return () => {
      if (source) source.cancel();
    }
  }, [apiList])
  
  return data;
}

