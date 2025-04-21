import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header () {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* BOTÃO MOBILE (sem ocupar espaço no layout) */}
      <div className="md:hidden pointer-events-none fixed top-4 left-4 z-50">
        <button
          className="pointer-events-auto bg-gray-900 text-white p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* NAVBAR DESKTOP */}
      <div className="w-full bg-gray-900 text-white shadow">
        <div className="hidden md:flex flex-col max-w-4xl mx-auto px-4 py-7"> 
          <ul className="md:flex justify-center space-x-10 text-lg">
            <li className="hover:underline cursor-pointer">
              <Link href='/'>Início</Link>
            </li>
            <li className="relative group cursor-pointer">
              <Link href='/projects'>Projetos</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MENU LATERAL MOBILE */}
      {isOpen && (
        <div className='md:hidden fixed top-0 left-0 w-35 h-full z-40 bg-gray-900 pt-30 flex flex-col px-6'>
          <ul className="text-white space-y-6 text-xl">
            <li className="hover:underline cursor-pointer">
              <Link href='/'>Início</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href='/projects'>Projetos</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
