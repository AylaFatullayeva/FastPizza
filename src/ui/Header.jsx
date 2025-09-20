import React from "react"
import SearchOrder from "../features/order/SearchOrder"
import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <header className="bg-fuchsia-300 h-[10vh] w-full flex items-center justify-between px-5">
                <Link to="/" className="font-bold tracking-widest">FAST REACT PIZZA CO.</Link>
                <SearchOrder/>
                {/* <h1 className="font-bold">AYLA</h1> */}
            </header>
        </>
    )
}

export default Header