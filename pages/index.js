import Head from "next/head";
import { Header } from "../components/Header";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { CharactersList } from "../components/CharactersList";
import { SearchForm } from "../components/SearchForm";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { client } from "../graphql/config";
import { getQueryBody } from "../services";

export async function getServerSideProps(context) {
  const { status, gender, type, species } = context.query;

  const { data } = await client.query({
    query: gql `${getQueryBody(type ,gender,status,species)}`,
  });
  return {
    props: {
      characters: data.characters.results,
    },
  };
}

export default function Home(results) {
  const router = useRouter();

  const { characters: defaultValue = [] } = results;
  const [charactersArray, setCharactersArray] = useState(defaultValue);

  const onSubmit = async (type, gender, status, species) => {
    const result = await fetch("/api/getCharacterByFilter", {
      method: "post",
      body: JSON.stringify({
        status,
        species,
        type,
        gender,
      }),
    });
    const data = await result.json();
    setCharactersArray(data.characters);
    router.push(
      {
        pathname: "/",
        query: {
          ...router.query,
          status,
          gender,
          type,
          species,
        },
      },
      undefined,
      {},
    );
  };

  return (
    <div>
      <Head>
        <title>Rick&Morty</title>
      </Head>
      <main>
        <Header />
        <Formik
          initialValues={{
            type: router.query.type || "",
            gender: router.query.gender || "",
            status: router.query.status || "",
            species: router.query.species || "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values.type, values.gender, values.status, values.species);
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <SearchForm />
            </Form>
          )}
        </Formik>
        <CharactersList data={charactersArray} />
      </main>
    </div>
  );
}
