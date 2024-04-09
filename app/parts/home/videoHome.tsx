import Image from "next/image";

const VideoHome = () => {
    return (
        <section id="portfolio" className="bg-gray-900 py-14">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-xl md:text-4xl pb-6 text-center text-white font-bold">Confira os cases do nosso time </h2>
                <div>
                    <iframe 
                    className="aspect-video w-full rounded-3xl"
                    src="https://www.youtube.com/embed/vTmCEi-7Nfk?si=GeKnF4PW6hfWdLJ6?showinfo=0&loop=1&rel=0&modestbranding=1&controls=0&fs=1"
                    title="YouTube video player"
                    frameBorder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}
export default VideoHome;