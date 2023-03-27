import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';



function PrivacyPage() {
    return (
      <div>
          <Navigation />


          <div className='w-full text-center pt-20'>

            <h2 className="text-3xl pt-20 font-extrabold text-gray-900 sm:text-5xl">
                Privacy And Policy
            </h2>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                At Sustain, we take your privacy seriously. This privacy policy explains 
                how we collect, use, and disclose personal information in connection with 
                our platform. By using our platform, you consent to the collection, use, and 
                disclosure of your personal information in accordance with this policy.
            </p>
        
        
            <h2 className="text-lg pt-20 font-extrabold text-gray-900 sm:text-5xl">
                Information we collect
            </h2>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               We collect personal information that you provide to us, such as your name,
            email address, and payment information when you register for an account, donate
            to an action, or communicate with us. We also collect information about your activities
            on our platform, such as the actions you champion and the funds you contribute.
            </p>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of 
                    Lorem Ipsum.
            </p>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of 
                    Lorem Ipsum.
            </p>


            </div>


          <Footer />
        </div>
    )

}

export default PrivacyPage
