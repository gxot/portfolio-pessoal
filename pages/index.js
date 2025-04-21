import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Contatos from "@/components/Contatos";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-600">
      <Header />
      <div className="flex flex-col max-w-xl mx-auto mt-10 items-center justify-center text-center">
        <img src="/img/eu.png" className="w-70 h-70 mx-auto object-cover rounded-full shadow-xl"></img>
        <h1 className="font-bold text-white text-4xl mx-auto pt-5 shadow-xl">Gustavo Henrique Schott</h1>
        <h3 className="text-white font-semibold text-sm mx-auto pt-3">Estudante de Sistemas de Informação (PUCPR) com 20 anos de idade e foco em backend e ciência de dados. Tenho conhecimento em Python  e Java, e estou aprendendo desenvolvimento web com Next.js e Tailwind CSS. Estou em busca da minha primeira oportunidade na área de T.I</h3>
      </div>
      <Contatos />
      <Languages />
    </main>
  );
}
