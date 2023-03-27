import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';



function AboutPage() {
    return (
      <div>
          <Navigation />

          <div className='w-full text-center pt-20'>

            <h2 className="text-3xl pt-20 font-extrabold text-gray-900 sm:text-5xl">
                About Sustain
            </h2>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
               At Sustain, we believe that individuals have the power to make a 
                real difference in the fight against climate change. That's why
                we've created a platform that empowers users to champion actions, 
                solicit funds, and undertake real-world projects that help reduce 
                carbon footprints in their communities.
            </p>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                Our platform is built on the principle that every action, no matter how small, 
                can have a meaningful impact on the environment. Whether it's planting a tree, 
                organizing a community clean-up, or installing energy-efficient light bulbs, 
                every action we take can help reduce greenhouse gas emissions and contribute 
                to a more sustainable future.
            </p>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                But we also recognize that many individuals and communities face barriers to 
                taking action. They may lack the financial resources to undertake a project, or 
                they may not know where to start. That's where Sustain comes in. By providing a 
                platform that connects users with like-minded individuals who are passionate about 
                the environment, we're making it easier for everyone to make a difference.
            </p>

            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                Here's how it works: users can sign up for Sustain and browse a variety of actions that 
                have been championed by other members of the community. They can read about the specific 
                carbon offset goals of each action, and decide whether they want to contribute funds to help
                make it happen. Once an action has received enough funds to proceed, the user who championed 
                it can undertake the project and report back to the community on its progress.
            </p>
        
            <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                But we don't stop there. At Sustain, we're committed to transparency and accountability. That's 
                why we've built our platform on the XDC blockchain, a secure and decentralized ledger that allows
                users to track the progress of each action and verify that their funds are being used for their intended 
                purpose. We believe that this level of transparency is essential to building trust and ensuring that our 
                community members can feel confident that their contributions are making a real impact.
            </p>
        
         <p className="mx-auto mt-4 text-gray-500 max-w-5xl">
                So if you're passionate about protecting the planet and want to make a tangible difference in your community,
                we invite you to join Sustain today. With our platform, you can be part of a growing movement of individuals 
                who are taking action to reduce their carbon footprint and create a more sustainable future for all.
            </p>


          </div>


          <Footer />
        </div>
    )

}

export default AboutPage
