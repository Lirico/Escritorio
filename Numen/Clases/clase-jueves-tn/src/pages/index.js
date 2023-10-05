import Head from "next/head";
import Navigation from "../components/Clase 2/Navigation";
import ShoppingCart from "../components/Clase 6/ShoppingCart";
import BBApp from "../components/Clase 7/BBApp";



const Index = () => {
  return (
    <>
      <Head>
        <title>Merca Libre</title>
      </Head>
      <Navigation />
      <main>
        <BBApp />
      </main>
    </>
  );
};

export default Index;


