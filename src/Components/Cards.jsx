import React, { useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Cards = () => {
    const [countries , setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
        .then((res) => res.json())
        .then((data) => {
         setCountries(data)
        })
    }, [])
    return (
        <>
        <section className=' my-6 bg-white px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5'>
{countries.map((one,index)=>(
    
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

<div className='flex items-end justify-end'>

<nav aria-label="Page navigation example ">
  <ul class="flex justify-end text-sm">
    <li>
      <a href="#" class="rounded-s-sm flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Prev</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
 
    <li>
      <a href="#" class="rounded-e-sm flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
    </li>
  </ul>
</nav>
</div>




</section>
        </>
    )
}

export default Cards


// import React, { useEffect, useState } from 'react'

// const Cards = () => {

//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/independent?status=true")
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data)
//       })
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <>
//       {countries.map((one, index) => (
//         console.log(one),
        
//         <div key={index}>
//           <h2>{one.name.common}</h2>
//           <p>Region: {one.region}</p>
//           <img src={one.flags.png} alt="" />
//         </div>
//       ))}
//     </>
//   )
// }

// export default Cards
