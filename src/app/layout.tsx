import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZBUF Token',
  description: 'The official ZBUF token dApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <header className="glass sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold gradient-text">ZBUF Token</h1>
                  </div>
                  <nav className="flex items-center space-x-4">
                    <a
                      href="https://bscscan.com/token/0x5FbDB2315678afecb367f032d93F642f64180aa3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      Contract
                    </a>
                    <a
                      href="https://t.me/zbuf_token"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://twitter.com/zbuf_token"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      Twitter
                    </a>
                  </nav>
                </div>
              </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {children}
            </main>
            <footer className="glass mt-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-gray-600">
                  © {new Date().getFullYear()} ZBUF Token. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
} 