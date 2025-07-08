"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { label: "About Us", to: "about" },
        { label: "How It Works", to: "how" },
        { label: "Pricing", to: "pricing" },
        { label: "FAQ", to: "faq" },
        { label: "Demo App", to: "demo" },
    ]

    return (
        <nav className='container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between py-6 relative'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
                <ScrollLink
                    key={"hero"}
                    to={"hero"}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="text-primary"
                    className="cursor-pointer hover:text-primary transition-colors"
                >
                    <Image src={"/images/logo-nav.png"} alt='Logo' width={180} height={60} />
                </ScrollLink>
                <div className='lg:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className='hidden lg:flex items-center gap-12'>
                {navLinks.map(link => (
                    <ScrollLink
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={0}
                        spy={true}
                        activeClass="text-primary"
                        className="cursor-pointer hover:text-primary transition-colors"
                    >
                        {link.label}
                    </ScrollLink>
                ))}
            </div>

            <Button variant="outline" className="hidden lg:flex">
                Login
                <LogOut className='ml-2 text-gradient-start' />
            </Button>

            {/* Mobile menu with animation */}
            <div className={`
        lg:hidden overflow-hidden w-full transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
      `}>
                <div className='flex flex-col gap-4 px-6 py-4 shadow-md rounded-md'>
                    {navLinks.map(link => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-primary"
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer text-base hover:text-primary transition-colors"
                        >
                            {link.label}
                        </ScrollLink>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                        Login
                        <LogOut className='ml-2 text-gradient-start' />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
