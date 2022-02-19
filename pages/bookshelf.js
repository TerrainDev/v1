import { getProductsInCollection } from "../lib/shopify";
import { formatPrice } from "../utils/formatPrice";
import Image from "next/image";
import Link from "next/link";

export default function Store({ products }) {
  return (
    <div className="theme-base dark:theme-terrain bg-skin-fill min-h-screen">
      <div className="max-w-full mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl ">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((book) => {
            const { handle, title, id } = book.node;
            const { altText, originalSrc } = book.node.images.edges[0].node;
            return (
              <Link key={id} href={`/bookshelf/${handle}`}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={originalSrc}
                      alt={altText}
                      className="object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-skin-titles">
                    <h3>{title}</h3>
                    <p>
                      {formatPrice(book.node.priceRange.minVariantPrice.amount)}
                    </p>
                  </div>
                  {book.node.tags.map((t) => {
                    return (
                      <p
                        key={t}
                        className="inline-block mr-1 mt-1 text-xs font-medium text-skin-titles-darker"
                      >
                        #{t}
                      </p>
                    );
                  })}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
