import { Link } from "@inertiajs/react";
import {faBars, faMapMarkerAlt, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function MainLayout({ children }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const menu = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]
    return (
        <main>
        <nav className="bg-black fixed top-0 w-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                <Link href="/" className="text-xl font-semibold text-gray-900">
                    <img src="/petras-builders.png" alt="Petras Builders" className="md:h-14 h-12"/>
                </Link>
                <div className="hidden md:flex space-x-6">
                    {menu.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="text-xl text-white font-bebas tracking-wider hover:text-primary hover:underline"
                        >
                            {item.name}
                        </Link>
                    ))}
                
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/contact" className="btn btn-secondary bg-primary text-white py-2 px-4 rounded text-xl font-bebas tracking-wider">Get a Quote</Link>
                </div>
                <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setMobileMenu(!mobileMenu)}>
                    <FontAwesomeIcon icon={faBars} className="text-primary" size="2xl"/>
                </button>
                </div>
            </div>
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white ${
                    mobileMenu ? 'max-h-60' : 'max-h-0'
                }`}
                >
                <div className="flex flex-col p-4 gap-3">
                    {menu.map((item, i) => (
                    <div
                        key={i}
                        className={`w-full transition-all duration-300 ${
                        mobileMenu
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-2'
                        }`}
                        style={{ transitionDelay: `${i * 80}ms` }}
                    >
                        <Link
                        href={item.href}
                        className="text-black text-2xl border-b border-primary pr-6 font-bebas hover:text-primary transition-colors"
                        onClick={() => setMobileMenu(false)} // 👈 close menu on click
                        >
                        {item.name}
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </nav>
            {children}
        <footer className="bg-black text-white pb-4 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img src="/petras-builders.png" alt="Petras Builders" className="md:h-14 h-12 mb-4"/>
                        <p className="text-white">Building your dreams with quality and integrity.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white hover:text-primary">Home</Link></li>
                            <li><Link href="/about" className="text-white hover:text-primary">About</Link></li>
                            <li><Link href="/services" className="text-white hover:text-primary">Services</Link></li>
                            <li><Link href="/projects" className="text-white hover:text-primary">Projects</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-white"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-primary"/> 123 Main St, Anytown, USA</li>
                            <li className="text-white"><FontAwesomeIcon icon={faPhone} className="mr-2 text-primary"/> (123) 456-7890</li>
                            <li className="text-white"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary"/> [EMAIL_ADDRESS]</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faFacebook} className="mr-2 text-primary" size="lg"/></Link>
                            <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faTwitter} className="mr-2 text-primary" size="lg"/></Link>
                            <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} className="mr-2 text-primary" size="lg"/></Link>
                            <Link href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faLinkedinIn} className="mr-2 text-primary" size="lg"/></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-4 pt-4 text-center">
                    <p className="text-white">&copy; {new Date().getFullYear()} Petras Builders. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </main>
    );
}