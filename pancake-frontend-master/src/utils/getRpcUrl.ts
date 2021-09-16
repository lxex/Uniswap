import sample from 'lodash/sample'
// update 20210914
// Array of available nodes to connect to
// export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const nodes = ['https://mainnet.eros.fund']

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
