import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

export default async (req, res) => {
  const { type, gender, status, species } = JSON.parse(req.body);

  try {
    const { data } = await client.query({
      query: gql`
        query {
          characters(filter: { status: "${status}",type: "${type}", gender: "${gender}", species: "${species}" }) {
               results {
              name
              id
              status
              species
              gender
              type
              image
              location {
                name
              }
              episode {
                id
                episode
              }
            }
          }
        }
      `,
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error) {
    if (error.message === "404: Not Found") {
      res.status(404).json({ characters: null, error: "No Characters found" });
    } else {
      res
        .status(500)
        .json({ characters: null, error: "Internal Error, Please try again" });
    }
  }
};
