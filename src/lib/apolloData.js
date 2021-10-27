import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

export async function apolloData() {
  const fetched = await client.query({
    query: gql`
      query ($limit: Int) {
        launchesPast(limit: $limit) {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
            site_name
          }
          rocket {
            rocket_name
          }
          launch_date_utc
        }
      }
    `,
    variables: {
      limit: 5,
    },
  });
  return fetched;
}

// console.log(fetchedData().then((res) => console.log(res.data.launchesPast)));
