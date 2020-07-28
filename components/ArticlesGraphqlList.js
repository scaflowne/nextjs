import Link from 'next/link';

const ArticlesGraphqlList = (props) => {

  const {
    pager,
    listArticles: {
      nodeQuery: {
        count,
        entities
      }
    }
  } = props;

  let render = (
    <p> NO existen resultados </p>
  );

  if (count) {
    render = entities.map((article) => {
      const { nid, title, body, fieldImage } = article;

      let image = "";
      if (fieldImage) {
        image = (
          <div className="w-1/1">
            <img src={fieldImage.derivative.url} />
          </div>
        );
      }

      return (
        <div className="flex mb-3 border" key={nid}>
          {image}
          <div className={`px-4 py-3 ${(fieldImage) ? 'w-3/4' : 'w-full'}`}>
            <h2>{title}</h2>
            <div>
              {body.summary}
            </div>
            <Link href="/article-graphql/[id]" as={`/article-graphql/${nid}`}>
              <a>Read more</a>
            </Link>
          </div>
        </div>
      )
    });
  }

  return (
    <>
      {render}
    </>
  );

};

export default ArticlesGraphqlList;

