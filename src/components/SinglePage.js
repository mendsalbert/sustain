import Navigation from './Navigation'
import Footer from './Footer'
import { ethers } from 'ethers'
import Sustain from '../utils/Sustain.json'
import forest from '../assets/forest.jpeg'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { donate } from '../utils/queries'
import TransactionStatus from './TransactionStatus'
function SinglePage() {
    const { id } = useParams()
    console.log(id)
    const [project, setproject] = useState('')
    const [projectName, setProjectName] = useState('')
    const [amount, setAmount] = useState(0)

    const [txPending, setTxPending] = useState(false)

    async function onsubmitHandler() {
        setTxPending(true)
        let value = await donate(id, amount)
        console.log(value)
        setTxPending(false)
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
                const allProject = await sustainInstance.getProjectById(id)
                console.log(allProject)
                setproject(allProject)
            }
        }
        fetchData()
    }, [])

    const greenIcon = new L.Icon({
        // iconUrl: markerIcon,
        // iconRetinaUrl: markerIcon2x,
        // shadowUrl: markerShadow,
        // iconSize: [25, 41],
        // iconAnchor: [12, 41],
        // popupAnchor: [1, -34],
        // shadowSize: [41, 41],
        iconUrl: 'https://i.ibb.co/5RF1YYp/carbon-footprint.png',
        iconSize: [50, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
    })
    // let lat_ = Number(project[3]) || 5.612781
    // let lng_ = Number(project[4]) || -0.234345
    let lat_ = Number(project[3]) || 5.612781
    let lng_ = Number(project[4]) || -0.234345

    console.log(lat_, lng_)
    const [viewport, setViewport] = useState({
        lat: lat_,
        lng: lng_,
        zoom: 10
    })
    const [location, setLocation] = useState({
        lat: lat_,
        lng: lng_
    })
    function handleMarkerClick(marker) {
        setSelectedMarker(marker)
        setCarbonOffset(marker.carbonOffset)
    }

    function calculateOffset(amount) {
        // The conversion factor from the user input to the amount of carbon offset to be removed
        const conversionFactor = 1000

        // Calculate the amount of carbon offset to be removed based on the user input
        const offsetToRemove = amount * conversionFactor

        // Return the calculated offset
        return offsetToRemove
    }

    function handleMapClick(event) {
        const { latlng } = event
        setLocation({
            lat: latlng.lat,
            lng: latlng.lng
        })
    }
    const [carbonOffset, setCarbonOffset] = useState(0)
    const [selectedMarker, setSelectedMarker] = useState(null)
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <Navigation />

            <div className="w-full pt-10">
                <section>
                    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                            <div className="relative lg:py-16">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                    <img
                                        alt="House"
                                        src={project[9]}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center bg-gray-100">
                                <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                    <h2 className="text-2xl font-bold sm:text-3xl">{project[0]}</h2>

                                    <div className="flex flex-row">
                                        <h2 className="text-xl px-2 font-bold sm:text-2xl">
                                            {project[6]?.toString()}/{project[5]?.toString()} Tonnes
                                        </h2>
                                        <h2>
                                            CO<sub>2</sub>e
                                        </h2>
                                    </div>

                                    <p className="mt-4 text-gray-600">{project[2]}</p>

                                    <details className="relative mt-4 group">
                                        <summary className="block">
                                            <div>
                                                <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                                                    Read More
                                                </span>
                                            </div>
                                        </summary>

                                        <div className="pb-6 prose max-w-none text-white">
                                            <p className="mt-4 text-gray-600">{project[2]}</p>
                                        </div>
                                    </details>

                                    <a
                                        href="#nothing"
                                        className="mt-8 w-full text-center inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Support
                                    </a>

                                    {showModal ? (
                                        <>
                                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                    {/*content*/}
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        {/*header*/}
                                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                            <h3 className="text-xl font-semibold">Filter Support</h3>
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
                                                        <div className="relative space-y-4 p-6 flex-auto ">
                                                            <p className="text-md font-medium">Enter Amout </p>
                                                            <p className="text-md font-medium">
                                                                {' '}
                                                                0.001 token = 1 unit of CarbonOffset to be Removed{' '}
                                                            </p>

                                                            <div>
                                                                <label className="sr-only" for="amount">
                                                                    Amount
                                                                </label>
                                                                <input
                                                                    className="w-full rounded-lg border-gray-200 shadow-md p-3 text-sm"
                                                                    placeholder="eg. 15 "
                                                                    type="number"
                                                                    id="amount"
                                                                    value={amount}
                                                                    onChange={(event) => setAmount(event.target.value)}
                                                                />
                                                                <p>
                                                                    Preview: {calculateOffset(amount)} units of offset
                                                                    will be removed
                                                                </p>
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
                                </div>
                                {txPending && <TransactionStatus />}
                            </div>
                        </div>
                    </div>
                    <MapContainer
                        center={[viewport.lat, viewport.lng]}
                        zoom={viewport.zoom}
                        scrollWheelZoom={false}
                        style={{ height: '100vh', width: '100vw' }}
                        onClick={handleMapClick}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        />
                        {location.lat && location.lng && (
                            <Marker position={[location.lat, location.lng]} icon={greenIcon}>
                                {' '}
                                <Popup>
                                    <div>
                                        <h3>{projectName}</h3>
                                        <p>Carbon Removed: {project[6]?.toString()} tons</p>
                                    </div>
                                </Popup>
                            </Marker>
                        )}
                        {selectedMarker && (
                            <Marker
                                position={[selectedMarker.lat, selectedMarker.lng]}
                                onClick={() => handleMarkerClick(selectedMarker)}
                            />
                        )}
                    </MapContainer>
                    {/*  */}
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default SinglePage
