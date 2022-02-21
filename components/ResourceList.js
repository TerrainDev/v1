import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ResourceList({ res }) {
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" my-2 text-sm text-skin-titles-darker">{children}</p>
      ),
    },
  };

  return (
    <Link href={res.externalUrl} passHref>
      <a className="group cursor-pointer relative bg-skin-white rounded-xl w-full flex py-6 px-4 border-2 border-borderCol-main hover:bg-skin-fill-alt">
        <div className="flex-col">
          <h5 className="text-skin-titles flex items-center text-sm font-medium mr-2 ">
            {res.title}
            <ExternalLinkIcon
              className="h-4 w-4 text-skin-titles inline-block ml-1 "
              aria-hidden="true"
            />
          </h5>
          <div>
            {documentToReactComponents(res.tagline.json, renderOptions)}
          </div>
          {/* find a more elegant option */}
          {res.contentfulMetadata.tags.some((r) => r.id === "academic") && (
            <span className=" text-[#27CF93] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #academic
            </span>
          )}
          {res.contentfulMetadata.tags.some((r) => r.id === "publications") && (
            <span className=" text-[#2756CF] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #publications
            </span>
          )}
          {res.contentfulMetadata.tags.some(
            (r) => r.id === "organisations"
          ) && (
            <span className=" text-[#8527CF] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #organisations
            </span>
          )}
          {res.contentfulMetadata.tags.some((r) => r.id === "podcasts") && (
            <span className=" text-[#CF2763] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #podcasts
            </span>
          )}
          {res.contentfulMetadata.tags.some((r) => r.id === "films") && (
            <span className=" text-[#CF8C27] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #films
            </span>
          )}
          {res.contentfulMetadata.tags.some((r) => r.id === "artists") && (
            <span className=" text-[#53CF27] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #artists
            </span>
          )}
          {res.contentfulMetadata.tags.some((r) => r.id === "newsArticle") && (
            <span className=" text-[#CCCF27] inline-flex items-center  py-0.5  rounded-full text-[10px] font-bold">
              #news articles
            </span>
          )}
        </div>
      </a>
    </Link>
  );
}
