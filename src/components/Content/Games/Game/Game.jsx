import './Game.css'
import Avatar from '../../../../assets/images/tumblr.jpg'

const Game = props => {
    return (
        <div className="game flex column mb-md cursor-pointer">
            <div className="bg-image mb-sm" style={{backgroundImage:`url(${props.game.image})`}}></div>
            <span className="name text-white mb-sm">{props.game.name}</span>
            <span className="views text-light">{props.game.views} views</span>
        </div>
    )
}


export default Game