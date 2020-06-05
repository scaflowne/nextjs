import Base from '@layouts/Base';
import ArticlesList from '@components/ArticlesList';

import fetch from 'isomorphic-fetch';

const Articles = (props) => {
  const { articles } = props;
  return (
    <>
      <Base title="Articles">
        <h1 className="font-mono text-3xl">News by Drupal</h1>
        <ArticlesList articles={articles} />
      </Base>
    </>
  )
}

Articles.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_API}/node/article`);
  const { data } = await res.json();
  return { articles: data }
}

export default Articles;
