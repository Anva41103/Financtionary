import React from 'react';
import logoImg from './assets/logo.jpeg';  
import gmailImg from './assets/social-media/gmail.png';  
import twitterImg from './assets/social-media/twitter.png';  
import instagramImg from './assets/social-media/instagram.png';
import linkedinImg from './assets/social-media/linkedin.png';  

export function Foot() {
    return (
        <>
            <footer className="footercol text-white p-5 text-center h-60">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-between">

                    <div className="flex-1 min-w-[200px] m-2">
                        <img className="-ml-24 rounded-full h-36" src={logoImg} alt="Logo" />
                    </div>

                    <div className="flex-1 min-w-[200px] m-2 text-left">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p>Email: <a href="mailto:financtionary@gmail.com." className="text-gray-700">financtionary@gmail.com</a></p>
                        {/* <p>Phone: <a href="tel:+" className="text-gray-700">+91 </a></p> */}
                        <p>Address: <a className="text-gray-700">G.E. Road, Raipur, India</a></p>
                    </div>

                    <div className="flex-1 min-w-[200px] m-2">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="list-none p-0">
                            <li><a href="./Home" className="text-gray-600 font-semibold">Home</a></li>
                            <li><a href="./About" className="text-gray-600 font-semibold">About Us</a></li>
                            <li><a href="https://www.linkedin.com/in/financtionary-india-530944315/" className="text-gray-600 font-semibold">Services</a></li>
                            <li><a href="financtionary@gmail.com" className="text-gray-600 font-semibold">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[200px] m-2">
                        <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
                        <a href='mailto:financtionary@gmail.com' target="_blank" className="text-gray-400 mr-2">
                            <img src={gmailImg} alt="Gmail" className="w-10 h-10 inline-block" />
                        </a>
                        <a href="https://x.com/Financtionary" target="_blank" className="text-gray-400 mr-0 -ml-3">
                            <img src={twitterImg} alt="Twitter" className="w-14 h-14 inline-block" />
                        </a>
                        <a href="https://www.instagram.com/financtionary/" target="_blank" className="text-gray-400 mr-2">
                            <img src={instagramImg} alt="Instagram" className="w-10 h-10 inline-block" />
                        </a>
                        <a href="https://www.linkedin.com/in/financtionary-india-530944315/" target="_blank" className="text-gray-400">
                            <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10 inline-block" />
                        </a>
                    </div>
                </div>
                <div className="mt-5">
                    <p>&copy; 2024 Financtionary. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
