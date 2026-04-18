import React, { useRef, useState } from 'react'
import data from '../data/data'
import Card from './Card'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

function Main() {
    const [questions, setQuestions] = useState([])
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
        console.log(questions)
    }

    function shuffle40Questions(questions) {
        const numberOfQuestions = 40
        let questionsId = new Set()
        while (questionsId.size < numberOfQuestions) {
            const number = Math.floor(Math.random() * questions.length)
            if (questionsId.has(number)) { continue }
            questionsId.add(number)
        }
        questionsId = new Set(questionsId)
        console.log(questionsId)
        return questions.filter(e => (questionsId.has(e.id)))
    }

    return (
        <div className='mx-auto max-w-7xl md:w-full flex flex-col justify-start p-8 mt-24 gap-12 scroll-auto'>
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
                        {shuffle40Questions(questions).map((e, i) => (
                            <div>
                                <p>{i + 1}. {e.title}</p>
                            </div>
                        ))}
                    </div>
                </>
            }

        </div>
    )
}

export default Main