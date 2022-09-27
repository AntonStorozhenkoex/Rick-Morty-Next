export const getQueryBody = (
  type = "",
  gender = "",
  status = "",
  species = "",
) => {
  return `query {
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
        }`;
};
