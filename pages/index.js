import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/link";
import Intro from "../components/HomeViews/Intro/Intro";
import Who from "../components/HomeViews/Who/Who";
import Story from "../components/HomeViews/Story/Story";
import Contact from "../components/HomeViews/Contact/Contact";

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Serious Women</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar />

      <div>
        <Intro />
      </div>

      <div>
        <Who />
      </div>

      <div>
        <Story />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
}
