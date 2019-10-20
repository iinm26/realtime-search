import React, { Component } from 'react';
import { render } from 'react-dom';

class Form extends Component {
  render() {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="キーワードを入力"
            onChange={(e) => this.props.onChange(e)}
            className="search__body"
          />
        </form>
      </div>
    );
  }
}

class Select extends Component {
  render() {
    let categories = article.map((article) => (
      <option key={article.id} value={article.category} >
        {article.category}
      </option>
    ));

    return (
      <div className="select-box">
        <select
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
          className="select-box__body"
        >
          <option value="">カテゴリ</option>
          {categories}
        </select>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article:props.article,
      articles:[],
      value:''
    };
  }

  componentDidMount() {
    this.setState({articles: this.state.article})
  }

  handleFilterVal(e) {
    const updatelist = this.state.article.filter((item) => (
      item.category.indexOf(this.state.value) !== -1 &&
      item.title.toLowerCase().indexOf(e.target.value) !== -1
    ))
    this.setState({
      articles: updatelist
    });
  }

  handleChange(e) {
    const updatelist = this.state.article.filter((item) => (
      item.category.indexOf(e.target.value) !== -1
    ))
    this.setState({
      articles: updatelist,
      value: e.target.value
    });
  }

  render() {
    let list = this.state.articles.map((articles) => (
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
        <Select 
          onChange={e => this.handleChange(e)}
          value={this.state.value}
        />
        <Form
          onChange={e => this.handleFilterVal(e)}
        />
        <ul className="article">
          {list}
        </ul>
      </div>
    );
  }
}

// 記事のオブジェクトの配列
let article = [
  {
    id: 1,
    title: '長く愛せるスターアイテム勢ぞろい!『FENDI(フェンディ)』バッグ▶人気モデルランキングTOP5',
    category: 'BAG'
  },
  {
    id: 2,
    title: '可愛らしさ倍増♥ベビーのハロウィンコスチュームをタイプ別にご紹介!',
    category: 'BABY'
  },
  {
    id: 3,
    title: '【19秋最新情報】Travis Scott(トラヴィススコット)×Nike(ナイキ)新作コラボはダスティカラーがクール!',
    category: 'SHOES'
  },
  {
    id: 4,
    title: '【Lilyの女を纏う】その不調、小麦が原因かも?《グルテンフリー》を始めて感じた5つの変化◎',
    category: 'BODYCARE'
  },{
    id: 5,
    title: 'Stella McCartney(ステラマッカートニー)×HUNTER(ハンター)初コラボはラバーブーツ!雨の日やレジャーにも◎',
    category: 'SHOES'
  }
];


render(
  <App article={article} />,
  document.getElementById('root')
);

export default App;