import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return( 
        <>
            <TransitionPage></TransitionPage>
            <ContainerPage>
                <Avatar></Avatar>
                <h1 className="text-2xl leading-tight text-center md:text-exl md:mt-10">Toda mi{' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices/>
                <TimeLine></TimeLine>
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;