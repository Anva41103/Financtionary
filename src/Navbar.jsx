import { Link } from "react-router-dom"

export function Nav() {

    return (
        <>
            {/* <div className="nav-bar flex flex-row justify-between mt-3 h-16 sticky top-0 bg-transparent" style={{backgroundImage: "url('./src/assets/bgfin.jpg')"}}>
                <div>
                <img src="./src/assets/facebook.png" alt="" />
                </div>
                <div className="flex flex-row gap-3 mx-4">
                    <button className="m-2 px-4 h-11 rounded-md border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Enter Code</button>
                    <Link to='login'><button className="bg-purple-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Login</button></Link>
                    <button className="bg-purple-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Sign-Up</button>
                </div>
            </div> */}
            <div className="flex">
                <div className="w-full fixed bg-pastel nav-bar flex flex-row justify-between h-16 rounded-2xl ">
                    {/* <div>
                        <img src="./src/assets/facebook.png" alt="" />

                    </div> */}
                    <div className="flex flex-row gap-12 mx-4 justify-between">
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Home</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Blog</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Dictionary</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">About Us</button>
                        <button className="m-2 px-4 h-11 rounded-full border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Login</button>
                        {/* <Link to='login'><button className="bg-blue-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base">Login</button></Link> */}
                        <button className="bg-pastel-teal border-2 border-slate-300 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-black font-semibold hover:bg-pastel-darkteal active:bg-pastel-teal-800 text-sm sm:text-base">WOTD</button>
                    </div>
                </div>
            </div>

        </>
    )
}