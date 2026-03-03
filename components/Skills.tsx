'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
    SiTailwindcss, SiBootstrap, SiMui, SiDocker
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'

const categories = ['All', 'Frontend', 'Backend', 'Tools']

const skills = [
    // Frontend
    { name: 'React JS', icon: SiReact, level: 95, category: 'Frontend', color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, level: 88, category: 'Frontend', color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, category: 'Frontend', color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, level: 95, category: 'Frontend', color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, level: 98, category: 'Frontend', color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, level: 90, category: 'Frontend', color: '#1572B6' },
    { name: 'Redux', icon: SiRedux, level: 88, category: 'Frontend', color: '#764ABC' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, category: 'Frontend', color: '#06B6D4' },
    { name: 'Material UI', icon: SiMui, level: 90, category: 'Frontend', color: '#007FFF' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 85, category: 'Frontend', color: '#7952B3' },
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, level: 80, category: 'Backend', color: '#339933' },
    { name: 'Express.js', icon: SiExpress, level: 78, category: 'Backend', color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, category: 'Backend', color: '#47A248' },
    // Tools
    { name: 'Git', icon: SiGit, level: 90, category: 'Tools', color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, level: 92, category: 'Tools', color: '#FFFFFF' },
    { name: 'Docker', icon: SiDocker, level: 65, category: 'Tools', color: '#2496ED' },
]

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('All')
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

    const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory)

    return (
        <section id="skills" ref={ref} className="py-24 relative bg-[#0A0A0F]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        What I work with
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4" />
                    <p className="text-[#94A3B8] max-w-xl mx-auto">
                        A curated stack of technologies I wield to engineer pixel-perfect, performant digital products.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-3 flex-wrap mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-900/30'
                                    : 'border border-[#1E1E35] text-[#94A3B8] hover:border-purple-500/50 hover:text-white bg-[#0F0F1A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filtered.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.7, y: 20 }}
                            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 200 }}
                            layout
                            className="group relative border border-[#1E1E35] bg-[#0F0F1A] rounded-2xl p-5 flex flex-col items-center gap-3 card-hover cursor-default overflow-hidden"
                            style={{
                                '--tw-shadow-color': skill.color,
                            } as React.CSSProperties}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                style={{ background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` }}
                            />
                            {/* Level bar */}
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-700"
                                style={{ width: inView ? `${skill.level}%` : '0%' }}
                            />

                            <skill.icon
                                size={36}
                                style={{ color: skill.color }}
                                className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                            />
                            <span className="text-white text-xs font-semibold text-center leading-tight">{skill.name}</span>
                            <span className="text-[#A78BFA] text-xs font-mono">{skill.level}%</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
