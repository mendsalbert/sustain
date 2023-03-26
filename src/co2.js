import React, { useState, useEffect } from 'react'
import CO2Storage from '@co2-storage/js-api'

function App() {
    const [auth, setAuth] = useState(null)
    const [template, setTemplate] = useState(null)
    const [asset, setAsset] = useState(null)
    const [searchResults, setSearchResults] = useState(null)
    const [searchPhrase, setSearchPhrase] = useState('')
    const [projectCid, setProjectCid] = useState('')

    // Authenticate user with private key
    useEffect(() => {
        async function authenticate() {
            try {
                const authResponse = await CO2Storage.Auth.authenticate({
                    type: 'pk',
                    key: 'YOUR_PRIVATE_KEY'
                })
                setAuth(authResponse.result)
            } catch (error) {
                console.error(error)
            }
        }
        authenticate()
    }, [])

    // Create project template
    async function createTemplate() {
        const templateData = {
            type: 'project',
            attributes: {
                name: 'Sustain Project',
                location: 'New York City',
                carbonToRemove: 1000
            }
        }
        const addTemplateResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'http://localhost:5001',
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
            'http://localhost:5001',
            'https://api.co2.evercity.io/v0/'
        ).addAsset(assetData, 'Sustain Asset', 'Sustain Asset')
        setAsset(addAssetResponse)
    }

    // Search for templates and projects
    async function search() {
        const searchResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'http://localhost:5001',
            'https://api.co2.evercity.io/v0/'
        ).searchTemplates({ phrases: searchPhrase })
        setSearchResults(searchResponse.result.templates)
    }

    // Retrieve specific project template
    async function getTemplate(cid) {
        const getTemplateResponse = await new CO2Storage.FGStorage(
            auth,
            'js-ipfs',
            'http://localhost:5001',
            'https://api.co2.evercity.io/v0/'
        ).getTemplate(cid)
        setProjectCid(cid)
        setTemplate(getTemplateResponse.result)
    }

    return (
        <div>
            <h1>Sustain</h1>
            <div>
                <h2>Create a Project</h2>
                <button onClick={createTemplate}>Create Project</button>
                {template && (
                    <div>
                        <h3>Project Template:</h3>
                        <p>{JSON.stringify(template)}</p>
                    </div>
                )}
            </div>
            <div>
                <h2>Add a Contribution</h2>
                {template && (
                    <div>
                        <label>
                            Select a Project:
                            <select onChange={(e) => getTemplate(e.target.value)}>
                                {searchResults &&
                                    searchResults.map((template) => (
                                        <option key={template.cid} value={template.cid}>
                                            {template.metadata.name}
                                        </option>
                                    ))}
                            </select>
                        </label>
                        <br />
                        <button onClick={addAsset}>Add Contribution</button>
                        {asset && (
                            <div>
                                <h3>Contribution Asset:</h3>
                                <p>{JSON.stringify(asset)}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                <h2>Search for Projects</h2>
                <label>
                    Search Phrase:
                    <input type="text" value={searchPhrase} onChange={(e) => setSearchPhrase(e.target.value)} />
                </label>
                <br />
                <button onClick={search}>Search</button>
                {searchResults && (
                    <div>
                        <h3>Search Results:</h3>
                        <ul>
                            {searchResults.map((template) => (
                                <li key={template.cid}>
                                    <button onClick={() => getTemplate(template.cid)}>{template.metadata.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
