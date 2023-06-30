
import Head from "next/head"
import { Box, ThemeProvider } from '@mui/material'
import { AuthProvider } from "@/context/AuthContext"
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';

const theme = unstable_createMuiStrictModeTheme();

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
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <Component />
                    </ThemeProvider>
                </AuthProvider>
            </Box>


        </>
    )
}


export default App