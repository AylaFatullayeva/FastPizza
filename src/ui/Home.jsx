import { useSelector } from "react-redux";
import Button from "./Button";

function Home(){
return(
    <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">The best pasta.
            <br/>
            <span className="text-violet-400">Straight out of the oven, straight to you</span>
        </h1>
    </div>
)
}

export default Home