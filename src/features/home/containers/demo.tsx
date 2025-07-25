import React from 'react'
import PlayStore from "@/assets/images/google-play.png"
import AppStore from "@/assets/images/app-store.png"
import USBLeft from "@/assets/images/demo-usb-left.png"
import USBBottom from "@/assets/images/demo-usb-bottom.png"
import DemoSmartphone from "@/assets/images/demo.png"
import BackgroundDemo from "@/assets/images/background-demo.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Demo() {
    return (
        <section id='demo' className='bg-[#3A3368] py-12 md:py-28 relative'>
            <Image src={USBLeft} alt='USB Left' className='absolute left-0 top-40 z-10' />
            <Image src={USBBottom} alt='USB Bottom' className='absolute right-[10%] bottom-0 z-20' />

            <div className='flex justify-center items-center gap-8 flex-col'>
                <h1 className='text-[24px] md:text-[52px] font-bold'>
                    TRY THE <span className='text-[#993AFF]'>EAGLE EYE DEMO</span>
                </h1>
                <p className='text-xl md:text-3xl max-w-[800px] text-center'>
                    See how EagleEye detects deepfakes and verifies identity with AI and blockchain in just seconds.
                </p>
                <div className='flex gap-8 items-center'>
                    {/* <Image src={PlayStore} alt='Google Play Store' className='' />
                    <Image src={AppStore} alt='Apple App Store' className='' /> */}
                    <a rel='noopener noreferrer' target='_blank' href="https://drive.google.com/drive/folders/1xMDMyvm9WfrjVkrYoD_BXdfoHWkqYKQn">
                       <Button variant="outline" className="bg-transparent py-6 px-8">
                            Download Demo .apk
                        </Button>
                    </a>
                </div>
                <div className='relative container flex justify-center items-center mt-10'>
                    <Image src={DemoSmartphone} alt='Demo Smartphone' className='relative z-20' />
                    <Image src={BackgroundDemo} alt='Background Demo' className='absolute pointer-events-none z-10 left-0 bottom-0 w-full' />
                </div>

            </div>
        </section>
    )
}
