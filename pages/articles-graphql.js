import Base from '@layouts/Base';
import ArticlesGraphqlList from '@components/ArticlesGraphqlList';
import { useRouter } from 'next/router';
import Pager from '@components/Pager';



import { initializeApollo } from '@lib/apolloClient';
import gql from 'graphql-tag';

const queryArticles = gql`
query getNodesArticles( $limit: Int, $offset: Int ) {
  nodeQuery ( limit: $limit, offset: $offset ) {
    count,
    entities {
      ... on NodeArticle {
        nid,
        title,
        body {
          summary
        },
        fieldImage {
          derivative(style: MEDIUM) {
            url,
          },
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

const ArticlesGraphql = (props) => {

  const { data, pager } = props;
  const { pathname } = useRouter();

  return (
    <>
      <Base title="Articles by GraphQl">
        <h1 className="font-mono mb-4">News by {process.env.NEXT_PUBLIC_DRUPAL_URL}/graphql</h1>
        <ArticlesGraphqlList listArticles={data} />
        <Pager count={data.nodeQuery.count} pager={pager} pathname={pathname} />
      </Base>
    </>
  )
}

export default ArticlesGraphql;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  try {
    let pager = { limit: 1, offset: 0 };

    if (query.page) {
      pager.offset = query.page - 1;
    }

    console.log("pager: ", pager);

    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: queryArticles,
      variables: pager
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        data,
        pager
      }
    }
  } catch (e) {
    console.log("catch: ", e);
  }
}
