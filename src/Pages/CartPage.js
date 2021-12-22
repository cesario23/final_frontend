import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {useShoppingCart} from '../contex/contextProvider'
import ReplayIcon from '@mui/icons-material/Replay';
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () =>{

    
    const { shoppingCart, total, emptyCart } = useShoppingCart();

    console.log("this is shoppingCart", shoppingCart);
 
    const dispatch = useDispatch()

    const state = useSelector(state => state)

    if(shoppingCart.length < 1) {
        return (
            <Layout>
                theres no items to show here
            </Layout>
        )
    }

    return (
        <Layout>
            <button onCLick={() => dispatch({type: "change"})}>change state</button>
            {state.count}
            <Box>
                {shoppingCart.map(item =>
                    <Box key ={item.id} mb={4}>
                    
                    </Box>
                    
                    )}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
                <Box mb={2}>
                <Typography fontWeight="bold">
                    Total: $ {total/100}
                </Typography>
                </Box>
                <Box mb={2}>
                    <Button
                    variant="contained"
                    onClick={emptyCart}
                    startIcon={<ReplayIcon/>}
                    >
                    Empty Cart
                    </Button>
                </Box>
                <Box mb={2}>
                <Link to="/">
                  <Button variant= "contained">Back to home</Button>
                </Link>
                </Box>

            </Box>
        </Layout>
    )
}

export default CartPage;
