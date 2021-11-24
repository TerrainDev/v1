import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "../../lib/contentfulHelper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

export default function ProjectPage({ project }) {
  console.log(project);
  // create an asset map
  const assetMap = new Map();

  // loop through the linked assets and add them to a map
  for (const asset of project.description.links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);
        console.log(asset);

        switch (asset.contentType) {
          case "video/mp4":
            return (
              <video width="100%" height="100%" controls>
                <source src={asset.url} type="video/mp4" />
              </video>
            );
          case "image/jpeg":
            return (
              <Image
                src={asset.url}
                height={asset.height}
                width={asset.width}
                alt={asset.title}
                layout="responsive"
                objectFit="cover"
                className="rounded-xl"
              />
            );
          default:
            return "";
        }
      },
      [BLOCKS.HR]: () => (
        <hr
          style={{
            borderColor: "#1E40AF",
          }}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" text-blue-800 my-8">{children}</p>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-blue-700 pl-4 text-blue-800 my-8 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => {
        return (
          <ul
            style={{
              listStyle: "disc",
              color: "#1E40AF",
              marginLeft: "1.5rem",
            }}
          >
            {children.map((item) => (
              <li key={item.key}>{item.props.children[0].props.children[0]}</li>
            ))}
          </ul>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="font-bold text-xl my-8 text-blue-800">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="font-bold text-lg my-8 text-blue-800">{children}</h5>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        if (node.data.uri.includes("youtube.com")) {
          console.log(node.content.value);
          return (
            <iframe
              title={node.value}
              src={node.data.uri}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-96"
            ></iframe>
          );
        } else
          return (
            <Link href={node.data.uri}>
              <a className="text-blue-600 font-bold">{children}</a>
            </Link>
          );
      },
    },
  };

  return (
    <div className=" bg-blue-200 pt-20 pb-20 px-8 min-h-screen sm:pt-32 sm:pb-16  sm:px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-800 mb-8">
          {project.title}
        </h1>
        <h2 className="text-xl font-bold text-blue-800 mb-8">
          Using this text as a tagline
        </h2>
        <h3 className="text-sm  text-blue-800 mb-8">
          {format(new Date(project.date), "do MMM yyyy")}
        </h3>
        <article className="text-blue-700">
          {documentToReactComponents(project.description.json, renderOptions)}
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.projectsCollection.items.map((project) => ({
      params: {
        project: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context.params.project);
  const data = await getProjectBySlug(context.params.project);
  return {
    props: {
      project: data.projectsCollection.items[0],
    },
    revalidate: 7200,
  };
}
