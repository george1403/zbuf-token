'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { useEffect, useState } from 'react'

export function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="px-6 py-2 rounded-lg bg-gray-200 text-gray-500 font-medium transition-all hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled
      >
        Loading...
      </button>
    )
  }

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
      >
        {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
      </button>
    )
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
    >
      Connect Wallet
    </button>
  )
} 