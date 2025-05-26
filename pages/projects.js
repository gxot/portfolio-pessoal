import HeaderProjetos from '@/components/HeaderProjetos';
import LeitorCSV from '@/components/LeitorCSV';
import WebScraperOlx from '@/components/WebScraperOlx';
import CompiladoDeCodigos from '@/components/CompiladoDeCodigos';



export default function Projects() {

    return(
        <div className="flex flex-col items-center gap-10 bg-gray-500 h-screen">
            <HeaderProjetos></HeaderProjetos>
            <div className='flex'>
                <LeitorCSV></LeitorCSV>
                <WebScraperOlx></WebScraperOlx>
                <CompiladoDeCodigos></CompiladoDeCodigos>
            </div>
            
        </div>
    );
}