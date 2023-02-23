import * as React from "react";
function ArticleItem({ article, onClickToggle, onClickRemove }) {
  return (
    <li>
      <a
        href={`#${article.id}`}
        title="Article"
        onClick={onClickToggle.bind(null, article.id)}
      >
        {article.title}
      </a>
      {"   "}
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={onClickRemove.bind(null, article.id)}
      >
        Delete
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}
export default ArticleItem;
