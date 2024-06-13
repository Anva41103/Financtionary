import { Link } from "react-router-dom"

export function Nav() {

    return (
        <>
            <div className="flex">
                <div className="w-full fixed bg-pastel nav-bar flex flex-row justify-between h-16 rounded-2xl ">
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                        <img className="h-12 m-2 w-12 rounded-full" src="./src/assets/logo.jpeg" alt="" />
                        <Link to="/Home"><button  className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Home</button></Link>
                        <Link to="/Blog"><button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Blog</button></Link>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Dictionary</button>
                        <Link to="/About"><button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">About Us</button></Link>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Login</button>
                    </div>
                    <div className="flex flex-row gap-10 mx-4 justify-between">
                        {/* <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Home</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Blog</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Dictionary</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">About Us</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Login</button> */}
                        {/* <Link to='login'><button className="bg-blue-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base">Login</button></Link> */}
                        <button className="bg-pastel-teal border-2 border-slate-300 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-black font-semibold hover:bg-pastel-darkteal active:bg-pastel-teal-800 text-sm sm:text-base">WOTD</button>
                    </div>
                </div>
            </div>

        </>
    )
}