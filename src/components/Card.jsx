import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { GraduationCap } from 'lucide-react'

gsap.registerPlugin(useGSAP, SplitText)

function Card({ name, fullName, available, handleClick }) {
    useGSAP(() => {
        const split = SplitText.create(".full-name", { type: "chars" })

        gsap.from(split.chars, {
            duration: 2,
            y: 30,
            // rotation: "random(-80, 90)",
            stagger: 0.008,
            opacity: 0,
            ease: "expo.inOut",
            delay: 1
        })
    })

    return (
        <div className='flex ring-1 ring-white/30 w-64 flex-col items-stretch bg-white/10 rounded-3xl p-6 gap-6'>
            <div className="flex gap-6 items-center w-full">
                <div className='flex justify-center items-center rounded-2xl p-2 bg-black/30'>
                    <GraduationCap size={30} className='text-white' />
                </div>
                <p className='text-mauve-100/90 text-2xl font-bold tracking-tight name'>{name}</p>
            </div>
            <p className='w-full text-center font-semibold text-wrap text-lg text-white/90 full-name'>{fullName}</p>
            <button className={`w-full mt-auto text-center rounded-2xl p-4 font-bold text-indigo-950
            ${available ? 'hover:bg-black/50 hover:text-white/80 ease-in-out duration-250 bg-white/80 cursor-pointer' : 'bg-white/50'}
            
            `}
                onClick={available ? handleClick : undefined}
                disabled={!available}

            >
                Wybierz
            </button>
        </div>
    )
}

export default Card