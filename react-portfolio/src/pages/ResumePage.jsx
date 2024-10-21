import { Link } from "react-router-dom";

function ResumePage() {
  // Returning Resume page that contains downloadable resume and a list of the developer’s proficiencies
  return (
    <section className="bg-indigo-50">
      <div class="container mx-auto px-28 py-20">
        <h2 className="text-3xl font-bold text-indigo-500 mt-4 mb-4">Resume</h2>
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <p className="px-12 py-4">
            Detail-oriented Full Stack Developer with a strong foundation in
            both front-end and back-end technologies, gained through a rigorous
            coding bootcamp.
          </p>
          <p className="px-12 py-4">
            Demonstrates excellent problem-solving skills, a passion for coding,
            and a commitment to delivering high-quality software solutions.
            Eager to contribute to dynamic teams and leverage technical
            expertise to drive project success and enhance user experiences.
          </p>
          <p className="px-12 py-4">
            Proficient in the following technologies:
          </p>
          <ul className="list-disc px-16 py-2">
            <li>Computer Science Applied to JavaScript</li>
            <li>Databases (SQL, MongoDB)</li>
            <li>Server Side Development (MERN Stack, Template Engines)</li>
            <li>Browser Based Technologies (HTML, CSS, JavaScript)</li>
            <li>
              Deployment and Delivery (Heroku, Git, GitHub Pages, Shell
              Scripting)
            </li>
            <li>
              API Design (Client-Server Model, API, Rest, JSON, AJAX, HTTP
              request methods, GraphQL)
            </li>
            <li>
              Quality Assurance (Unit Testing, Linting, Continuous Integration)
            </li>
          </ul>
          <div className="px-12 py-4">
            <a
              href="/public/Profile.pdf"
              download
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Click Here to View the Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;
