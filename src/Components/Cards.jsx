import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Cards = ({ search }) => {
  console.log(search);

  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 60;

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setCurrentPage(1);
        setLoading(false);
      });
  }, [search]);

  const filterdCountry = countries.filter((items) =>
    items.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filterdCountry.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filterdCountry.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    console.log(i);
    console.log(pageNumbers);
  }

  // ✅ LOADING SCREEN
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-14 h-14 border-4 border-gray-500-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <section className=" my-6 bg-white px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
        {filterdCountry.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <h2 className="text-3xl font-bold text-gray-500">
              No Country Found 😢
            </h2>
            <p className="text-gray-400 mt-2">
              Try searching another country name
            </p>
          </div>
        ) : (
          currentCountries.map((one, index) => (
            <div
              key={index}
              className="hover:scale-103 hover:shadow-lg hover:shadow-red-300 transition duration-500 block flex flex-col items-center justify-center shadow-xs shadow-red-200  rounded-2xl"
            >
              <img
                className="rounded-2xl h-[190px] w-[350px]"
                src={one.flags.png}
                alt=""
              />
              <div className="my-2 border-t w-full border-gray-200">
                <p className=" text-3xl line-clamp-1 text-center font-bold font-valty text-body">
                  {one.name.common}
                </p>
                {/* <button className="flex font-normal w-full text-center items-center gap-1 text-sm font-serif capitalize justify-center hover:underline">
                                    View Details <GoArrowUpRight />
                                </button> */}

                <Link
                  to={`/country/${one.cca3}`}
                  className="flex w-full items-center gap-1 text-sm font-serif justify-center hover:underline mt-1"
                >
                  View Details <GoArrowUpRight />
                </Link>
              </div>
            </div>
          ))
        )}
      </section>

      {filterdCountry.length === 0 ? null : (
        <div className="my-10 px-6 flex items-end justify-center w-full">
          <button
            className={`px-4 py-2 font-bold rounded-full border text-gray-700 border-gray-200 text-sm hover:bg-gray-200 transition ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`py-2 px-3.5 text-sm font-bold rounded-full border border-gray-200 transition ${
                currentPage === number
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            className={`px-4 py-2 font-bold rounded-full border text-gray-700 border-gray-200 text-sm hover:bg-gray-200 transition ${
              currentPage === 4 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;
