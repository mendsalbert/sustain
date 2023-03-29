import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';



function FaqPage() {
    return (
      <div>
          <Navigation />

          <div className='w-full pt-20'>

            <div className='mx-4 my-8 text-center'>
                <h2 className='text-4xl font-bold uppercase'>Frequently Asked Questions</h2>
            </div>

            <div className='mx-4 mb-4'>

            <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                        What is Sustain?
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    Sustain is a platform that empowers individuals to take concrete action to reduce carbon 
                    footprints in their communities. Users can champion actions, solicit funds, and undertake 
                    real-world projects that help reduce greenhouse gas emissions and contribute to a more sustainable future.
                    </p>
                </details>

                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                        How does Sustain work?
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    Users can sign up for Sustain and browse a variety of actions that have been championed by other members 
                    of the community. They can read about the specific carbon offset goals of each action and decide whether 
                    they want to contribute funds to help make it happen. Once an action has received enough funds to proceed, 
                    the user who championed it can undertake the project and report back to the community on its progress.
                    </p>
                </details>

                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                        What kind of actions can be championed on Sustain?
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    Any action that helps reduce greenhouse gas emissions and contributes to a more sustainable future can
                    be championed on Sustain. Examples include planting trees, organizing community clean-ups, installing 
                    energy-efficient light bulbs, and more.
                    </p>
                </details>

                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                        How is the impact of each action tracked?
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    Sustain is built on the XDC blockchain, a secure and decentralized ledger that allows users to track
                    the progress of each action and verify that their funds are being used for their intended purpose. This 
                    level of transparency is essential to building trust and ensuring that community members can feel confident 
                    that their contributions are making a real impact
                    </p>
                </details>

                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                        How can I get involved with Sustain?
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    If you are passionate about protecting the planet and want to make a tangible difference in your community,
                    we invite you to sign up for Sustain today. You can browse existing actions, champion your own actions, and 
                    contribute funds to help make them happen. With Sustain, you can be part of a growing movement of individuals
                    who are taking action to reduce their carbon footprint and create a more sustainable future for all.
                    </p>
                </details>

                
                </div>

</div>


          </div>


          <Footer />

        </div>
    )
    }

export default FaqPage
