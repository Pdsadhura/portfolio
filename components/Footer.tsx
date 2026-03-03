'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

const socials = [
    { icon: FaGithub, href: 'https://github.com/dhimanparas23', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/paras-dhiman-110956256/', label: 'LinkedIn' },
    { icon: MdEmail, href: 'mailto:dhimanparas23@gmail.com', label: 'Email' },
]

export default function Footer() {
    const handleNavClick = (href: string) => {
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-[#0F0F1A] border-t border-[#1E1E35] pt-16 pb-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 clip-angular bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl">
                                P
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg leading-tight">Paras Dhiman</div>
                                <div className="font-mono text-[#A78BFA] text-xs">&lt;Software Engineer /&gt;</div>
                            </div>
                        </div>
                        <p className="text-[#94A3B8] text-sm max-w-xs leading-relaxed">
                            Crafting digital experiences that merge cutting-edge technology with elegant design.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div>
                        <div className="text-[#A78BFA] text-xs font-mono uppercase tracking-widest mb-4">Navigation</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200 hover:text-[#A78BFA]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="text-[#A78BFA] text-xs font-mono uppercase tracking-widest mb-4">Contact</div>
                        <div className="space-y-2 text-sm text-[#94A3B8]">
                            <div>dhimanparas23@gmail.com</div>
                            <div>+91 81683-36986</div>
                            <div>Panchkula, Haryana 🇮🇳</div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#1E1E35] to-transparent mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[#94A3B8] text-sm flex items-center gap-1.5">
                        <span>© 2025 Paras Dhiman. Crafted with</span>
                        <FaHeart className="text-pink-500 animate-pulse" size={12} />
                        <span>using Next.js & Tailwind CSS</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-lg border border-[#1E1E35] bg-[#13131E] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                                whileHover={{ y: -3, scale: 1.1 }}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
