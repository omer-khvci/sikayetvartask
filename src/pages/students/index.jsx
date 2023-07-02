
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Students = () => {

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
                            <FormControl  variant="outlined" size="small" sx={{
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
                <Grid  item xs={11}><hr style={{
                    width:"calc(105% - 20px)",
                    background:"#E5E5E5"
                }}/></Grid>
                <Grid  item xs={1}></Grid>
                </Grid>
                              
        </Box>
    )
}
export default Students;