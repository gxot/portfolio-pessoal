import HeaderProjetos from '@/components/HeaderProjetos';
import LeitorCSV from '@/components/LeitorCSV';



export default function Projects() {

    return(
        <div className="flex flex-col items-center gap-10 bg-gray-500 h-screen">
            <HeaderProjetos></HeaderProjetos>
            <LeitorCSV></LeitorCSV>
        </div>
    );
}