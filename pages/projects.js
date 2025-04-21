import Header from '@/components/Header';
import LeitorCSV from '@/components/LeitorCSV';
import React, { useState } from 'react';



export default function Projects() {

    return(
        <div className="flex flex-col items-center gap-10 bg-gray-500 h-screen">
            <Header></Header>
            <LeitorCSV></LeitorCSV>
        </div>
    );
}