import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 dark:bg-gray-900 w-full max-w-[1536px] mx-auto px-8">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-center">DentalCare Pro</h3>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
                            Providing exceptional dental care with a focus on patient comfort and the latest technology.
                        </p>
                        <div className="flex gap-4 items-center justify-center">
                            <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                <Image src={'/facebook(1).svg'} width={20} height={20} alt={'facebook'}/>
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                <Image src={'/instagram.svg'} width={20} height={20}  alt={'instagram'}/>
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                <Image src={'/twitter.svg'} width={20} height={20}  alt={'twitter'} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-center">Services</h3>
                        <ul className="space-y-2 text-sm flex flex-col items-center justify-center">
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Preventive Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Cosmetic Dentistry
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Restorative Treatments
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Emergency Dental Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Pediatric Dentistry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-center">Contact Us</h3>
                        <ul className="space-y-3 text-sm flex flex-col items-center justify-center">
                            <li className="flex items-start gap-2">
                                <MapPin size={18} className="mt-0.5 text-primary" />
                                <span className="text-gray-600 dark:text-gray-400">
                  123 Prime Street, Suite 100
                  <br />
                  London, NW8 7PK
                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="text-primary" />
                                <Link href="tel:+1234567890" className="text-gray-600 hover:text-primary dark:text-gray-400">
                                    (123) 456-7890
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="text-primary" />
                                <Link
                                    href="mailto:info@dentalcarepro.com"
                                    className="text-gray-600 hover:text-primary dark:text-gray-400"
                                >
                                    info@dentalcarepro.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} DentalCare Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

