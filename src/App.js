import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from './components/select';
import Form from './components/form';
import List from './components/list';

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

    return (
      <div>
        <Select 
          onChange={e => this.handleChange(e)}
          value={this.state.value}
        />
        <Form
          onChange={e => this.handleFilterVal(e)}
        />
        <List
          articles={this.state.articles}
        />
      </div>
    );
  }
}

// 記事のオブジェクトの配列
export const article = [
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