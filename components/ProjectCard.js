import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ project }) {
  const { title, slug, date, shortDescription, thumbnail } = project;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" mb-2">{children}</p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="font-semibold mb-2">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="font-semibold mb-2">{children}</h5>
      ),
    },

    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
  return (
    <div className="theme-base dark:theme-terrain group relative bg-skin-lighter-fill border border-borderCol-main rounded-lg flex flex-col overflow-hidden">
      <div className="aspect-w-4 aspect-h-3 h-48  group-hover:opacity-75  ">
        <Link href={`/projects/${slug}`} passHref>
          <a>
            <Image
              src={thumbnail.url}
              alt={thumbnail.title}
              layout="fill"
              className=" cursor-pointer object-center object-cover"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col flex-1 p-4 space-y-2 ">
        <div className="flex">
          <p className="text-xs text-skin-titles font-bold mr-2">
            {format(new Date(date), "do MMM yyyy")}
          </p>
          {Date.parse(date) > new Date() && (
            <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-xs underline ">
              UPCOMING
            </h4>
          )}
        </div>

        <h3 className="text-sm font-bold text-skin-titles">{title}</h3>
        <div className="text-sm text-skin-titles-darker font-medium ">
          {documentToReactComponents(shortDescription.json, renderOptions)}
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-xs font-medium text-skin-titles">#{slug}</p>
        </div>
      </div>
    </div>
  );
}
