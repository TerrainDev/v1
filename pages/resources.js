import { useState } from "react";
import { getResources } from "../lib/contentfulHelper";
import ResourceList from "../components/ResourceList";
import MobileResourcesListBox from "../components/MobileResourcesListBox";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "All", id: "all" },
  { name: "Academic", id: "academic", color: "#27CF93" },
  {
    name: "Publications",
    id: "publications",
    color: "#2756CF",
  },
  { name: "Organisations", id: "organisations", color: "#8527CF" },
  { name: "Podcasts", id: "podcasts", color: "#CF2763" },
  { name: "Films", id: "films", color: "#CF8C27" },
  { name: "Artists", id: "artists", color: "#53CF27" },
  { name: "News Articles", id: "newsArticle", color: "#CCCF27" },
];

export default function ResourcesPage({ resources }) {
  const [showResources, setShowResources] = useState(resources);
  const [selectedTag, setSelectedTag] = useState(navigation[0]);

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

  return (
    <div className="theme-base dark:theme-terrain bg-skin-fill lg:bg-skin-lighter-fill">
      <div className="min-w-screen flex flex-col min-h-screen overflow-y-hidden">
        <div className=" pt-16  min-h-screen ">
          <aside
            className="hidden px-4 lg:flex flex-col w-72 lg:fixed lg:inset-y-0 pt-20 space-y-1 bg-skin-fill  "
            aria-label="Sidebar"
          >
            <h1 className="px-4 lg:mb-10 text-skin-titles text-2xl font-semibold ">
              Resources
            </h1>

            {navigation.map((item, i) => (
              <div
                key={item.name}
                className={classNames(
                  selectedTag.id === item.id
                    ? "bg-skin-button-light-hover hover:text-skin-titles-darker "
                    : "bg-skin-fill hover:bg-skin-button-light-hover hover:text-skin-titles-darker ",
                  "text-skin-titles hover:text-skin-titles-darker  group lg:flex items-center px-4 py-2 text-sm font-medium rounded-lg cursor-pointer"
                )}
                onClick={() => {
                  setSelectedTag(navigation[i]), filterByTag(item.id);
                }}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full  mr-4`}
                  style={{
                    backgroundColor: item.color
                      ? `${item.color}`
                      : "transparent",
                  }}
                ></div>
                <span className="flex-1">{item.name}</span>
                {
                  <button
                    className={classNames(
                      selectedTag.id === item.id
                        ? "bg-skin-white ring-1 ring-borderCol-main"
                        : "bg-skin-button-light-hover group-hover:bg-skin-white text-skin-titles-darker",
                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full "
                    )}
                  >
                    {tagCount(item.id.toString())}
                  </button>
                }
              </div>
            ))}
          </aside>
          <div className="px-4 w-full lg:hidden">
            <MobileResourcesListBox
              navigation={navigation}
              filterByTag={filterByTag}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              tagCount={tagCount}
            />
          </div>
          <div className=" flex flex-col px-4 lg:pl-80 lg:pr-8 lg:px-10 pb-24 pt-10 space-y-4 overflow-y-auto ">
            {showResources.map((res) => (
              <ResourceList key={res.sys.id} res={res} />
            ))}
          </div>
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
    revalidate: 60,
  };
}
