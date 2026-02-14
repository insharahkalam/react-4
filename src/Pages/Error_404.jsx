import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error_404 = () => {
  const navigate = useNavigate();
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4">

      {/* Animated 404 Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl md:text-9xl font-extrabold text-red-500"
      >
        404
      </motion.h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-valty md:text-5xl  font-semibold text-gray-800 text-center">
       Page Not Found
      </h2>

      <p className="mt-2 text-xl font-valty text-gray-500 text-center max-w-md">
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2.5 font-bold font-valty text-2xl bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300"
      >
        Back To Home
      </button>

    </div>


  )
}

export default Error_404