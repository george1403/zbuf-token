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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold mb-4 gradient-text animate-float">Welcome to ZBUF Token</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The ultimate meme coin on BSC. Join the revolution and be part of something special.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <ConnectButton />
        {isConnected && <BuyOnPancakeSwap />}
      </div>

      {isConnected && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add to MetaMask</h2>
            <p className="text-gray-600 mb-6">
              Add ZBUF token to your MetaMask wallet to start trading.
            </p>
            <AddToMetaMask />
          </div>

          <BurnForJoke />
        </div>
      )}
    </div>
  )
} 