import React from 'react'
import Answer from './Answer'

function Question({ title, answers, goodAnswer, checkAnswer }) {
    return (
        <div
            className='flex flex-col justify-center items-center max-w-7xl w-8/10 mb-24 bg-white/5 rounded-3xl ring ring-white/20'
        >
            <div
                className='w-full bg-white/10 rounded-t-3xl text-center p-6'
            >
                <h3 className='text-white text-xl font-semibold font-mono'>{title}</h3>
            </div>
            <div
                className='w-full grid grid-cols-2 grid-rows-2 p-6 gap-6'
            >
                <Answer text={answers[0]} checkAnswer={() => checkAnswer(0, goodAnswer)} />
                <Answer text={answers[1]} checkAnswer={() => checkAnswer(1, goodAnswer)} />
                <Answer text={answers[2]} checkAnswer={() => checkAnswer(2, goodAnswer)} />
                <Answer text={answers[3]} checkAnswer={() => checkAnswer(3, goodAnswer)} />
            </div>
        </div>
    )
}

export default Question