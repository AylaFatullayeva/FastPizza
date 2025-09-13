import React from "react"
function Card() {
    return (
        <>
            <div className=" m-auto w-[65vw] h-[20vh] border-b-1 py-3 flex  border-gray-300 gap-3" >
                <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1-500x500.jpg" alt="imageOfPasta" />
                <div className="w-full">
                    <h1 className="font-bold">Red Sauce Pasta</h1>
                    <p className="italic">Tomato, pasta, basil</p>
                    <div className=" w-full flex items-end justify-between ">
                        <p>$12.00</p>
                        <button className="bg-violet-300 rounded-full py-2 px-5 ">Add to cart</button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Card