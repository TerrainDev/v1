import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function MobileResourcesListBox({
  navigation,
  filterByTag,
  selectedTag,
  setSelectedTag,
  tagCount,
}) {
  return (
    <div className="flex w-full md:w-96 justify-start items-center">
      <h1 className=" mr-2 text-skin-titles text-xl ">Resources</h1>
      <div className="w-full px-4 py-4 z-30 top-12">
        <Listbox value={selectedTag} onChange={setSelectedTag}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left text-skin-titles border-2 border-borderCol-main bg-skin-white rounded-xl cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-borderCol-main  focus-visible:ring-offset-2 focus-visible:border-borderCol-main sm:text-lg">
              <div className="flex items-center">
                <div
                  className={`h-2.5 w-2.5 rounded-full  mr-2 `}
                  style={{
                    backgroundColor: selectedTag.color
                      ? `${selectedTag.color}`
                      : "transparent",
                  }}
                ></div>

                <span className="block truncate">{selectedTag.name}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 bg-button-light"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="no-scrollbar absolute w-full py-1 mt-1 overflow-y-auto text-base bg-skin-white rounded-xl shadow-lg max-h-60 ring-1 ring-borderCol-main ring-opacity-5 focus:outline-none sm:text-sm">
                {navigation.map((item, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `${
                        active
                          ? "text-skin-titles bg-skin-lighter-fill"
                          : "text-skin-titles-darker"
                      }
                          cursor-default select-none relative py-2 pl-10 pr-4 flex hover:bg-button-main`
                    }
                    value={item}
                    onClick={() => {
                      setSelectedTag(navigation[i]);
                    }}
                  >
                    {({ selected, active }) => (
                      <div
                        className="flex w-full justify-between items-center"
                        onClick={() => filterByTag(item.id)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`h-2.5 w-2.5 rounded-full  mr-2 `}
                            style={{
                              backgroundColor: item.color
                                ? `${item.color}`
                                : "transparent",
                            }}
                          ></div>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                            onClick={() => filterByTag(item.id)}
                          >
                            {item.name}
                          </span>
                        </div>
                        <span className="text-xs">
                          {" "}
                          {tagCount(item.id.toString())}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active
                                ? "text-skin-titles"
                                : "text-skint-titles-main"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
