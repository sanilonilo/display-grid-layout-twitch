import Menu from '../../components/Menu/Menu'
import Content from '../../components/Content/Content'
import './Home.css'

const Home = () => {
    return (
        <div className='flex nowrap'>
            <Menu />
            <Content/>
        </div>
    )
}

export default Home