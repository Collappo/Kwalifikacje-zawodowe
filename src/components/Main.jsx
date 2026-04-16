import React, { useState } from 'react'
import data from '../data/data'
import Card from './Card'

function Main() {
    const [set, setSet] = useState([])

    function choiceQualification(questions) {
        setSet(questions)
    }

    return (
        <div className='mx-auto max-w-7xl md:w-full flex flex-col p-8 mt-24 md:mt-0 gap-12 scroll-auto'>
            <h3 className='text-3xl font-semibold tracking-tight text-balance text-white'>Wybierz kwalifikacje</h3>
            <div className=
                'flex flex-col items-center flex-wrap md:flex-row gap-6 px-6'
            >
                {data.map(e => (
                    <Card name={e.name} fullName={e.fullName} handleClick={() => { choiceQualification(e.questions) }} />
                ))}
            </div>
        </div>
    )
}

export default Main