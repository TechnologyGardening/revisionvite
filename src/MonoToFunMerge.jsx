import * as React from "react";
import ArticleList from "./MonoToFunArticleList";
import AddArticle from "./MonoToFunAddArticle";
import MyFeature from "./MonoToFunMyFeature";

function MonToFunFinal() {
  return (
    <>
      <MyFeature
        addArticle={({
          title,
          summary,
          onChangeSummary,
          onChangeTitle,
          onClickAdd,
        }) => (
          <AddArticle
            title={title}
            summary={summary}
            onChangeTitle={onChangeTitle}
            onChangeSummary={onChangeSummary}
            onClickAdd={onClickAdd}
          />
        )}
        articleList={({ articles, onClickToggle, onClickRemove }) => (
          <ArticleList
            articles={articles}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        )}
      />
    </>
  );
}
export default MonToFunFinal;
