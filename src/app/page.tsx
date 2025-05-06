'use client'

import { ConnectButton } from '@/components/ConnectButton'
import { AddToMetaMask } from '@/components/AddToMetaMask'
import { BurnForJoke } from '@/components/BurnForJoke'
import { BuyOnPancakeSwap } from '@/components/BuyOnPancakeSwap'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'

export default function Home() {
  const { isConnected } = useAccount()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-20 -z-10"></div>
          <h1 className="text-6xl font-bold mb-6 gradient-text animate-float">
            Welcome to ZBUF Token
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The ultimate meme coin on BSC. Join the revolution and be part of something special.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <ConnectButton />
          {isConnected && <BuyOnPancakeSwap />}
        </div>
      </div>

      {isConnected && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add to MetaMask</h2>
            <p className="text-gray-600 mb-6">
              Add ZBUF token to your MetaMask wallet to start trading.
            </p>
            <AddToMetaMask />
          </div>

          <BurnForJoke />
        </div>
      )}

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">Why Choose ZBUF?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast & Secure</h3>
            <p className="text-gray-600">Built on BSC for fast transactions and low fees</p>
          </div>
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2">Token Burning</h3>
            <p className="text-gray-600">Regular token burns to increase scarcity</p>
          </div>
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-gray-600">Join our growing community of holders</p>
          </div>
        </div>
      </div>
    </div>
  )
} 