'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiStar, HiCalendar } from 'react-icons/hi'

export default function Education() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section id="education" ref={ref} className="py-24 relative bg-[#0F0F1A]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        Academic background
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative border-gradient rounded-3xl overflow-hidden card-hover"
                    >
                        {/* Top bar */}
                        <div className="h-1.5 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500" />

                        <div className="p-8 sm:p-10">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                {/* Icon */}
                                <div className="w-16 h-16 clip-angular bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 glow-purple">
                                    <HiAcademicCap size={28} className="text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
                                            <div className="text-[#A78BFA] font-semibold text-lg">Kurukshetra University</div>
                                        </div>
                                        {/* GPA Badge */}
                                        <div className="flex flex-col items-center bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-4">
                                            <div className="flex items-center gap-1 mb-1">
                                                <HiStar className="text-yellow-400" size={14} />
                                                <span className="text-xs text-[#94A3B8] font-mono">GPA</span>
                                            </div>
                                            <div className="text-3xl font-black gradient-text">8.0</div>
                                            <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">out of 10</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#94A3B8] text-sm mb-6">
                                        <HiCalendar size={14} />
                                        <span>Apr 2018 – Apr 2022</span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        {[
                                            { label: 'Degree', value: 'B.Tech' },
                                            { label: 'Duration', value: '4 Years' },
                                            { label: 'Specialization', value: 'Computer Science' },
                                        ].map((item) => (
                                            <div key={item.label} className="bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E35]">
                                                <div className="text-[#A78BFA] text-xs font-mono uppercase tracking-wider mb-1">
                                                    {item.label}
                                                </div>
                                                <div className="text-white font-semibold text-sm">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-10"
                    >
                        <p className="text-[#94A3B8] text-sm italic">
                            "Excellence in engineering is not a destination — it's a perpetual pursuit."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
