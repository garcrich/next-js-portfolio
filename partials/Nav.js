import Link from 'next/link'

export default (props) => {
    return (
        <ul className={`medium-horizontal menu ${props.navIsStatic === 'true' ? 'staticNav' : null}`}>

            <li id="mobileNavIcon" className="hamburger-icon" data-toggle="mobileNav mobileNavIcon" data-toggler=".toggle-mobile-icon">
                <i className="fas fa-bars"></i>
                <i className="far fa-times-circle"></i>
            </li>
            <Link href="/index">
            <li className="nav-menu__logo-container"><a><i className="fi-list"></i> <span className="nav-menu__logo">RG</span></a></li>
            </Link>

            <span className="nav-menu__items">
            
            <Link href="/skills">
                <li><a><i className="fi-list"></i> <span>Skills</span></a></li>
            </Link>

            <Link href="/work-history">
                <li><a><i className="fi-list"></i> <span>Work History</span></a></li>
            </Link>

            <Link href="/projects">
                <li><a><i className="fi-list"></i> <span>Projects</span></a></li>
            </Link>

            <Link href="/contact">
                <li><a><i className="fi-list"></i> <span>Contact</span></a></li>
            </Link>
            </span>
        </ul>
    )
}