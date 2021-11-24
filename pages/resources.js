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
    <div className="bg-blue-200 lg:bg-blue-100">
      <div className="min-w-screen flex flex-col min-h-screen overflow-y-hidden">
        <div className="lg:grid lg:gap-4 lg:grid-cols-12  pt-16 pb-4 min-h-screen ">
          <aside
            className="hidden lg:inline-block lg:col-span-3  pt-5 pb-2 px-2 space-y-1  bg-blue-200 max-h-screen"
            aria-label="Sidebar"
          >
            <h1 className="lg:mb-10 px-2 text-blue-600 text-xl ">Resources</h1>

            {navigation.map((item, i) => (
              <div
                key={item.name}
                className={classNames(
                  selectedTag.id === item.id
                    ? "bg-blue-300 hover:bg-blue-300"
                    : "bg-blue-200 hover:bg-[#A9D2FF] ",
                  "text-blue-600 hover:text-blue-900  group lg:flex items-center px-2 py-2 text-sm font-medium rounded-lg cursor-pointer"
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
                        ? "bg-gray-200 ring-1 ring-blue-800"
                        : "bg-blue-300 group-hover:bg-blue-50 text-blue-900",
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

          <div className="col-span-9 p-4  lg:py-10 space-y-4  overflow-y-auto">
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
