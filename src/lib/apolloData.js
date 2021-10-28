import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

/* id - needed to get mission data (e.g. 1 - newest [available in API]) */

export async function apolloData(id) {
  const fetched = await client.query({
    query: gql`
      query ($offset: Int) {
        launchLatest(offset: $offset) {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
            site_name
          }
          rocket {
            rocket_name
            fairings {
              recovered
            }
          }
          launch_date_utc
          ships {
            name
            home_port
            image
            weight_kg
          }
        }
      }
    `,
    variables: {
      offset: id,
    },
  });
  return fetched;
}
