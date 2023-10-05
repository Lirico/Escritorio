
import Head from "next/head"
import CrudApp from "@/components/Clase 8/CrudApp"



const Index = () => {
  return (
    <>
      <Head>
        <title>Merca Libre</title>
      </Head>
      <main>
        <CrudApp />
      </main>
    </>
  )
}

export default Index
