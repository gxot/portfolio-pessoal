import Link from 'next/link';

export default function Header () {
    return (
      <header className="w-full bg-gray-900 text-white shadow">
        <div className="flex flex-col max-w-4xl mx-auto px-4 py-7"> 
            <ul className="flex justify-center space-x-70 text-lg">
                <li className="hover:underline cursor-pointer">
                <Link href='/'>
                  Início
                </Link>
                </li>
                <li className="relative group cursor-pointer">
                <Link href='/projects'>
                      Projetos
                </Link>
                </li>
                <li className="hover:underline cursor-pointer">Sobre</li>
            </ul>
        </div>
      </header>
    );
  }
  