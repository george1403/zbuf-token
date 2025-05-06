'use client'

import React, { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import BurnForJoke from './BurnForJoke'

const SPIRITUAL_STATUSES = [
  'Enlightened Zdrobber',
  'Cracker Whisperer',
  'Meme Guru',
  'Token Visionary',
  'Supreme Zdrob Lord',
  'Wallet Wielder',
  'Burnt Out (literally)',
  'Joke Seeker',
  'Elon\'s Favorite',
  'Spiritually Zdrobbified',
]

const MOCK_BALANCE = '69,420,000'

const Hero = () => {
  const { address, isConnected } = useAccount()
  const [status, setStatus] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isConnected) {
      setStatus(SPIRITUAL_STATUSES[Math.floor(Math.random() * SPIRITUAL_STATUSES.length)])
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isConnected, address])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zdrob-yellow/20 to-zdrob-pink/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zdrob-yellow/30 to-zdrob-pink/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-zdrob-yellow to-zdrob-pink bg-clip-text text-transparent drop-shadow animate-float">
            Welcome to $ZDROB
          </h1>
          <p className="text-xl sm:text-2xl text-zdrob-pink mb-8 font-mono">
            The most spiritually advanced meme coin on the blockchain. Slap your wallet in and achieve instant enlightenment!
          </p>

          {/* Wallet Connection */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <ConnectButton 
              showBalance={false} 
              label="Slap wallet in"
              chainStatus="icon"
            />

            {/* Connected Wallet Info */}
            {isConnected && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mt-4 w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-700 text-sm mb-1">Wallet Address:</div>
                    <div className="font-mono text-lg break-all bg-gray-100 p-2 rounded">{address}</div>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm mb-1">$ZDROB Balance:</div>
                    <div className="font-bold text-2xl text-zdrob-yellow">{MOCK_BALANCE}</div>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm mb-1">Spiritual Status:</div>
                    <div className="italic text-zdrob-pink text-lg">{status}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Burn for Joke Component */}
            {isConnected && <BurnForJoke />}
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-lg text-zdrob-yellow font-bold animate-bounce">
            Burn that $ZDROB for laughs. Achieve spiritual clarity.
          </div>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {/* Add confetti animation here */}
        </div>
      )}
    </section>
  )
}

export default Hero 