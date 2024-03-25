export default function HeaderTitle ({titlePage}: any) {
    return (
        <div className="w-full bg-pre-header bg-cover bg-center h-[8rem] md:h-[10rem] lg:h-[12rem] bg-orange-600 flex justify-center items-center">
            <div className="container mx-auto text-center">
                <div className="text-center">
                    <h2 className="text-gray-100 text-xl md:text-3xl lg:text-4xl">{titlePage}</h2>
                </div>
            </div>
        </div>
    );
}