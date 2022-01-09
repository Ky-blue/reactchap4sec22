import "./styles.css";
import React, { useState } from "react";

const numbers = [2, 4, 6, 8];

//レンダリングする内容のコンポーネント
const ListItems = () => {
  //mapを用いて新しい配列を作る
  //値はコンポーネントが返ってくるので、それを配列として変数に格納する
  //アロー関数は単一業なら処理のかっこを省略できる
  //処理が単一業なら処理の前後で改行してもいいっぽい？
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);

  //Reactでは完全に並列な要素は配置できないので、ulタグでitems=liタグのコンポーネント囲う
  return <ul>{items}</ul>;
};

//出力するコンポーネントが単一だからかっこを省略している
//またJSXの記法なので独特のタグでくくる
export default function App() {
  return <ListItems />;
}
