import { useContractRead, useContractWrite } from 'wagmi'
import { ZBUF_TOKEN, ZBUF_ABI } from '@/constants/token'

export function useZbufContract() {
  const { data: isPaused } = useContractRead({
    address: ZBUF_TOKEN.address as `0x${string}`,
    abi: ZBUF_ABI,
    functionName: 'paused',
  })

  const { data: taxPercent } = useContractRead({
    address: ZBUF_TOKEN.address as `0x${string}`,
    abi: ZBUF_ABI,
    functionName: 'taxPercent',
  })

  const { data: treasuryWallet } = useContractRead({
    address: ZBUF_TOKEN.address as `0x${string}`,
    abi: ZBUF_ABI,
    functionName: 'treasuryWallet',
  })

  const { writeAsync: burn, isLoading: isBurning } = useContractWrite({
    address: ZBUF_TOKEN.address as `0x${string}`,
    abi: ZBUF_ABI,
    functionName: 'burn',
  })

  return {
    isPaused,
    taxPercent,
    treasuryWallet,
    burn,
    isBurning,
  }
} 