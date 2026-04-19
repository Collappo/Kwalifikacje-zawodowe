import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { GraduationCap } from 'lucide-react'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP, SplitText)

function Card({ name, fullName, available, handleClick }) {
    const fullNameRef = useRef()
    const cardRef = useRef()

    useGSAP(() => {
        const splitText = new SplitText(fullNameRef.current, { type: "chars,words,lines", linesClass: "clip-text" })

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
        }, 1.6);

        gsap.from(cardRef.current, {
            autoAlpha: 0,
            opacity: 1,
            y: 50,
            ease: "power3.out",
            duration: 1,
        }, 1.3)

    }, [])

    return (
        <div ref={cardRef} className={`flex ring-1 ring-white/30 w-xs md:w-64 flex-col items-stretch bg-white/10 rounded-3xl p-6 gap-6 transform-gpu`}>
            <div className="flex gap-6 items-center w-full">
                <div className='flex justify-center items-center rounded-2xl p-2 bg-black/30'>
                    <GraduationCap size={30} className='text-white' />
                </div>
                <p className='text-mauve-100/90 text-2xl font-bold tracking-tight name'>{name}</p>
            </div>
            <p ref={fullNameRef} className='w-full text-center font-semibold text-wrap text-lg text-white/90'>{fullName}</p>
            <button className={`w-full mt-auto text-center rounded-2xl p-4 font-bold text-black outline-none ring-1 ring-white/5
            ${available ? 'hover:bg-black/50 hover:text-white/80 ease-in-out duration-250 bg-white/80 pointer' : 'bg-white/50 disabled'}
            
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