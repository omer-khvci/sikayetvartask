import styled from "@emotion/styled";
import { Avatar, Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/router";
const LogoHeader = styled(Box)(({ theme }) => ({
    paddingTop: "44px",
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const LogoLine = styled(Box)(({ theme }) => ({
    width: '3px',
    height: '30px',
    display: 'inline-block',
    background: "#F8D442",
    marginRight: '10px'
}))


const UserLayout = ({ children }) => {
    const router = useRouter()
    const { pathname } = router





    const list = [

        {
            name: 'Home',
            icon: 'home-lg-alt-1.svg',
            path: '/home'
        },
        {
            name: 'Course',
            icon: 'bookmark-1.svg'
        },
        {
            name: 'Students',
            icon: 'graduation-cap-1.svg',
            path: '/students'
        },
        {
            name: 'Payment',
            icon: 'usd-square-1.svg'
        },
        {
            name: 'Report',
            icon: 'file-chart-line-1.svg'
        },
        {
            name: 'Settings',
            icon: 'sliders-v-square-1.svg'
        }
    ]


    return (<Box display={'flex'}>
        <Box sx={{ width: '270px', background: '#F2EAE1;', height: '100vh' }}>
            <LogoHeader >
                <LogoLine />
                <Typography sx={{
                    fontSize: '20px',
                    fontFamily: 'Montserrat',
                    color: '#000',
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    textAlign: "center",
                    display: 'inline-block'


                }} component={'h3'} variant="body2"  >MANAGE COURSES</Typography>
            </LogoHeader>
            <Avatar
                src="/img/avatar.png"
                sx={{
                    width: "150px",
                    height: "150px",
                    flexShrink: "0",
                    marginTop: "36px",
                    marginLeft: "60px",
                    background: "lightgray 50% / cover no-repeat"

                }}
            />
            <Box sx={{
                textAlign: "center",
                marginTop: "16px"
            }}>
                <Typography sx={{
                    fontSize: '17px',
                    fontFamily: 'Montserrat',
                    color: '#000',
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    display: 'inline-block'


                }} component={'h3'} variant="body2"  >John Doe</Typography>
            </Box>
            <Box sx={{
                textAlign: "center",
                marginTop: "10px"
            }}>
                <Typography sx={{
                    color: "#FEAF00",
                    fontSize: "14px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal"


                }} component={'h3'} variant="body2"  >Admin</Typography>
            </Box>
            <Box sx={{
                marginTop: "50px"
            }}>
                <List>
                    {
                        list.map((item, index) => (
                            <ListItemButton key={index} sx={{
                                textAlign: "center",
                                background: pathname === item.path ? '#FEAF00' : ''
                            }}>
                                <ListItemIcon sx={{
                                    textAlign: "center",
                                    justifyContent: "end",
                                    marginLeft: "25px",
                                }}>
                                    <img src={`img/${item.icon}`} alt={item.name} />

                                </ListItemIcon>
                                {/* Yazı Fontu ayarlanacak TODO*/}
                                <ListItemText primary={item.name} sx={{
                                    color: "#000",
                                    fontSize: "14px",
                                    fontFamily: "Montserrat",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "normal"
                                }} />
                            </ListItemButton>
                        ))
                    }

                </List>

            </Box>

            <Box sx={{
                textAlign: "center",
                marginTop: "70px"
            }}>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>

                        <ListItemText primary="Logout" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent: "start",
                        }}>

                            <img src="/img/sign-out-alt-1.svg" alt="" />
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Box>
        </Box>
        <Box sx={{
            width: 'calc(100% - 270px)',
            background: pathname === '/students' ? '#F8F8F8' : '#FDFDFD'

        }}>
            <Box sx={{
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                background:"#FDFDFD"

            }}>
                <IconButton sx={{
                    marginLeft: "30px",
                    marginTop: "5px"
                }}>
                    <img src="/img/caret-circle-down-1.svg" alt="" /></IconButton>
                <IconButton sx={{
                    marginRight: "30px",
                    marginTop: "5px"
                }}>
                    <img src="/img/bell-1.svg" alt="" />
                </IconButton>
            </Box>
            <Box sx={{
                marginTop: "30px",

            }}>{children}</Box>

        </Box>
    </Box>)
}

export default UserLayout