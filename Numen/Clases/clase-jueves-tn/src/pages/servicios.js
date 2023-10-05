import Head from "next/head"
import Navigation from "../components/Clase 2/Navigation";
import BooksContextProvider from "../context/BooksContextProvider";
import { ShoppingCartContext } from "../context/ShoppingCartContextProvider";

const Servicios = () => {
  return (
    <>
      <Head>
        <title>Merca Libre</title>
      </Head>
      <Navigation />
      <main>
        <h1>Servicios</h1>
        <ShoppingCartContext>
          <BooksContextProvider>
            <Contador />
          </BooksContextProvider>
        </ShoppingCartContext>
      </main>
    </>
  );
};

export default Servicios;
