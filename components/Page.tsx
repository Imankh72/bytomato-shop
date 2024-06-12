import Head from "next/head";
import { FC, ReactNode } from "react";
import Benefits from "./benefits/Benefits";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
  title?: string;
  children: ReactNode;
}

const Page: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "فروشگاه اینترنتی"}</title>
      </Head>
      <Header />
      <main className="main-size">
        {children}
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default Page;
