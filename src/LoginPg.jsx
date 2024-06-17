import { Nav } from './Navbar'
import LoginB from './LoginB'
import { Foot } from './Footer'

export function Login() {

    return (
        <>
            <Nav />
            <div className='flex justify-center'>
                <LoginB />
            </div>
            <Foot />
        </>
    )
}