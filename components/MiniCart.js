import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../context/shopContext";
import { formatPrice } from "../utils/formatPrice";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed z-50 inset-0 overflow-hidden theme-base dark:theme-terrain dark:font-serif  "
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md ">
                <div className="h-full flex flex-col bg-blue dark:bg-steel shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-green dark:text-black">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="-m-2 p-2 text-green dark:text-slate-800 hover:text-gray"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length > 0 ? (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-green dark:divide-white"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="py-6 flex">
                                <div className="relative flex-shrink-0 w-24 h-24 border border-green dark:border-white rounded-md overflow-hidden ">
                                  <Link
                                    href={`/shop/${product.handle}`}
                                    passHref
                                  >
                                    <a onClick={() => setCartOpen(false)}>
                                      <Image
                                        src={product.image}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:opacity-75s"
                                      />
                                    </a>
                                  </Link>
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-white ">
                                      <h3 className="hover:text-gray">
                                        <Link
                                          href={`/shop/${product.handle}`}
                                          passHref
                                        >
                                          <a onClick={() => setCartOpen(false)}>
                                            {product.title}
                                          </a>
                                        </Link>
                                      </h3>
                                      <p className="ml-4">
                                        {formatPrice(product.variantPrice)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-white">
                                      {product.variantTitle}
                                    </p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-white">
                                      Qty {product.variantQuantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          removeCartItem(product.id)
                                        }
                                        type="button"
                                        className="font-medium text-green dark:text-white hover:underline"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div>
                            <p className="font-medium text-white ">
                              Nothing in your cart!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {cart.length > 0 ? (
                    <div className="border-t border-borderCol-main py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-white">
                        <p>Subtotal</p>
                        <p>{formatPrice(cartTotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-white">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href={checkoutUrl}
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue dark:text-slate-800 bg-green dark:bg-gray opacity-90 hover:opacity-100 dark:hover:bg-black dark:hover:text-white"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-white">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium  hover:text-gray"
                            onClick={() => setCartOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
