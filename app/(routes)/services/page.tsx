
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices /><div className="p-6 grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 pt-10">

                <div className="max-w-[450px] mt-[7.5rem]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco soluciones web personalizadas con enfoque en backend utilizando PHP y MySQL, como sistemas POS, PMS, y gestión de citas. También diseño interfaces modernas y responsivas con HTML, CSS (SASS), JavaScript y Bootstrap, además de proporcionar soporte en redes y mantenimiento preventivo en equipos de cómputo.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;