import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contatos(){
    return(
        <section className="text-center text-white pt-5 flex justify-center">
            <div >
                <h1 className="font-bold text-2xl pb-5">Redes</h1>
                <div className="flex justify-center gap-3">
                    <div>
                    <a href="https://github.com/gxot" target="_blank">
                    <FaGithub className="w-15 h-15 text-black hover:scale-110"/>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/gustavo-h-schott-3996612bb/" target="_blank">
                    <FaLinkedin className="w-15 h-15 text-[#0077B5] hover:scale-110" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}