import Tabs from "../components/Tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <nav className="fixed top-0 flex min-h-20px justify-end items-center p-8 w-full">
        <Link href="../store">
          <h4 className="text-right text-blue-600 cursor-pointer">Store</h4>
        </Link>
      </nav>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <h1 className="text-6xl font-bold text-blue-600">Terrain</h1>
        <Tabs />
      </main>
    </div>
  );
}
