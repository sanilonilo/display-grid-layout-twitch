import './Content.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Header from './Header/Header'
import SectionTitle from './SectionTitle/SectionTitle'
import Shorts from './Shorts/Shorts'
import Games from './Games/Games'

const Content = () => {
    return (
        <div className="contents flex column bg-dark1 pa-md">
            <Header/>
            <div className="flex items-center justify-between mb-lg">
                <SectionTitle name="Recommended for you" />
                <div className="flex navs-angle-page text-white nowrap">
                    <div className="nav bg-dark2 flex items-center justify-center mr-sm">
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </div>
                    <div className="nav bg-dark2 flex items-center justify-center">
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                </div>
            </div>
            <div>
            <Shorts/>
            </div>
            <div className="flex nowrap items-center justify-between mt-md mb-lg">
                <SectionTitle name="Top Games" />
                <div className="more-games">
                    <button className="text-white bg-dark2 cursor-pointer">More games</button>
                </div>
            </div>
            <Games/>
        </div>
    )
}

export default Content