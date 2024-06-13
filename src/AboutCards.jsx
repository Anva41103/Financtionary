import { Link } from "react-router-dom"

export function Card() {

    return (
        <>
            <div className="bg-pink-300 rounded shadow-md grid place-items-center p-4 m-5 mt-20 w-128">
                {/*Profile Picture */}
                <img src="./src/assets/logo.jpeg" alt="Team Member" className="w-56 h-56 rounded-full mb-4 shadow-lg" />
                <div className="grid place-items-center">
                    {/*Name and Position */}
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-lg mt-1  mb-2 text-gray-600">Founder & CEO</p>

                    {/*Introduction */}
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

                    {/*Contact Information */}
                    <ul className="flex justify-center mb-4">
                        <li className="mr-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-2xl">
                                <i className="fab fa-twitter "></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-gray-600 text-2xl hover:text-gray-900">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="mailto:johndoe@example.com" className="text-gray-600 hover:text-gray-900 text-2xl">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="mailto:johndoe@example.com" className="text-gray-600 hover:text-gray-900 text-2xl">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}