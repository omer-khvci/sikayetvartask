import { useEffect, useState } from "react";
import UserService from "../../../../../services/user-service";
import { Box, InputLabel, TextField } from "@mui/material";

const AddOrEditUser = ({ editUserId, close }) => {
    const [isUseEffectCall, setIsUseEffectCall] = useState(false)
    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    })


    useEffect(() => {
        if (isUseEffectCall) return
        setIsUseEffectCall(true)

        if (editUserId > 0) {
            getUserInfo(editUserId)
        }
    }, [])

    const getUserInfo = async () => {
        const response = await UserService.GetUserInfo(editUserId)
        setUser({
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phone: response.phone,
            website: response.domain,
            companyName: response.company.name
        })
    }

    return (
        <>
            <Box sx={{marginTop:"5px"}}>
                <InputLabel>Name </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.firstName} fullWidth onChange={e => setUser({ ...user, firstName: e.target.value })} />
            </Box>
            <Box sx={{marginTop:"5px"}}> 
            <InputLabel>E-mail </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.email} fullWidth onChange={e => setUser({ ...user, email: e.target.value })} />
            </Box>
            <Box sx={{marginTop:"5px"}}>
            <InputLabel>Phone </InputLabel>
                <TextField sx={{
                }} id="outlined-basic"variant="outlined" value={user.phone} fullWidth onChange={e => setUser({ ...user, phone: e.target.value })} />
            </Box>
            <Box sx={{marginTop:"5px"}}>
            <InputLabel>Website </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.website} fullWidth onChange={e => setUser({ ...user, website: e.target.value })} />
            </Box>
            <Box sx={{marginTop:"5px"}}>
            <InputLabel>Company Name </InputLabel>
                <TextField sx={{
                }} id="outlined-basic"  variant="outlined" value={user.companyName} fullWidth onChange={e => setUser({ ...user, companyName: e.target.value })} />
            </Box>
        </>
    )
}
export default AddOrEditUser;