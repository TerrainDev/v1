import { useState, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function SearchBar({ res }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredResources = query
    ? res.filter((r) => {
        return (
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.tagline.json.content[0].content[0].value
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          r.contentfulMetadata.tags[1].name
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          r.contentfulMetadata.tags[0].name
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      })
    : [];

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen]);
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={setIsOpen}
        className="theme-base dark:theme-terrain fixed p-4 pt-[25vh] inset-0 z-50 overflow-y-auto"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed  inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(r) => {
              window.open(r.externalUrl, "_blank");
            }}
            as="div"
            className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-black/5  max-w-4xl mx-auto divide-y divide-stone-200 overflow-hidden"
          >
            <div className="flex items-center px-4">
              <SearchIcon className="h-6 w-6 text-blue" />
              <Combobox.Input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="rounded-3xl w-full h-12 border-0 bg-transparent focus:ring-0 text-sm text-blue placeholder:text-stone-700 "
                placeholder="Search..."
              />
            </div>
            <Combobox.Options
              static
              className="text-blue  text-sm max-h-96 overflow-y-auto "
            >
              {filteredResources.map((r) => (
                <Combobox.Option key={r.sys.id} value={r}>
                  {({ active }) => (
                    <Link href={r.externalUrl} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <div
                          className={`flex flex-col py-2 px-4 space-y-2 hover:cursor-pointer ${
                            active ? "bg-green" : "bg-white"
                          }`}
                        >
                          <span className=" font-bold text-blue">
                            {r.title}
                          </span>
                          <span className=" text-darkerBlue">
                            {r.tagline.json.content[0].content[0].value}
                          </span>
                        </div>
                      </a>
                    </Link>
                  )}
                </Combobox.Option>
              ))}
              {query && filteredResources.length === 0 && (
                <p className="py-4 px-4 text-blue text-xs">No results found</p>
              )}
            </Combobox.Options>
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
