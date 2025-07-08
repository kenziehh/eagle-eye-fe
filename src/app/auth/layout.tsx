import Image from 'next/image'
import React from 'react'
import Ellipse from "@/assets/images/ellipse-auth.png"
import Mask from "@/assets/images/mask-auth.png"
import Mascot from "@/assets/images/mascot-auth.png"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen relative bg-gradient-to-br bg-[#251F4E] flex items-center  justify-center p-4">
            <div className="container w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Branding */}
                <div className="text-white space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            Welcome to <span className="bg-purple-600 px-3 py-1 rounded-lg">EagleEye</span>
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed max-w-md">
                            Protect your platform with AI-powered deepfake detection and blockchain integrity.
                        </p>
                    </div>
                    <div className="relative ">
                        <Image src={Mascot} alt="" />
                        <Image src={Mask} alt="" className="absolute top-0 z-0" />
                    </div>
                </div>

                {children}
                <Image src={Ellipse} alt="" className="absolute left-0 bottom-0 z-0 pointer-events-none" />
            </div>
        </div>
    )
}
