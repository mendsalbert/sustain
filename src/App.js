import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import React, { useEffect, useState, useRef } from 'react'
import ActionPage from './components/ActionPage'
import AboutPage from './components/AboutPage'
import SinglePage from './components/SinglePage'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'
import FaqPage from './components/Faq'
import Summary from './dashboard/Pages/Summary'
import Action from './dashboard/Pages/Action'
import Support from './dashboard/Pages/Support'
import { ethers } from 'ethers'
import Sustain from './utils/Sustain.json'
import { FGStorage, Auth } from '@co2-storage/js-api'

function App() {
    const [projects, setprojects] = useState([])

    const [auth, setAuth] = useState(null)
    const [template, setTemplate] = useState(null)
    const [asset, setAsset] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    const [searchPhrase, setSearchPhrase] = useState('')
    const [projectCid, setProjectCid] = useState('')

    // Authenticate user with private key

    // Create project template
    async function createTemplate() {
        const templateData = {
            type: 'project',
            attributes: {
                name: 'Sustain Project',
                location: 'Achimota',
                carbonToRemove: 1000
            }
        }
        const addTemplateResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'https://sustainsaveearth.netlify.app/',
            'https://api.co2.evercity.io/v0/'
        ).addTemplate(templateData, 'Sustain Project', 'Sustain Project')
        setTemplate(addTemplateResponse)
    }

    // Add asset to project
    async function addAsset() {
        const assetData = {
            type: 'contribution',
            attributes: {
                amount: 500
            },
            relationships: {
                project: {
                    data: {
                        type: 'project',
                        id: projectCid
                    }
                }
            }
        }
        const addAssetResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'https://sustainsaveearth.netlify.app/',
            'https://api.co2.evercity.io/v0/'
        ).addAsset(assetData, 'Sustain Asset', 'Sustain Asset')
        setAsset(addAssetResponse)
    }

    // Search for templates and projects
    async function search() {
        const searchResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'https://sustainsaveearth.netlify.app/',
            'https://api.co2.evercity.io/v0/'
        ).searchTemplates({ phrases: searchPhrase })
        setSearchResults(searchResponse.result.templates)
    }

    // Retrieve specific project template
    async function getTemplate(cid) {
        const getTemplateResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'https://sustainsaveearth.netlify.app/',
            'https://api.co2.evercity.io/v0/'
        ).getTemplate(cid)
        setProjectCid(cid)
        setTemplate(getTemplateResponse.result)
    }

    useEffect(() => {
        async function fetchData() {
            // Connect to the Ethereum network using MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const { ethereum } = window

            if (ethereum) {
                const signer = provider.getSigner()

                const sustainInstance = new ethers.Contract(
                    '0x87E0a681711b86249c615d8803808ACdD838AF20',
                    Sustain.abi,
                    signer
                )

                // Call the getAllLenders function to get the list of all lenders
                const allProjects = await sustainInstance.getAllProjects()
                console.log(allProjects.toString())
                setprojects(allProjects)
            }
        }
        fetchData()
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage projects={projects} />} />
                <Route path="/action" exact element={<ActionPage />} />
                <Route path="/about" exact element={<AboutPage />} />
                <Route path="/singlepage/:id" exact element={<SinglePage />} />
                <Route path="/termspage" exact element={<TermsPage />} />
                <Route path="/privacypage" exact element={<PrivacyPage />} />
                <Route path="/faqpage" exact element={<FaqPage />} />
                <Route path="/summary" exact element={<Summary />} />
                <Route path="/useraction" exact element={<Action projects={projects} />} />
                <Route path="/support" exact element={<Support />} />
            </Routes>
        </Router>
    )
}

export default App
