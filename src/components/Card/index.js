import './styles.css'

function Card(props) {

    const sendToCart = () => {

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]))
        }

        const cart = JSON.parse(localStorage.getItem('cart'))

        cart.push(props.fruit)
        localStorage.setItem('cart', JSON.stringify(cart))

        // alert(props.fruit.name + ' adicionado ao carrinho')
    }

    return (
        <div className="card">
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                <ul>
                    <li>Gênero: {props.fruit.genus}</li>
                    <li>Família: {props.fruit.family}</li>
                    <li>Ordem: {props.fruit.order}</li>
                    <li>Carboidratos: {props.fruit.nutritions.carbohydrates}g</li>
                    <li>Proteína: {props.fruit.nutritions.protein}g</li>
                    <li>Gordura: {props.fruit.nutritions.fat}g</li>
                    <li>Calorias: {props.fruit.nutritions.calories}g</li>
                    <li>Açúcar: {props.fruit.nutritions.sugar}g</li>
                </ul>
            </main>

            <footer>
                <button onClick={sendToCart} type="button">Adicionar ao carrinho</button>
            </footer>
        </div>
    )

}

export default Card;