'use client'

import { ZBUF_TOKEN } from '@/constants/token'

export function BuyOnPancakeSwap() {
  const handleBuy = () => {
    const pancakeSwapUrl = `https://pancakeswap.finance/swap?outputCurrency=${ZBUF_TOKEN.address}`
    window.open(pancakeSwapUrl, '_blank')
  }

  return (
    <button
      onClick={handleBuy}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium transition-all hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl"
    >
      Buy on PancakeSwap
    </button>
  )
} 