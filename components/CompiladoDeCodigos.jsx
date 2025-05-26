import { useState } from "react";

export default function CompiladoDeCodigos () {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-wrap justify-center gap-20 px-4">
            <div className="flex flex-col bg-white w-72 p-4 shadow">
                <h3 className="text-center font-semibold">Compilado de Códigos</h3>
                <img src="/img/compiladodecodigos.png" className="h-60 w-full object-cover rounded my-2" />
                <p className="text-center text-sm text-black my-3">Códigos de aprendizagem em algumas linguagens</p>
                <button type="button" 
                onClick={() => setIsOpen(true)}
                className='mx-auto rounded-xl w-30 bg-gray-300 hover:scale-120 cursor-pointer'>Ver detalhes</button>
            </div>

            {isOpen && (
                <section className='fixed inset-0 w-screen h-screen flex items-center justify-center z-50'>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                        <div className='relative flex flex-col bg-white w-[90%] h-[80%] max-w-3xl p-6 rounded-xl shadow-lg'>
                            <h3 className="text-center font-semibold mb-2">Códigos de Aprendizagem</h3>
                            <img src="/img/compiladodecodigos.png" className="h-[50%] w-full object-cover rounded-2xl mb-2 mx-auto" />
                            <h3 className='mx-auto font-bold'>Link: </h3>
                            <a href='https://github.com/gxot/codigos-aprendizagem' className="mx-auto text-blue" target="_blank">https://github.com/gxot/codigos-aprendizagem</a>
                            <h3 className="text-center text-black font-bold mt-4">Descrição: </h3>
                            <p>Este pseudo projeto é apenas um compilado de alguns códigos que eu fiz enquanto estava aprendendo algumas linguagens de programação, como Java, Python e C#, nada muito aprofundado.</p>
                            <button type="button" onClick={() => setIsOpen(false)} className='mt-auto mx-auto rounded-xl w-20 bg-red-600 text-white hover:scale-120 cursor-pointer'>Fechar</button>
                        </div>
                </section>
            )}
        </div>
    );
}