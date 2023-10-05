import React from "react";
import Head from "next/head";
import Navigation from "@/components/atoms/Navigation";

const contact = () => {
  return (
    <>
      <Head>
        <title>Black Clover</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Contact</h1>
      </main>
    </>
  );
};

export default contact;
