
export function Foot() {

    return (
        <>
            <footer class="footercol text-white p-5 text-center">
                <div class="max-w-5xl mx-auto flex flex-wrap justify-between">

                    <div class="flex-1 min-w-[200px] m-2">
                        <img className="-ml-24 rounded-full" src="./src/assets/logo.jpeg"/>
                    </div>

                    <div class="flex-1 min-w-[200px] m-2">
                        <h3 class="text-lg font-semibold">Contact Us</h3>
                        <p>Email: <a href="mailto:info@example.com" class="text-gray-400">info@example.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" class="text-gray-400">+123 456 7890</a></p>
                        <p>Address: 123 Main Street, Anytown, USA</p>
                    </div>

                    <div class="flex-1 min-w-[200px] m-2">
                        <h3 class="text-lg font-semibold">Quick Links</h3>
                        <ul class="list-none p-0">
                            <li><a href="#home" class="text-gray-400">Home</a></li>
                            <li><a href="#about" class="text-gray-400">About Us</a></li>
                            <li><a href="#services" class="text-gray-400">Services</a></li>
                            <li><a href="#contact" class="text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    <div class="flex-1 min-w-[200px] m-2">
                        <h3 class="text-lg font-semibold">Follow Us</h3>
                        {/* <a href="https://www.facebook.com" target="_blank" class="text-gray-400 mr-2">
                            <img src="facebook-icon.png" alt="Facebook" class="w-6 h-6 inline-block" />
                        </a> */}
                        {/* <a href="https://www.twitter.com" target="_blank" class="text-gray-400 mr-2">
                            <img src="twitter-icon.png" alt="Twitter" class="w-6 h-6 inline-block" />
                        </a> */}
                        <a href="https://www.instagram.com" target="_blank" class="text-gray-400 mr-2">
                            <img src="./src/assets/social-media/instagram.png" alt="Instagram" class="w-10 h-10 inline-block" />
                        </a>
                        {/* <a href="https://www.linkedin.com" target="_blank" class="text-gray-400">
                            <img src="linkedin-icon.png" alt="LinkedIn" class="w-6 h-6 inline-block" />
                        </a> */}
                    </div>
                </div>
                <div class="mt-5">
                    <p>&copy; 2024 Financtionary. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}