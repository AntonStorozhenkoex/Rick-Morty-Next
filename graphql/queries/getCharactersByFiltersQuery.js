import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_FILTERS = gql`
    query GetCharactersByFilters() {
        characters(
            filter: {
                species: $species
                status: $status
                gender: $gender
                type: $type
            }
        ) {
            results {
                name
                status
                species
                type
                gender
                image
                id
                location {
                    name
                }
                episode {
                    name
                }
            }
        }
    }
`;
