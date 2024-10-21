import photo from "../assets/images/photo.png";

function About() {
  // Returning About me page that contains header, photo, short bio
  return (
    <section className="bg-indigo-50">
      <div class="container mx-auto px-28 py-10">
        <h2 className="text-3xl font-bold text-indigo-500 mt-4 mb-4">
          About Me
        </h2>
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="px-16 py-4">
            <img className="w-auto mb-8" src={photo} alt="photo" />
            <p>
              A Full Stack Developer with a recent completion of a coding
              bootcamp, skilled in both front-end and back-end technologies.
              Proficient in languages such as HTML, CSS, JavaScript, and
              frameworks like React and Node.js. Experienced in building
              responsive web applications, working with databases, and
              integrating APIs. Strong problem-solving abilities and a passion
              for continuous learning and improvement in the tech field.
              Adaptable team player with a keen interest in developing
              innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
