import React from 'react';
import {article} from "../App";

export default function Select(props) {
  const categories = article.reduce((p, x) => (p.indexOf(x.category) !== -1) ? p : [ ...p, x.category ], [])
  const cateOption = categories.map((category,id) => (
    <option key={id} value={category} >
      {category}
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
        {cateOption}
      </select>
    </div>
  );
}
