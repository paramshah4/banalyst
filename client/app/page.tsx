'use client'
import Image from "next/image";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./globals.css";
import FileUpload from "./_components/FileUpload";
import HeaderSimple from "./_components/HeaderSimple";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 background-white">
      <h1 className="text-black">Automated AI analyst workflows</h1>
      <FileUpload />
    </main>
    </>
  );
}
