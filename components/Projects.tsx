'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiCode, HiChip } from 'react-icons/hi'

const projects = [
    {
        title: 'Secova — Document Verification Platform',
        category: 'Enterprise',
        description:
            'A fortress-grade document verification system for UK clients. Multi-role access control (DMS, Member, HR, QA), full AES encryption, multilingual support across 4 languages, and multi-format document previews including TIFF rendering.',
        tech: ['Next.js', 'TypeScript', 'MUI', 'Redux', 'API Integration', 'Encryption'],
        gradient: 'from-purple-600 via-violet-600 to-indigo-600',
        accentColor: '#A78BFA',
        icon: '🔐',
        featured: true,
    },
    {
        title: 'Tawseel GEO — Biker Tracking System',
        category: 'Real-time',
        description:
            'Real-time fleet tracking platform for Dubai & Sharjah. Google Maps API integration with infinite pagination for large-scale live biker monitoring. Used by logistics teams across two major UAE cities.',
        tech: ['React', 'Google Maps API', 'MUI', 'Real-time Data', 'Infinite Scroll'],
        gradient: 'from-cyan-600 to-blue-600',
        accentColor: '#06B6D4',
        icon: '🗺️',
        featured: true,
    },
    {
        title: 'Fire Bird — Omnichannel Campaign Manager',
        category: 'SaaS',
        description:
            'Feature-rich omnichannel sidebar for managing campaigns across WhatsApp, Email, SMS, and Web. Integrated WhatsApp React Flow, dynamic sender ID management, Chart.js analytics, and 2FA authentication.',
        tech: ['React', 'WhatsApp API', 'Chart.js', 'Redux', '2FA', 'React Flow'],
        gradient: 'from-orange-600 to-red-600',
        accentColor: '#F97316',
        icon: '🔥',
        featured: false,
    },
    {
        title: 'PNL Dependo — Logistics Platform',
        category: 'Logistics',
        description:
            'Comprehensive delivery management frontend with dynamic Chart.js dashboards, real-time data visualization, and layered two-factor authentication to fortify platform security and build operational trust.',
        tech: ['React', 'Chart.js', '2FA', 'API Integration', 'Dashboard'],
        gradient: 'from-green-600 to-emerald-600',
        accentColor: '#22C55E',
        icon: '🚚',
        featured: false,
    },
    {
        title: 'Group Hospi Cash — Insurance App',
        category: 'FinTech',
        description:
            'Form-driven insurance application with robust validation layers, integrated payment gateway, and the flagship Group Hospi Cash feature — creating a seamless end-to-end insurance experience.',
        tech: ['React', 'Material UI', 'Redux', 'Form Validation', 'Payment Integration'],
        gradient: 'from-pink-600 to-rose-600',
        accentColor: '#EC4899',
        icon: '🏥',
        featured: false,
    },
    {
        title: 'Utility Bills — Payment Manager',
        category: 'Finance',
        description:
            'Redux Toolkit-powered utility bill management system enabling seamless state flow across bill payment processing and financial transaction history, delivering an effortless digital payment experience.',
        tech: ['React', 'Redux Toolkit', 'Material UI', 'REST API'],
        gradient: 'from-violet-600 to-purple-600',
        accentColor: '#7C3AED',
        icon: '💳',
        featured: false,
    },
]

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="projects" ref={ref} className="py-24 relative bg-[#0A0A0F]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        What I've built
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4" />
                    <p className="text-[#94A3B8] max-w-xl mx-auto">
                        A selection of high-impact digital products I've engineered — each one pushing the boundaries of performance, design, and user experience.
                    </p>
                </motion.div>

                {/* Featured Projects (first 2) */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {projects.filter(p => p.featured).map((proj, i) => (
                        <motion.article
                            key={proj.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group relative border border-[#1E1E35] bg-[#0F0F1A] rounded-3xl overflow-hidden card-hover"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${proj.gradient}`} />

                            <div className="p-7">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 clip-angular bg-gradient-to-br ${proj.gradient} flex items-center justify-center text-2xl`}>
                                            {proj.icon}
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8]">
                                                {proj.category}
                                            </span>
                                            <div className="mt-1">
                                                <HiCode style={{ color: proj.accentColor }} size={16} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="w-9 h-9 rounded-lg border border-[#1E1E35] bg-[#13131E] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors">
                                            <FaGithub size={16} />
                                        </button>
                                        <button className="w-9 h-9 rounded-lg border border-[#1E1E35] bg-[#13131E] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors">
                                            <FaExternalLinkAlt size={14} />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{proj.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {proj.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 rounded-full text-xs font-mono border"
                                            style={{
                                                color: proj.accentColor,
                                                borderColor: `${proj.accentColor}33`,
                                                background: `${proj.accentColor}10`,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Other Projects Grid (3 cols) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.filter(p => !p.featured).map((proj, i) => (
                        <motion.article
                            key={proj.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className="group relative border border-[#1E1E35] bg-[#0F0F1A] rounded-2xl overflow-hidden card-hover"
                        >
                            <div className={`h-1 bg-gradient-to-r ${proj.gradient}`} />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-2xl`}>{proj.icon}</span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8]">
                                        {proj.category}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 leading-snug">{proj.title}</h3>
                                <p className="text-[#94A3B8] text-xs leading-relaxed mb-4 line-clamp-3">{proj.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {proj.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#94A3B8]">
                                            {t}
                                        </span>
                                    ))}
                                    {proj.tech.length > 3 && (
                                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#94A3B8]">
                                            +{proj.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
