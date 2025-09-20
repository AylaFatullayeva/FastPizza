import React from "react"

function CartItem(){
return(
    <>
    <li className="m-auto w-[50vw] h-[12vh] py-3 flex items-center justify-between">
<p>1x Red Sauce pasta</p>
<div className="flex items-center justify-between gap-6">
    <p>$12.00</p>

    <button className="bg-violet-300 rounded-full py-2 px-5 ">Delete</button>
</div>
    </li>
    </>)
}
export default CartItem