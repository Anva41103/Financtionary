import './App.css'
import TextHome from './TextHome'
import BlogPlay from './BlogHome'
export function Main() {

    return (
        <>
            <div className='bggrad'>

                {/* <div className=" bg-pastel nav-bar flex flex-row justify-between  h-16 sticky rounded-xl m-40">
                    <div>
                        <img src="./src/assets/facebook.png"alt="" />
                    </div>
                    <div className="flex flex-row gap-3 mx-4">
                        <button className="m-2 px-4 h-11 rounded-md border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Enter Code</button>
                        <Link to='login'><button className="bg-blue-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base">Login</button></Link>
                        <button className="bg-pastel-teal border-2 border-slate-300 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-black font-semibold hover:bg-pastel-darkteal active:bg-teal-800 text-sm sm:text-base">Sign-Up</button>
                    </div>
                </div> */}
                <div className="w-full h-[90vh] flex flex-col justify-center items-center flex-wrap main-sec bg-transparent" >
                    <TextHome />
                </div>
                <div className='grid justify-center'>
                    <div className='outer-container rounded-sm'>
                        <div className='text-container font-bold text-xl'>"Explore, Inspire, Evolve: Your Daily Dose of Financial Insight!"</div>
                        <div className='blog-container'><BlogPlay /></div>
                    </div>
                    
                </div>
                <div className='h-10'></div>

            </div>
        </>
    )
}