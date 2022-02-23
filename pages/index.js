import { useState } from "react";
import { getProjects } from "../lib/contentfulHelper";
import ProjectCard from "../components/ProjectCard";
import Masonry from "react-masonry-css";
import { format } from "date-fns";
import Clock from "../components/Clock";

export default function Home({ projects }) {
  const [showProjects, setShowProjects] = useState(projects);

  const breakpoints = {
    default: 4,
    1200: 3,
    900: 2,
    700: 1,
  };

  //Filtering logic

  const onlyUpcomingProjects = (e) => {
    e.preventDefault();
    const upcomingProjects = projects.filter(
      (proj) => Date.parse(proj.date) > new Date()
    );
    setShowProjects(upcomingProjects);
  };
  const onlyPastProjects = (e) => {
    e.preventDefault();
    const pastProjects = projects.filter(
      (proj) => Date.parse(proj.date) < new Date()
    );
    setShowProjects(pastProjects);
  };

  return (
    <div className="theme-base dark:theme-terrain bg-white min-h-screen">
      <div className=" py-16 px-4  sm:px-6 lg:max-w-full lg:px-8">
        <div className="flex lg:hidden text-blue  pt-2">
          <Clock />
          <span className="tracking-tighter ">
            {format(new Date(), "eeee LLL dd yyyy")}
          </span>
        </div>

        <div className="my-4 flex items-center justify-between text-blue">
          <div className="flex">
            <h1 className="mr-4 text-xl">Projects </h1>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={onlyUpcomingProjects}
            >
              Upcoming
            </button>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={onlyPastProjects}
            >
              Past
            </button>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={() => setShowProjects(projects)}
            >
              All
            </button>
          </div>
          <div className="hidden lg:flex ">
            <Clock />
            {/* DATE */}
            <span className="tracking-tighter">
              {format(new Date(), "eeee LLL dd yyyy")}
            </span>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {showProjects.map((project) => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getProjects();
  return {
    props: {
      projects: data.projectsCollection.items,
    },
    revalidate: 3600,
  };
}
