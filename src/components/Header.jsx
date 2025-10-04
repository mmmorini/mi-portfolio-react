import './Header.css';

function Header() {
    return(
        <header className="app-header">
            <div className="header-container">
                <div className="logo">MM</div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#sobre-mi">Sobre mí</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;