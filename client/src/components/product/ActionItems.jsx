import { Box, Button,makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const useStyle = makeStyles({
    leftContainer:{
        padding:'40px 0 0 80px'
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:2
    }
    ,
    addTocart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }
})

const ActionItems = ({product}) =>{
    const classes = useStyle();
    return(
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} />
            <Button variant="contained" className={clsx(classes.button,classes.addTocart)}><ShoppingCartIcon/> Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button,classes.buyNow)}><FlashOnIcon/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems;

