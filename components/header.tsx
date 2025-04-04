"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const isMobile = useMobile()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isOpen && isMobile) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen, isMobile])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200 mx-auto px-8",
                isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md dark:bg-gray-950/90" : "bg-transparent",
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">DentalCare Pro</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : "text-gray-600 dark:text-gray-300",
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex md:items-center md:gap-4">
                    <Link
                        href="tel:+1234567890"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300"
                    >
                        <Phone size={16} />
                        <span>(123) 456-7890</span>
                    </Link>
                    <Button asChild>
                        <Link href="/contact">Book Appointment</Link>
                    </Button>
                </div>

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="fixed inset-0 top-16 z-40 bg-white dark:bg-gray-950 md:hidden">
                    <nav className="container flex flex-col gap-4 py-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "py-2 text-lg font-medium transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-gray-600 dark:text-gray-300",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-4">
                            <Link
                                href="tel:+1234567890"
                                className="flex items-center gap-2 py-2 text-lg font-medium text-gray-600 hover:text-primary dark:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone size={20} />
                                <span>(123) 456-7890</span>
                            </Link>
                            <Button asChild className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                                <Link href="/contact">Book Appointment</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

