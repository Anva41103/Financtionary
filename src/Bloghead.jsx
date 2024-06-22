import { Link } from "react-router-dom"
import { BlogP1 } from './BlogPg1'
import { BlogP2 } from './BlogPg2'
import { BlogP3 } from './BlogPg3'
import { BlogP4 } from './BlogPg4'
import { BlogP5 } from './BlogPg5'
import './App.css'
export function BHead() {

    return (
        <>
            <div className="mt-24">
                <div class="cardblog">
                    <Link to="/BlogP1"><p><span>Microfinance: Empowering the Underbanked</span></p></Link>
                    <Link to="/BlogP2"><p><span>Mutual Funds: Diversified Investment for All</span></p></Link>
                    <Link to="/BlogP3"><p><span>MSME Sector in India: The Backbone of the Economy</span></p></Link>
                    <Link to="/BlogP4"><p><span>Loan Against Property: Unlocking the Value of Your Assets</span></p></Link>
                    <Link to="/BlogP5"><p><span>Property Insurance: Safeguarding Your Valuable Assets</span></p></Link>
                </div>
            </div>
        </>
    )
}