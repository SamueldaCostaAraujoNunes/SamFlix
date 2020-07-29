import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Logo.svg'
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo SamFlix" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;