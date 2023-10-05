import ShoppingCart from "@/components/molecules/ShoppingCart";
import CrudApp from "@/components/organisms/CrudApp";
import Head from "next/head";

const index = () => {
  return (
    <>
    <Head>
      <title>Chainsawman</title>
    </Head>
    <main>
      <CrudApp />
    </main>
  </>
  )
}

export default index;