import { Link } from 'react-router-dom'

import { ProductListLink, ShoppingCartLink } from '../HeadersLink'

import './styles.css'

function Header(props) {
    return (
        <div className="header">
            <ProductListLink menu={props.menu}>
                <Link to="/" className="link">Lista de Produtos</Link>
            </ProductListLink>
            <ShoppingCartLink menu={props.menu}>
                <Link to="/shopping_cart" className="link">Carrinho de Compras</Link>
            </ShoppingCartLink>
        </div>
    )
}

export default Header