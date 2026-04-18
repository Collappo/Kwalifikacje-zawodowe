import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { BookMarked, GraduationCap } from 'lucide-react'
import React, { useRef } from 'react'

function Header() {
    const titleRef = useRef(null)
    const linkRef = useRef(null)

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
        }, 0.4);

        gsap.from(linkRef.current, {
            autoAlpha: 0,
            opacity: 1,
            y: 50,
            ease: "power3.out",
            duration: 1,
        }
        )

        gsap.from("header", {
            autoAlpha: 0,
            opacity: 1,
            y: 50,
            ease: "expo.out",
            duration: 1,
        })
    }, [])

    return (
        <header className='z-50 md:mx-auto max-w-7xl md:w-9/10 bg-white/10 backdrop-blur-md ring ring-white/20 rounded-3xl flex justify-between items-center fixed mt-4 p-4 md:p-6 top-0 gap-8'>
            <div className='flex gap-4 items-center justify-center'>
                <GraduationCap size={40} />
                <h2 ref={titleRef} className='font-bold text-2xl tracking-wide py-0'>Kwalifikacje Zawodowe</h2>
            </div>
            <a ref={linkRef} href="https://github.com/Collappo/Kwalifikacje-zawodowe"
                className='flex justify-center items-center gap-3 rounded-2xl bg-white/80 py-2 px-2 md:px-4 hover:bg-white/10 ease-in-out duration-250 transform-gpu group'>
                < BookMarked className='text-black group-hover:text-white/80' size={20} />
                <span className='font-mono font-bold text-black text-md group-hover:text-white/80'>GitHub</span>
            </a>
        </header>
    )
}

export default Header