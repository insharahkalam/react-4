import React, { useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Cards = () => {
    const [countries, setCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1); // kaunsa page show ho raha
    const itemsPerPage = 42;

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
            })
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;  // last item ka index
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // first item ka index
    const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(countries.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <section className=' my-6 bg-white px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5'>
                {currentCountries.map((one, index) => (

                    <div key={index} className='hover:scale-103 hover:shadow-lg hover:shadow-red-300 transition duration-500 block flex flex-col items-center justify-center shadow-xs shadow-red-200  rounded-2xl'>
                        <img className='rounded-2xl h-[190px] w-[350px]' src={one.flags.png} alt="" />
                        <div className='my-2 border-t w-full border-gray-200'>
                            <p className=" text-3xl line-clamp-1 text-center font-bold font-valty text-body">{one.name.common}</p>
                            <button class="flex font-normal w-full text-center items-center gap-1 text-sm font-serif capitalize justify-center hover:underline">
                                View Details <GoArrowUpRight />
                            </button>
                        </div>
                    </div>

                ))}

                {/* <div className='flex items-end justify-end'>

                    <div className="pagination">
                        <button className='border px-3 py-1 rounded-s-sm font-bold text-sm' onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Prev</button>

                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={currentPage === number ? "text-red-700" : 'border px-2 py-1 font-bold text-sm'}
                            >
                                {number}
                            </button>
                        ))}

                        <button className='border px-3 py-1 rounded-e-sm font-bold text-sm' onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
                    </div>

                </div> */}

                <div className='flex items-end justify-end w-full' >

                    <button
                        className='px-4 py-2 font-bold text-sm hover:bg-gray-200 transition'
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        Prev
                    </button>

                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`px-3 py-2 text-sm font-bold transition ${currentPage === number
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        className='px-4 py-2 font-bold text-sm hover:bg-gray-200 transition'
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    >
                        Next
                    </button>

                </div>


            </section>
        </>
    )
}

export default Cards


