// Importing list of projects for Portfolio page from projects.json
import projects from "../projects.json";
import Project from "./Project";

function Projects() {
  // Rendering Project component for each project from the list of projects stored in projects.json file
  return (
    <section className="bg-indigo-50">
      <div className="container mx-auto px-28 py-8">
        <h2 className="text-3xl font-bold text-indigo-500 mt-4 mb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Using the map method to iterate through each project and return a new array of list items for each project */}
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
