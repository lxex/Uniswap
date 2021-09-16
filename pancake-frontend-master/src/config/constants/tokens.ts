import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wxos: new Token(
    MAINNET,
    '0xf449f6a4560c60d3856afcc23d4a2e39c16e6dcd',
    18,
    'XOS',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  eros: new Token(
    MAINNET,
    '0x48b978a8250678f95663e8fbe3a1339fcd4fe943',
    18,
    'EROS',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  god: new Token(
    MAINNET,
    '0x99dfa8964e635ebdbe347b02422083bfc3f20da0',
    18,
    'GOD',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  usdt: new Token(
    MAINNET,
    '0x98a3d8d7f90dd73cba99b3b1315f5bc9d96280c6',
    18,
    'USDT',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
}


export const testnetTokens = {
  wxos: new Token(
    TESTNET,
    '0xf449f6a4560c60d3856afcc23d4a2e39c16e6dcd',
    18,
    'XOS',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  eros: new Token(
    TESTNET,
    '0x48b978a8250678f95663e8fbe3a1339fcd4fe943',
    18,
    'EROS',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  god: new Token(
    TESTNET,
    '0x99dfa8964e635ebdbe347b02422083bfc3f20da0',
    18,
    'GOD',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
  usdt: new Token(
    TESTNET,
    '0x98a3d8d7f90dd73cba99b3b1315f5bc9d96280c6',
    18,
    'USDT',
    'Wrapped XOS',
    'https://www.binance.com/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
