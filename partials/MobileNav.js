import Link from 'next/link'

export default (props) => {
    return (
        <div
            className="mobile-nav"
            >
            <ul
                id="mobileNav"
                className={`vertical menu ${props.navIsStatic === 'true' ? 'z-index-reset' : ""}`}
                data-toggler=".is-shown">

                <li className="menu-item">
                <Link href="/index">
                    <a>Home</a>
                </Link>
                </li>


                <li className="menu-item">
                    <Link href="/skills">
                        <a>Skills</a>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link href="/work-history">
                        <a>Work History</a>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}