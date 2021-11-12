//handleERRORS!

export async function storefront(query, variables = {}) {
  const response = await fetch(
    "https://terraintest.myshopify.com/api/2021-10/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": "8114f4d71017c9564574031efcfe0edf",
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}
