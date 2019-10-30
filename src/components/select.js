import React from 'react';
import {article} from "../App";

export default function Select(props) {
  const categories = article.map((article) => (
    <option key={article.id} value={article.category} >
      {article.category}
    </option>
  ));

  return (
    <div className="select-box">
      <select
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className="select-box__body"
      >
        <option value="">カテゴリ</option>
        {categories}
      </select>
    </div>
  );
}
