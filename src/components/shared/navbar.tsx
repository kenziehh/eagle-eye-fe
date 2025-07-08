import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className='container flex items-center justify-between py-9 '>
            <Image src={"/images/logo-nav.png"} alt='' width={180} height={60} />
            <div className='flex items-center gap-12'>
                <Link href={"/"} className=''>About Us</Link>
                <Link href={"/"} className=''>How It Works</Link>
                <Link href={"/"} className=''>Pricing</Link>
                <Link href={"/"} className=''>FAQ</Link>
                <Link href={"/"} className=''>Demo App</Link>
            </div>
            <Button variant={"outline"}  > 
                Login
                <LogOut className='text-gradient-start ' />
            </Button>
        </nav>
    )
}
