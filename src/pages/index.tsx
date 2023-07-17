import Image from "next/image";
import { Inter } from "next/font/google";
import SendBird from "@/components/SendBird";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <SendBird />
    </main>
  );
}
