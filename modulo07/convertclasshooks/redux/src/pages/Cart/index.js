import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductTABLE, Total } from './styles';

export default function Cart() {

    const total = useSelector(state => formatPrice(state.cart.reduce((totalsum, product) => {
        return totalsum + product.price * product.amount;
    }, 0)
    ))

    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        SubTotal: formatPrice(product.price * product.amount)
    })))

    const dispatch = useDispatch()

    function increment(product) {

        dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))

    }

    function decrement(product) {

        dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))

    }

    return (

        <Container>
            <ProductTABLE>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>SubTotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image}
                                    alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => decrement(product)}>
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>

                                    <input type="number" readOnly value={product.amount} />

                                    <button type="button" onClick={() => increment(product)}>
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.SubTotal}</strong>
                            </td>
                            <td>
                                <button type="button" onClick={() =>
                                    dispatch(CartActions.removeFromCart(product.id))}>
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTABLE>

            <footer>
                <button type="button">Finalizar Pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container >

    )

}

