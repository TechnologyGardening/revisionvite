import * as React from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i = i + 1;
  }
})();
class MonolithicComp extends React.Component {
  state = {
    articles: [
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
    ],
    summary: "",
    title: "",
  };
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };
  onClickAdd = () => {
    this.setState((state) => ({
      articles: [
        ...state.articles,
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };
  onClickToggle = (id) => {
    this.setState((state) => {
      const articles = [...state.articles];
      const index = articles.findIndex((i) => i.id === id);
      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none",
      };
      return { ...state, articles };
    });
  };
  onClickRemove = (id) => {
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((i) => i.id !== id),
    }));
  };
  render() {
    const { articles, title, summary } = this.state;
    return (
      <>
        Article :{" "}
        <input
          placeholder="Article Title"
          value={title}
          onChange={this.onChangeTitle}
        />
        <br />
        Summary :{" "}
        <input
          placeholder="Article Summary"
          value={summary}
          onChange={this.onChangeSummary}
        />
        <br />
        <button onClick={this.onClickAdd}>ADD</button>
        <ul>
          {articles.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                title="Article Title"
                onClick={this.onClickToggle.bind(null, i.id)}
              >
                {i.title}
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={`#${i.id}`}
                title="Remove"
                onClick={this.onClickRemove.bind(null, i.id)}
              >
                Delete
              </a>
              <p style={{ display: i.display }}>{i.summary}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default MonolithicComp;
