import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex-auto flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-accent text-4xl mb-4" />
      <h1 className="text-4xl md:text-6xl font-accent font-bold mb-4">
        404 Not Found
      </h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-accent hover:bg-accent/80 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
