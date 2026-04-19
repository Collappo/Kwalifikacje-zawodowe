import React from 'react'
import Answer from './Answer'
import { Sparkle } from 'lucide-react'


function Question({ questionId, title, answers, goodAnswer, checkAnswer, savedAnswer }) {
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
                    let afterClicked = `ring-1 ring-white/5 pointer bg-white/80 hover:bg-black/50 hover:text-white/80 ease-in-out duration-250`
                    if (savedAnswer.userAnswer != null) {
                        if (i === goodAnswer) {
                            afterClicked = `bg-emerald-400 ring ring-emerald-400 disabled`
                        }
                        else if (i != goodAnswer && i == savedAnswer.userAnswer) {
                            afterClicked = `bg-red-400 ring ring-red-500/50 disabled`
                        }

                        else {
                            afterClicked = `ring-1 ring-white/5 disabled bg-white/30`
                        }
                    }
                    return <Answer key={i} text={e.text} checkAnswer={() => checkAnswer(questionId, i, goodAnswer, savedAnswer)} afterClicked={afterClicked} />
                })}
            </div>
        </div>
    )
}

export default Question