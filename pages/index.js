import React from 'react'
import Head from 'next/head'
import Page from '../layouts/StandardLayout'
import Link from 'next/link'
import HeroHome from '../partials/HeroHome'
import FourColIcon from '../partials/FourColIcon'
import Projects from '../partials/TwoColRow'
import ContactCta from '../partials/ContactCta'


export default class standardPage extends React.Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Ricky Garcia Web Developer</title>
                    <meta name="description" content="Ricky Garcia is a web developer and designer living in Boise, Idaho. He's worked on multiple sites for small, medium, and large businesses."></meta>
                </Head>
                <Page>
                    <HeroHome />
                    <FourColIcon
                        header="My Skillset"
                        icon1="fas fa-code"
                        icon1Text="Web Dev"
                        icon2="fas fa-pencil-alt"
                        icon2Text="Design"
                        icon3="fab fa-adversal"
                        icon3Text="Marketing"
                        icon4="fab fa-youtube"
                        icon4Text="Video"
                        button="See Skills"
                        btnWidth="125px"
                        href="/skills"
                    />
                    <div className="full-bg-div">
                        <div className="grid-container container-padding">
                            <div className="text-center">
                                <h2>Work History</h2>
                                <p className="char-max-width char-max-width--center">I've been working in web development for years. Positions I’ve held include eServices specialist, social media manager, and frontend web developer. By joining these experiences together, I’m able to produce a stronger, more cohesive product.</p>
                            </div>
                            <div className="button-wrapper">
                                <Link href="/work-history">
                                    <a className="button button--main">View Work History</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Projects
                        header="Things I've Built"
                        para="Here you’ll find real world examples of social media marketing, video production, and web development."
                        href="/projects"
                        buttonText="See Projects"
                        image="../static/index/Things_Ive_built.jpg"
                        altText="PhotoShop mockup"
                    />

                    <ContactCta
                        title="Get in touch"
                        paragraph="Have a project in mind? Want me to speak at your event? Require consulting on a current development?"
                        button="send message"
                    />
                </Page>
            </div>
        );
    }
}