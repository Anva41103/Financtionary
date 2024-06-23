import { Nav } from './Navbar'
import { Foot } from './Footer'
import { Card } from './AboutCards'

export function About() {

    return (
        <div className='aboutbg'>
            <Nav />
            <Card/>    
            <Foot />
        </div>
    )
}