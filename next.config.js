module.exports = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  swcMinify: true,
  images: {
    domains: ["cdn.weatherapi.com", "cdn.shopify.com", "images.ctfassets.net"],
  },
};
