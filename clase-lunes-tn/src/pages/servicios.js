
import Navigation from "@/components/Clase_2/Navigation";
import ServiceBooks from "@/components/Clase_4/ServiceBooks";
import BooksContextProvider from "@/context/BooksContextProvider";
import Head from "next/head";


const Servicios = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BooksContextProvider>
          <Navigation />
          <ServiceBooks />
        </BooksContextProvider>
      </main>
    </>
  );
};

export default Servicios;
