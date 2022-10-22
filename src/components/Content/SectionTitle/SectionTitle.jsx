import './SectionTitle.css'

const SectionTitle = props => {
    return (
        <div className="section-title text-bold text-white">
            <h3>{props.name}</h3>
        </div>
    )
}

export default SectionTitle