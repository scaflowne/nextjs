import Base from '@layouts/Base';

import { initializeApollo } from '@lib/apolloClient';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
query getNodeArticle($nid: String!) {
  nodeQuery(filter: {conditions: [{operator: EQUAL, field: "nid", value: [$nid]}]}) {
    entities {
      ... on NodeArticle {
        title,
        body {
          value
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

const ArticleGraphql = (props) => {
  const { nid } = props;
  const articleGraphqlNode = useQuery(query, {
    variables: { nid: nid },
  });

  const {
    loading,
    error,
    data: {
      nodeQuery: {
        entities
      }
    }
  } = articleGraphqlNode;

  let image = "";

  if (!loading) {
    if (entities[0].fieldImage) {
      image = (
        <div className="w-1/1">
          <img src={entities[0].fieldImage.url} />
        </div>
      );
    }
  }

  return (
    <Base>
      {image}
    </Base>
  )
}


export default ArticleGraphql;


export async function getServerSideProps(ctx) {
  try {
    const apolloClient = initializeApollo();
    await apolloClient.query({
      query: query,
      variables: { nid: ctx.query.id }
    });
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        nid: ctx.query.id,
      }
    }
  } catch (e) {
    console.log("catch: ", e);
  }
}
