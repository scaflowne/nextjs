import Base from '@layouts/Base';
import ArticlesGraphqlList from '@components/ArticlesGraphqlList';

import { initializeApollo } from '@lib/apolloClient';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const query = gql`
query {
  nodeQuery {
    entities {
      ... on NodeArticle {
        title,
        body {
          summary
        },
        fieldImage {
          alt
          url
        },
        fieldTags {
          entity {
            name
          }
        }
      }
    }
  }
}
`;


const ArticlesGraphql = () => {

  const listArticles = useQuery(query);

  return (
    <>
      <Base title="Articles by GraphQl">
        <h1 className="font-mono mb-4">News by {process.env.NEXT_PUBLIC_DRUPAL_URL}/graphql</h1>
        <ArticlesGraphqlList listArticles={listArticles} />
      </Base>
    </>
  )
}

export default ArticlesGraphql;

export async function getServerSideProps() {
  try {
    const apolloClient = initializeApollo();
    await apolloClient.query({
      query: query,
    });
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      }
    }
  } catch (e) {
    console.log("catch: ", e);
  }
}
