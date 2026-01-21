import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanGenius | Your AI Cleaning Coach',
  description: 'Get expert cleaning tips and advice from your personal AI cleaning coach. Level up your cleaning game!',
  keywords: ['cleaning', 'cleaning tips', 'AI coach', 'home cleaning', 'cleaning advice'],
  authors: [{ name: 'CleanGenius' }],
  openGraph: {
    title: 'CleanGenius | Your AI Cleaning Coach',
    description: 'Get expert cleaning tips and advice from your personal AI cleaning coach.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
