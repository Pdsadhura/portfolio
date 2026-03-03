'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCalendar, HiLocationMarker, HiBriefcase } from 'react-icons/hi'

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Altruist Technology Pvt Ltd',
        location: 'Panchkula, HR',
        period: 'Oct 2024 – Present',
        type: 'Full-time',
        color: 'from-purple-600 to-violet-500',
        projects: [
            {
                name: 'Secova — Document Verification System',
                tech: ['Next.js', 'TypeScript', 'MUI', 'TIFF API'],
                description:
                    'Engineered a fortress-grade document verification platform for UK clientele, implementing multi-role access control (DMS, Member, HR, QA) with full AES encryption and decryption. Architected a highly dynamic dashboard powered by backend arrays, minimizing hard-coded UI logic. Delivered multilingual support across EN, FR, ES, and multi-format document previews including TIFF — handling complex API data and secure server communications with surgical precision.',
            },
            {
                name: 'Tawseel GEO — Biker Tracking System',
                tech: ['React', 'Google Maps API', 'MUI'],
                description:
                    'Designed an intuitive geo-mapping interface leveraging Google Maps APIs to visualize real-time biker locations with infinite pagination for silky-smooth large-scale data handling. Deployed across Dubai and Sharjah, empowering fleet managers with live biker monitoring capabilities.',
            },
        ],
    },
    {
        role: 'Software Developer',
        company: 'Altruist Technology Pvt Ltd',
        location: 'Panchkula, HR',
        period: 'Jul 2022 – Oct 2024',
        type: 'Full-time',
        color: 'from-cyan-600 to-blue-500',
        projects: [
            {
                name: 'Fire Bird — Omnichannel Campaign Manager',
                tech: ['React', 'WhatsApp API', 'Chart.js', 'Redux'],
                description:
                    'Developed a dynamic omnichannel sidebar managing user roles and sender ID provisioning across WhatsApp, Email, SMS, and Web channels. Integrated WhatsApp React Flow for nested array handling and built interactive Chart.js dashboards with two-factor authentication, achieving a 15% surge in user engagement.',
            },
            {
                name: 'PNL Dependo Logistics',
                tech: ['React', 'Chart.js', '2FA'],
                description:
                    'Spearheaded the frontend of a high-stakes delivery management application incorporating dynamic Chart.js dashboards and two-factor authentication to reinforce platform security and operational trust.',
            },
            {
                name: 'Group Hospi Cash — Insurance App',
                tech: ['React', 'Material UI', 'Redux'],
                description:
                    'Built a form-based insurance application with robust validation, an integrated payment section, and the innovative Group Hospi Cash feature — delivering a frictionless user experience.',
            },
            {
                name: 'Utility Bills — Redux State Manager',
                tech: ['React', 'Redux Toolkit', 'Material UI'],
                description:
                    'Streamlined complex state management with Redux Toolkit for seamless bill payment processing and financial transaction orchestration, enabling effortless data flow across the application lifecycle.',
            },
        ],
    },
    {
        role: 'Intern',
        company: 'Altruist Technology Pvt Ltd',
        location: 'Panchkula, HR',
        period: 'Jan 2022 – Jul 2022',
        type: 'Internship',
        color: 'from-pink-600 to-rose-500',
        projects: [
            {
                name: 'Foundation & Growth',
                tech: ['React', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'Java'],
                description:
                    'Gained hands-on exposure to React, Redux, and SQL query development for reporting pipelines. Monitored network infrastructure and resolved technical support issues. Built a dynamic React Store application with live data integration.',
            },
        ],
    },
]

export default function Experience() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="experience" ref={ref} className="py-24 relative bg-[#0F0F1A]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        Where I've made impact
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line (desktop) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

                    <div className="space-y-12">
                        {experiences.map((exp, ei) => (
                            <motion.div
                                key={ei}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: ei * 0.15 }}
                                className="relative lg:grid lg:grid-cols-2 lg:gap-12"
                            >
                                {/* Timeline dot (desktop) */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 items-center justify-center">
                                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-[#0F0F1A] shadow-lg`} />
                                </div>

                                {/* Role Header — alternating sides */}
                                <div className={`${ei % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'} mb-6 lg:mb-0`}>
                                    <div className="inline-flex flex-col items-start lg:items-end gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                        <div className="text-[#A78BFA] font-semibold text-lg">{exp.company}</div>
                                        <div className="flex items-center gap-4 text-[#94A3B8] text-sm flex-wrap">
                                            <span className="flex items-center gap-1">
                                                <HiCalendar size={14} />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiLocationMarker size={14} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Cards */}
                                <div className={`${ei % 2 === 0 ? 'lg:pl-16' : 'lg:order-1 lg:pr-16'} space-y-4`}>
                                    {exp.projects.map((proj, pi) => (
                                        <motion.div
                                            key={pi}
                                            initial={{ opacity: 0, x: ei % 2 === 0 ? 30 : -30 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: ei * 0.15 + pi * 0.1 + 0.2 }}
                                            className="border-gradient rounded-2xl p-5 card-hover"
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <HiBriefcase size={14} className="text-white" />
                                                </div>
                                                <h4 className="text-white font-bold text-base leading-snug">{proj.name}</h4>
                                            </div>
                                            <p className="text-[#94A3B8] text-sm leading-relaxed mb-3">{proj.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {proj.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="px-2.5 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/20 text-[#A78BFA] font-mono"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
