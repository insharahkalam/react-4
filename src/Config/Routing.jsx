import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Error from "../Components/Error"
import Login from "../Components/Login"
const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default Routing