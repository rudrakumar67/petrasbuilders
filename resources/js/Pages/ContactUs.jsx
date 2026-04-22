import MainLayout from "../layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function ContactUs() {
    return (
        <MainLayout>
            <Head title="Contact Us" />
            <section className="py-20 px-6 md:px-16 bg-gray-50 mt-20">
                <div className="w-full max-w-7xl mx-auto lg:px-8 grid md:grid-cols-2 gap-12 mb-12 items-center">
                    {/* LEFT SIDE - DETAILS */}
                    <div>
                        <h2 className="text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards]">
                        Contact Us
                        </h2>
                        <p className="text-2xl mb-6 font-semibold opacity-0 animate-[fadeInUp_0.5s_ease-out_0.6s_forwards]">
                        Let's discuss your vision.
                        </p>
                        <p className="mb-8 text-black font-semibold opacity-0 animate-[fadeInUp_0.5s_ease-out_0.7s_forwards]">
                        Tell us a little about yourself and your dream home. Our expert team
                        will get back to you as soon as possible.
                        </p>
                        <div className="space-y-2">
                        <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_0.8s_forwards]">
                            <h4 className="font-bebas text-xl text-primary">Phone : <a href="tel:+919600663238" className="text-black">+91 9600663238</a></h4>
                        </div>
                        <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_0.9s_forwards]">
                            <h4 className="font-bebas text-xl text-primary">Email : <a href="mailto:info@petras.in" className="text-black">info@petras.in</a></h4>
                        </div>
                        <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_1.0s_forwards]">
                            <h4 className="font-bebas text-xl text-primary ">Follow Us : </h4>
                            <a href="https://wa.me/919600663238" className="font-bebas text-xl text-black mr-4" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href="https://www.facebook.com/petrasbuilders/" className="font-bebas text-xl text-black mr-4" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/petrasbuilders/" className="font-bebas text-xl text-black mr-4" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/company/petrasbuilders/" className="font-bebas text-xl text-black mr-4" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className="opacity-0 animate-[fadeInUp_0.5s_ease-out_1.1s_forwards]">
                            <h4 className="font-bebas text-xl text-primary ">Address : <a href="https://maps.app.goo.gl/22q45e9Y3y5627qG7" className="text-black">99A, Velachery – Tambaram Main Rd,<br />
                            Sembakkam, Chennai, Tamil Nadu 600073</a></h4>
                        </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg opacity-0 animate-[fadeInUp_0.5s_ease-out_1.2s_forwards]">

                        <h3 className="text-3xl mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_1.3s_forwards]"> Send a Message </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-bebas text-xl hover:opacity-90"
                            >
                                Send Message
                            </button>
                        </form> 
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto lg:px-8 opacity-0 animate-[fadeInUp_0.5s_ease-out_1.4s_forwards]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7675674914667!2d80.1616007!3d12.922655100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ee94f7fbb29%3A0xf770ab101dd7b9d9!2sPetras%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1775819388937!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </MainLayout>
    );
}