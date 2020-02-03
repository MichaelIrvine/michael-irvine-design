import Head from "next/head";
import Header from "./Header";
import Cursor from "./Cursor";
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div className="app">
      <Head>
        <title>Michael Irvine Design</title>
        <link rel="stylesheet" href="https://use.typekit.net/esn6sey.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon-96x96.png" />
      </Head>
      <Cursor/>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
