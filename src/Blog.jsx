import { Nav } from './Navbar'
import { BHead } from './Bloghead'
import { Foot } from './Footer'

export function Blog() {

    return (
        <>
            <div className='bgpic'>
                <Nav />
                <BHead />
                <Foot />
            </div>
        </>
    )
}
