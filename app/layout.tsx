import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raghunath N — AI Engineer & Full-Stack Developer',
  description: 'AI Engineer & Full-Stack Developer creating intelligent systems, computer vision models, immersive full-stack applications, and technical leadership.',
  keywords: [
    'Raghunath N',
    'AI Engineer',
    'Full-Stack Developer',
    'Computer Vision',
    'LLM Systems',
    'LunaAlign',
    'YUVA26',
    'Software Architecture'
  ],
  authors: [{ name: 'Raghunath N' }],
  openGraph: {
    title: 'Raghunath N — AI Engineer & Full-Stack Developer',
    description: 'I build intelligent systems, computer vision models, and resilient software applications.',
    type: 'website',
    url: 'https://raghunath.dev',
    siteName: 'Raghunath N Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghunath N — AI Engineer & Full-Stack Developer',
    description: 'I build intelligent systems, computer vision models, and resilient software applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
