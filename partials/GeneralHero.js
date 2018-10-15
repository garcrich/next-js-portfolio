import Link from 'next/link'

export default (props) => {
    return (
        <div className={`general-hero__container ${props.BgClass}`}>
            <div className="general-hero__content">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                {
                    props.cta &&
                    <Link href="/contact">
                        <a className="cta">{props.cta}</a>                
                    </Link>
                }
            </div>
        </div>
    )
}