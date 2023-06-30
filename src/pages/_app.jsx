
import Head from "next/head"
import { Box, ThemeProvider } from '@mui/material'
import { AuthProvider } from "@/context/AuthContext"
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import UserLayout from "@/component/layout/UserLayout";
import BlankLayout from "@/component/layout/BlankLayout";

const theme = unstable_createMuiStrictModeTheme();

const App = (props) => {
    const { Component, pageProps } = props

    const getLayout = Component.Layout ?? (page => <UserLayout >{page}</UserLayout>)



    return (
        <>
            <Head>
                <title>{`ŞikayetVar Task`}</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <Box>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                </AuthProvider>
            </Box>


        </>
    )
}


export default App