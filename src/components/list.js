import React from 'react';

export default function List(props) {
  let list = props.articles.map((articles) => (
    <li key={articles.id} className="article__list">
      <span className="article__title">{articles.title}</span>
      <span className="article__category">{articles.category}</span>
    </li>
  ));

  if(!list.length) {
    list = <li className="article__info">記事は見つかりませんでした</li>
  }

  return (
    <div>
      <ul className="article">
        {list}
      </ul>
    </div>
  );
}