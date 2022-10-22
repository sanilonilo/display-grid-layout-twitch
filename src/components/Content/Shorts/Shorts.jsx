import './Shorts.css'
import Short from './Short/Short'
import ShortsData from '../../../data/Shorts'

const Shorts = () => {

   const generateShortsComponent = () => {
        return ShortsData.map(item => {
            return <Short keyItem={item.id} short={item}/>
        })
    }

    return (
        <div className="shorts flex nowrap mb-lg">
            <div className="flex nowrap">
                
                {generateShortsComponent()}
            </div>
        </div>
    )
}

export default Shorts