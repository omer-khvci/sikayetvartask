import { Box, Button, InputLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserService from "../../../../../services/user-service";

const AddOrEditUser = ({ editUserId, close, open }) => {
    const [isUseEffectCall, setIsUseEffectCall] = useState(false)
    const [openAlert, setOpenAlert] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        email: '',
        phone: '',
        website: '',
        companyName: ''
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
            email: response.email,
            phone: response.phone,
            website: response.domain,
            companyName: response.company.name
        })
    }

    const addUser = async () => {
        const { firstName, email, phone, website, companyName } = user;

        const request = {
            firstName: firstName,
            email: email,
            phone: phone,
            website: website,
            companyName: companyName
        }



        const response = await UserService.AddUser(request)

        toast.success("New user added");
        close();

    }
    const updateUser = async (id) => {
        id = editUserId;
        const { firstName, email, phone, website, companyName } = user;

        const request = {
            id: id,
            firstName: firstName,
            email: email,
            phone: phone,
            website: website,
            companyName: companyName
        }
        const response = await UserService.UpdateUser(request)
        toast.success(`The user's information has been updated.`)
        close()
    }

    return (
        <>
            <Box sx={{ marginTop: "5px" }}>
                <InputLabel>Name </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.firstName} fullWidth onChange={e => setUser({ ...user, firstName: e.target.value })} />
            </Box>
            <Box sx={{ marginTop: "5px" }}>
                <InputLabel>E-mail </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.email} fullWidth onChange={e => setUser({ ...user, email: e.target.value })} />
            </Box>
            <Box sx={{ marginTop: "5px" }}>
                <InputLabel>Phone </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.phone} fullWidth onChange={e => setUser({ ...user, phone: e.target.value })} />
            </Box>
            <Box sx={{ marginTop: "5px" }}>
                <InputLabel>Website </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.website} fullWidth onChange={e => setUser({ ...user, website: e.target.value })} />
            </Box>
            <Box sx={{ marginTop: "5px" }}>
                <InputLabel>Company Name </InputLabel>
                <TextField sx={{
                }} id="outlined-basic" variant="outlined" value={user.companyName} fullWidth onChange={e => setUser({ ...user, companyName: e.target.value })} />
            </Box>
            <Box sx={{ marginTop: "5px", textAlign: "right" }}>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={editUserId ? updateUser : addUser}>Save</Button>
            </Box>

        </>
    )
}
export default AddOrEditUser;