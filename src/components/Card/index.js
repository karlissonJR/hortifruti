import './styles.css'

import { Button } from '@material-ui/core'
import { Card, CardContent, CardActionArea, CardActions, Typography, CardHeader } from '@mui/material'
import { Close } from '@mui/icons-material'


function FruitCard(props) {

    const sendToCart = () => {

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]))
        }

        const cart = JSON.parse(localStorage.getItem('cart'))

        const isOnCart = cart.find(fruit => {
            return fruit.id === props.fruit.id
        })

        if (isOnCart) {
            cart[cart.indexOf(isOnCart)].quantity++
        } else {
            props.fruit.quantity = 1
            cart.push(props.fruit)
        }
        
        localStorage.setItem('cart', JSON.stringify(cart))

        props.onClick()
    }

    return (
        <Card sx={{ maxWidth: 300 }}>
            
            <header>
                <CardHeader title={props.title}/>
            </header>

            <CardContent>
        
                <Typography variant="body2" color="text.primary">
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
                </Typography>
            </CardContent>
        
            <footer>
                <Button onClick={sendToCart} variant="contained" color="secondary">Adicionar ao carrinho</Button>
            </footer>
        </Card>
    )

}

export default FruitCard;