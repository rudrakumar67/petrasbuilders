import MainLayout from "../layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Services() {
    return (
        <MainLayout>
            <Head title="Services" />
            {/* HERO */}
            <section className="relative h-[60vh] flex items-center text-white">
                <div className='w-full max-w-7xl mx-auto lg:px-8'>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/KITCHEN_2.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10">
                        <h1 className="font-bebas text-6xl">Services</h1>
                        <p className="text-lg mt-2">Under Development</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}