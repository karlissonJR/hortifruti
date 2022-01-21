import './styles.css'

function Card(props) {

    return (
        <div className="card">
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                <ul>
                    <li>Gênero: {props.body.genus}</li>
                    <li>Família: {props.body.family}</li>
                    <li>Ordem: {props.body.order}</li>
                    <li>Carboidratos: {props.body.nutritions.carbohydrates}g</li>
                    <li>Proteína: {props.body.nutritions.protein}g</li>
                    <li>Gordura: {props.body.nutritions.fat}g</li>
                    <li>Calorias: {props.body.nutritions.calories}g</li>
                    <li>Açúcar: {props.body.nutritions.sugar}g</li>
                </ul>
            </main>

            <footer>
                <button type="button">Adicionar ao carrinho</button>
            </footer>
        </div>
    )

}

export default Card;