import { Link } from "react-router-dom"

export function Nav() {

    return (
        <>
            <div className="flex bglogin relative z-10">
                <div className="w-full fixed bg-pastel nav-bar flex flex-row justify-between h-16 rounded-2xl ">
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                        <img className="h-12 m-2 w-12 rounded-full" src="./src/assets/logo.jpeg" alt="" />
                        <Link to="/Home"><button  className="m-2 h-11 rounded-full navbutton">Home</button></Link>
                        <Link to="/Blog"><button className="m-2 px-4 h-11 rounded-full navbutton">Blog</button></Link>
                        <button className="m-2 px-4 h-11 rounded-full navbutton">Dictionary</button>
                        <Link to="/About"><button className="m-2 px-4 h-11 rounded-full navbutton">About Us</button></Link>
                        <Link to="/Login"><button className="m-2 px-4 h-11 rounded-full navbutton">Login</button></Link>
                    </div>
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                    <Link to="/Wotd"><button className="active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-black font-semibold text-sm sm:text-base button_wotd">WOTD</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}