import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const getProjects = async () => {
  const projectsQuery = gql`
    {
      projectsCollection(order: date_DESC) {
        items {
          title
          slug
          date
          sys {
            id
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          shortDescription {
            json
          }
        }
      }
    }
  `;
  return graphQLClient.request(projectsQuery);
};

export const getProjectBySlug = async (slug) => {
  const projectBySlugQuery = gql`
    query projectBySlug($slug: String!) {
      projectsCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          slug
          date
          sys {
            id
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          imageSliderCollection {
            items {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
          description {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  size
                  title
                  height
                  width
                  contentType
                }
              }
            }
          }
        }
      }
    }
  `;

  return graphQLClient.request(projectBySlugQuery, { slug });
};

export const getResources = async () => {
  const resourcesQuery = gql`
    {
      resourcesCollection(order: date_DESC) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          date
          title
          externalUrl
          tagline {
            json
          }
          sys {
            id
          }
        }
      }
    }
  `;
  return graphQLClient.request(resourcesQuery);
};
