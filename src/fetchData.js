import { sliderClasses } from "@mui/material";


const frogsList =[
    {
        id: "1",
        title: "green-frog",
        origin: "colombia",
        price: 329,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VuP7O5UwkhvhWKzD7uqFlAHaEK%26pid%3DApi&f=1",
        description: "this is the description of the product"
    
    },
    {
        id: "2",
        title: "green-frog",
        origin: "brazil",
        price: 425,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TjQeR68pu_hfT7Z2383txAHaE8%26pid%3DApi&f=1",
        description: "this is the description of the product"
    

    },
    {
        id: "3",
        title: "green-frog",
        origin: "mexico",
        price: 546,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q2zTtB1CY0ElN7MbgXKR5QHaLG%26pid%3DApi&f=1",
        description: "this is the description of the product"

    },
    {
        id: "4",
        title: "green-frog",
        origin: "asia",
        price: 756,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tY_uOfi-niJR9WPV5z4CrgHaFB%26pid%3DApi&f=1",
        description: "this is the description of the product"
    
    },
    {
        id: "5",
        title: "green-frog",
        origin: "guatemala",
        price: 623,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vHULupOq_iDMbZynj-1mNQHaE4%26pid%3DApi&f=1",
        description: "this is the description of the product"
    

    },
    {
        id: "6",
        name: "green-frog",
        origin: "colombia",
        price: 312,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lms5-R-tXWA3vt_gIHzffAHaE8%26pid%3DApi&f=1",
        description: "this the description of the product"
    
    },
]

export const fetchProducts = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        try{
            resolve(frogsList)
        }catch(error){
            reject(error)
        }
    }, 1000);
});