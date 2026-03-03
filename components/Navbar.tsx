'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1E1E35] shadow-lg shadow-purple-900/10'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#hero"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
                            className="flex items-center gap-3 group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-10 h-10 clip-angular bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                                P
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white leading-tight">Paras</div>
                                <div className="text-xs font-mono mt-[4px] text-[#A78BFA] leading-tight">&lt;Dhiman /&gt;</div>
                            </div>
                        </motion.a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                    className="relative px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 group"
                                    whileHover={{ y: -1 }}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                                className="ml-4 px-5 py-2 rounded-lg btn-primary text-sm font-semibold text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Hire Me
                            </motion.a>
                        </nav>

                        {/* Mobile menu toggle */}
                        <button
                            className="md:hidden p-2 text-[#A78BFA] hover:text-white transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-0 right-0 z-40 bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-[#1E1E35] md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                    className="py-3 px-4 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                                className="mt-2 py-3 px-4 text-center btn-primary rounded-lg text-white font-semibold"
                            >
                                Hire Me
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
