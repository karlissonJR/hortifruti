import { Link } from 'react-router-dom'

import './styles.css'

function Header(props) {
    return (
        <div className="header">
            <div className="productListLink">
                <Link to="/" className="link">Lista de Produtos {props.menu}</Link>
            </div>
            <div className="shoppingCartLink">
                <Link to="/shopping_cart" className="link">Carrinho de Compras {props.menu}</Link>
            </div>
        </div>
    )
}

export default Header