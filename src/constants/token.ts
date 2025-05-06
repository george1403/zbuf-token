export const ZBUF_TOKEN = {
  address: '0x6a919BF4e631F2DD87E7E0e9AB7d55251c39D835',
  symbol: 'ZBUF',
  decimals: 18,
  name: 'ZBUF Token',
  logo: '/logo.png',
  pancakeSwapUrl: 'https://pancakeswap.finance/swap?outputCurrency=0x6a919BF4e631F2DD87E7E0e9AB7d55251c39D835',
}

export const ZBUF_ABI = [
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'taxPercent',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treasuryWallet',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'totalSupply',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
  },
] as const

export const TOKEN_DECIMALS = 18

export const SPIRITUAL_STATUSES = [
  '🌕 Moon Mission Ready',
  '🔥 Burn Master',
  '🐸 Buf Lord',
  '💎 Diamond Hands',
  '🚀 Launch Pad',
  '🎯 Target Locked',
  '⚡ Power Level: MAX',
  '🌟 Star Buf',
  '🌊 Wave Rider',
  '🎮 Game Master',
]

export const MOCK_LEADERBOARD = [
  { address: '0x1234...5678', burned: '1,000,000' },
  { address: '0x8765...4321', burned: '750,000' },
  { address: '0x2468...1357', burned: '500,000' },
  { address: '0x1357...2468', burned: '250,000' },
  { address: '0x9876...5432', burned: '100,000' },
] 