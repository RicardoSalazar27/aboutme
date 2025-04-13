
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,Facebook,Instagram, Phone, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!", // Aquí agregarás el enlace de YouTube más tarde
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/edgar-ricardo-salazar-sesenes-676225284",
    },
    {
        id: 3,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/share/18ZFh6f2Hx/",
    },
    {
        id: 4,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/ricardo_sesenes07",
    },
    {
        id: 5,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "https://wa.link/dloqdz",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Coding Cup",
        subtitle: "Coding Cup TecNM",
        description: "Participación destacada en el concurso nacional de programación Coding Cup TecNM, teniendo como sede Tecnológico Superior del Sur de Guanajuato con el equipo Jar. Un evento que permitió demostrar habilidades en resolución de problemas y trabajo en equipo.",
        date: "Oct 2019",
    },
    {
        id: 2,
        title: "RetoDevHome",
        subtitle: "Tecnológico Superior de Poza Rica",
        description: "Durante el 3er semestre de la carrera de Ingeniería en Sistemas Computacionales, el equipo 'Print('Ya ganamos')' se destacó al obtener el primer lugar en la categoría B, en la primera edición del concurso de programación 'RetoDevHome'.",
        date: "Nov 2020",
    },
    {
        id: 3,
        title: "IC3 Spark Certification",
        subtitle: "Certiport",
        description: "Certificación completada satisfactoriamente en IC3 GS5 Spark Certification, un programa que valida competencias en el uso de la tecnología, especialmente en el ámbito de las computadoras y redes.",
        date: "Feb 2021",
    },
    {
        id:4,
        title: "Feria Anual de Proyectos del Tecnológico de Poza Rica",
        subtitle: "Tecnológico de Poza Rica",
        description: "Como parte del proyecto de 5to semestre, desarrollamos una landing page para la pizzería 'Titos Pizza', con el objetivo de aumentar su exposición y posicionamiento en la región norte de Veracruz. La página sirvió como una herramienta clave para mejorar su presencia online y atraer a nuevos clientes.",
        date: "Jul 2022",
    },
    {
        id: 5,
        title: "NDG Linux Unhatched Course Completion",
        subtitle: "Cisco Networking Academy",
        description: "Completé el curso NDG Linux Unhatched, que proporciona una introducción a la línea de comandos de Linux. Este curso es fundamental para cualquier profesional de IT y me permitió obtener una comprensión sólida de Linux, un sistema operativo clave en la industria.",
        date: "Ag 2023",
    },
    {
        id: 6,
        title: "Residencias Profesionales",
        subtitle: "CIBA - IPN Tlaxcala",
        description: "Desarrollo de una plataforma con una interfaz gráfica intuitiva para facilitar el análisis de grandes volúmenes de datos biológicos, utilizando herramientas bioinformáticas. Esta experiencia me ha permitido aplicar mis conocimientos en desarrollo de software y análisis de datos.",
        date: "Ene 2024",
    },
    {
        id: 7,
        title: "JavaScript Essentials 1",
        subtitle: "Cisco Networking Academy with OpenEDG JavaScript Institute",
        description: "Completé con éxito la credencial de nivel estudiante en el curso 'JavaScript Essentials 1', proporcionado por Cisco Networking Academy en colaboración con OpenEDG JavaScript Institute. Este curso me permitió adquirir una base sólida en JavaScript, un lenguaje clave para el desarrollo web.",
        date: "Feb 2024",
    },
    {
        id: 8,
        title: "Graduación",
        subtitle: "Tecnológico Superior de Poza Rica",
        description: "Graduación de la generación 2019-2024 como egresado de la carrera de Ingeniería en Sistemas, con especialidad en Desarrollo de Software. Este hito marca el inicio de mi camino profesional como desarrollador de software.",
        date: "Jun 2024",
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

  export const serviceData = [
    {
      icon: <Computer />,
      title: "Desarrollo web",
      description: "Creación de sistemas web como POS, PMS o reservas, con tecnologías modernas como PHP, MySQL y JavaScript.",
    },
    {
      icon: <Pencil />,
      title: "Interfaces web",
      description: "Diseño de interfaces funcionales y responsivas con HTML, CSS (SASS), JavaScript y Bootstrap.",
    },
    {
      icon: <Crop />,
      title: "Sistemas a medida",
      description: "Soluciones personalizadas para gestión administrativa, automatización y control interno.",
    },
    {
      icon: <Rocket />,
      title: "Redes e infraestructura",
      description: "Instalación de redes, access points, cámaras IP y soporte técnico en sistemas informáticos.",
    },
    {
      icon: <Book />,
      title: "Mantenimiento técnico",
      description: "Limpieza, formateo e instalación de software para equipos de cómputo.",
    },
  ];

export const dataPortfolio = [
    {
        id: 1,
        title: "DevWebCamp",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/devwebcamp",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "UpTask",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/uptask-mvc-php",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "AppSalon",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/app-salon-php-mvc",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "BienesRaices",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/bienesRaices",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Tito's Pizza",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/Titos-Pizza",
        urlDemo: "https://titospizza.netlify.app",
    },
    {
        id: 6,
        title: "BioR Insights",
        image: "/image-6.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/BioR-Insights",
        urlDemo: "https://biorinsghts.shinyapps.io/bior_insights/",
    },
    {
        id: 7,
        title: "Festival Musical",
        image: "/image-7.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/FestivalMusical",
        urlDemo: "https://festival-musicalrock.netlify.app",
    },
    {
        id: 8,
        title: "BlogCafe",
        image: "/image-8.jpg",
        urlGithub: "https://github.com/RicardoSalazar27/Blog-Cafe",
        urlDemo: "https://blogg-decafe.netlify.app",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Valentin Galvan",
        description:
            "Trabajar juntos fue una gran experiencia. Siempre hubo buena comunicación y el resultado final fue justo lo que necesitábamos. ¡Muy contento con el trabajo!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Miguel Villalobos",
        description:
            "Me entregaron justo lo que buscaba. La plataforma es clara, útil y me ha ayudado mucho en mi trabajo. Muy profesionales y comprometidos desde el inicio.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Olga Adame",
        description:
            "Quedé encantada con la página. Ahora la gente conoce mi pizzería, ven nuestras promociones y cada vez llegan más clientes. ¡Muy agradecida!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Gael Guerrero",
        description:
            "¡He trabajado con Edgar en varios proyectos y siempre ha mostrado un gran compromiso. Tiene una forma de liderar que motiva y hace que todo el equipo dé lo mejor de sí. Es alguien en quien se puede confiar para sacar adelante cualquier reto.",
        imageUrl: "/profile4.png",
    },
    // {
    //     id: 5,
    //     name: "Mujer",
    //     description:
    //         "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    //     imageUrl: "/profile5.png",
    // },
    // {
    //     id: 6,
    //     name: "Maestra Mujer",
    //     description:
    //         "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    //     imageUrl: "/profile6.png",
    // },
];
