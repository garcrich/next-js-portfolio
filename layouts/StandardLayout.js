import React from 'react'
//import Meta from '../partials/Meta'
import '../styles.scss'
import Nav from '../partials/Nav'
import MobileNav from '../partials/MobileNav'
import Footer from '../partials/Footer'
import $ from 'jquery'

export default class Layout extends React.Component {

    state = {
        isNotMobile: true
    }

    resetMobileNav() {
        document.getElementById("mobileNav").classList.remove("is-shown")
        document.getElementById("mobileNavIcon").classList.remove("toggle-mobile-icon")
    }


    componentDidMount() {
        const foundation = require('foundation-sites');
        $(document).foundation();

        window.addEventListener('resize', ()=> {
            if (window.innerWidth > 400 && document.getElementById("mobileNav").classList.contains("is-shown") == true) {
                this.resetMobileNav();
            }
        })
    }
    
    
    render(props) {
        return (
                <div className={this.props.fullPageExtend === "true" ? 
                "full-page-extend" : ""}>
                    <Nav navIsStatic={this.props.navIsStatic}/>
                    <MobileNav navIsStatic={this.props.navIsStatic} navMobile={this.state.isMobile}/>
                    {this.props.children}
                    <Footer removeCTApadding={this.props.removeCTApadding} />
                </div>
        )
    }
}