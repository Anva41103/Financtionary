import { Nav } from './Navbar'
import { Main } from './MainSection'
import BlogPlay from './BlogHome'
import { Foot } from './Footer'

export function Home() {

    return (
        <>
            <Nav />
            <Main />
            <div className='outer-container'>
                <div className='text-container'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                <div className='blog-container'><BlogPlay/></div>
            </div>
            <Foot />
        </>
    )
}