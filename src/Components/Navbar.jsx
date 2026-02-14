
const Navbar = ({ search, setSearch }) => {


    return (
        <>
            <div className={`px-6 shadow-md flex justify-center gap-10 lg:gap-0 items-center w-full h-20`}>
                <h1 className="text-xl md:text-4xl hover:scale-103 transition duration-500 cursor-pointer w-1/5 leading-3.5 md:leading-5 ">
                    <span className="text-blue-900 font-valty">Country</span><br />
                    <span className="text-green-500 ms-4 md:ms-7 font-valty">Explorer</span>
                </h1>

                <input value={search} onChange={(e) => { setSearch(e.target.value) }} className="w-170 border px-2 md:px-5 py-1.5 md:py-3 rounded-full" type="text" placeholder="Search Country by name..." />

            </div>
        </>
    )
}

export default Navbar