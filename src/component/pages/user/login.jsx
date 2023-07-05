import useAuth from "@/hooks/useAuth"
import styled from "@emotion/styled"
import { Box, Button, FormControl, InputBase, InputLabel, Link, TextField, alpha } from "@mui/material"
import { useRouter } from "next/router"
import Typography from '@mui/material/Typography';
import { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

const LoginBox = styled(Box)(({ theme }) => ({
    background: `linear-gradient(49deg, #FEAF00 0%, #F8D442 100%);`,
    width: '100%',
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const LoginCard = styled(Box)(({ theme }) => ({
    width: '475px',
    height: '550px',
    background: '#FFF',
    flexShrink: "0",
    borderRadius: "20px",
    boxShadow: "2px 5px 10px 0px rgba(0, 0, 0, 0.10)"
}))

const LoginHeader = styled(Box)(({ theme }) => ({
    paddingTop: "44px",
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const HeaderDivider = styled(Box)(({ theme }) => ({
    width: '3px',
    height: '30px',
    display: 'inline-block',
    background: "#F8D442",
    marginRight: '10px'
}))

const schema = yup.object().shape({
    email: yup
      .string()
      .email("Geçerli bir e-posta girmelisiniz")
      .required("Bir e-posta girmelisiniz"),
    password: yup
      .string()
      .required("Lütfen Şifrenizi Giriniz")
      .min(4, "Şifreniz kısa - lütfen 4  karakterli şifrenizi giriniz."),
  });



const Login = () => {
    const auth = useAuth()
    const router = useRouter()
    const [form, setForm] = useState({ userName: '', password: '' })


    const login = async () => {

        const response = await auth.login({ userName: form.userName, password: form.password });

        if (response === true && form.userName!= "" && form.password !="") {
            await auth.init();
            router.replace('/')
        }else{
            toast.error("Please Enter Your Email And Password")
        }

    }

    return <LoginBox sx={{}}>

        <LoginCard sx={{}}>

            <LoginHeader >
                <HeaderDivider />
                <Typography sx={{
                    fontSize: '32px',
                    fontFamily: 'Montserrat',
                    color: '#000',
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    textAlign: "center",
                    display: 'inline-block'


                }} component={'h3'} variant="body2"  >MANAGE COURSES</Typography>
            </LoginHeader>

            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="body" component={'p'} sx={{
                    color: "#000",
                    fontSize: "22px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    textTransform: "uppercase",

                }}>SIGN IN</Typography>
                <Typography variant="body" sx={{
                    color: '#6C6C6C',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                }}>Enter your credentials to access your account</Typography>
            </Box>


            <Box sx={{ marginTop: '50px', p: 4, w: 100 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <Typography sx={{
                        color: '#6C6C6C',
                        fontSize: '14px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                    }}>Email</Typography>
                    <TextField id="email" placeholder="Enter your email" type="email" required onChange={e => setForm({ ...form, userName: e.target.value })}
                        inputProps={{
                            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'
                        }}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <Typography sx={{
                        color: '#6C6C6C',
                        fontSize: '14px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                    }}>Password</Typography>
                    <TextField type="password" id="password" required placeholder="Enter your password" onChange={e => setForm({ ...form, password: e.target.value })} />
                </FormControl>

                <Button onClick={login} fullWidth sx={{
                    color: 'white',
                    background: 'linear-gradient(49deg, #FEAF00 0%, #F8D442 100%)'
                }}>SIGN IN</Button>
            </Box>
            <Box textAlign={'center'}>
                <Typography sx={{
                    color: '#6C6C6C',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                }}>
                    Forgot your password? <Link sx={{ color: '#FEAF00' }}
                    > Reset Password</Link>
                </Typography>
            </Box>
        </LoginCard>


    </LoginBox >
}


export default Login