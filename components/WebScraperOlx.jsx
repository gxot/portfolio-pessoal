import { useState } from "react";

export default function LeitorCSV() {
    let [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex flex-wrap justify-center gap-20 px-4">
            <div className="flex flex-col bg-white w-72 p-4 shadow">
                <h3 className="text-center font-semibold">Web Scraper OLX</h3>
                <img src="/img/webscraperolx.png" className="h-60 w-full object-cover rounded my-2" />
                <p className="text-center text-sm text-black my-3">Web Scraper para produtos da OLX utilizando Selenium</p>
                <button type="button" 
                onClick={() => setIsOpen(true)}
                className='mx-auto rounded-xl w-30 bg-gray-300 hover:scale-120 cursor-pointer'>Ver detalhes</button>
            </div>

            {isOpen && (
                <section className='fixed inset-0 w-screen h-screen flex items-center justify-center z-50'>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                        <div className='relative flex flex-col bg-white w-[90%] h-[80%] max-w-3xl p-6 rounded-xl shadow-lg'>
                            <h3 className="text-center font-semibold mb-2">Web Scraper OLX</h3>
                            <img src="/img/leitorcsv.png" className="h-[50%] w-full object-cover rounded-2xl mb-2 mx-auto" />
                            <h3 className='mx-auto font-bold'>Link: </h3>
                            <a href='https://github.com/gxot/web-scraper-olx' className="mx-auto" target="_blank">https://github.com/gxot/web-scraper-olx</a>
                            <h3 className="text-center text-black font-bold mt-4">Descrição: </h3>
                            <p>Esse projeto une automação com web e dados — três coisas que eu curto bastante. Ele permite buscar produtos na OLX digitando o nome e escolhendo o estado. O sistema usa Selenium pra fazer o scraping dos anúncios, organiza tudo com Pandas e mostra os resultados em uma interface feita com Next.js e Tailwind CSS. Cada item tem nome, preço e link direto pro anúncio.</p>
                            <button type="button" onClick={() => setIsOpen(false)} className='mt-auto mx-auto rounded-xl w-20 bg-red-600 text-white hover:scale-120 cursor-pointer'>Fechar</button>
                        </div>
                </section>
            )}
        </div>
    );
}