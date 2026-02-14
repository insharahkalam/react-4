import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'

const Detail = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [code]);

  if (!country)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <span className="loader"></span>
      </div>
    );


  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-200 py-10">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-red-200 shadow-lg hover:shadow-3xl hover:shadow-red-300 cursor-pointer transition duration-500 hover:scale-105 overflow-hidden">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full h-85 object-cover"
          />
          {/* {console.log(country)} */}

          <div className="p-6">

            <h1 className="text-4xl font-valty text-center mb-6">
              {country.name.common}
            </h1>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-8">

              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Official Name:</span> {country.name.official}</p>
              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Capital:</span> {country.capital?.[0]}</p>

              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Region:</span> {country.region}</p>
              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Sub Region:</span> {country.subregion}</p>

              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Population:</span> {country.population.toLocaleString()}</p>
              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Area:</span> {country.area.toLocaleString()} km²</p>

              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >subregion:</span> {country.subregion}</p>
              <p className="font-bold font-valty text-2xl capitalize text-red-700"><span className="font-bold text-2xl capitalize text-gray-700" >Start of Week:</span> {country.startOfWeek}</p>

            </div>

            <div className="text-right">
              <button
                onClick={() => navigate("/")}
                className="px-5 py-2 font-valty text-2xl border border-gray-400 rounded-md text-green-700 hover:scale-105 duration-500 cursor-pointer transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
