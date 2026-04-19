import React from 'react'

function Answer({ text, checkAnswer, afterClicked }) {
    return (
        <button className={`p-3 w-full rounded-2xl font-semibold text-lg text-wrap font-mono text-black outline-none ${afterClicked} 
        `}
            onClick={checkAnswer}
        >
            {text}
        </button>
    )
}

export default Answer