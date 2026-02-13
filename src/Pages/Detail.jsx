import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <h1 className="text-center mt-20 text-2xl font-medium">
        Loading...
      </h1>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">

        {/* Flag */}
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-56 object-cover"
        />

        {/* Content */}
        <div className="p-6">

          <h1 className="text-3xl font-semibold mb-6">
            {country.name.common}
          </h1>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-8">

            <p><span className="font-semibold text-gray-900">Official Name:</span> {country.name.official}</p>
            <p><span className="font-semibold text-gray-900">Capital:</span> {country.capital?.[0]}</p>

            <p><span className="font-semibold text-gray-900">Region:</span> {country.region}</p>
            <p><span className="font-semibold text-gray-900">Sub Region:</span> {country.subregion}</p>

            <p><span className="font-semibold text-gray-900">Population:</span> {country.population.toLocaleString()}</p>
            <p><span className="font-semibold text-gray-900">Area:</span> {country.area.toLocaleString()} km²</p>

            <p><span className="font-semibold text-gray-900">Timezones:</span> {country.timezones.join(", ")}</p>
            <p><span className="font-semibold text-gray-900">Start of Week:</span> {country.startOfWeek}</p>

          </div>

          {/* Back Button */}
          <div className="text-right">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              ← Back to Home
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;
