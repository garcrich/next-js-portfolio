import Link from 'next/link';

export default (props) => {
    return (
        <div className="grid-container container-padding">
            <h2 className="pri-color text-center four-col-header">{props.header}</h2>
            {props.para && 
                    <p className="pri-color char-max-width char-max-width--center text-center">
                        {props.para}
                    </p>
            }
            <div className="grid-x grid-padding-y text-center four-col">
                <div className="cell small-6 medium-3">
                    <i className={`${props.icon1}`}></i>
                    <h4>{props.icon1Text}</h4>
                </div>
                <div className="cell small-6 medium-3">
                    <i className={`${props.icon2}`}></i>
                    <h4>{props.icon2Text}</h4>
                </div>
                <div className="cell small-6 medium-3">
                    <i className={`${props.icon3}`}></i>
                    <h4>{props.icon3Text}</h4>
                </div>
                <div className="cell small-6 medium-3">
                    <i className={`${props.icon4}`}></i>
                    <h4>{props.icon4Text}</h4>
                </div>
            </div>
            
            {props.button &&
                <div className="button-wrapper">
                    <Link href={`${props.href}`}>
                        <a className="button button--main">{props.button}</a>
                    </Link>
                </div>
            }
        </div>
    )
}