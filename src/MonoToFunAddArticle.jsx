import * as React from "react";
function AddArticle({
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <>
      <input
        placeholder="Article Title"
        value={title}
        onChange={onChangeTitle}
      />
      <input
        placeholder="Article Summary"
        value={summary}
        onChange={onChangeSummary}
      />
      <button onClick={onClickAdd}>ADD</button>
    </>
  );
}
export default AddArticle;
