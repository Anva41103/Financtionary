import { Nav } from './Navbar'
import { Main } from './MainSection'
import BlogPlay from './BlogHome'
import { Foot } from './Footer'

export function Home() {

    return (
        <>
            <Nav />
            <Main />
            {/* <div className='outer-container'>
                <div className='text-container font-bold text-xl'>"Explore, Inspire, Evolve: Your Daily Dose of Financial Insight!"</div>
                <div className='blog-container'><BlogPlay/></div>
            </div> */}
            <Foot />
        </>
    )
}