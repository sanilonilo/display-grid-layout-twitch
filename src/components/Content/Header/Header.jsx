import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faDiamond,faAngleDown,faCrown,faBell,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Avatar from '../../../assets/images/tumblr.jpg'
import './Header.css' 
 
const Header = () => {
    return (
        <header className="header flex items-center justify-between nowrap mb-lg">
            <div className="search flex nowrap items-center">
                <div className="input-box bg-dark2 pl-sm pr-sm flex items-center nowrap">
                    <div className="icon">
                        <FontAwesomeIcon icon={faSearch} className="text-white ml-sm"/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Search streamers" className="text-white text-bold ml-sm"/>
                    </div>
                </div>
                <div className="link ml-sm pa-sm  bg-primary flex items-center justify-center text-white">
                    <a href="/#" className="text-white text-bold flex items-center">
                        <FontAwesomeIcon icon={faDiamond} className="text-white mr-sm"/>
                        Get Bites
                    </a>
                </div>
            </div>
            <div className="actions-header flex nowrap items-center">
                <div className="info-user flex nowrap items-center mr-md">
                    <div className=" flex column mr-sm">
                        <span className="name text-white">Gabi Alves</span>
                        <span className="status text-primary">online</span>
                    </div>
                    <div className="avatar mr-sm">
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="text-grey">
                        <FontAwesomeIcon icon={faAngleDown} fontSize={16}/>
                    </div>
                </div>
                <div className="action flex items-center justify-center position-relative text-white ">
                    <FontAwesomeIcon icon={faCrown} fontSize={16}/>
                    <div className="notify position-absolute bg-notify flex items-center justify-center">1</div>
                </div>
                <div className="action flex items-center justify-center position-relative text-white ">
                    <FontAwesomeIcon icon={faBell} fontSize={16}/>
                </div>
                <div className="action flex items-center justify-center position-relative text-white ">
                    <FontAwesomeIcon icon={faEnvelope} fontSize={16}/>
                </div>

            </div>
        </header>
    )
 }

 export default Header