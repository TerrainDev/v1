import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/shopContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import Toggle from "../components/Toggle";
import { Fragment } from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

import MiniCart from "./MiniCart";

export default function Nav() {
  const router = useRouter();
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <nav
      className={
        router.asPath.includes("/resources")
          ? "theme-base dark:theme-terrain bg-skin-fill w-full text-right fixed top-0 py-4 px-4 flex justify-between items-center z-50  lg:px-8 "
          : "theme-base dark:theme-terrain backdrop-blur-sm w-full text-right fixed top-0 py-4 px-4 flex justify-between items-center z-50  lg:px-8 "
      }
    >
      <Link href="/">
        <h1 className=" cursor-pointer text-xl font-medium text-skin-titles ">
          TERRAIN
        </h1>
      </Link>
      <div className="hidden lg:flex lg:items-center lg:justify-center font-medium text-xl cursor-pointer text-right text-skin-titles ">
        {router.asPath.match("/bookshelf") ? (
          <button
            className="font-medium inline-block text-right mr-4  "
            onClick={() => setCartOpen(!cartOpen)}
          >
            CART ({cartQuantity})
          </button>
        ) : (
          <Link href="../bookshelf">
            <h4 className="mr-4 hover:text-skin-titles-darker">BOOKSHELF</h4>
          </Link>
        )}
        <Link href="../about">
          <h4 className="mr-4 hover:text-skin-titles-darker">ABOUT</h4>
        </Link>
        <Link href="../faq">
          <h4 className="mr-4 hover:text-skin-titles-darker">FAQ</h4>
        </Link>
        <Link href="../contact">
          <h4 className="mr-4 hover:text-skin-titles-darker">CONTACT</h4>
        </Link>
        <Toggle />
      </div>
      <Menu as="div" className="relative inline-block text-left lg:hidden">
        <div className="flex items-center ">
          {router.asPath.match("/bookshelf") ? (
            <div className="flex items-center text-right text-skin-titles cursor-pointer mr-4 text-xl hover:text-skin-titles-hover">
              <button
                className="font-medium tracking-tighter"
                onClick={() => setCartOpen(!cartOpen)}
              >
                CART
              </button>
              <button
                className="font-medium"
                onClick={() => setCartOpen(!cartOpen)}
              >
                ({cartQuantity})
              </button>
            </div>
          ) : (
            <Link href="../bookshelf">
              <h4 className="text-right text-skin-titles cursor-pointer mr-4 text-xl font-medium hover:text-skin-titles-hover">
                BOOKSHELF
              </h4>
            </Link>
          )}

          <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-skin-titles bg-gray-400 rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-75">
            <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 w-32 mt-2 origin-top-right bg-skin-lighter-fill divide-y divide-red-600 rounded-lg shadow-md ring-1 ring-borderCol-main ring-opacity-70 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {() => (
                  <Link href="/about" passHref>
                    <a>
                      <button className=" text-skin-titles hover:text-skin-titles-hover text-right rounded-md w-full px-2 py-2 text-md  font-medium hover:bg-skin-fill">
                        ABOUT
                      </button>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <Link href="/faq" passHref>
                    <a>
                      <button className=" text-skin-titles hover:text-skin-titles-hover text-right rounded-md w-full px-2 py-2 text-md  font-medium hover:bg-skin-fill">
                        F.A.Q
                      </button>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <Link href="/contact" passHref>
                    <a>
                      <button className=" text-skin-titles hover:text-skin-titles-hover text-right rounded-md w-full px-2 py-2 text-md  font-medium hover:bg-skin-fill">
                        CONTACT
                      </button>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    className=" text-skin-titles hover:text-skin-titles-hover text-right rounded-md w-full px-2 py-2 text-sm  font-medium hover:bg-skin-fill"
                  >
                    {theme === "light" ? "THEME: Water" : "THEME: Earth"}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <MiniCart cart={cart} />
    </nav>
  );
}
