import React from "react"
function Header(){
return(
    <>
    <div className="bg-fuchsia-300 h-[10vh] w-full flex items-center justify-between px-5">
        <h1 className="font-bold">FAST REACT PIZZA CO.</h1>
<input className="bg-purple-200 border-2 rounded-full py-1 px-4 pl-3 w-[20vw] border-fuchsia-600" placeholder="Search Order" type="text" />
<h1 className="font-bold">AYLA</h1>
    </div>
    </>
)
}

export default Header