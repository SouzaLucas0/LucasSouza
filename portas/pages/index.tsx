
import Porta from "../components/porta/Porta";
import localFont from "next/font/local";
import PortaModel from "../components/model/porta";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({ 
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
const [p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{display: 'flex'}}>
      <Porta value = {p1}/>
    </div>
  );
}
