import "@/styles/globals.css";
import HomeLayout from "../layouts/HomeLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
