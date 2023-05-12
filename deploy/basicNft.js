const {network} = require('hardhat')
const {developmentChains} = require('../helper-hardhat-config')
const {verify} = require('../utils/verify')

module.exports = async function ({getNamedAccounts, deployments}) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = []
    const basicNft = await deploy("BasicNft", {
        from: deployer,
        args,
        log: true,
        waitConfirmations: network.config.blockConfimations || 1
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        console.log("验证中")
        await verify(basicNft.address, args)
    }
}