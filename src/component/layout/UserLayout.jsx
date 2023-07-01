import { Avatar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import styled from "@emotion/styled"
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
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
                marginTop: "80px"
            }}>
                <List>
                    <ListItemButton sx={{
                        textAlign: "center"
                    }}>
                        <ListItemIcon sx={{
                            textAlign: "center",
                            justifyContent:"end"
                        }}><HomeIcon /> </ListItemIcon>
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
                            justifyContent:"end"
                        }}><BookmarkBorderOutlinedIcon /> </ListItemIcon>

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
                            justifyContent:"end"
                        }}><SchoolOutlinedIcon /> </ListItemIcon>
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
                            justifyContent:"end"
                        }}><LocalAtmOutlinedIcon /> </ListItemIcon>
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
                            justifyContent:"end"
                        }}><HomeIcon /> </ListItemIcon>
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
                            justifyContent:"end"
                        }}><HomeIcon /> </ListItemIcon>
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
        </Box>
        <Box sx={{ width: 'calc(100% - 270px)' }}>
            {children}
        </Box>
    </Box>
}

export default UserLayout