
import { FaJava, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";


export default function Languages() {
  return (
    <section className="my-5 w-80 h-50 mx-auto rounded-xl text-white">
      <h1 className="font-bold text-center text-2xl">Linguagens Favoritas</h1>
      <div className="flex justify-center gap-10 mt-5">
        <div className="flex flex-col items-center">
          <FaJava className="w-25 h-25 text-red-600" />
          <h3 className="text-center mt-3 font-bold">Java</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="w-25 h-25 text-blue-400"/>
          <h3 className="text-center mt-3 font-bold">Python</h3>
        </div>
        <div className="flex flex-col items-center">
          <RiNextjsFill className="w-25 h-25 text-black"/>
          <h3 className="text-center mt-3 font-bold">Next.js</h3>
        </div>
      </div>
    </section>
  );
}