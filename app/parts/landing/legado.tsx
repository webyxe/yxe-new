import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

const Card = (props: any) => {
    return (
        <div className="md:flex flex-row-reverse h-full bg-blue-700 justify-center rounded-xl items-center p-4 sm:p-6 group bg-reports bg-center bg-contain bg-no-repeat">
            <div className="w-full md:w-1/2">
                <Image src={props.info.img} className="w-2/3 mx-auto object-cover aspect-square rounded-full border-2 border-blue-600 mb-4 " width={342} height={342} alt={props.info.title} />
            </div>
            <div className="w-full md:w-1/2">
                <div className="mb-4 text-center md:text-left">
                    <h4 className="text-lg sm:text-2xl text-orange-500">{props.info.title}</h4>
                    <h5 className="text-sm sm:text-xl text-white font-bold">{props.info.ano}</h5>
                    <p className="py-2 text-sm sm:text-xl text-white font-light">{props.info.content}</p>
                </div>
            </div>
        </div>
    );
}

const Legado = () => {
    const services = [
        {
            slug: 'wilson',
            title: 'Wilson Witzel',
            ano: '2018',
            content: 'Candidato a Governador do Rio de Janeiro',
            img: '/img/landing/p-wilson.png',
        },
        {
            slug: 'amorim',
            title: 'Rodrigo Amorim',
            ano: '2018',
            content: 'Candidato a Deputado Estadual',
            img: '/img/landing/p-amorim.png',
        },
        {
            slug: 'crivella',
            title: 'Crivella',
            ano: '2020',
            content: 'Candidato a Prefeito da Cidade do Rio de Janeiro',
            img: '/img/landing/p-crivella.png',
        },
        {
            slug: 'gutemberg',
            title: 'Gutemberg Fonseca',
            ano: '2022',
            content: 'Candidato a Deputado Federal',
            img: '/img/landing/p-gutemberg.png',
        },
    ];
    return (
        <>
            <section className="py-10 md:py-16 z-10 relative bg-blue-600 bg-legado bg-cover bg-center" id="legado">
                <div className="z-20 relative container mx-auto px-4">
                    <div className="mt-4 mb-10">
                        <h2 className="text-orange-500 py-4 text-center text-xl lg:text-3xl uppercase">Nosso Legado de Sucesso:</h2>
                        <p className="text-white text-center font-light text-sm lg:text-xl py-2">Ao longo de mais de 20 anos, tivemos o privilégio de trabalhar com uma ampla gama de candidatos, desde líderes locais até figuras de nível nacional. Nossa experiência diversificada nos permitiu construir cases sólidos de sucesso em todas as esferas da política.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 auto-rows-max gap-2 md:gap-10 items-center">
                        {
                            services.map(servicoSingle => (
                                <Card key={servicoSingle.slug} info={servicoSingle} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Legado;