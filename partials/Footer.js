import Link from 'next/link'

const FooterLink = (props) => (
    <li className="footer-link">
        <Link href={props.href}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const FooterSocialIcon = (props) => (
    <a href={`${props.href}`} target="_blank" className="cell medium-1 small-2 text-center">
        <i className={`fab ${props.icon} footer-social-icon`}></i>
    </a>
)

export default (props) => {
    return (
        <div>
            <footer className={`${props.removeCTApadding === "true" ? "removedCTA" : ""}`}>
                <ul className="social-icons">
                    <FooterSocialIcon href="https://www.youtube.com/channel/UCul78U9NKBYHyqnhQfqUXmg" icon="fa-youtube" />
                    <FooterSocialIcon href="https://twitter.com/RickyGarciaDev" icon="fa-twitter" />
                    <FooterSocialIcon href="https://github.com/garcrich" icon="fa-github" />
                    <FooterSocialIcon href="https://www.linkedin.com/in/rickygarciawebdev" icon="fa-linkedin-in" />
                </ul>

                <ul className="grid-x align-center no-bullet">
                    <FooterLink href="/skills" title="skills"/>
                    <FooterLink href="/work-history" title="work history" />
                    <FooterLink href="/projects" title="projects" />
                    <FooterLink href="/contact" title="contact" />
                </ul>
            </footer>
        </div>
    )
}