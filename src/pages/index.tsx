import Head from "next/head";
import { FC } from "react";

interface Props {}
const Home: FC<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>Hello world - Best help for your life</title>
        <meta name="description" content="this is meta description" />
      </Head>

      <main></main>
    </>
  );
};

export default Home;
