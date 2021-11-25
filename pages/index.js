import { useState } from "react";
import { getProjects } from "../lib/contentfulHelper";
import ProjectCard from "../components/ProjectCard";
import Masonry from "react-masonry-css";

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
    <div className="bg-blue-200 min-h-screen">
      <div className=" py-16 px-4  sm:px-6 lg:max-w-full lg:px-8">
        <div className="my-4 flex items-center">
          <h1 className="mr-4 text-blue-600 text-xl">Projects </h1>
          <button
            type="button"
            className="mr-2 relative inline-flex items-center px-4 py-1 rounded-full border border-blue-600 bg-blue-200 text-sm font-medium text-blue-600 hover:bg-blue-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-300"
            onClick={onlyUpcomingProjects}
          >
            Upcoming
          </button>
          <button
            type="button"
            className="mr-2 relative inline-flex rounded-full items-center px-4 py-1 border border-blue-600 bg-blue-200 text-sm font-medium text-blue-600 hover:bg-blue-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-300"
            onClick={onlyPastProjects}
          >
            Past
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-1 rounded-full border border-blue-600 bg-blue-200 text-sm font-medium text-blue-600 hover:bg-blue-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-300"
            onClick={() => setShowProjects(projects)}
          >
            All
          </button>
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
