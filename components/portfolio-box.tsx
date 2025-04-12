import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="p-3 border border-teal-50 rounded-xl md:p-2 md:text-sm"
        >
            <h3 className="mb-3 text-lg md:text-base">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200}
                height={200}
                className="w-full rounded-2xl h-auto md:w-[160px]"
            />

            <div className="flex flex-wrap gap-3 mt-4 md:mt-3">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="px-3 py-1 text-sm transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 md:text-xs md:px-2 md:py-1"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="px-3 py-1 text-sm transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 md:text-xs md:px-2 md:py-1"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox