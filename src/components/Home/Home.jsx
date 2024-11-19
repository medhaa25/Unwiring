import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 font-sans    p-4">
      <h1 className="text-5xl font-bold text-indigo-600 mb-2 text-center">
        Mind Matters
      </h1>
      <h2 className="text-3xl text-gray-600 mb-6 text-center">Made Simple</h2>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/resources" className="w-full sm:w-1/2 md:w-1/3">
          <button className="w-full bg-indigo-600 text-white py-3 px-6 text-lg rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Explore Resources
          </button>
        </Link>
        <Link to="/support" className="w-full sm:w-1/2 md:w-1/3">
          <button className="w-full border-2 border-indigo-600 text-indigo-600 py-3 px-6 text-lg rounded-lg shadow-md hover:bg-indigo-50 transition duration-300">
            Get Support
          </button>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500">Your mental health journey starts here.</p>
      </div>
    </div>
  );
};

export default Home;
