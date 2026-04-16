import { GraduationCap } from 'lucide-react'
import React from 'react'

function Card({ name, fullName, handleClick }) {
    return (
        <div className='flex ring-1 ring-white/30 w-64 flex-col items-center bg-white/10 rounded-3xl p-6 gap-6'>
            <div className="flex gap-6 items-center w-full">
                <div className='flex justify-center items-center rounded-2xl p-2 bg-black/30'>
                    <GraduationCap size={30} className='text-white' />
                </div>
                <p className='text-mauve-100/90 text-2xl font-bold'>{name}</p>
            </div>
            <p className='w-full text-center font-semibold text-wrap text-lg text-white/80'>{fullName}</p>
            <button className='w-full bg-white/80 rounded-2xl p-4 font-bold cursor-pointer text-indigo-950 group
            hover:bg-black/50 hover:text-white/80
            ease-in-out duration-250'
                onClick={handleClick}
            >
                Wybierz
            </button>
        </div>
    )
}

export default Card