const hre = require('hardhat')

async function main() {
    const [deployer] = await hre.ethers.getSigners()

    console.log('Deploying contracts with the account:', deployer.address)

    let txHash, txReceipt

    //XSWAP contract deployement
    const SUSTAIN = await hre.ethers.getContractFactory('Sustain')
    const sustain = await SUSTAIN.deploy()
    await sustain.deployed()
    txHash = sustain.deployTransaction.hash
    txReceipt = await ethers.provider.waitForTransaction(txHash)
    let sustainAddress = txReceipt.contractAddress
    console.log('SUSTAIN Contract Address', sustainAddress)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
