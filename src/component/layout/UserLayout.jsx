import { Box } from "@mui/material"

const UserLayout = ({ children }) => {


    return <Box display={'flex'}>
        <Box sx={{ width: '270px', background: '#F2EAE1;', height: '100vh' }}>

        </Box>
        <Box sx={{ width: 'calc(100% - 270px)' }}>
            {children}
        </Box>
    </Box>
}

export default UserLayout