'use client'

import { ZBUF_TOKEN } from '@/constants/token'

declare global {
  interface Window {
    ethereum?: any
  }
}

export function AddToMetaMask() {
  const addToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: ZBUF_TOKEN.address,
              symbol: ZBUF_TOKEN.symbol,
              decimals: ZBUF_TOKEN.decimals,
              image: ZBUF_TOKEN.logo,
            },
          },
        })
      } catch (error) {
        console.error('Error adding token to MetaMask:', error)
      }
    }
  }

  return (
    <button
      onClick={addToMetaMask}
      className="btn-secondary"
    >
      Add ZBUF to MetaMask
    </button>
  )
} 