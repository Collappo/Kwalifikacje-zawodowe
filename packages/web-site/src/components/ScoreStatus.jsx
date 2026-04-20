import { ClipboardPen, Percent } from 'lucide-react'
import React from 'react'

function ScoreStatus({ doneQuestions, questionsAmount, points }) {
    return (
        <div className='z-40 bg-white/10 backdrop-blur-xl ring ring-white/30 rounded-3xl fixed flex justify-between items-center py-3 px-6 gap-10 bottom-12 shadow-black shadow-2xl'>
            <div className='flex items-center justify-center gap-3'>
                <div className='flex justify-items-center rounded-xl bg-black/30 ring ring-black/30 p-2'>
                    <ClipboardPen size={27} />
                </div>
                <p className='font-bold text-2xl text-shadow'>
                    {doneQuestions}/{questionsAmount}
                </p>
            </div>
            <div className='items-center'>
                <p className={`font-bold text-2xl text-shadow ${(points / doneQuestions) >= 0.5 ? "text-emerald-400" : "text-yellow-400"}`}>
                    {doneQuestions > 0 ? ((points / doneQuestions) * 100).toFixed() : ""}%
                </p>
            </div>
        </div>
    )
}

export default ScoreStatus