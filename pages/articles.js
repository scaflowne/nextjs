import Base from '@layouts/Base';
import ArticlesList from '@components/ArticlesList';

const Articles = (props) => {
  const { data } = props;
  return (
    <>
      <Base title="Articles">
        <h1 className="font-mono text-3xl">News by {process.env.NEXT_PUBLIC_JSON_API}</h1>
        <ArticlesList articles={data} />
      </Base>
    </>
  )
}

export default Articles;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_API}/jsonapi/node/article`);
    const { data } = await res.json();
    return { props: { data } }
  } catch (e) {
    console.log("catch: ", e);
  }
}
