import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header} from "../components/Header";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {CharactersList} from "../components/CharactersList";
import {SearchForm} from "../components/SearchForm";
import {Form, Formik} from "formik";
import {useRouter} from "next/router";

export default function Home(results) {
    const {characters} = results
    const router = useRouter()

    const onSubmit = async ( type,gender, status, species) => {
        const result = await fetch('/api/getCharacterByFilter.js',{
            method:'post',
            body:{
                type:type,gender:gender,status:status,species:species
            }
        })
        const {characters, errors} = result.json()
        router.query.type = type
        router.query.gender = gender
        router.query.status = status
        router.query.species = species
        router.push(router)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Rick&Morty</title>
            </Head>
            <main>
                <Header/>
                <Formik
                    initialValues={{
                        type:  router.query.type,
                        gender:  router.query.gender,
                        status:  router.query.status,
                        species: router.query.species
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        onSubmit(values.type,values.gender,values.status,values.species)
                        setSubmitting(false);
                    }}
                >
                    {() => (
                        <Form>
                            <SearchForm/>
                        </Form>
                    )}
                </Formik>
                <CharactersList loading={false} data={characters}/>
            </main>
        </div>
    )
}


export async function getStaticProps() {
    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql/",
        cache: new InMemoryCache(),
    });
    const {data} = await client.query({
        query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
    });

    return {
        props: {
            characters: data.characters.results,
        },
    };
}
