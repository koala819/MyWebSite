import { Analytics } from '@vercel/analytics/react'
import { Suspense, lazy } from 'react'

import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/app/provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const Navbar = lazy(() => import('@/components/organims/Navbar'))
const Footer = lazy(() => import('@/components/@unused/Footer'))

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.CLIENT_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr-FR',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/app/favicon.ico',
  },
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen min-w-screen">
              <Suspense fallback={<div>Chargement ...</div>}>
                <Navbar />
              </Suspense>
              <main className="flex-1">
                <div className="w-full mx-auto">
                  <div className="flex flex-col min-w-0 break-words w-full rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                    {/* <GoogleAnalytics /> */}
                    {children}
                    <SpeedInsights />
                    <Analytics />
                    <SpeedInsights />
                  </div>
                </div>
              </main>

              <Suspense fallback={<div>Chargement ...</div>}>
                <Footer />
              </Suspense>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
