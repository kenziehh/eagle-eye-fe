import MascotHero from "@/assets/images/hero-mascot.png"
import HeroUSBLeft from "@/assets/images/hero-usb-left.png"
import HeroUSBRight from "@/assets/images/hero-usb-right.png"
import MaskHero from "@/assets/images/mask-hero.png"
import Navbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from "next/link"


export default function PaymentSuccessPage() {
    return (
        <div className='min-h-screen relative'>
            <Navbar />
            <main className='flex justify-center items-center flex-col gap-4 py-10 container'>
                <h1 className='text-3xl md:text-5xl'>Pembayaran Berhasil</h1>
                <div className='flex justify-center items-center py-18 relative w-full'>
                    <Image src={MascotHero} alt='' className='z-0' />
                    <Image src={MaskHero} alt='' className='absolute -top-20 -z-10 object-cover w-[80%]' />
                </div>
                <Link href={"/docs"}>
                    <Button variant={'outline'}>
                        Baca Dokumentasi API
                    </Button>
                </Link>

                <Image src={HeroUSBLeft} alt='' className='absolute left-0 z-10' />
                <Image src={HeroUSBRight} alt='' className='absolute right-0 z-10' />
            </main>
        </div>
    )
}
