import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';



function TermsPage() {
    return (
      <div>
          <Navigation />


          <div className='w-full text-center pt-20'>

            <h2 className="text-3xl pt-20 font-extrabold text-gray-900 sm:text-5xl">
                Terms And Conditions
            </h2>
        </div>
        

            <div className="text-start">
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                Welcome to Sustain, a platform that connects individuals with like-minded 
                users who are passionate about reducing carbon footprints in their communities. 
                By using our platform, you agree to the following terms and conditions:
            </p>

             <h4 className="text-lg mx-auto max-w-5xl pt-10 font-extrabold text-gray-900 sm:text-5xl">
                User Conduct
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               Sustain is a community-driven platform that relies on the contributions of its users
                to create a more sustainable future. We ask that all users conduct themselves in a respectful
                and responsible manner when using our platform. This includes refraining from posting offensive 
                or abusive content, soliciting funds for fraudulent or illegal activities, or engaging in any behavior 
                that violates our community standards.
            </p>
        
        <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
                Championing Actions
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               Users who wish to champion an action on Sustain must provide accurate and truthful information about the
                proposed project, including the expected carbon offset goals and the estimated cost of the project. 
                Once an action has been championed, the user may solicit funds from other members of the community to 
                help bring the project to fruition.
            </p>

             <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
                Contributing Funds
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               Users who contribute funds to an action on Sustain must do so in good faith and with the understanding that
                their contributions will be used to offset carbon emissions in a specific community. Sustain does not guarantee 
                that any action will be fully funded, and users who contribute funds do so at their own risk.
            </p>
        
        <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
                Undertaking Actions
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
              Users who champion an action on Sustain are responsible for undertaking the project in a safe and responsible manner,
                and for reporting back to the community on the progress of the project. Sustain is not responsible for any damages or 
                injuries that may result from the undertaking of a project.
            </p>
        
        <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
                XDC Testnet
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
              In order to perform an activity on the Sustain platform, users must add XDC Testnet to their Metamask wallet.
            </p>
        
        <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
                Intellectual Property
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
              All content and intellectual property on the Sustain platform, including but not limited to text, graphics, logos, 
               and software, are the property of Sustain and may not be used or reproduced without our prior written consent.
            </p>
        
         <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
               Liability
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
              Sustain is not responsible for any damages or losses that may result from the use of our platform, including but 
                not limited to lost profits, data loss, or personal injury. Users assume all risk and liability for their use of our platform.
            </p>
        
         <h4 className="text-lg pt-10 mx-auto max-w-5xl font-extrabold text-gray-900 sm:text-5xl">
               Privacy
            </h4>
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
              Sustain is committed to protecting the privacy of our users. We will never sell or share user data with third parties without 
               the user's explicit consent.
            </p>


            </div>


          <Footer />
        </div>
    )

}

export default TermsPage
