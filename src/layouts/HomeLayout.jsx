import Head from "next/head";

import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });
const HomeLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>STAMC 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={quicksand.className}>{children}</div>
    </>
  );
};

export default HomeLayout;
