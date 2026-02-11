import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Error_404 from "../Pages/Error_404"
import Detail from "../Pages/Detail"
const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="*" element={<Error_404 />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default Routing