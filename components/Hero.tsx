'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiDownload, HiCheck } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const floatingShapes = [
    { size: 80, top: '15%', left: '8%', color: 'rgba(124,58,237,0.15)', delay: 0, duration: 7 },
    { size: 50, top: '70%', left: '5%', color: 'rgba(6,182,212,0.15)', delay: 1, duration: 5 },
    { size: 100, top: '20%', right: '10%', color: 'rgba(236,72,153,0.08)', delay: 0.5, duration: 8 },
    { size: 40, top: '60%', right: '8%', color: 'rgba(124,58,237,0.2)', delay: 2, duration: 6 },
    { size: 60, top: '40%', left: '50%', color: 'rgba(6,182,212,0.08)', delay: 1.5, duration: 9 },
]

export default function Hero() {
    const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle')

    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (downloadState !== 'idle') return;
        setDownloadState('loading');

        // Simulate loading animation for 1.5 seconds before actual download
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/assets/file/Resume_Paras_Dhiman.pdf';
            link.download = 'Paras_Dhiman_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setDownloadState('success');
            setTimeout(() => setDownloadState('idle'), 3000);
        }, 1500);
    }

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // 3D-like parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
        >
            {/* 3D Parallax Background Image */}
            <motion.div
                style={{ y: backgroundY, scale: backgroundScale, opacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Image
                    src="/assets/profile-2.jpeg"
                    alt="Background"
                    fill
                    className="object-cover opacity-[0.15]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/95 to-[#0A0A0F]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            </motion.div>
            {/* Background glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Floating geometric shapes */}
            {floatingShapes.map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none hidden lg:block"
                    style={{ width: s.size, height: s.size, top: s.top, left: (s as any).left, right: (s as any).right }}
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                >
                    <div
                        className="w-full h-full clip-angular border border-purple-500/20"
                        style={{ background: s.color }}
                    />
                </motion.div>
            ))}

            {/* Meteor lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"
                        style={{
                            height: '150px',
                            top: `-${Math.random() * 100}px`,
                            left: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.8}s`,
                            animation: `meteor ${3 + i * 0.5}s linear ${i * 1.5}s infinite`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="order-2 lg:order-1 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto lg:items-start lg:justify-start lg:text-left lg:max-w-none"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-[#A78BFA] text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow" />
                            Available for Opportunities
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 w-full text-center lg:text-left">
                            <span className="block text-white">Hi, I'm</span>
                            <span className="block gradient-text glow-text-purple">Paras Dhiman</span>
                        </h1>

                        <div className="text-xl sm:text-2xl font-mono text-[#94A3B8] mb-6 h-16 flex items-center justify-center lg:justify-start">
                            <span className="text-[#A78BFA] mr-2">&gt;_</span>
                            <TypeAnimation
                                sequence={[
                                    'React JS Developer',
                                    2000,
                                    'Next.js Engineer',
                                    2000,
                                    'Full-Stack Architect',
                                    2000,
                                    'UI/UX Craftsman',
                                    2000,
                                    'JavaScript Expert',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-white"
                            />
                        </div>

                        <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Dynamic React JS Developer with <span className="text-[#A78BFA] font-semibold">3+ years</span> of experience crafting{' '}
                            <span className="text-[#06B6D4] font-semibold">high-performance web applications</span>.
                            Passionate about building scalable solutions that merge cutting-edge technology with exceptional user experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <motion.a
                                href="#projects"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                                className="px-8 py-3.5 rounded-xl btn-primary text-white font-semibold flex items-center gap-2 text-base shadow-lg shadow-purple-900/30"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View My Work
                                <HiArrowDown className="rotate-[-90deg]" />
                            </motion.a>
                            <motion.a
                                href="/assets/file/Resume_Paras_Dhiman.pdf"
                                onClick={handleDownload}
                                className={`px-8 py-3.5 rounded-xl border font-semibold flex items-center justify-center gap-2 text-base transition-all duration-300 whitespace-nowrap ${downloadState === 'success'
                                    ? 'border-green-500 bg-green-500/10 text-green-400'
                                    : 'btn-outline text-[#A78BFA]'
                                    }`}
                                whileHover={downloadState === 'idle' ? { scale: 1.05, y: -2 } : {}}
                                whileTap={downloadState === 'idle' ? { scale: 0.97 } : {}}
                            >
                                {downloadState === 'idle' && (
                                    <>
                                        Download CV
                                        <HiDownload />
                                    </>
                                )}
                                {downloadState === 'loading' && (
                                    <>
                                        Downloading
                                        <div className="w-4 h-4 border-2 border-[#A78BFA]/30 border-t-[#A78BFA] rounded-full animate-spin" />
                                    </>
                                )}
                                {downloadState === 'success' && (
                                    <>
                                        Downloaded!
                                        <HiCheck className="text-lg" />
                                    </>
                                )}
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <span className="text-[#94A3B8] text-sm">Find me on</span>
                            <div className="flex gap-3">
                                {[
                                    { icon: FaGithub, href: 'https://github.com/dhimanparas23', label: 'GitHub' },
                                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/paras-dhiman-110956256/', label: 'LinkedIn' },
                                    { icon: MdEmail, href: 'mailto:dhimanparas23@gmail.com', label: 'Email' },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-lg border border-[#1E1E35] bg-[#0F0F1A] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Angular Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-6 rounded-[30px] border border-dashed border-purple-500/20"
                            />
                            {/* Glow ring */}
                            <div className="absolute -inset-3 clip-angular-reverse bg-gradient-to-br from-purple-600/30 to-cyan-500/30 blur-sm" />

                            {/* Main image container */}
                            <div className="relative w-64 h-72 sm:w-[320px] sm:h-[360px] clip-angular overflow-hidden border-2 border-purple-500/40 glow-purple">
                                <Image
                                    src="/assets/profile-1.jpeg"
                                    alt="Paras Dhiman"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-2 -left-4 sm:-bottom-4 sm:-left-8 bg-[#13131E] border border-[#1E1E35] rounded-xl px-4 py-3 shadow-xl shadow-purple-900/30"
                            >
                                <div className="text-2xl font-black text-white">3+</div>
                                <div className="text-xs text-[#94A3B8]">Years Exp.</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-2 -right-4 sm:-top-4 sm:-right-8 bg-[#13131E] border border-[#1E1E35] rounded-xl px-4 py-3 shadow-xl shadow-cyan-900/20"
                            >
                                <div className="text-2xl font-black gradient-text">6+</div>
                                <div className="text-xs text-[#94A3B8]">Projects</div>
                            </motion.div>

                            {/* Tech stack floating pill */}
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-1/2 -right-4 sm:-right-16 bg-[#13131E] border border-purple-500/30 rounded-full px-3 py-1.5 shadow-lg"
                            >
                                <div className="text-xs text-[#A78BFA] font-mono">React ⚛️</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex flex-col items-center gap-2 mt-16"
                >
                    <span className="text-[#94A3B8] text-xs font-mono">scroll down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border border-[#1E1E35] flex items-start justify-center p-1"
                    >
                        <div className="w-1 h-2 rounded-full bg-[#A78BFA]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
