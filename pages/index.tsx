import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/Layout/Dashboard";
const inter = Inter({ subsets: ["latin"] });
import Posts from "./Posts";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Posts");
  }, []);
  return <></>;
}
