import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; //"baseUrl": "./src" em tsconfig.json
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="ds-movie-nav-content">
                    <Link to={"/"}><h1>DSMovie</h1></Link>
                    <a href="https://github.com/pcamposaugusto" rel="noreferrer" target="_blank">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/pcamposaugusto</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;