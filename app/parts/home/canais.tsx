import Image from "next/image";

const Canais = () => {
    return (
        <section id="agencia" className="bg-blue-600 py-20">
            <div className="container mx-auto px-4">
                <div className="flex">
                    <div className="w-1/2">
                        <h2 className="text-xl md:text-4xl text-center text-white font-bold">Somos uma agência</h2>
                        <h2 className="text-xl md:text-4xl text-center uppercase text-orange-500 font-bold -rotate-3">Certificada</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/partner.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/meta.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/tiktok.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/cenp.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/ancine.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/certificados/fenapro.png" width={200} height={160} className="w-3/4" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[2px] bg-white rounded-full"></div>
                    <div className="w-1/2">

                        <h2 className="text-xl md:text-4xl text-center text-white font-bold">Parceira dos principais</h2>
                        <h2 className="text-xl md:text-4xl text-center uppercase text-orange-500 font-bold -rotate-3">Veículos de Comunicação</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/globo.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/record.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/sbt.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/band.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/tupi.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                            <div className="p-8 flex justify-center items-center">
                                <Image src="/img/canais/redetv.png" width={200} height={160} className="w-1/2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Canais;