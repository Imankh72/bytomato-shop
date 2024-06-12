import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Tomato"}</title>
      </Head>
      <header className="main-size bg-background">
        <Navbar />
      </header>
      <main className="main-size bg-background">{children}</main>
      <footer className="main-size bg-background">
        <Footer />
      </footer>
    </>
  );
};

export default Page;
