import navStyles from '../styles/Home.module.css'

const Navbutton = ({ tabTitle }) => {
    return (
        <div>
            <button className={navStyles.navbutton}>{tabTitle}</button>
        </div>
    )
}

export default Navbutton
