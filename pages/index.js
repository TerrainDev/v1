import { useState } from "react";
import { getProjects } from "../lib/contentfulHelper";
import { format } from "date-fns";
import Masonry from "react-masonry-css";
//Components
import ProjectCard from "../components/ProjectCard";
import Clock from "../components/Clock";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

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
    <div className="theme-base dark:theme-terrain dark:font-serif bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="text-slate-800 flex flex-col lg:flex-row items-start justify-between md:whitespace-pre-line tracking-tighter text-lg py-2 border-b border-b-steel border-dashed">
        <div className="flex flex-col lg:max-w-2xl">
          <h1>
            TERRAIN Projects is an initiative that creates playful physical and
            digital spaces to remind humans that they are embedded in a{" "}
            <span className="font-medium italic text-darkerBlue dark:text-black whitespace-nowrap">
              more-than-human
            </span>{" "}
            world.
          </h1>
          <div className="flex items-center">
            <h2 className="mr-2">This is a solar-powered website </h2>
            <Toggle />
          </div>
          <span>37.8136° S, 144.9631° E, Melbourne.</span>
        </div>
        <div className="hidden lg:flex flex-col items-end text-lg ">
          <Clock />
          {/* DATE */}
          <span className="tracking-tighter mt-2">
            {format(new Date(), "eeee LLL dd yyyy")}
          </span>
        </div>
        <div className="flex w-full justify-between lg:hidden pt-2">
          <span className="tracking-tighter mr-4 ">
            {format(new Date(), "eeee LLL dd yyyy")}
          </span>
          <Clock />
        </div>
      </div>
      <div className=" lg:max-w-full ">
        <div className="my-4 flex items-center justify-between text-blue dark:text-black">
          <div className="flex">
            <h3 className="mr-4 text-xl">Projects </h3>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green dark:border-black bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={onlyUpcomingProjects}
            >
              Upcoming
            </button>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green dark:border-black bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={onlyPastProjects}
            >
              Past
            </button>
            <button
              type="button"
              className=" mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-green dark:border-black bg-white text-sm font-medium  hover:bg-gray  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green focus:border-green focus:bg-gray"
              onClick={() => setShowProjects(projects)}
            >
              All
            </button>
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
      <Footer />
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
