import React from 'react'

function Answer({ text, checkAnswer }) {
    return (
        <button className={`p-4 w-full ring-1 ring-white/5 rounded-2xl text-black outline-none pointer font-semibold text-lg text-wrap
        bg-white/80 hover:bg-black/50 hover:text-white/80 ease-in-out duration-250
        `}>
            {text}
        </button>
    )
}

export default Answer