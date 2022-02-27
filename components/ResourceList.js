import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ResourceList({ res }) {
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" my-2 text-sm text-darkerBlue dark:text-slate-800">
          {children}
        </p>
      ),
    },
  };

  return (
    <Link href={res.externalUrl} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group cursor-pointer relative bg-white rounded-xl w-full flex py-6 px-4 border-2 border-green dark:border-steel hover:bg-gray dark:hover:border-black"
      >
        <div className="flex-col">
          <h5 className="text-blue dark:text-slate-800 flex items-center text-sm font-bold mr-2 ">
            {res.title}
            <ExternalLinkIcon
              className="h-4 w-4 text-blue dark:text-slate-800 inline-block ml-1 "
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
