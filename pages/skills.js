import React from 'react'
import Page from '../layouts/StandardLayout'
import Head from 'next/head'
import FourColIcon from '../partials/FourColIcon'
import ContactCta from '../partials/ContactCta'
import GeneralHero from '../partials/GeneralHero'

export default class standardPage extends React.Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Ricky Garcia | Skills</title>
                    <meta name="description" content="Ricky Garcia is versed in HTML5, CSS, JavaScript, Web Design, React.js, and more."/>
                </Head>
                <Page>
                    <GeneralHero
                        title="I get things online"
                        subtitle="Skills to get your idea off the ground"
                        BgClass="hero__skills"
                        cta="ready to start?" />
                    <div className="grid-container container-padding">
                        <div className="grid-x">
                            <div className="cell medium-12 text-center">
                                <h2 className="pri-color text-center">Web Development</h2>
                                <p className="pri-color char-max-width char-max-width--center">
                                    Getting things on the web can be hard. Marking them to look great is harder. I use a combination of design and development to get the job done right. I’ve honed my skills to deliver the best experience, where it be on a desktop computer or a smartphone.
                                </p>
                            </div>

                            <div className="cell small-12 medium-12">
                                <div className="grid-x grid-padding-y text-center four-col ">
                                    <div className="cell small-4">
                                        <i className="fab fa-html5"></i>
                                        <h4>HTML5</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fab fa-css3-alt"></i>
                                        <h4>CSS</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fab fa-sass"></i>
                                        <h4>SCSS</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fab fa-js"></i>
                                        <h4>JavaScript</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fab fa-react"></i>
                                        <h4>React</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <img className="four-col" src="../static/skills/jQuery-white.png" alt="" />
                                        <h4>jQuery</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fas fa-database"></i>
                                        <h4>mongoDB</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fab fa-node-js"></i>
                                        <h4>node.js</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <img className="four-col" src="../static/skills/express.png" alt="" />
                                        <h4>express.js</h4>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <a href="" className="button button--main skills-btn">See Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-div-bg">
                        <FourColIcon
                            header="Marketing"
                            para="Developing is only half the story. Crafting the right message for your audience, optimizing your content for SEO, careful interpretation of your results, and acting on those results requires a completely different set of tools."
                            icon1="far fa-file-alt"
                            icon1Text="Copywriting"
                            icon2="far fa-thumbs-up"
                            icon2Text="Social Media"
                            icon3="fas fa-chart-area"
                            icon3Text="Analytics"
                            icon4="fab fa-searchengin"
                            icon4Text="SEO"
                        />
                    </div>

                    <div className="grid-container container-padding">
                        <div className="grid-x">
                            <div className="cell medium-12 text-center">
                                <h2 className="pri-color">Content Creation</h2>
                                <p className="pri-color char-max-width char-max-width--center">
                                    I’ve taken the time to learn the tools give you the ability to share your message with the world and had a blast doing it. But it doesn’t’ come easy, content creation requires a multitude of skills. Here’s my tool set.
                                </p>
                            </div>

                            <div className="cell medium-12">
                                <div className="grid-x grid-padding-y text-center four-col">
                                    <div className="cell small-4">
                                        <i className="far fa-file-video"></i>
                                        <h4>Video</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fas fa-camera-retro"></i>
                                        <h4>Photography</h4>
                                    </div>
                                    <div className="cell small-4">
                                        <i className="fas fa-pen-fancy"></i>
                                        <h4>Design</h4>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                </div>
                            </div>
                        </div>
                    </div>



                    <ContactCta title="Need my expertise?"
                        paragraph="I'm ready to dig my toolbox to help you achieve your goals. Send me a line to get the ball rolling."
                        button="reach out" />
                </Page>
            </div>
        );
    }
}