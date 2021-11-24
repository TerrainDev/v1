import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "../global.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      <Nav />
      <Component {...pageProps} key={router.asPath} />
      <BottomNav />
    </ShopProvider>
  );
}

export default MyApp;
