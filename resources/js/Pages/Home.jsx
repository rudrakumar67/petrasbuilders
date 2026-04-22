import MainLayout from '../layouts/MainLayout';
import { Link,Head } from '@inertiajs/react';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
    const whatWeDo = [
        { title: "Residential & Commercial", img: "/1.jpeg", href: "#" },
        { title: "Industrial Projects", img: "/2.jpeg", href: "#" },
        { title: "Interior Design", img: "/3.jpeg", href: "#" },
        { title: "Architectural Planning", img: "/4.jpeg", href: "#" },
        { title: "Landscape Design", img: "/LIVING.jpg", href: "#" },
        { title: "Renovation Projects", img: "/KITCHEN_2.jpg", href: "#" },
    ];
    const ourProcess = [
        { title: "Planning & Design", description: "We begin by understanding your needs, preparing detailed designs, and securing approvals."},
        { title: "Site Preparation & Foundation", description: "Site is cleared, soil tested, and a strong foundation is laid for lasting stability."},
        { title: "Structural Work", description: "We build the framework — columns, beams, slabs, and walls — with precision and quality."},
        { title: "Roofing & Water-proofing", description: "Final slabs are cast and waterproofed to protect your structure from the elements."},
        { title: "MEP Installations", description: "Electrical, plumbing, and safety systems are integrated seamlessly."},
        { title: "Finishing Touches", description: "We add flooring, painting, fittings, and final finishes to bring the space to life."},
        { title: "Handover", description: "After rigorous quality checks, we hand over your completed project — ready to move in."},
    ];
    return (
        <MainLayout>
            <Head title="Home" description="Petras Builders - Building your dreams with quality and integrity." />
            <div className="bg-white text-gray-700">
                {/* HERO SECTION */}
                <section className="relative bg-white overflow-hidden text-black lg:pt-20 pt-25">
                    {/* Background Quarter Circle Image */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[750px] rounded-bl-full overflow-hidden opacity-0 animate-[fadeInRight_0.7s_ease-out_0.7s_forwards]">
                        <img
                        src="/2.jpeg"
                        alt="Interior Design"
                        className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Optional Overlay Glow */}
                    <div className="absolute top-0 right-0 w-[350px] h-[350px] md:w-[750px] md:h-[750px] lg:w-[1050px] lg:h-[850px] bg-primary/20 blur-3xl rounded-bl-full" />
                    

                    <div className="relative z-10 max-w-7xl mx-auto min-h-[90vh] flex items-center">
                        <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-4 rounded-lg opacity-0 animate-[fadeInLeft_0.5s_ease-out_0.1s_forwards]">
                            <div className="">
                                <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] uppercase tracking-[0.3em] text-sm text-black mb-4">
                                    Quality you can trust, Relationships that last.
                                </p>

                                <h1 className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards] text-4xl md:text-4xl lg:text-5xl uppercase font-light leading-tight mb-6">
                                    Strong foundations, Stronger relationships.
                                </h1>

                                <p className="opacity-0 animate-[fadeInUp_0.6s_ease-out_1.3s_forwards] text-black text-lg leading-relaxed max-w-xl mb-8">
                                    We believe strong foundations create stronger relationships. We deliver high-quality construction solutions with a focus on safety, durability, transparency, and timely execution. Our commitment to excellence ensures every project is built to last and adds real value for our clients.
                                </p>

                                <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.8s_forwards]">
                                    <Link href="/about" className="border border-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white transition-all duration-300">
                                    About Us
                                    </Link>

                                    <Link href="/projects" className="border border-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white transition-all duration-300">
                                    Our Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* ABOUT (Image Left / Text Right) */}
                <section className="py-20 px-6 border-b border-primary">
                    <div className="w-full max-w-7xl mx-auto lg:px-10 grid md:grid-cols-2 gap-10">
                        <div className="scroll-left">
                            <h2 className="scroll-up delay-4 text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6">
                                About Us
                            </h2>
                            <p className="mb-4 font-semibold scroll-up delay-3">
                                Petras Builders, founded in 2009, delivers high-quality residential
                                and commercial projects across Chennai.
                            </p>
                            <p className="font-semibold mb-6 scroll-up delay-3">
                                We are trusted partners turning ideas into reality with engineering
                                excellence and integrity.
                            </p>
                            <Link
                                href="/about"
                                className="scroll-up delay-4 inline-block btn btn-secondary bg-primary text-white py-2 px-4 rounded text-xl font-bebas tracking-wider"
                            >
                                <span className="scroll-up delay-5">Read More</span>
                            </Link>
                        </div>
                        <div className='about-image-frame scroll-right delay-3'>
                            <img
                            src="/4.jpeg"
                            className="scroll-right delay-2 w-full h-[400px] object-cover transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>
                {/* WHAT WE DO (Cards with Image Overlay) */}
                <section className="py-20 px-6 bg-gray-50 border-b border-primary">
                    <div className='w-full max-w-7xl mx-auto lg:px-10'>
                        <h2 className="scroll-up delay-4 text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6">
                            What We Do
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {whatWeDo.map((item, i) => (
                                <div
                                key={i}
                                className={`service-card scroll-right delay-${(i % 3) + 1} relative h-64 rounded-xl overflow-hidden group`}
                                >
                                    <img
                                    src={item.img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/20"></div>

                                    <div className="absolute bottom-4 left-4 text-white flex flex-col gap-2">
                                    <h3 className="font-bebas text-2xl">{item.title}</h3>

                                    <Link
                                        href={item.href}
                                        className="border border-white px-2 py-1 rounded-lg w-fit hover:bg-white hover:text-primary transition-colors duration-300 hover:border-primary"
                                    >
                                        Know More <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* WHY CHOOSE US (Left Text / Right Image) */}
                <section className="py-20 px-6 md:px-16 border-b border-primary">
                    <div className="w-full max-w-7xl mx-auto lg:px-10 grid md:grid-cols-2 gap-10 items-center">
                        <div className='about-image-frame scroll-left delay-2'>
                            <img
                            src="/3.jpeg"
                            className="scroll-left delay-2 w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="scroll-right delay-2">
                            <h2 className="scroll-up delay-4 text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6">
                                Why Choose Us
                            </h2>

                            <ul className="space-y-3">
                                {[
                                "Experience You Can Trust",
                                "Quality That Lasts",
                                "On-Time Delivery",
                                "Transparent Communication",
                                "Safety First",
                                "Customized Solutions",
                                ].map((item, i) => (
                                <li key={i} className={`scroll-up delay-${(i % 6) + 1} flex items-center gap-2 font-semibold`}>
                                    <span className="text-primary"><FontAwesomeIcon icon={faCheck} /></span>
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div>  
                    </div>
                </section>
                {/* PROCESS (Horizontal Timeline Style) */}
                <section className="py-20 px-6 bg-gray-50 border-b border-primary">
                    <div className="w-full max-w-[1200px] mx-auto">

                        {/* Heading */}
                        <h2 className="scroll-up delay-1 text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6">
                        Our Process
                        </h2>

                        <p className="scroll-up delay-2 text-xl mb-16 max-w-2xl font-semibold">
                            Every great project begins with a smart plan. We collaborate with clients
                            to create functional, aesthetic, and cost-effective designs.
                        </p>
                        {/* Timeline */}
                        <div className="grid md:grid-cols-3 gap-x-6 gap-y-6  relative justify-items-center">

                            {ourProcess.map((step, i) => (
                                <div key={i} className={`scroll-up delay-${(i % 6) + 1} relative group`}>
                                    {/* Big Background Number */}
                                    <span className="absolute text-7xl font-bold text-gray-200 group-hover:text-primary/10 transition-all duration-300">
                                        0{i + 1}
                                    </span>
                                    {/* Card */}
                                    <div className="relative mt-[55px] ml-[45px] z-10 p-4 bg-white rounded-xl shadow-md 
                                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl min-h-[150px]">

                                        <h3 className="font-bebas text-2xl text-primary">
                                        {step.title}
                                        </h3>

                                        <p className="text-sm mt-2 font-semibold">
                                        {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* PROJECTS (Image Grid) */}
                <section className="py-20 px-6 md:px-16 border-b border-primary">
                    <div className="w-full max-w-7xl mx-auto lg:px-10">
                        <h2 className="scroll-up delay-1 text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6 text-center">
                            Our Projects
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "DINING_AREA_1.jpg", "KITCHEN_2.jpg"].map(
                                (img, i) => (
                                <div key={i} className={`scroll-up delay-${(i % 3) + 1} relative h-56 rounded-xl overflow-hidden group`}>
                                    
                                    <img
                                        src={`/${img}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
                {/* CTA */}
                <section className="py-10 px-6 md:px-16 bg-primary text-white">
                    <div className="w-full max-w-7xl mx-auto lg:px-10 grid md:grid-cols-2 items-center gap-6">
                        {/* LEFT */}
                        <div>
                            <h2 className="scroll-left delay-1 text-4xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                            Let's Build Together
                            </h2>
                            <p className="scroll-left delay-2 text-2xl">Ready to start your project?</p>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center justify-center md:justify-end scroll-right delay-3">
                            <Link href={'contact'} className="px-6 py-3 bg-white text-primary rounded-lg">
                            Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}