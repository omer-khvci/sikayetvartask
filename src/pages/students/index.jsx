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
const CustomTableCell = styled(TableCell)(({ theme }) => ({
    color: "#000",
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    lineeHight: "normal"
}))
const Students = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
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
                            <Button variant="contained" sx={{
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
                        <TableRow>
                            <TableCell></TableCell>

                            <CustomTableCell align="right">deneme</CustomTableCell>
                            <CustomTableCell align="right">deneme</CustomTableCell>
                            <CustomTableCell align="right">deneme</CustomTableCell>
                            <CustomTableCell align="right">deneme</CustomTableCell>
                            <CustomTableCell align="right">deneme</CustomTableCell>
                            <CustomTableCell align="right" sx={{ borderTop: "1px solid rgba(224, 224, 224, 1);" }}>
                                <Button><img src="/img/pen-1.svg" alt="" /></Button>
                                <Button><img src="/img/trash-1.svg" alt="" /></Button>
                            </CustomTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    marginRight:"75px"
                }}
            />
        </Box>
    )
}
export default Students;