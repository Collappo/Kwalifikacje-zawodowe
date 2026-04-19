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
                className='w-full rounded-t-3xl flex gap-6 items-center justify-between'
            >
                <div className='flex justify-center items-center left-0 self-start rounded-2xl p-2 bg-black/30'>
                    <Sparkle size={30} className='text-white' />
                </div>
                <h3 className='text-white text-xl font-semibold font-mono w-9/10'>{title}</h3>
            </div>

            {/* Answers */}
            <div
                className='w-full flex flex-col md:grid grid-cols-2 grid-rows-2 gap-6'
            >
                {answers.map((e, i) => {
                    return <Answer text={e.text} checkAnswer={() => checkAnswer(i, goodAnswer)} />
                })}
            </div>
        </div>
    )
}

export default Question