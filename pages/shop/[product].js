import {
  getAllProducts,
  getProduct,
  recursiveCatalog,
} from "../../lib/shopify";
import { CartContext } from "../../context/shopContext";
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../../utils/formatPrice";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

const relatedProducts = [
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 2,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 3,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 4,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  // More products...
];

export default function ProductPage({ product }) {
  const { addToCart } = useContext(CartContext);
  console.log(product);

  const selectedVariant = {
    id: product.variants.edges[0].node.id,
    variantQuantity: 1,
    title: product.title,
    image: product.images.edges[0].node.originalSrc,
    handle: product.handle,
    variantPrice: product.priceRange.minVariantPrice.amount,
  };

  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="bg-blue-200">
      <main className="mx-auto pt-32 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="rounded-lg aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden w-full sm:h-[15rem] lg:h-[45rem]">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#2563EB",
                  "--swiper-pagination-color": "#2563EB",
                }}
                navigation
                pagination={{ clickable: true }}
                loop="true"
                className="h-[45rem] rounded-lg"
              >
                {images}
              </Swiper>
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-blue-600 sm:text-3xl">
                  {product.title}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
              </div>
            </div>

            <p className="text-blue-800  mt-6">{product.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                onClick={() => {
                  addToCart(selectedVariant);
                }}
                type="button"
                className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add to Cart{" "}
                {formatPrice(product.priceRange.minVariantPrice.amount)}
              </button>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-blue-600">Related books</h2>
            <Link
              href="/store"
              className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <a className="text-blue-600 hover:text-blue-700">
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="relative group">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-black-900">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-blue-600 space-x-8">
                  <h3>
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p>{product.price}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{product.category}</p> */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
