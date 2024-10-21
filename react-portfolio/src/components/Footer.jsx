import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // Returning icon links to the GitHub and LinkedIn profiles, and icon to Twitter as #
  return (
    <footer className="bg-indigo-500 py-2 text-3xl text-center">
      <div>
        <Link
          target="blank"
          to="https://www.linkedin.com/in/anastasia-kravtsov-a8488a29/"
        >
          <FaLinkedinIn className="inline text-white m-3 mr-2" />
        </Link>
        <Link target="blank" to="https://github.com/akravt1274/">
          <FaGithub className="inline text-white m-3 mr-2" />
        </Link>
        <Link target="blank" to="#">
          <FaTwitter className="inline text-white m-3 mr-2" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
