import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaProductHunt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Project({ project }) {
  // Setting state variables for More/Less link for the 'description' using 'useState', setting its initial values to false (More link is default)
  const [showDescription, setShowDescription] = useState(false);
  let description = project.description;
  // Showing substring of the description (50 characters) for the More/Less link
  if (!showDescription) {
    description = description.substring(0, 90) + "...";
  }
  // Returning a card with project details
  return (
    <div className="bg-white rounded-xl shadow-md relative transform transition duration-300 hover:scale-105">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-indigo-500 text-xl font-bold">{project.title}</h3>
        </div>
        <div className="mb-1">{description} </div>
        <button
          onClick={() => setShowDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showDescription ? "Less" : "More"}
        </button>

        <div></div>

        {project.image && (
          <PhotoProvider maskOpacity={0.5}>
            <PhotoView src={project.image}>
              <button className="text-indigo-500 mb-5 hover:text-indigo-600">
                View screenshot of the deployed application
              </button>
            </PhotoView>
          </PhotoProvider>
        )}
        {/* {project.image && <img src={project.image} alt="project screenshot" />} */}

        <div className="border border-gray-100"></div>

        <div className=" flex flex-col lg:flex-row justify-between">
          <h4 className="text-sm m-3">{project.stack}</h4>
          <div className=" flex items-center">
            <Link target="blank" to={project.github}>
              <FaGithub className="bg-indigo-500 text-white size-10 m-3 " />
            </Link>
            <Link target="blank" to={project.application}>
              <FaProductHunt className="bg-indigo-500 text-white size-10 m-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
