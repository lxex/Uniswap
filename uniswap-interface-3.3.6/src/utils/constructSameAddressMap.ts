import { ChainId } from '@uniswap/sdk-core'
// update 20210903
export function constructSameAddressMap<T extends string>(address: T): { [chainId in ChainId]: T } {
  return {
    [ChainId.MAINNET]: address,
    [ChainId.ROPSTEN]: address,
    [ChainId.KOVAN]: address,
    [ChainId.RINKEBY]: address,
    [ChainId.GÖRLI]: address,
    [ChainId.XOS]: address,
  }
}
