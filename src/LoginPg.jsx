import { Nav } from './Navbar'
import LoginB from './LoginB'
import { Foot } from './Footer'

export function Login() {

    return (
        <div className='loginbg'>
            <Nav />
            <div className='flex justify-center bg-transparent'>
                <LoginB />
            </div>
            <Foot />
        </div>
    )
}