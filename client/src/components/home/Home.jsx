import {Box, makeStyles} from '@material-ui/core';
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from './slide.js';
import MidSection from './MidSection';

import { products } from  '../../constants/data.js'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  { getProducts as listProducts} from  '../../redux/actions/productActions';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%'
    }
})

const Home = () => {
    const classes =useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    
    const { products }= useSelector(state => state.getProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
    <div>
        <Navbar/>
        <Box className= {classes.component}>
            <Banner/>
            <Box style={{display: 'flex'}}>
                <Box style={{width: '83%' }}>
                    <Slide
                        timer={true}
                        title="Deal of the day"
                        products={products}
                    />
                </Box>
                <Box className={classes.rightWrapper}>
                    <img src ={adURL} style={{width: 230, height:'auto' }}/>
                </Box>
            </Box>
            <MidSection/>
            <Slide
                        timer={false}
                        title="Suggested items"
                        products={products}
            />
            <Slide
                        timer={false}
                        title="Best Sellers"
                        products={products}
            />
            <Slide
                        timer={false}
                        title="Discounts for you"
                        products={products}
            />
        </Box>
        
        </div>
    )
}

export default Home;