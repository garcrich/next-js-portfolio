import Link from 'next/link'

export default (props) => {
    return (
        <div className={props.background}>
            <div className="grid-container container-padding">
                <div className="grid-x grid-padding-x grid-margin-x">
                    <div className={`cell mobile-center ${!props.textOrder && "large-offset-1"} large-5 ${props.textOrder}`}>

                        <h3 className="pri-color">{props.header}</h3>
                        <p className="pri-color char-max-width char-max-width--center">
                            {props.para}
                        </p>
                        {props.accomplishments &&
                            <p className="pri-color">
                                Accomplishments:
                            </p>
                        }

                        {props.accomplishments &&
                            <p className="pri-color char-max-width">
                                {props.accomplishments}
                            </p>
                        }
                        


                        {props.buttonText === null ? null : props.externalSite === "true" ? 
                        <Link href={`${props.href}`}>
                            <a className="button button--main" target="_blank">{props.buttonText}</a> 
                        </Link> :
                        <a className="button button--main" href={`${props.href}`} >{props.buttonText}</a>
                        }
                    </div>
                    <div className={`cell  mobile-center ${props.textOrder && "large-offset-1"} large-6`}>
                        <img className="img-shadow" src={`${props.image}`} alt={`${props.altText}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}