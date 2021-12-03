import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import Link from "next/link";
import { useRouter } from "next/router";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

import MiniCart from "./MiniCart";

export default function Nav() {
  const router = useRouter();
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <nav className="w-full text-right fixed top-0 py-4 px-4 flex justify-between items-center z-50 bg-blue-200 lg:px-8 ">
      <Link href="/">
        <h1 className="text-blue-600 cursor-pointer text-xl font-medium">
          TERRAIN
        </h1>
      </Link>
      <div className="hidden lg:flex lg:items-center">
        {router.asPath.match("/bookshelf") ? (
          <button
            className=" inline-block text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700"
            onClick={() => setCartOpen(!cartOpen)}
          >
            CART ({cartQuantity})
          </button>
        ) : (
          <Link href="../bookshelf">
            <h4 className="text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700">
              BOOKSHELF
            </h4>
          </Link>
        )}
        <Link href="../us">
          <h4 className="text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700">
            US
          </h4>
        </Link>
        <Link href="../faq">
          <h4 className="text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700">
            FAQ
          </h4>
        </Link>
        <Link href="../contact">
          <h4 className="text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700">
            CONTACT
          </h4>
        </Link>
      </div>
      <Menu as="div" className="relative inline-block text-left lg:hidden">
        <div className="flex items-center ">
          {router.asPath.match("/bookshelf") ? (
            <div className="flex items-center text-right text-blue-600 cursor-pointer mr-4 text-xl hover:text-blue-700">
              <button
                className="font-medium"
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
              <h4 className="text-right text-blue-600 cursor-pointer mr-4 text-xl font-medium hover:text-blue-700">
                BOOKSHELF
              </h4>
            </Link>
          )}

          <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-blue-700 bg-blue-500 rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-75">
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
          <Menu.Items className="absolute right-0 z-50 w-32 mt-2 origin-top-right bg-blue-100  rounded-lg shadow-md ring-1 ring-blue-600 ring-opacity-70 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/us" passHref>
                    <a>
                      <button
                        className={`${
                          active
                            ? "bg-violet-500 text-red-600"
                            : "text-blue-600 "
                        } text-right rounded-md w-full px-2 py-2 text-md  font-medium hover:bg-blue-200`}
                      >
                        US
                      </button>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/faq" passHref>
                    <a>
                      <button
                        className={`${
                          active
                            ? "bg-violet-500 text-blue-600"
                            : "text-blue-600 "
                        } text-right w-full px-2 py-2 text-md font-medium hover:bg-blue-200`}
                      >
                        F.A.Q
                      </button>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/contact" passHref>
                    <a>
                      <button
                        className={`${
                          active
                            ? "bg-violet-500 text-blue-600"
                            : "text-blue-600 "
                        } text-right w-full px-2 py-2 text-md font-medium hover:bg-blue-200`}
                      >
                        CONTACT
                      </button>
                    </a>
                  </Link>
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
