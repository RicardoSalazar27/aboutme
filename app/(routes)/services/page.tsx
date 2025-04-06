
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Principalmente ofrezco soluciones como sistemas web personalizados con enfoque en backend utilizando PHP y MySQL. Creo soluciones eficientes, seguras y adaptadas a las necesidades de cada cliente, como sistemas POS (punto de venta), PMS, gestión de citas o reservaciones, entre otros. Además, diseño interfaces modernas y responsivas usando HTML, CSS (con SASS), JavaScript y Bootstrap, ofreciendo plataformas completas y funcionales, ademas de soporte de redes y mantenimiento preventivo en equipos de computo.</p>
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