import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';

import CartItem from './CartItem';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px'
    },
    leftComponent: {
        width: '67%'
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    }
})

const Cart = () => {
    const classes =useStyle();
    const { cartItems } = useSelector(state => state.cart);

    const dispatch =useDispatch();
    useEffect(()=>{
        console.log(cartItems);
    })

    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id));
    }

    return (
        <>
            {
                cartItems.length ?
                <Box className = {classes.component}>
                    <Box className = {classes.leftComponent}>
                        <Box className = {classes.header}>
                            <Typography style={{fontWeight: 600, fontSize: 18}} >My Cart ({cartItems.length})</Typography>
                        </Box>
                        {
                            cartItems.map(item=>(
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    </Box>
                    <Box className = {classes.rightComponent}>

                    </Box>
                    <p>Hello Value</p>
                </Box>

                : <p>Empty</p>
            }
        </>
    )
}

export default Cart;