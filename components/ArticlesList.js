const ArticlesList = (props) => {
  const { articles } = props;
  console.log("articless: ", articles);
  const list = articles.map(article => (
    <li className="border-t p-2 even:bg-gray-200 hover:bg-orange-100 flex cursor-pointer" key={article.id}>
      <h5>{article.attributes.title}</h5>
    </li>
  ));
  return (
    <ul className="border rounded border-t-0">
      {list}
    </ul>
  )
}

export default ArticlesList;
