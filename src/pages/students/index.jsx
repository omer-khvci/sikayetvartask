import styled from "@emotion/styled";
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TablePagination, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import UserService from "../../../services/user-service";
import AddOrEditUserDialog from "@/component/pages/user/AddOrEditUser/addOrEditUserDialog";
const CustomTableCell = styled(TableCell)(({ theme }) => ({
    color: "#000",
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    lineeHight: "normal"
}))
const Students = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerpage, setItemPerPage] = useState(10);
    const [search, setSearch] = useState('')

    const [data, setData] = useState([])
    const [isUseEffectCall, setIsUseEffectCall] = useState(false)

    const handleChangePage = (event, newPage) => {

        setCurrentPage(newPage);
        getUserList(itemPerpage, newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const tmpItemPerPage = parseInt(event.target.value)

        setItemPerPage(tmpItemPerPage);
        setCurrentPage(0);
        getUserList(tmpItemPerPage, 0);
    };


    useEffect(() => {
        if (isUseEffectCall) return
        setIsUseEffectCall(true)
        getUserList(itemPerpage, currentPage)
    }, [])

    useEffect(() => {
        if (search) {
            searchUser(search)
        }
        else {
            getUserList(itemPerpage, currentPage)
        }
    }, [search])

    const getUserList = async (limit, page) => {
        const response = await UserService.GetAll(limit, limit * page, search);
        setData(response)
    }

    const searchUser = async () => {

        const response = await UserService.SearchUser(search);
        setData(response)
    }

    const [openAddUser, setOpenUser] = useState(false)
    const [editUserId, setEditUserId] = useState(0)

    const addUserClick = () => {
        setOpenUser(true);
    }
    return (
        <>
            <AddOrEditUserDialog open={openAddUser || editUserId > 0} editUserId={editUserId} close={() => {

                setOpenUser(false)
                setEditUserId(0)
            }} />

            <Box sx={{
                marginLeft: "30px",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={{
                            color: "#000",
                            fontSize: "22px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal"
                        }}>
                            Students List
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" size="small" sx={{
                                    borderRadius: "8px",
                                    border: "1px solid #E5E5E5",
                                    background: "#FFF"
                                }}>
                                    <InputLabel htmlFor="">Search</InputLabel>
                                    <OutlinedInput
                                        id=""
                                        onChange={e => setSearch(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label=""
                                                    edge="end"
                                                >
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Search"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" onClick={addUserClick} sx={{
                                    borderRadius: "4px",
                                    background: "#FEAF00"
                                }}>ADD NEW STUDENT</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={11}><hr style={{
                        width: "calc(105% - 20px)",
                        color: "#E5E5E5",
                    }} /></Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <TableContainer sx={{ width: "95%" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <CustomTableCell align="right">Name</CustomTableCell>
                                <CustomTableCell align="right">Email</CustomTableCell>
                                <CustomTableCell align="right">Phone</CustomTableCell>
                                <CustomTableCell align="right">Website</CustomTableCell>
                                <CustomTableCell align="right">Company Name</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{
                            height: "85px",
                            borderRadius: "8px",
                            background: "#FFF",
                        }}>

                            {
                                data?.users?.length > 0 && data.users.map((user, index) => (

                                    <TableRow key={index}>
                                        <TableCell></TableCell>

                                        <CustomTableCell align="right">{`${user.firstName} ${user.lastName}`}</CustomTableCell>
                                        <CustomTableCell align="right">{user.email}</CustomTableCell>
                                        <CustomTableCell align="right">{user.phone}</CustomTableCell>
                                        <CustomTableCell align="right">{user.domain}</CustomTableCell>
                                        <CustomTableCell align="right">{user.company.name}</CustomTableCell>
                                        <CustomTableCell align="right" sx={{ borderTop: "1px solid rgba(224, 224, 224, 1);" }}>
                                            <Button onClick={e => setEditUserId(user.id)}><img src="/img/pen-1.svg" alt="" /></Button>
                                            <Button><img src="/img/trash-1.svg" alt="" /></Button>
                                        </CustomTableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={data?.total || 0}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    rowsPerPage={itemPerpage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{
                        marginRight: "75px"
                    }}
                />
            </Box>
        </>
    )
}
export default Students;