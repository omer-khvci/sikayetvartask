import { Avatar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, createSvgIcon } from "@mui/material"
import styled from "@emotion/styled"
import FileChartIcon from "@/icon/FileChartIcon";
import SlidersIcon from "@/icon/SlidersIcon";
import BookmarkIcon from "@/icon/BookmarkIcon";
import GraduationCapIcon from "@/icon/GraduationCapIcon";
import HomeLgIcon from "@/icon/HomeLgIcon";
import PaymentIcon from "@/icon/PaymentIcon";
import SignOutIcon from "@/icon/SignOutIcon";
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


    return <Box display={'flex'}>
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
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end",
                            marginLeft: "25px",
                            marginTop:"5px"
                        }}><HomeLgIcon /> </ListItemIcon>
                        <ListItemText primary="Home" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end",
                            marginLeft: "25px",
                            marginTop:"5px"
                        }}><BookmarkIcon /> </ListItemIcon>

                        <ListItemText primary="Course" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end",
                            marginLeft: "25px",
                            marginTop:"5px"
                        }}><GraduationCapIcon /> </ListItemIcon>
                        <ListItemText primary="Students" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end",
                            marginLeft: "25px",
                            marginTop:"5px"
                        }}><PaymentIcon /> </ListItemIcon>
                        <ListItemText primary="Payment" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                           textAlign: "center",
                           justifyContent:"end",
                           marginLeft: "25px",
                           marginTop:"5px"
                        }}> <FileChartIcon /> </ListItemIcon>
                        <ListItemText primary="Report" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end",
                            marginLeft: "25px",
                            marginTop:"5px"
                        }}><SlidersIcon /> </ListItemIcon>
                        <ListItemText primary="Settings" sx={{
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal"
                        }} />
                    </ListItemButton>
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
                            justifyContent:"start",
                            marginTop:"5px"
                        }}><SignOutIcon /> </ListItemIcon>
                    </ListItemButton>
                </List>
            </Box>
        </Box>
        <Box sx={{ width: 'calc(100% - 270px)' }}>
            {children}
        </Box>
    </Box>
}

export default UserLayout