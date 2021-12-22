
import React, {Fragment} from 'react'
import { Box } from '@mui/system'
import { CssBaseline } from '@mui/material'
import Header from './Header/header'
import Footer from './Footer/footer'

const Layout = ({children}) => {
    return (
         <>
         <div>
            <CssBaseline />
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Box p={4} sx={{ flexGrow: 1, overflow: "auto"}}>
               {children}
            </Box>
            </Box>
          </div>
          <div>  
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Footer style={{background:"red"}}/>
            </Box>
          </div>
         </>
    )
}

export default Layout;
