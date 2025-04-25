
import { FaJava, FaPython, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";



export default function Languages() {
  return (
    <section className="my-5 w-80 h-50 mx-auto rounded-xl text-white">
      <h1 className="font-bold text-center text-2xl">Tecnologias Favoritas</h1>
      <div className="flex justify-center gap-10 mt-5">
        <div className="flex flex-col items-center">
          <FaPython className="w-25 h-25 text-blue-400"/>
          <h3 className="text-center mt-3 font-bold">Python</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="w-25 h-25 text-red-600" />
          <h3 className="text-center mt-3 font-bold">Java</h3>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoJavascript className="w-25 h-25 text-yellow-300"/>
          <h3 className="text-center mt-3 font-bold">Javascript</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="w-25 h-25 text-orange-400"/>
          <h3 className="text-center mt-3 font-bold">HTML</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="w-25 h-25 text-blue-500"/>
          <h3 className="text-center mt-3 font-bold">CSS</h3>
        </div>
      </div>
    </section>
  );
}