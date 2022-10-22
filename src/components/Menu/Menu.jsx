import './Menu.css'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/tumblr.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faVideoCamera,faGamepad,faUsers,faCrown,faDiamond,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {useEffect,useState} from 'react' 

const Menu = () => {

    const [isExpandedMenu,setExpansionMenu] = useState(false)


    return (
        <div className="menu flex column" style={{width:isExpandedMenu ? '200px' : '60px',minWidth:isExpandedMenu ? '200px' : ''}}>
           <div className='box-1 bg-primary flex column pa-md'>
                <div className='logo flex justify-center mb-sm'>
                    <img src={Logo} alt="logo" style={{width: isExpandedMenu ? '' : '50px'}}/>
                </div>
                <nav className='mt-lg'>
                    <ul className='flex column'>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faHome} className="mr-md"/>
                                {isExpandedMenu ? 'Homepage' : ''}
                            </a>
                        </li>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faVideoCamera} className="mr-md"/>
                                {isExpandedMenu ? 'Category' : ''}
                            </a>
                        </li>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faGamepad} className="mr-md"/>
                                {isExpandedMenu ? 'Gaming' : ''}
                            </a>
                        </li>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faUsers} className="mr-md"/>
                                {isExpandedMenu ? 'Friends' : ''}
                            </a>
                        </li>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faDiamond} className="mr-md"/>
                                {isExpandedMenu ? 'Get Bits' : ''}
                            </a>
                        </li>
                        <li className="mb-md">
                            <a href="/#" className='flex items-center text-light nowrap  text-decoration-none text-bold'>
                                <FontAwesomeIcon fontSize={16} icon={faCrown} className="mr-md"/>
                                {isExpandedMenu ? 'Prime' : ''}
                            </a>
                        </li>
                    </ul>
                </nav>
           </div>
           <div className='box-2 bg-secondary flex column'>
                <div className="box-button-menu flex justify-center position-relative">
                    <div className="icon-button-menu cursor-pointer flex items-center justify-center bg-secondary text-white" onClick={() => setExpansionMenu(!isExpandedMenu)}>
                        <FontAwesomeIcon fontSize={20} icon={!isExpandedMenu ? faAngleRight : faAngleLeft} />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Menu