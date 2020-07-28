import Base from '@layouts/Base';
import './article-graphql.scss';

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
          derivative(style: BANNER1280350 ) {
            url
          }
          alt
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
        entities: {
          0: {
            title,
            fieldImage,
            body
          }
        }
      }
    }
  } = articleGraphqlNode;

  console.log("articleGraphqlNode", articleGraphqlNode);

  let image = "";

  if (!loading) {
    if (fieldImage) {
      image = (
        <div className="w-1/1">
          <img src={fieldImage.derivative.url} />
        </div>
      );
    }
  }

  return (
    <Base title={title}>
      {image}
      <h1>{title}</h1>
      <div className="article__body" dangerouslySetInnerHTML={{ __html: body.value }} />
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
