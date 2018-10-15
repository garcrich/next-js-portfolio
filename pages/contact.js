import React from 'react'
import Head from 'next/head'
import Page from '../layouts/StandardLayout'

export default class standardPage extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Ricky Garcia | Contact</title>
                    <meta name="description" content="Want to get in touch? Send me a message." />
                </Head>
                <Page
                    navIsStatic="true"
                    removeCTApadding="true"
                    fullPageExtend="true"
                >
                    <div className="container-padding full-page-extend">
                        <div className="contact-form-container">
                            <div>
                                <h1 className="pri-color text-center contact-form-header">Ready to get your project off the ground? Send Me A Line.</h1>
                            </div>
                            <form className="contact-form">
                                <div className="grid-container">
                                    <div className="grid-x grid-padding-x">
                                        <div className="medium-6 cell">
                                            <label htmlFor="">
                                                <h4 className="primary-color">Name</h4>
                                                <input type="text"></input>
                                            </label>
                                        </div>
                                        <div className="medium-6 cell">
                                            <label htmlFor="">
                                                <h4 className="primary-color">Email</h4>
                                                <input type="text" ></input>
                                            </label>
                                        </div>
                                        <div className="medium-12 cell">
                                            <label htmlFor="">
                                                <h4 className="primary-color">Subject Line</h4>
                                                <input type="text"></input>
                                            </label>
                                        </div>
                                        <div className="medium-12 cell">
                                            <label htmlFor="">
                                                <h4 className="primary-color">Message</h4>
                                                <textarea name=""></textarea>
                                            </label>
                                            <button className="button button--main">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Page>

            </div>
        );
    }
}