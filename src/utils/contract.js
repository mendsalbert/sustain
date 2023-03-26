import { ethers } from 'ethers'
import Sustain from './Sustain.json'
export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window

    if (ethereum) {
        const signer = provider.getSigner()
        const contractReader = new ethers.Contract('0x87E0a681711b86249c615d8803808ACdD838AF20', Sustain.abi, signer)
        return contractReader
    }
}
