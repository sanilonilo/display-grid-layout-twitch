import './Games.css'
import Game from './Game/Game'
import GamesData from '../../../data/Games'

const Games = () => {
    const generateGamesComponent = () => {
        return GamesData.map(item => {
            return <Game game={item} keyItem={item.id}/>
        })
    }
    return (
        <div className="games-container flex">
         {generateGamesComponent()}           
        </div>
    )
}


export default Games