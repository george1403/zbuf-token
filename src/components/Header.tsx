'use client'

import { ThemeToggle } from './ThemeToggle'
import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary dark:text-primary-dark">
              $ZBUF
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  )
} 