import * as React from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i = i + 1;
  }
})();
function MyFeature({ addArticle, articleList }) {
  const [articles, setArticles] = React.useState([
    {
      id: id.next(),
      title: "Article1",
      summary: "Summary1",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article2",
      summary: "Summary2",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article3",
      summary: "Summary3",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article4",
      summary: "Summary4",
      display: "none",
    },
  ]);
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeSummary(e) {
    setSummary(e.target.value);
  }
  function onClickAdd() {
    setArticles([
      ...articles,
      { id: id.next(), title: title, summary: summary, display: "none" },
    ]);
    setTitle("");
    setSummary("");
  }
  function onClickRemove(id) {
    setArticles(articles.filter((i) => i.id !== id));
  }
  function onClickToggle(id) {
    const index = articles.findIndex((i) => i.id === id);
    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none",
    };
    setArticles(updatedArticles);
  }
  return (
    <>
      {addArticle({
        title,
        summary,
        onChangeSummary,
        onChangeTitle,
        onClickAdd,
      })}
      {articleList({ articles, onClickToggle, onClickRemove })}
    </>
  );
}
export default MyFeature;
