const ArticlesGraphqlList = (props) => {

  const {
    listArticles: {
      loading,
      error,
      data: {
        nodeQuery: {
          entities
        }
      }
    }
  } = props;

  let render = (
    <p> NO existen resultados </p>
  );

  if (!loading) {
    render = entities.map((article, index) => {
      const { title, body, fieldImage } = article;

      let image = "";
      if (fieldImage) {
        image = (
          <div className="w-1/1">
            <img src={fieldImage.url} />
          </div>
        );
      }

      return (
        <div className="flex mb-3 border" key={index}>
          {image}
          <div className={`px-4 py-3 ${(fieldImage) ? 'w-3/4' : 'w-full'}`}>
            <h2>{title}</h2>
            <div>
              {body.summary}
            </div>
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
