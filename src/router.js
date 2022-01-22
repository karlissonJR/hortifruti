import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProductList from './pages/ProductList'
import ShoppingCart from './pages/ShoppingCart'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<ProductList />} />
                <Route path="shopping_cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router