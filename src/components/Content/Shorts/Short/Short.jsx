import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import './Short.css'


const Short = props => {
    return (
        <div className="short-single text-primary mr-md" >
            <div className="bg-image mb-md " style={{backgroundImage:`url(${props.short.image})`}}>
                <div className="overlay text-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlayCircle} className="icon-play"/>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex column">
                    <span className="game text-white text-bolder">{props.short.name}</span>
                    <span className="views text-light">{props.short.views} views</span>
                </div>
                <div className="link">
                    <a href="/#" className="bg-primary text-bold text-white">Access</a>
                </div>
            </div>
        </div>
    )
}

export default Short