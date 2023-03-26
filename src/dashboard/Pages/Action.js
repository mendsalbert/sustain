import React, { useState, useRef } from 'react'
import PartialNavbar from '../partials/PartialNavbar'
import Sidebar from '../partials/Sidebar'
import GooglePlacesAutocomplete from 'react-google-autocomplete'
import { FaPlusCircle } from 'react-icons/fa'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import { Web3Storage } from 'web3.storage'
import TransactionStatus from '../../components/TransactionStatus'
import { createProject } from '../../utils/queries'

function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0ZGU4NTUwMjAxMTdENDIyY0IxOTRBREJiZERlOTJGZjBkYzkxNzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjIyMDkwNzQ1NjUsIm5hbWUiOiJNb3ZlciJ9.04qLL5Jvrb2ZrrL3Mdpe-zMVmXVGuxroEAl_DwUT97E'
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

function Action({ projects }) {
    const [showModal, setShowModal] = useState(false)
    const [supportimage1, setSupportImage1] = useState(``)
    const [supportimage2, setSupportImage2] = useState(``)
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [location, setlocation] = useState({
        // lat: location.geometry.location.lat() || '',
        // lng: location.geometry.location.lat() || ''
    })
    console.log(projects)

    //

    const [name, setname] = useState('')
    const [country, setcountry] = useState('')
    const [description, setdescription] = useState('')
    const [amount, setamount] = useState('')
    const [deadline, setdeadline] = useState('')
    const [txPending, setTxPending] = useState(false)

    const handleSelect = (location) => {
        setSelectedLocation(location)
    }
    const hiddenFileSupport2 = useRef(null)

    const handleClick4 = () => {
        hiddenFileSupport2.current.click()
    }

    async function onsubmitHandler() {
        setTxPending(true)
        let value = await createProject(
            name,
            country,
            description,
            String(location.lat),
            String(location.lng),
            amount,
            deadline,
            supportimage2
        )
        console.log(value)
        setTxPending(false)
    }
    async function handleChange4(event) {
        const supportUploaded2 = event.target.files[0]
        setSupportImage2(URL.createObjectURL(event.target.files[0]))
        const client = makeStorageClient()
        const cid = await client.put([supportUploaded2])
        console.log('stored files with cid:', cid)

        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
            throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }

        const supports2 = await res.files()
        setSupportImage2(`https://${cid}.ipfs.dweb.link/${supportUploaded2.name}`)
        console.log(supportimage1)
        console.log(supportUploaded2)
        for (const file of supports2) {
            console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
        }
        return cid
    }

    console.log(supportimage2)

    return (
        <div className="text-black">
            <>
                <div className="flex flex-auto">
                    <Sidebar />
                    <div className="grow">
                        <PartialNavbar />

                        <div className="m-5">
                            <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                                    <div className="sm:justify-between sm:items-center sm:flex">
                                        <div className="text-center sm:text-left">
                                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                                Welcome Back, Brilliant!
                                            </h1>

                                            <p className="mt-1.5 text-sm text-gray-900">
                                                Check your statistics on SUSTAIN 🎉
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>

                        <div className="p-8">
                            <a
                                onClick={() => setShowModal(true)}
                                data-role="smoothscroll"
                                className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring"
                                href="#nothing"
                            >
                                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                                <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                                    Upload Action
                                </span>
                            </a>
                        </div>

                        {showModal ? (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed pt-10 inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-xl font-semibold">Upload Action</h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative space-y-4 p-6 flex-auto">
                                                <p className="text-md font-medium">Name</p>

                                                <div>
                                                    <label className="sr-only" for="title">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="w-full rounded-lg  text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                                        placeholder="eg. Enter title"
                                                        type="text"
                                                        id="title"
                                                        name={name}
                                                        onChange={(e) => {
                                                            setname(e.target.value)
                                                        }}
                                                    />
                                                </div>

                                                <p className="text-md font-medium">Country</p>

                                                <div>
                                                    <label className="sr-only" for="country">
                                                        Country
                                                    </label>
                                                    <input
                                                        className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                                        placeholder="eg. Enter country"
                                                        type="text"
                                                        id="country"
                                                        name={country}
                                                        onChange={(e) => {
                                                            setcountry(e.target.value)
                                                        }}
                                                    />
                                                </div>

                                                <p className="text-md font-medium">Description</p>

                                                <div>
                                                    <label className="sr-only" for="description">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                                        placeholder="eg. give every other details"
                                                        rows="5"
                                                        id="description"
                                                        name={description}
                                                        onChange={(e) => {
                                                            setdescription(e.target.value)
                                                        }}
                                                    ></textarea>
                                                </div>
                                                <div className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm">
                                                    <ReactGoogleAutocomplete
                                                        apiKey="AIzaSyBm9Nzcxl0-DO_d5Sn3vevvJZOwzd8bPRM"
                                                        onSelect={handleSelect}
                                                        onPlaceSelected={(place) =>
                                                            setlocation({
                                                                lat: place.geometry.location.lat(),
                                                                lng: place.geometry.location.lng()
                                                            })
                                                        }
                                                    />
                                                </div>

                                                <p className="text-md font-medium">Targeted CarbonOffset</p>

                                                <div>
                                                    <label className="sr-only" for="amount">
                                                        Amount
                                                    </label>
                                                    <input
                                                        className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                                        placeholder="10 CO2e"
                                                        type="number"
                                                        id="amount"
                                                        name={amount}
                                                        onChange={(e) => {
                                                            setamount(e.target.value)
                                                        }}
                                                    />
                                                </div>

                                                <p className="text-md font-medium">Targeted CarbonOffset</p>

                                                <div>
                                                    <label className="sr-only" for="amount">
                                                        Deadline
                                                    </label>
                                                    <input
                                                        className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                                        placeholder="10 CO2e"
                                                        type="datetime-local"
                                                        id="amount"
                                                        name={deadline}
                                                        onChange={(e) => {
                                                            setdeadline(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                                <div className="mx-2 border-dotted border-2 border-green-700 justify-center">
                                                    <div className="grid grid-rows-2 justify-center">
                                                        <div
                                                            onClick={handleClick4}
                                                            className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                                                        >
                                                            <span className="text-sm font-medium">Upload Image </span>
                                                            <FaPlusCircle className="mx-2" />
                                                        </div>
                                                        <input
                                                            type="file"
                                                            ref={hiddenFileSupport2}
                                                            onChange={handleChange4}
                                                            style={{ display: 'none' }}
                                                            accept=".png,.jpg,.jpeg"
                                                        />
                                                        <p className="m-2">PNG, JPG, JPEG up to 5MB</p>
                                                    </div>
                                                    {supportimage2 && (
                                                        <iframe
                                                            className="relative m-auto mb-3"
                                                            src={supportimage2}
                                                            accept=".png,.jpg,.jpeg"
                                                        ></iframe>
                                                    )}
                                                </div>
                                                <div className="group w-full relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600">
                                                    <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                                                        <svg
                                                            className="h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                            />
                                                        </svg>
                                                    </span>

                                                    <span
                                                        onClick={() => {
                                                            onsubmitHandler()
                                                        }}
                                                        className="text-sm font-medium transition-all group-hover:ml-4"
                                                    >
                                                        Submit
                                                    </span>
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                        <div className="p-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            Title
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            Country
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            Description
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            targetCarbonOffset
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            carbonOffsetRemoved
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            totalDonationsReceived
                                        </th>
                                        <th className="p-3 font-bold uppercase text-gray-600 border-b hidden lg:table-cell">
                                            Image
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((items, index) => (
                                        <tr
                                            index={index}
                                            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                                        >
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border-b block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    Title
                                                </span>
                                                {items.name}
                                            </td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    Country
                                                </span>
                                                <a className="text-green-600 hover:text-blue-600 pl-6">
                                                    {items.country}
                                                </a>
                                            </td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    Description
                                                </span>
                                                {items.description}
                                            </td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    TargetCarbonOffset
                                                </span>
                                                <span className="rounded py-1 px-3 text-xl font-bold">
                                                    {items.targetCarbonOffset.toString()} CO2e
                                                </span>
                                            </td>

                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    CarbonOffsetRemoved
                                                </span>
                                                <span className="rounded py-1 px-3 text-xl font-bold">
                                                    {items.carbonOffsetRemoved.toString()} CO2e
                                                </span>
                                            </td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                                    TotalDonations Received
                                                </span>
                                                <span className="rounded py-1 px-3 text-xl font-bold">
                                                    {items.totalDonationsReceived.toString()}
                                                </span>
                                            </td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 border-b text-center block lg:table-cell relative lg:static">
                                                <img src={items.imageCID} width={30} height={30} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {txPending && <TransactionStatus />}
            </>
        </div>
    )
}

export default Action
