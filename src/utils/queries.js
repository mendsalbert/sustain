import { BigNumber, ethers } from 'ethers'
import { contract } from './contract'
import { toEth } from './ether-utils'
export async function createProject(name, country, description, latitude, longitude, amount, deadline, imageCID) {
    try {
        // let tx = { value: toWei(amount) }
        // const amountInWei = ethers.utils.parseEther(amount)
        const contractObj = await contract()
        const unixTime = Math.floor(new Date(deadline).getTime() / 1000)

        const data = await contractObj.createProject(
            name,
            country,
            description,
            latitude,
            longitude,
            amount,
            unixTime,
            imageCID
        )

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        console.log(e)
        return parseErrorMsg(e)
    }
}

export async function swap(amount, fromToken, toToken) {
    try {
        let tx = { value: toWei(amount) }
        console.log('@@@@SUPPOSED AMOUNT IN WEI', fromToken, toToken)
        const amountInWei = ethers.utils.parseEther(amount)
        console.log('@@@@SUPPOSED AMOUNT IN WEI', amountInWei)

        const contractObj = await contract()
        const data = await contractObj.swap(fromToken, amountInWei, toToken)

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        return parseErrorMsg(e)
    }
}

export async function donate(id, amount) {
    try {
        let tx = { value: toWei(amount) }
        const amountInWei = ethers.utils.parseEther(amount)
        console.log(amountInWei)
        const contractObj = await contract()
        const data = await contractObj.donate(id, {
            value: amountInWei
        })

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        return parseErrorMsg(e)
    }
}

export async function schedulePayemnt(token, amount, timeInterval) {
    try {
        let tx = { value: toWei(amount) }

        const contractObj = await contract()
        const data = await contractObj.schedulePayment(token, tx, timeInterval)

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        return parseErrorMsg(e)
    }
}

export async function getPaymentHistory() {
    try {
        // let tx = { value: toWei(amount) }

        const contractObj = await contract()
        const data = await contractObj.getAllPaymentHistory()

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        return parseErrorMsg(e)
    }
}

export async function convert(tokenName, amount) {
    try {
        const contractObj = await contract()
        const data = await contractObj.convert(tokenName, toWei(amount))

        const receipt = await data.wait()
        return receipt
    } catch (e) {
        return parseErrorMsg(e)
    }
}

export async function getTokenBalance(tokenName) {
    const contractObj = await contract()
    const balance = contractObj.balance(tokenName)
    return balance
}

function toWei(amount) {
    const toWei = ethers.utils.parseUnits(amount.toString())
    // return toWei;
    return toWei
}

function parseErrorMsg(e) {
    const json = JSON.parse(JSON.stringify(e))
    return json?.reason || json?.error?.message
}
