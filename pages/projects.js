import React from 'react'
import Page from '../layouts/StandardLayout'
import Head from 'next/head'
import Project from '../partials/TwoColRow'
import ContactCta from '../partials/ContactCta'
import GeneralHero from '../partials/GeneralHero'

export default class standardPage extends React.Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Ricky Garcia | Projects</title>
                    <meta name="description" content="From complete redesign and development of sites to sharing his experiences on YouTube, Ricky has quite always has something to share."/>
                </Head>
                <Page>
                    <GeneralHero
                        title="I Build things"
                        subtitle=""
                        BgClass="hero__projects"
                        cta="What can I build for you?" />

                    <Project
                        background="bg-white"
                        header="RS&amp;I website"
                        para="I was tasked with redesigning the front-facing website. Objectives included: improve maintainability, mobile responsiveness, modernizing the design while retaining original look and feel."
                        buttonText="See Site"
                        externalSite="true"
                        href="https://www.rsiinc.com/home/index.asp"
                        image="../static/projects/rsi-website.jpg"
                        altText="RS&amp;I website"
                    />

                    <Project
                        textOrder="large-order-1"
                        header="Zollinger Racing Products"
                        para="I was tasked with redesigning the front-facing website. Objectives were: improved maintainability, mobile responsiveness, and modernizing the look of the site while retaining it’s original look and feel."
                        buttonText="See Site"
                        externalSite="true"
                        href="https://www.zollingerracingproducts.com/"
                        image="../static/projects/zollinger_racing_products.jpg"
                        altText="Zollinger Racing Products Website"
                    />

                    <Project
                        header="Original React Portfolio"
                        background="bg-white"
                        para="The purpose of this project was to make full use of all of my skills from content creation, markting, photography, web design, and web development. This project also gave me a place to showcase my body of work. I've since improved on this and built the portfolio you're viewing right now!"
                        buttonText="See project"
                        externalSite="true"
                        href="https://garcia-portfolio.herokuapp.com"
                        image="../static/projects/react-portfolio.jpg"
                        altText="original react portfolio site"
                    />

                    <Project
                        textOrder="large-order-1"
                        header="YouTube Channel"
                        para="I've documented my journey as a web developer and shared my tips along the way. See e-learning platform reviews, coding challengs, livestreams, Q&amp;As and more."
                        buttonText="View channel"
                        externalSite="true"
                        href="https://www.youtube.com/channel/UCul78U9NKBYHyqnhQfqUXmg"
                        image="../static/projects/youtube.jpg"
                        altText="Ricky Garcia's YouTube channel"
                    />


                    <ContactCta title="Ready to start your project?"
                        paragraph="I'm ready to dig deep into my arsenal of skills, techniques to help you achieve your goals. Send me a line to get the ball rolling."
                        button="Contact me"
                    />
                </Page>
            </div>
        );
    }
}