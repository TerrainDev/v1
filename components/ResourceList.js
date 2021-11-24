import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ResourceList({ res }) {
  console.log(res);
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" my-2 text-sm text-blue-900">{children}</p>
      ),
    },
  };
  return (
    <Link href={res.externalUrl} passHref>
      <a className=" group cursor-pointer relative bg-gray-100 rounded-xl w-full flex py-6 px-4 border-2 border-blue-400 hover:bg-gray-50">
        <div className="flex-col">
          <h5 className="text-blue-600 text-sm font-medium mr-2 ">
            {res.title}
            <ExternalLinkIcon
              className="h-4 w-4 text-blue-600 inline-block ml-1 "
              aria-hidden="true"
            />
          </h5>

          <div>
            {documentToReactComponents(res.tagline.json, renderOptions)}
          </div>
        </div>
      </a>
    </Link>
  );
}
