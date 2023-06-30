
import Head from "next/head"
import { Box } from '@mui/material'

const App = (props) => {
    const { Component, pageProps } = props

    console.log(props)

    return (
        <>
            <Head>
                <title>{`ŞikayetVar Task`}</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <Box>
                <Component />
            </Box>


        </>
    )
}


export default App