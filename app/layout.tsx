import './globals.css'
import type { Metadata } from 'next'
import { HeroUIProvider } from '@heroui/react'
import Navbar from './Navbar'
import Providers from './providers'

export const metadata: Metadata = {
  title: { default: 'SignalDesk — Issue tracking, with clarity', template: '%s | SignalDesk' },
  description: 'A calm workspace to capture issues, collaborate with your team, and turn clear signals into progress.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <HeroUIProvider>{children}</HeroUIProvider>
        </Providers>
      </body>
    </html>
  )
}
