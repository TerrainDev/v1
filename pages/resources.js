import { useState } from "react";
import { getResources } from "../lib/contentfulHelper";
import ResourceList from "../components/ResourceList";
import MobileResourcesListBox from "../components/MobileResourcesListBox";
import SearchBar from "../components/SearchBar";
import { SearchIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "All", id: "all" },
  { name: "Academic", id: "academic" },
  {
    name: "Publications",
    id: "publications",
    color: "#2756CF",
  },
  { name: "Organisations", id: "organisations" },
  { name: "Podcasts", id: "podcasts" },
  { name: "Films", id: "films" },
  { name: "Artists", id: "artists" },
  { name: "News Articles", id: "newsArticle" },
];

export default function ResourcesPage({ resources }) {
  const [showResources, setShowResources] = useState(resources);
  const [selectedTag, setSelectedTag] = useState(navigation[0]);
  const [query, setQuery] = useState("");

  //filter by tag

  const filterByTag = (tag) => {
    const filteredResources = resources.filter((r) =>
      r.contentfulMetadata.tags.some((t) => t.id.includes(tag))
    );
    setShowResources(filteredResources);
  };

  //Get a array of all tags from the resources query

  let count = [];

  const getAllTags = () => {
    if (!count.length) {
      resources.map((arr) => {
        arr.contentfulMetadata.tags.map((t) => {
          count.push(t.id);
        });
      });
    } else return;
  };

  //Function to count the nr of resources under each tag.

  const tagCount = (tag) => {
    getAllTags();
    return count.filter((x) => x === tag).length;
  };

  //SearchBox filtering
  const filteredResources = query
    ? showResources.filter((r) => {
        return (
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.tagline.json.content[0].content[0].value
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      })
    : [];

  return (
    <div className="theme-base dark:theme-terrain bg-white dark:font-serif lg:bg-gray">
      <div className="min-w-screen flex flex-col min-h-screen overflow-y-hidden">
        <div className=" pt-16  min-h-screen ">
          <aside
            className="hidden px-4 lg:flex flex-col w-72 lg:fixed lg:inset-y-0 z-0 pt-20 space-y-1 bg-white"
            aria-label="Sidebar"
          >
            <h1 className="px-4 text-blue dark:text-slate-800 text-2xl font-semibold dark:font-normal ">
              Resources
            </h1>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-blue dark:text-slate-800" />
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search..."
                className="pl-10 py-2 text-sm text-blue dark:text-slate-800 w-full my-4 bg-white rounded-full placeholder:text-steel focus:outline-green dark:focus:outline-slate-800 border-green dark:border-black "
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-blue dark:text-slate-800 text-[10px] p-1 ">
                  ⌘ K
                </span>
              </div>
            </div>

            {navigation.map((item, i) => (
              <div
                key={item.name}
                className={classNames(
                  selectedTag.id === item.id
                    ? "bg-steel hover:text-white text-green dark:text-white"
                    : "bg-white hover:bg-gray text-blue dark:text-slate-800 hover:text-green dark:hover:text-black  ",
                  " hover:text-darkerBlue group lg:flex items-center px-4 py-2 text-sm font-medium rounded-lg cursor-pointer"
                )}
                onClick={() => {
                  setSelectedTag(navigation[i]), filterByTag(item.id);
                }}
              >
                <span className="flex-1">{item.name}</span>
                {
                  <button
                    className={classNames(
                      selectedTag.id === item.id
                        ? "bg-white ring-2 ring-green dark:ring-white text-blue dark:text-black font-bold"
                        : "bg-blue dark:bg-steel group-hover:bg-darkerBlue dark:group-hover:bg-slate-800 text-green dark:text-white",
                      "ml-3 dark:font-mono inline-block py-0.5 px-3 text-xs font-medium rounded-full "
                    )}
                  >
                    {tagCount(item.id.toString())}
                  </button>
                }
              </div>
            ))}
          </aside>
          <div className="flex flex-col sm:flex-row sm:space-x-4 px-4 w-full lg:hidden">
            <MobileResourcesListBox
              navigation={navigation}
              filterByTag={filterByTag}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              tagCount={tagCount}
            />

            <div className="mt-1 w-full relative rounded-md lg:hidden">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-blue" />
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search..."
                className="pl-10 py-2 w-full text-sm text-blue my-2 bg-white rounded-xl placeholder:text-steel focus:outline-green border-2 border-green "
              />
              <div className="absolute inset-y-0 right-0 pr-3 hidden items-center pointer-events-none md:flex">
                <span className="text-blue text-[10px] p-1 ">⌘ K</span>
              </div>
            </div>
          </div>

          <SearchBar res={resources} />
          {!query.length && (
            <div className=" flex flex-col px-4 lg:pl-80 lg:pr-8 lg:px-10 pb-24 pt-10 space-y-4 overflow-y-auto ">
              {showResources.map((res) => (
                <ResourceList key={res.sys.id} res={res} />
              ))}
            </div>
          )}
          {query.length && (
            <div className=" flex flex-col px-4 lg:pl-80 lg:pr-8 lg:px-10 pb-24 pt-10 space-y-4 overflow-y-auto ">
              {filteredResources.map((res) => (
                <ResourceList key={res.sys.id} res={res} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getResources();
  return {
    props: {
      resources: data.resourcesCollection.items,
    },
    revalidate: 3060,
  };
}
