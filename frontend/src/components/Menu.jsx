import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link className="nav-link" to="/">Registrar vivienda</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/consulta_viviendas">Consulta viviendas</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
