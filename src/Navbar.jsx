import { Link } from "react-router-dom"
import logo from "./assets/logo.jpeg"
import WordOfTheDay from "./WordOfTheDay"
export function Nav() {

    return (
        <>
            <div className="flex bglogin relative z-10">
                <div className="w-full fixed bg-pastel nav-bar flex flex-row justify-between h-16 rounded-2xl ">
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                        <img className="h-12 m-2 w-12 rounded-full" src={logo} alt="" />
                        <Link to="/Home"><button className="m-2 h-11 rounded-full navbutton">Home</button></Link>
                        <Link to="/Blog"><button className="m-2 px-4 h-11 rounded-full navbutton">Blog</button></Link>
                        <Link to="/Dict"><button className="m-2 px-4 h-11 rounded-full navbutton">Dictionary</button></Link>
                        <Link to="/About"><button className="m-2 px-4 h-11 rounded-full navbutton">About Us</button></Link>
                        <Link to="/Login"><button className="m-2 px-4 h-11 rounded-full navbutton">Login</button></Link>
                    </div>
                    {/* <div class="switch-container"> */}
                        {/* <p>{WordOfTheDay.word}</p> */}
                        {/* <button class="btn" id="toggleButton">
                            <span class="btn-text-one">WOTD</span>
                            <span class="btn-text-two"><h3 id="wordTitle">{WordOfTheDay.word}</h3></span>
                        </button>
                        <div class="switch-content" id="meaningContent">
                            <p id="wordMeaning">{WordOfTheDay.meaning}</p>
                        </div> */}
                    {/* </div> */}
                    {/* <div className="switch-container">
                        <button className="btn" id="toggleButton">
                            <span className="btn-text-one">WOTD</span>
                            <span className="btn-text-two"><h3 id="wordTitle">{WordOfTheDay.word}</h3></span>
                        </button>
                        <div className="switch-content" id="meaningContent">
                            <p id="wordMeaning"> {WordOfTheDay.meaning}</p>
                        </div>
                    </div> */}
                    <WordOfTheDay className='ml-4'></WordOfTheDay>
                </div>
            </div>
        </>
    )
}