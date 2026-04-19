import React from 'react'
import Answer from './Answer'
import { Sparkle } from 'lucide-react'


function Question({ title, answers, goodAnswer, checkAnswer }) {
    return (
        <div
            className='p-6 flex flex-col justify-center items-center w-xs md:w-xl xl:w-2xl mb-24 bg-white/10 rounded-3xl ring ring-white/20 gap-6'
        >
            {/* Questioin Title */}
            <div
                className='w-full rounded-t-3xl flex gap-6 items-center justify-center'
            >
                <div className='flex justify-center items-center self-start rounded-2xl p-2 bg-black/30'>
                    <Sparkle size={30} className='text-white' />
                </div>
                <h3 className='text-white text-xl font-semibold font-mono'>{title}</h3>
            </div>

            {/* Answers */}
            <div
                className='w-full flex flex-col md:grid grid-cols-2 grid-rows-2 gap-6'
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