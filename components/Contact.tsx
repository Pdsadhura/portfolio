'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md'

const contactInfo = [
    {
        icon: MdEmail,
        label: 'Email',
        value: 'dhimanparas23@gmail.com',
        href: 'mailto:dhimanparas23@gmail.com',
        color: 'from-purple-600 to-violet-600',
    },
    {
        icon: MdPhone,
        label: 'Phone',
        value: '+91 81683-36986',
        href: 'tel:+918168336986',
        color: 'from-cyan-600 to-blue-600',
    },
    {
        icon: MdLocationOn,
        label: 'Location',
        value: 'Panchkula, Haryana, India',
        href: 'https://maps.google.com/?q=Panchkula,Haryana',
        color: 'from-pink-600 to-rose-600',
    },
]

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <section id="contact" ref={ref} className="py-24 relative bg-[#0A0A0F]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase mb-3 block">
                        Let's connect
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4" />
                    <p className="text-[#94A3B8] max-w-xl mx-auto">
                        Have a project in mind? Looking to hire? Or just want to say hello?
                        My inbox is always open — let's build something remarkable together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Let's Build <span className="gradient-text">Something Epic</span>
                            </h3>
                            <p className="text-[#94A3B8] leading-relaxed">
                                I'm currently open to freelance projects, full-time roles, and exciting
                                collaborations. Whether you've got a startup idea, an enterprise challenge,
                                or just want to geek out about React — let's talk.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    target={info.label === 'Location' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 border border-[#1E1E35] bg-[#0F0F1A] rounded-2xl card-hover group"
                                >
                                    <div className={`w-11 h-11 clip-angular bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                                        <info.icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[#94A3B8] text-xs font-mono uppercase tracking-wider">{info.label}</div>
                                        <div className="text-white font-medium text-sm mt-0.5 group-hover:text-[#A78BFA] transition-colors">
                                            {info.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <div className="text-[#94A3B8] text-sm mb-4">Or find me on social:</div>
                            <div className="flex gap-3">
                                {[
                                    { icon: FaGithub, href: 'https://github.com/dhimanparas23', label: 'GitHub' },
                                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/paras-dhiman-110956256/', label: 'LinkedIn' },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex items-center gap-2 px-4 py-2.5 border border-[#1E1E35] rounded-xl text-[#94A3B8] hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 text-sm font-medium"
                                        whileHover={{ y: -2 }}
                                    >
                                        <Icon size={18} />
                                        {label}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="border-gradient rounded-3xl p-8">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[#94A3B8] text-xs font-mono uppercase tracking-wider mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#1E1E35] text-white placeholder-[#4a4a6a] focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[#94A3B8] text-xs font-mono uppercase tracking-wider mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#1E1E35] text-white placeholder-[#4a4a6a] focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[#94A3B8] text-xs font-mono uppercase tracking-wider mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Project Collaboration / Job Opportunity / Hello!"
                                            className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#1E1E35] text-white placeholder-[#4a4a6a] focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#94A3B8] text-xs font-mono uppercase tracking-wider mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project or opportunity..."
                                            className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-[#1E1E35] text-white placeholder-[#4a4a6a] focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm resize-none"
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 rounded-xl btn-primary text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <MdSend size={18} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="text-5xl mb-4">🚀</div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-[#94A3B8] text-sm">
                                        Thanks for reaching out! I'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
