import Head from "next/head";
import AboutUs from "../components/AboutUs";
import ContactNotification from "../components/ContactNotification";
import ExecomCommittee from "../components/ExecomCommittee";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IEEE YCET SB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutUs />
      <ExecomCommittee />
      <ContactNotification />
      <Footer />
    </div>
  );
}