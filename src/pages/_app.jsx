
import UserLayout from "@/component/layout/UserLayout";
import { AuthProvider } from "@/context/AuthContext";
import { Box, ThemeProvider } from '@mui/material';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = unstable_createMuiStrictModeTheme();

const App = (props) => {
    const { Component, pageProps } = props

    const getLayout = Component.Layout ?? (page => <UserLayout >{page}</UserLayout>)

   


    return (
        <>
            <Head>
                <title>{`ŞikayetVar Task`}</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
                <link rel="icon" type="image/x-ico" href="/img/sikayetVar.ico" />
            </Head>
            <Box>
                <AuthProvider>
                    <ThemeProvider theme={theme}>

                      
                        {getLayout(<Component {...pageProps} />)}
                        <ToastContainer />
                    </ThemeProvider>
                </AuthProvider>
            </Box>


        </>
    )
}


export default App