import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { GraduationCap } from 'lucide-react'
import React, { useRef } from 'react'

function Header() {
    const titleRef = useRef(null)

    useGSAP(() => {
        const splitTitle = new SplitText(titleRef.current, { type: "chars,words,lines", linesClass: "clip-text" })

        gsap.fromTo(splitTitle.chars, {
            autoAlpha: 0,
            yPercent: 50
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
                each: 0.02,
            }
        }, 0.2);
    }, [])

    return (
        <header className='mx-auto max-w-7xl md:w-full flex justify-between items-center fixed p-6 top-0'>
            <div className='flex gap-4 items-center justify-center'>
                <GraduationCap size={40} />
                <h2 ref={titleRef} className='font-bold text-2xl tracking-wide py-0'>Kwalifikacje Zawodowe</h2>
            </div>
        </header>
    )
}

export default Header