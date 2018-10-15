import Link from 'next/link'

export default (props) => {
    return (
        <div className="grid-container cta-body text-center">
            <div className="grid-x grid-margin-x align-middle">
                <div className="cell large-offset-1 large-3">
                    <h3 className="upper-case">{props.title}</h3>
                </div>
                <div className="cell large-offset-1 large-3">
                    <p>{props.paragraph}</p>
                </div>
                <div className="cell large-offset-1 large-3">
                <Link prefetch href="/contact">
                    <a className="button button--main">{props.button}</a>
                </Link>
                </div>
            </div>
        </div>
    )
}