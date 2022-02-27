import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "../global.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ShopProvider>
        <Nav />
        <Component {...pageProps} key={router.asPath} />
        {router.asPath.includes("/resources") ||
        router.asPath.includes("/services") ||
        router.asPath.endsWith("/") ? (
          <BottomNav />
        ) : null}
      </ShopProvider>
    </ThemeProvider>
  );
}

export default MyApp;
