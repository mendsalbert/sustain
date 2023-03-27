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
        
        
            <h4 className="text-lg font-extrabold text-gray-900 sm:text-5xl">
                Information we collect
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               We collect personal information that you provide to us, such as your name,
            email address, and payment information when you register for an account, donate
            to an action, or communicate with us. We also collect information about your activities
            on our platform, such as the actions you champion and the funds you contribute.
            </p>
        
        <h4 className="text-lg font-extrabold text-gray-900 sm:text-5xl">
                How we use your information
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               We use your personal information to operate and improve our platform, to process your 
                donations and payments, and to communicate with you about your account and actions you 
                champion. We also use your information to send you updates about our platform and to inform 
                you about new actions that may be of interest to you.
            </p>
        
                <h4 className="text-lg font-extrabold text-gray-900 sm:text-5xl">
                How we share your information
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               We may share your personal information with third-party service providers that help us operate
                our platform, such as payment processors and hosting providers. We may also share your information
                with the user who champions an action that you contribute to, in order to enable them to undertake 
                the project and report back to the community. We may also share your information if required by law
                or if we believe that disclosure is necessary to protect our rights or the rights of others.
            </p>
        
         <h4 className="text-lg font-extrabold text-gray-900 sm:text-5xl">
                Security
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               We take reasonable measures to protect your personal information from unauthorized access and use. However,
            no data transmission over the Internet or electronic storage system can be guaranteed to be 100% secure, so we
            cannot guarantee the security of your information.
            </p>


            </div>


          <Footer />
        </div>
    )

}

export default PrivacyPage
