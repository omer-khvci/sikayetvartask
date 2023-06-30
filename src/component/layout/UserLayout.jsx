import { Avatar, Box, Typography } from "@mui/material"
import styled from "@emotion/styled"
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
                    width: "219px",
                    height: "150px",
                    flexShrink: "0",
                    margin : "22px",
                    marginTop:"36px"
                }}
            />
        </Box>
        <Box sx={{ width: 'calc(100% - 270px)' }}>
            {children}
        </Box>
    </Box>
}

export default UserLayout