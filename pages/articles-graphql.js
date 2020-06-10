import Base from '@layouts/Base';
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
          value
          format
          processed
          summary
          summaryProcessed
        },
        fieldImage {
          targetId
          alt
          title
          width
          height
          url
        }
      }
    }
  }
}
`;


const ArticlesGraphql = (props) => {


  const { loading, error, data } = useQuery(
    query,
    {
      variables: {},
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  return (
    <>
      <Base title="Articles by GraphQl">
        <h1 className="font-mono">News by {process.env.NEXT_PUBLIC_JSON_API}/graphql</h1>
      </Base>
    </>
  )
}

export default ArticlesGraphql;

export async function getServerSideProps() {
  try {
    const apolloClient = initializeApollo();
    console.log("apolloClient: ", apolloClient);
    console.log("query: ", query);
    await apolloClient.query({
      query: query,
      variables: {}
    });
    return {
      props: {
        initialApolloState: {}
      }
    }
  } catch (e) {
    console.log("catch: ", e);
  }

}
