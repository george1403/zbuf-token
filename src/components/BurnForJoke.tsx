'use client'

import React, { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { ZBUF_TOKEN, ZBUF_ABI } from '@/constants/token'

export function BurnForJoke() {
  const [amount, setAmount] = useState('')
  const { address } = useAccount()

  const { writeContract, data: hash } = useWriteContract()

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash,
  })

  const handleBurn = async () => {
    if (!amount) return
    try {
      writeContract({
        address: ZBUF_TOKEN.address as `0x${string}`,
        abi: ZBUF_ABI,
        functionName: 'burn',
        args: [BigInt(amount)],
      })
    } catch (error) {
      console.error('Error burning tokens:', error)
    }
  }

  if (!address) {
    return (
      <div className="card group hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Burn ZBUF 🔥</h2>
        <p className="text-gray-600">Connect your wallet to burn tokens</p>
      </div>
    )
  }

  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Burn ZBUF 🔥</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount to burn
          </label>
          <div className="relative">
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-primary pr-12"
              placeholder="Enter amount"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500">ZBUF</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleBurn}
          disabled={isConfirming || !amount}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium 
          transition-all duration-300 hover:from-red-700 hover:to-orange-700 
          shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
          hover:scale-105 active:scale-95"
        >
          {isConfirming ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              <span>Confirming...</span>
            </div>
          ) : (
            'Burn Tokens'
          )}
        </button>
        {isConfirming && (
          <p className="text-sm text-gray-500 text-center animate-pulse">
            Please confirm the transaction in your wallet
          </p>
        )}
      </div>
    </div>
  )
} 