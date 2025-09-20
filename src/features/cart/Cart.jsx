import React from "react"
import CartItem from "../../components/CartItem"

function Cart() {
    return (
        <>
            <div className=" flex-col m-auto w-[65vw] h-[20vh] border-b-1 py-3 border-gray-300 gap-3" >
                <div className="flex items-start">
                    <button className="bg-violet-300 
                    rounded-full py-2 px-5 ">Back to menu</button>
                </div>
                <h1 className="font-bold py-3">Your cart, Ayla</h1>
                <div className="flex items-center justify-center">
<CartItem />
                </div>
                <div className="flex gap-2.5 py-2.5" >
                    <button className="bg-violet-300 rounded-full py-2 px-5 ">Order pizzas</button>
                    <button className="bg-white rounded-full py-2 px-5 text-black font-bold border-2">Clear cart</button>
                </div>
            </div>
        </>)
}
export default Cart