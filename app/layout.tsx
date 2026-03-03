import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Paras Dhiman | Software Engineer & React JS Developer',
    description:
        'Portfolio of Paras Dhiman — Dynamic React JS Developer with 3+ years of experience building scalable, high-performance web applications with React, Next.js, TypeScript, Node.js, and modern UI/UX design.',
    keywords: [
        'Paras Dhiman',
        'React Developer',
        'Next.js Developer',
        'Software Engineer',
        'Frontend Developer',
        'TypeScript',
        'JavaScript',
        'Portfolio',
        'Panchkula',
        'Haryana',
        'India',
    ],
    authors: [{ name: 'Paras Dhiman', url: 'mailto:dhimanparas23@gmail.com' }],
    creator: 'Paras Dhiman',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://parasdhiman.dev',
        title: 'Paras Dhiman | Software Engineer & React JS Developer',
        description:
            'Dynamic React JS Developer with 3+ years crafting high-performance web apps. Expert in React, Next.js, TypeScript, Redux, and modern full-stack development.',
        siteName: 'Paras Dhiman Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Paras Dhiman Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Paras Dhiman | Software Engineer',
        description:
            'React JS Developer crafting premium web experiences with Next.js, TypeScript & modern UI/UX.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
            <body className="bg-[#0A0A0F] text-[#F1F0FF] font-sans antialiased">
                {children}
            </body>
        </html>
    )
}
