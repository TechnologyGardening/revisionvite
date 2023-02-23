import * as React from "react";
import ArticleItem from "./MonoToFunArticleItem";
function ArticleList({ articles, onClickToggle, onClickRemove }) {
  return (
    <ul>
      {articles.map((i) => (
        <ArticleItem
          key={i.id}
          article={i}
          onClickRemove={onClickRemove}
          onClickToggle={onClickToggle}
        />
      ))}
    </ul>
  );
}
export default ArticleList;
