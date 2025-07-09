"use client"
import Image from "next/image"
import { useState } from "react"
import { LogOut, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const { data: session } = useSession()
    const pathname = usePathname()
    console.log(session?.user)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    // Navigation links for non-logged in users (landing page)
    const guestNavLinks = [
        { label: "About Us", to: "about", href: "/about" },
        { label: "How It Works", to: "how", href: "/how-it-works" },
        { label: "Pricing", to: "pricing", href: "/pricing" },
        { label: "FAQ", to: "faq", href: "/faq" },
        { label: "Demo App", to: "demo", href: "/demo" },
    ]

    // Navigation links for logged in users (app navigation)
    const userNavLinks = [
        { label: "Documentation", to: "documentation", href: "/documentation" },
        { label: "Pricing", to: "pricing", href: "/pricing" },
        { label: "Monitoring", to: "monitoring", href: "/monitoring" },
        { label: "Demo Apps", to: "demo-apps", href: "/demo-apps" },
    ]

    // Choose which nav links to use based on login state
    const navLinks = session?.user ? userNavLinks : guestNavLinks

    const renderNavLink = (link: (typeof navLinks)[0], isMobile = false) => {
        const isActive = session?.user && pathname === link.href

        if (session?.user) {
            // If logged in, use Next.js Link for page navigation
            return (
                <div key={link.to} className="relative flex flex-col items-center">
                    <Link
                        href={link.href}
                        className={`cursor-pointer transition-colors text-base font-medium ${isActive ? "text-primary" : "hover:text-primary"
                            }`}
                        onClick={isMobile ? () => setIsOpen(false) : undefined}
                    >
                        {link.label}
                    </Link>
                    {/* Active indicator dot */}
                    {isActive && <div className="w-2 h-2 bg-primary rounded-full mt-1 absolute -bottom-5"></div>}
                </div>
            )
        } else {
            // If not logged in, use ScrollLink for smooth scrolling
            return (
                <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={isMobile ? -80 : 0}
                    spy={true}
                    activeClass="text-primary"
                    onClick={isMobile ? () => setIsOpen(false) : undefined}
                    className="cursor-pointer hover:text-primary transition-colors text-base font-medium"
                >
                    {link.label}
                </ScrollLink>
            )
        }
    }

    return (
        <nav className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between py-6 relative">
            <div className="flex items-center justify-between w-full lg:w-auto">
                {session?.user ? (
                    // If logged in, logo links to dashboard/home page
                    <Link href="/dashboard" className="cursor-pointer hover:text-primary transition-colors">
                        <Image src={"/images/logo-nav.png"} alt="Logo" width={180} height={60} />
                    </Link>
                ) : (
                    // If not logged in, logo scrolls to hero section
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
                        <Image src={"/images/logo-nav.png"} alt="Logo" width={180} height={60} />
                    </ScrollLink>
                )}

                <div className="lg:hidden">
                    <button onClick={toggleMenu}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">{navLinks.map((link) => renderNavLink(link))}</div>

            {/* Auth Button */}
            <div className="hidden lg:block">
                {session?.user ? (
                    <Link href="/auth/logout">
                        <Button variant="outline" className="flex items-center justify-center bg-transparent">
                            Logout
                            <LogOut className="ml-2 text-gradient-start" />
                        </Button>
                    </Link>
                ) : (
                    <Link href="/auth/login">
                        <Button variant="outline" className="flex items-center justify-center bg-transparent">
                            Login
                            <LogOut className="ml-2 text-gradient-start" />
                        </Button>
                    </Link>
                )}
            </div>

            {/* Mobile menu with animation */}
            <div
                className={`
                lg:hidden overflow-hidden w-full transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
            >
                <div className="flex flex-col gap-4 px-6 py-4 shadow-md rounded-md bg-white">
                    {navLinks.map((link) => {
                        const isActive = session?.user && pathname === link.href
                        return (
                            <div key={link.to} className="relative">
                                {renderNavLink(link, true)}
                                {/* Mobile active indicator - show as left border instead of dot */}
                                {isActive && session?.user && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
                                )}
                            </div>
                        )
                    })}

                    {/* Mobile Auth Button */}
                    <div className="pt-4 border-t border-gray-200">
                        {session?.user ? (
                            <Link href="/auth/logout">
                                <Button variant="outline" className="w-full flex items-center justify-center bg-transparent">
                                    Logout
                                    <LogOut className="ml-2 text-gradient-start" />
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/auth/login">
                                <Button variant="outline" className="w-full flex items-center justify-center bg-transparent">
                                    Login
                                    <LogOut className="ml-2 text-gradient-start" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
