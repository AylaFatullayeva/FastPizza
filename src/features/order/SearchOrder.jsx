import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder(){
const [query, setQuery]=useState("")
const navigate= useNavigate()

function handleSumbit(e){
    e.preventDefault()
    if(!query)return;
    navigate(`/order/${query}`)
    setQuery('')
}

return(
    <form onSubmit={handleSumbit}>
        <input placeholder="Search order #" value={query}
        onChange={(e)=>setQuery(e.target.value)} className="bg-purple-200 border-2 rounded-full py-1 px-4 pl-3 w-[20vw] border-fuchsia-600" />
    </form>
)
}

export default SearchOrder