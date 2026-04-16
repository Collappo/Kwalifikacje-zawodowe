import { GraduationCap } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header className='mx-auto max-w-7xl md:w-full flex justify-between items-center fixed p-6 top-0'>
            <div className='flex gap-4 items-center justify-center'>
                <GraduationCap size={40} />
                <h2 className='font-bold text-2xl'>Kwalifikacje Zawodowe</h2>
            </div>
        </header>
    )
}

export default Header