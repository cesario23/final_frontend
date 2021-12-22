import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout';
import FrogsList from '../components/frogsList'
import {fetchProducts} from '../fetchData'


const HomePage = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchProducts().then(
            productData => {
                setProductData(productData)
            }
        )
    }, []);

    return (
        <Layout>
            <Box sx={{ height: "500px" }}>
                <FrogsList products={productData} />
            </Box>

        </Layout>
    )
}

export default HomePage
