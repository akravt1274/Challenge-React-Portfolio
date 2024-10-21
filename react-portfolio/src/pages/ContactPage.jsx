import { useState } from "react";
// Importing a helper function to validate if email is valid
import { validateEmail } from "../utils/helpers";

function ContactPage() {
  // Setting state variables for all input fields and error message using 'useState', setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call respective 'set' method based on what field the user is typing in
    return name === "name"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Validating user input and email address format
    if (!name) {
      setErrorMessage("Name is required.");
      return;
    } else if (!email) {
      setErrorMessage("Email address is required.");
      return;
    } else if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Validating email address format
    if (!validateEmail(email)) {
      setErrorMessage("Email address format is invalid.");
      return;
    }

    // Saving  user input
    const contactInfo = {
      name,
      email,
      message,
    };
    console.log(contactInfo);

    // Clearing the inputs
    setErrorMessage("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container mx-auto max-w-3xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-indigo-500 text-3xl text-center font-semibold mb-6">
              Contact Me
            </h2>

            <div className="mb-4">
              <label className="block text-indigo-500 font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter name..."
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-indigo-500 font-bold mb-2">
                Email address:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter email address..."
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-indigo-500 font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Enter message..."
                value={message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {errorMessage && (
            <div>
              <p className="text-red-600 py-2 px-3">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
