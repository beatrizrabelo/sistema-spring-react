
import logo from '../../assets/img/logo.svg';
import './styles.css';


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo" />
                <h1>Projeto</h1>
                <p>
                    Desenvolvendo para estudos.
                </p>
            </div>
        </header>
    )
}

export default Header;
