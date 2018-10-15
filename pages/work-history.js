import React from 'react'
import Page from '../layouts/StandardLayout'
import Head from 'next/head'
import Job from '../partials/TwoColRow'
import ContactCta from '../partials/ContactCta'
import GeneralHero from '../partials/GeneralHero'

export default class standardPage extends React.Component {

    render() {
        return (
            <div>
                <Head>
                <title>Ricky Garcia | Work History</title>
                <meta name="description" content="Ricky Garcia has worked for Micron CPG, Idaho Central Credit Union, and more."/>
                </Head>
                <Page>
                    <GeneralHero
                        title="Work History"
                        subtitle="Learn about my professional background"
                        BgClass="hero__work"
                        cta="Work with me"
                    />

                    <Job
                    background="bg-white"
                    header="Micron Consumer Products Group" 
                    para="RS&amp;I hired me to handle their frontend web development and web design needs."
                    accomplishments="Produced and designed frontend assets for Micron Consumer Products Group domestic, regional, and international sites. Identify site(s) issues and address with workable solutions with strict time constraints. Communicated across multiple departments and time zones to produce desired solutions. Operated Content Management Systems and eCommerce tools for site(s) production. 
                    "
                    buttonText="Visit Crucial"
                    externalSite="true"
                    href="https://www.crucial.com/"
                    image="../static/work-history/crucial.jpg"
                    altText="Crucial Homepage"
                    />
                    
                    <Job   
                    textOrder="large-order-1"
                    header="RS&amp;I" 
                    para="RS&amp;I hired me to handle their frontend web development and web design needs."
                    accomplishments="Website redesign and architect restructure using HTML, SCSS, jQuery, and ASP.net
                    Landing page creation and form data collection single page application using HTML, SCSS,
                    jQuery, AJAX, and MongoDB
                    Email template development for Mailchimp email campaigns created with HTML, CSS, and MailChimp’s templating language.
                    Maintained HubSpot Marketing portal."
                    buttonText="Visit RS&amp;I"
                    externalSite="true"
                    href="https://blog.rsiinc.com/get-to-know-rsi.-were-here-to-help-small-businesses-succeed"
                    image="../static/work-history/rsi_blog.jpg"
                    altText="RS&amp;I Blog"
                    />

                    <Job
                        background="bg-white"
                        header="Stuart's Media Group" 
                    para="My role at Stuart’s Media Group was to drive social awareness which would lead to an increase in business. Targeted ads, organic growth, photography, graphic design, and video production were all used to achieve this goal. I also provided WordPress Website Design for clients."
                    accomplishments="Managed over 20 social media accounts
                    Created two WordPress sites with custom HTML and CSS,
                    Published over 1,500 social media posts."
                    buttonText="Visit Stuart's"
                    externalSite="true"
                    href="https://www.stuartsmedia.com/"
                    image="../static/work-history/stuarts.jpg"
                    altText="Stuart's Media Group Homepage"
                    />

                    <Job
                    textOrder="large-order-1"
                    header="Idaho Central Credit Union" 
                    para="Provided Support for online services including, website navigation, online profile management, mobile banking, and electronic Bill Pay. Other responsibilities included email correspondence live chat assistance, and phone support."
                    accomplishments="Provided webinar training on Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Outlook. Redesigned the internal Frequently Asked Questions manual. 
                    Created custom email templates that reduced responses times.
                    "
                    buttonText="Visit ICCU"
                    externalSite="true"
                    href="https://www.iccu.com/"
                    image="../static/work-history/iccu.jpg"
                    altText="Stuart's Media Group Homepage"
                    />

                    <ContactCta title="What Can I Build For Your Company?"
                        paragraph="Need a new website? How about sprucing up your current site? Need to get the word out on your amazing product? I can help you out."
                        button="Chat With Me" />
                </Page>
            </div>
        );
    }
}