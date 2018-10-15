export default () => {
    return (
        <div className="grid-container container-padding projects">
            <div className="grid-x align-center grid-padding-x">
            <div className="cell medium-12 large-5">
                <h2 className="primary-color mobile-center">Things I've Built</h2>
                <p className="primary-color mobile-center">Here you’ll find real world examples of social media marketing, video production, and web development.</p>
                {props.buttonText === undfined ? null : props.buttonLink === undfined ? null :  
                    <div className="button-wrapper">
                        <a className="button button--main projects-btn-center">{props.buttonText}</a>
                    </div>

                }
            </div>
            <div className="cell medium-12 large-5">
                <img className="projects-img-center" src="../static/index/Things_Ive_built.jpg" alt=""/>
            </div>
            </div>
        </div>
    )
}