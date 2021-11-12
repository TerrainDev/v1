import Tabs from "../components/Tabs";
import { getProductsInCollection } from "../lib/shopify";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <Tabs />
      </main>
    </div>
  );
}
