import React, { useEffect, useRef, useState } from 'react'
import data from '../data/data'
import Card from './Card'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Question from './Question'
import ScoreStatus from './ScoreStatus'

function Main() {
    const [questions, setQuestions] = useState([])
    const [shuffledQuestions, setShuffledQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [points, setPoints] = useState(0)
    const textRef = useRef()

    useGSAP(() => {
        const splitText = new SplitText(textRef.current, { type: "chars,words,lines", linesClass: "clip-text" })

        gsap.fromTo(splitText.lines, {
            autoAlpha: 0,
            yPercent: 50
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
                each: 0.1,
            }
        }, 1);

        const hideMenu = () => {
            gsap.to(splitText.lines, {
                autoAlpha: 0,
                yPercent: 50,
                duration: 1,
                ease: "power3.out",
                stagger: {
                    each: 0.1,
                }
            }, 1);
        }
    })


    function choiceQualification(questions) {
        setQuestions(questions)
    }

    function shuffle40Questions(questions) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 40)
    }

    function checkAnswer(id, answer, goodAnswer, savedAnswer) {
        if (savedAnswer.userAnswer != null) return;
        setAnswers(prev => (prev.map(e => (e.id === id ? { ...e, userAnswer: answer } : e))))
        if (answer === goodAnswer) {
            setPoints(prev => prev + 1)
            return true;
        }
        return false
    }

    useEffect(() => {
        const shuffled = shuffle40Questions(questions)
        setAnswers(shuffled.map(e => (
            {
                id: e.id,
                userAnswer: null
            }
        )))
        setShuffledQuestions(shuffled)
    }, [questions])

    return (
        <div className='mx-auto max-w-7xl md:w-full flex flex-col justify-start items-center p-8 mt-32 md:mt-24 gap-12 scroll-auto'>
            {(questions.length === 0) ?
                <>
                    <h3 ref={textRef} className='text-3xl font-semibold tracking-tight text-balance text-white py-0'>Wybierz kwalifikacje</h3>
                    <div className=
                        'flex flex-col flex-wrap md:flex-row gap-6 px-6'
                    >
                        {data.map(e => (
                            <Card key={e.name} id={e.name} name={e.name} fullName={e.fullName} available={e.available} handleClick={() => { choiceQualification(e.questions) }} />
                        ))}
                    </div>
                </>

                :
                <>
                    <h3 className='text-3xl font-semibold tracking-tight text-balance text-white py-0'>Odpowiedz na 40 pytań:</h3>
                    <div className='flex flex-col justify-start items-center'>
                        {shuffledQuestions.map((e, i) => {
                            let savedAnswer = answers.filter(a => a.id === e.id)[0]
                            return <Question key={e.id} questionId={e.id} number={i + 1} title={e.title} answers={e.answers} goodAnswer={e.goodAnswer} checkAnswer={checkAnswer} savedAnswer={savedAnswer} />
                        })}
                    </div>
                    <ScoreStatus doneQuestions={(answers.filter(e => e.userAnswer != null)).length.toString()} questionsAmount={shuffledQuestions.length.toString()} points={points} />
                </>
            }

        </div>
    )
}

export default Main