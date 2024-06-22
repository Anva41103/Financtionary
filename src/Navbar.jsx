import { Link } from "react-router-dom"
import  WordOfTheDay from "./WordOfTheDay"
export function Nav() {

    return (
        <>
            <div className="flex bglogin relative z-10">
                <div className="w-full fixed bg-pastel nav-bar flex flex-row justify-between h-16 rounded-2xl ">
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                        <img className="h-12 m-2 w-12 rounded-full" src="./src/assets/logo.jpeg" alt="" />
                        <Link to="/Home"><button className="m-2 h-11 rounded-full navbutton">Home</button></Link>
                        <Link to="/Blog"><button className="m-2 px-4 h-11 rounded-full navbutton">Blog</button></Link>
                        <button className="m-2 px-4 h-11 rounded-full navbutton">Dictionary</button>
                        <Link to="/About"><button className="m-2 px-4 h-11 rounded-full navbutton">About Us</button></Link>
                        <Link to="/Login"><button className="m-2 px-4 h-11 rounded-full navbutton">Login</button></Link>
                    </div>
                    {/* <div className="switch-container">
                        <button className="btn" id="toggleButton">
                            <span className="btn-text-one">WOTD</span>
                            <span className="btn-text-two"><h3 id="wordTitle">{WordOfTheDay.word}</h3></span>
                        </button>
                        <div className="switch-content" id="meaningContent">
                            <p id="wordMeaning"> {WordOfTheDay.meaning}</p>
                        </div>
                    </div> */}
                    <WordOfTheDay></WordOfTheDay>
                </div>
            </div>
        </>
    )
}