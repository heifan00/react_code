import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.post('https://df-api.yifu-tech.com/hang/system/ina/style/list', { /* 请求参数 */ })
      .then((response) => {
        // 校验返回数据格式是否正确
        if (Array.isArray(response.data.data.dataList)) {
          setList(response.data.data.dataList);
        } else {
          console.error('返回数据格式不正确');
          alert('请求异常!');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>List</h2>
      <ul>
        {list.map((item) => (
          <li key={item.styleId}>
            <a href={item.styleCollection}>{item.styleDescription}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default List;
