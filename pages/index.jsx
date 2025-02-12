import Head from "next/head";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Sousa Developer front-end | Portifólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='principal'>        
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}
