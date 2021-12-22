import FavoriteIcon from '@mui/icons-material/Favorite'
import {Card, CardActions, CardContent, CardHeader,
    CardMedia, IconButton, Typography
   } from '@mui/material';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom'
   
   
   const frogsList = (props) => {
       const {products } = props;
    

    
   
       return (
           <Box style={{display: "flex", flexWrap:"wrap", justifyContent: "space-around"}}>
               {products.map(product => (
                   <Box>
                       <Card sx={{maxWidth: 345}}>
                           <CardHeader
                            action = {
                                <Box>
                                    <Typography color="secondary" fontWeight="bold">
                                        $ {product.price /100}
                                    </Typography>
                                </Box>
                            }
                            title={product.title}
                            subheader={product.origin}
                           />
                           <Link to="information">
                           <CardMedia
                               component="img"
                               height="194"
                               image={product.image}
                               alt={product.title}
                           />
                           </Link>
                           <CardContent>
                               <Typography variant= "body2" color="text.secondary">
                                   {product.description}
                               </Typography>
                           </CardContent>
                           <CardActions >
                               <Box sx= {{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                   <Button variant="text"
                                   onClick={
                                       () => {}
                                   }
                                   >
                                       Add to cart                               
                                   </Button>
                                   <IconButton aria-label="add to favorites">
                                       <FavoriteIcon />
                                   </IconButton>
   
                               </Box>
                           </CardActions>
                       </Card>
                   </Box>
               ))}
           </Box>
       )
   }
   
   export default frogsList;
   