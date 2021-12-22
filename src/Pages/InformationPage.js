import React from 'react'
import Layout from '../components/Layout'

const InformationPage = (props) => {
    const{products} = props;

    console.log(products)
    return (
        <Layout>
        <div>
         THIS IS THE INFORMATION PAGE   
        </div>
        </Layout>
    )
}

export default InformationPage

