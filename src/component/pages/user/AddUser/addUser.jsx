import { useEffect, useState } from "react";
import UserService from "../../../../../services/user-service";
import { TextField } from "@mui/material";

const AddUser = ({ editUserId, close }) => {
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
            lastName: response.lastName
        })
    }

    return (
        <>
            <TextField value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
        </>
    )
}
export default AddUser;