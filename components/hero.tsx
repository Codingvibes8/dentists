import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
    return (
        <section className="linear-gradient(to right, rgba(0, 174, 239, 0.1), rgba(0, 174, 239, 0.05)) py-16 md:py-24 w-full max-w-[1536px] mx-auto px-8">
            <div className="container">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="flex flex-col gap-6 items-center text-center justify-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Your Smile, <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Priority</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Experience exceptional dental care with our team of experts using the latest technology for your comfort
                            and health.
                        </p>
                        <ul className="grid gap-3">
                            {["Comprehensive dental services", "State-of-the-art facilities", "Experienced dental professionals"].map(
                                (item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ),
                            )}
                        </ul>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button asChild size="lg">
                                <Link href="/contact">Book Appointment</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/services" className="group">
                                    Our Services
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-lg shadow-xl lg:ml-auto">
                        <img
                            src="/dentist-hero.jpg?height=600&width=600"
                            alt="Dentist examining patient"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

