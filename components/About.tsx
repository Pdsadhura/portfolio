'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa'

const stats = [
    { label: 'Years Experience', value: '3+', icon: FaAward, color: 'from-purple-600 to-purple-400' },
    { label: 'Projects Delivered', value: '6+', icon: FaRocket, color: 'from-cyan-600 to-cyan-400' },
    { label: 'Technologies', value: '15+', icon: FaCode, color: 'from-pink-600 to-pink-400' },
    { label: 'Happy Clients', value: '10+', icon: FaUsers, color: 'from-violet-600 to-violet-400' },
]

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section id="about" ref={ref} className="py-24 relative bg-[#0F0F1A]">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        Get to know me
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left / Image & Decoration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-64 h-80 sm:w-80 sm:h-[400px]">
                            {/* Rotating border */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-4 rounded-[20px] border border-dashed border-cyan-500/20"
                            />
                            {/* Inner image */}
                            <div className="relative w-full h-full clip-angular-reverse overflow-hidden border border-[#1E1E35]">
                                <Image
                                    src="/assets/profile-3.jpeg"
                                    alt="Paras Dhiman"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating second image */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 hidden sm:block w-40 h-40 sm:w-48 sm:h-48 clip-angular border-4 border-[#0F0F1A] overflow-hidden shadow-2xl shadow-cyan-500/20 transition-transform duration-500 hover:scale-105"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Image
                                    src="/assets/profile-4.jpeg"
                                    alt="Paras Dhiman Secondary"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 blur-[80px] bg-cyan-600/10 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Right / Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                            Architecting <span className="gradient-text">Digital Experiences</span> That Inspire
                        </h3>
                        <div className="space-y-4 text-[#94A3B8] leading-relaxed mb-8">
                            <p>
                                I'm a <span className="text-[#A78BFA] font-semibold">Dynamic React JS Developer</span> with 3+ years of
                                hands-on experience in building high-performance web applications using React, JavaScript,
                                and modern front-end technologies.
                            </p>
                            <p>
                                My expertise spans crafting intuitive user interfaces, integrating complex APIs,
                                managing application state with Redux & React Flow, and delivering{' '}
                                <span className="text-[#06B6D4] font-semibold">scalable, responsive solutions</span> that
                                businesses love. I thrive in cross-functional teams and take pride in writing clean,
                                maintainable code.
                            </p>
                            <p>
                                From{' '}
                                <span className="text-[#A78BFA] font-semibold">document verification platforms</span> to{' '}
                                <span className="text-[#06B6D4] font-semibold">real-time geo-tracking systems</span>, I've
                                shipped production-grade projects that serve thousands of users across the globe.
                            </p>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { label: 'Location', value: 'Panchkula, Haryana' },
                                { label: 'Email', value: 'dhimanparas23@gmail.com' },
                                { label: 'Phone', value: '+91 81683-36986' },
                                { label: 'Status', value: 'Open to Work' },
                            ].map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    <span className="text-[#A78BFA] text-xs font-mono uppercase tracking-wider">{item.label}</span>
                                    <span className="text-white text-sm font-medium mt-0.5">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="border-gradient rounded-2xl p-6 text-center card-hover"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                                <stat.icon size={22} className="text-white" />
                            </div>
                            <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
                            <div className="text-[#94A3B8] text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
