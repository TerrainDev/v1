import { useState, useContext } from "react";
import {
  getAllProducts,
  getProduct,
  recursiveCatalog,
} from "../../lib/shopify";

import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../../context/shopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { formatPrice } from "../../utils/formatPrice";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import ShippingOptions from "../../components/ShippingOptions";

export default function ProductPage({ product }) {
  const { addToCart } = useContext(CartContext);
  const [variantQuantity, setVariantQuantity] = useState(1);

  const allProducts = product.collections.edges[0].node.products.edges;
  const currentProduct = product.id;

  const selectedVariant = {
    id: product.variants.edges[0].node.id,
    variantQuantity,
    title: product.title,
    image: product.images.edges[0].node.originalSrc,
    handle: product.handle,
    variantPrice: product.priceRange.minVariantPrice.amount,
  };

  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <div className="aspect-w-1 aspect-h-1 ">
          <Image
            src={image.node.originalSrc}
            alt={image.node.altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </SwiperSlide>
    );
  });
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="theme-base dark:theme-terrain bg-white ">
      <main className=" pt-32 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:px-8 ">
        {/* Product */}
        <div className="flex flex-col justify-center items-between space-y-8 md:items-start md:space-y-4 md:space-x-4 lg:flex-row lg:space-x-8  lg:w-full  ">
          {/* Product image */}
          <div className="w-full rounded-2xl overflow-hidden md:w-3/4 lg:w-full">
            <div className="relative ">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#2563EB",
                  "--swiper-pagination-color": "#2563EB",
                  objectFit: "cover",
                }}
                navigation
                pagination={{ clickable: true }}
                loop="true"
              >
                <div className="w-3/4">{images}</div>
              </Swiper>
            </div>
          </div>
          {/* Product details */}
          <div className="flex flex-col lg:pl-24 justify-center w-full md:w-[50%}  ">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-blue sm:text-3xl">
                {product.title}
              </h1>
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-blue">
                {formatPrice(product.priceRange.minVariantPrice.amount)}
              </h3>
            </div>
            <div className="flex w-24 items-center justify-between my-2">
              <button
                onClick={() =>
                  variantQuantity != 1 &&
                  setVariantQuantity(variantQuantity - 1)
                }
                className="hover:bg-gray p-1 h-8 w-8 rounded-full text-blue font-medium flex justify-center items-center"
              >
                <MinusIcon />
              </button>
              <span className="text-blue text-2xl font-medium">
                {variantQuantity}
              </span>
              <button
                onClick={() => setVariantQuantity(variantQuantity + 1)}
                className="hover:bg-gray p-1 h-8 w-8 rounded-full text-blue font-medium flex justify-center items-center"
              >
                <PlusIcon />
              </button>
            </div>

            {/* Select plant tree */}
            <div>
              <label
                htmlFor="res"
                className="block text-lg font-medium text-darkerBlue my-4"
              >
                Plant one tree when you order this book?
              </label>
              <select
                id="res"
                name="res"
                className="mt-1 block w-80 pl-3 pr-10 py-2 text-blue bg-white text-base border-green focus:outline-none focus:ring-green focus:border-green sm:text-sm rounded-lg"
              >
                <option className="">Yes! (included)</option>
                <option>No thanks (we'll plant it anyway)</option>
              </select>
            </div>
            {/* Shipping options */}
            <ShippingOptions />
            <div className="mt-10 hidden sm:block">
              <button
                onClick={() => {
                  addToCart(selectedVariant);
                }}
                type="button"
                className="w-72 bg-blue border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-darkerBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue focus:ring-green"
              >
                Add to Cart{" "}
                {formatPrice(
                  product.priceRange.minVariantPrice.amount * variantQuantity
                )}
              </button>
            </div>
            {/* Button for small screens */}
            <div className=" w-full flex justify-center items-center  sm:hidden">
              <button
                onClick={() => {
                  addToCart(selectedVariant);
                }}
                type="button"
                className="bottom-8 shadow-lg z-50 w-80 fixed bg-blue border border-transparent rounded-md py-3 text-base font-medium text-white hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green focus:ring-green"
              >
                Add to Cart{" "}
                {formatPrice(
                  product.priceRange.minVariantPrice.amount * variantQuantity
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-none flex flex-col ">
          <h5 className=" font-medium my-6 text-blue text-2xl">Description</h5>
          <div
            className="text-blue max-w-4xl"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
        </div>

        {/* Related products */}
        <div className="max-w-none mx-auto z-20 mt-24 sm:mt-32 lg:max-w-none">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-blue">Related books</h2>
            <Link
              href="/bookshelf"
              className="whitespace-nowrap text-sm font-medium text-blue hover:text-darkerBlue"
            >
              <a className="text-blue hover:text-darkerBlue">
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {allProducts.map((product) =>
              product.node.id === currentProduct ? null : (
                <div key={product.node.id} className="relative group">
                  <Link href={`/bookshelf/${product.node.handle}`} passHref>
                    <a>
                      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-black-900">
                        <Image
                          src={product.node.images.edges[0].node.originalSrc}
                          alt={product.node.images.edges[0].node.altText}
                          layout="fill"
                          className="object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-blue space-x-8">
                    <h3>
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.node.title}
                      </a>
                    </h3>
                    <p>
                      {formatPrice(
                        product.node.priceRange.minVariantPrice.amount
                      )}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const book = String(item.node.handle);

    return {
      params: { book },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.book);

  return {
    props: {
      product,
    },
  };
}
