"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 ">
            {/* <div className="z-20 grid items-center h-full p-6 pt-32 md:pt-20 md:py-0 md:grid-cols-2"> */}
                <Image src="/home-4.png" priority width="600" height="600" alt="Profile pic"></Image>

                <div className="flex flex-col jusitfy-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-right text-center md:text-left md:text-4xl md:mb-10">Si puedes imaginarlo, <br></br>
                        <TypeAnimation
                            sequence = {[
                                "puedes programarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                        </h1>
                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            Como desarrollador full stack e ingeniero en sistemas, me especializo en construir soluciones web completas que combinan rendimiento, escalabilidad y una experiencia de usuario sólida de principio a fin.
                        </p>
                        <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://wa.link/dloqdz"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;