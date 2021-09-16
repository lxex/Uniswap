import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()


const farms: SerializedFarmConfig[] = [
      /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'XOS',
    lpAddresses: {
      1110: '0xf449f6a4560c60d3856afcc23d4a2e39c16e6dcd',
    },
    token: serializedTokens.wxos,
    quoteToken: serializedTokens.wxos,
  },
  {
    pid: 251,
    lpSymbol: 'GOD',
    lpAddresses: {
      1110: '0x99dfa8964e635ebdbe347b02422083bfc3f20da0',
    },
    token: serializedTokens.god,
    quoteToken: serializedTokens.god,
  },
  {
    pid: 252,
    lpSymbol: 'EROS',
    lpAddresses: {
      1110: '0x48b978a8250678f95663e8fbe3a1339fcd4fe943',
    },
    token: serializedTokens.eros,
    quoteToken: serializedTokens.eros,
  },
  {
    pid: 455,
    lpSymbol: 'USDT',
    lpAddresses: {
      1110: '0x98a3d8d7f90dd73cba99b3b1315f5bc9d96280c6',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.usdt,
  },
]

export default farms
