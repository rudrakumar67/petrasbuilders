import MainLayout from '../layouts/MainLayout'
import { Head, Link } from '@inertiajs/react'

export default function About() {
  return (
    <MainLayout>
        <Head title="About Us" />
        <div className="bg-white text-gray-700">
            <section className="py-20 px-6 mt-20">
                <div className="w-full max-w-7xl mx-auto lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl md:text-4xl lg:text-7xl font-light leading-tight mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards]">
                            About us
                        </h2>
                        <h3 className='text-lg text-black mb-4 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.6s_forwards]'>Petras, The Journey. Aiming to rise up distinctive value based communities with nurturing environment.</h3>
                        <p className="mb-6 text-black opacity-0 animate-[fadeInUp_0.5s_ease-out_0.7s_forwards]">
                            Petras Builders began with a simple residential project in Chennai. We grew steadily by prioritizing quality work, honest communication, and strong client relationships. Over the years, we expanded into commercial and industrial construction, while also offering interior design and architectural planning services. Today, with over 25 completed projects across the region, we remain committed to building trust, safety, and lasting value in every project we undertake.
                        </p>

                        <Link href="/contact" className="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-bebas scroll-up delay-3">
                            Start Your Construction
                        </Link>
                    </div>
                    <div className="about-image-frame relative opacity-0 animate-[fadeInRight_0.5s_ease-out_1s_forwards]">
                        <img
                            src="/1.jpeg"
                            className="w-full h-[400px] object-cover rounded-xl"
                        />
                    </div>

                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-20 px-6 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                <div className='about-image-frame scroll-left delay-2'>
                    <img
                        src="/user.jpg"
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                <div>
                <h2 className="scroll-up delay-2 text-4xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                    Building Lives on a Foundation of Ethics and Vision.
                </h2>

                <p className="mb-4 scroll-up delay-3">
                    We bring this ethos to construction by delivering strategic solutions that empower our clients. He personally champions the company’s mission to rise up
                    distinctive value-based communities, believing that true success is measured by the positive social impact they leave behind. He guides our firm, driving the company towards a
                    global presence built on integrity, innovation, and uncompromising values.
                </p>

                <p className="italic scroll-up delay-4">
                    “True success is measured by the positive impact we leave behind.”
                </p>

                <div className="mt-6 scroll-up delay-5">
                    <h3 className="font-bebas text-2xl">Pr. Jay Kumar</h3>
                    <p className="text-sm">Founder & CEO, Petras Group</p>
                </div>
                </div>

            </div>
            </section>

            {/* VISION / MISSION / VALUES */}
            <section className="py-20 px-6">
            <div className="w-full max-w-7xl mx-auto lg:px-8">

                <h2 className="scroll-left delay-4 text-5xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Our Strength
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                {/* Vision */}
                <div className="p-6 border rounded-xl hover:shadow-lg transition scroll-left delay-4">
                    <h3 className="font-bebas text-2xl text-primary mb-2">
                    Vision
                    </h3>
                    <p className="text-sm">
                    To expand globally across major cities and create lasting value
                    in the real estate industry.
                    </p>
                </div>

                {/* Mission */}
                <div className="p-6 border rounded-xl hover:shadow-lg transition scroll-up delay-4">
                    <h3 className="font-bebas text-2xl text-primary mb-2">
                    Mission
                    </h3>
                    <p className="text-sm">
                    To empower clients with innovative construction solutions and
                    deliver excellence in every project.
                    </p>
                </div>

                {/* Core Values */}
                <div className="p-6 border rounded-xl hover:shadow-lg transition scroll-right delay-5">
                    <h3 className="font-bebas text-2xl text-primary mb-2">
                    Core Values
                    </h3>
                    <p className="text-sm">
                    Integrity, transparency, innovation, and commitment to quality.
                    </p>
                </div>

                </div>

            </div>
            </section>

            {/* TEAM */}
            <section className="py-20 px-6 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto lg:px-8">

                <h2 className="scroll-up delay-4 text-4xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Our Team
                </h2>

                <div className="grid md:grid-cols-5 gap-6">

                {[
                    { name: "Pr. Jay Kumar", role: "Founder & CEO" },
                    { name: "Er. Charles Samuel", role: "Civil Engineer" },
                    { name: "Ar. Glency Sharon", role: "Architect" },
                    { name: "Er. Selva Dura", role: "Site Engineer" },
                    { name: "Er. Vijay", role: "Site Engineer" },
                ].map((member, i) => (
                    <div key={i} className={`text-center scroll-left delay-${i}`}>

                    <div className="h-56 bg-gray-200 rounded-xl mb-4">
                        <img src="/user.jpg" alt="" className="w-full h-full object-cover rounded-xl"/>
                    </div>

                    <h3 className="font-bebas text-xl text-primary">
                        {member.name}
                    </h3>

                    <p className="text-sm">{member.role}</p>

                    </div>
                ))}

                </div>

            </div>
            </section>
        </div>
    </MainLayout>
  )
}