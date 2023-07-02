
import { Box, Card, CardContent, CardMedia, Typography, createSvgIcon } from "@mui/material";
const Home = () => {

    return <>
        <Box sx={{
            display: "flex",
            justifyContent: "space-around"

        }}>
            <Card sx={{
                width: "255px",
                height: "157px",
                borderRadius: "8px",
                background: "#F0F9FF"
            }}>
                <CardContent sx={{
                    padding: "10px"
                }}>

                    {/* <CapIcon sx={{
                            height: "38px",
                            width: "48px"
                        }} /> */}
                    <img src="/img/graduation-cap.svg" alt="" />

                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>



                    <Typography sx={{
                        color: "#6C6C6C",
                        fontSize: "14px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal"
                    }}>
                        Students
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#000",
                        fontSize: "30px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "uppercase",
                        textAlign: "right"
                    }}>
                        243
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{
                width: "255px",
                height: "157px",
                borderRadius: "8px",
                background: "#FEF6FB"
            }}>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    {/* <BookmarkLgIcon sx={{
                            height: "28px",
                            width: "35px"
                        }} /> */}
                    <img src="/img/bookmarkLg.svg" alt="" />

                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#6C6C6C",
                        fontSize: "14px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal"
                    }}>
                        Course
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#000",
                        fontSize: "30px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "uppercase",
                        textAlign: "right"
                    }}>
                        13
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{
                width: "255px",
                height: "157px",
                borderRadius: "8px",
                background: "#FEFBEC"
            }}>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <img src="/img/usd-squareLg.svg" alt="" />
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#6C6C6C",
                        fontSize: "14px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal"
                    }}>
                        Payments
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#000",
                        fontSize: "30px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "uppercase",
                        textAlign: "right"
                    }}>
                        556,000₺
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{
                width: "255px",
                height: "157px",
                borderRadius: "8px",
                background: "linear-gradient(134deg, #FEAF00 0%, #F8D442 100%)"
            }}>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <img src="/img/User.svg" alt="" />
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>

                    <Typography sx={{
                        color: "#FFF",
                        fontSize: "14px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal"
                    }}>
                        Users
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    padding: "10px"
                }}>
                    <Typography sx={{
                        color: "#000",
                        fontSize: "30px",
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "uppercase",
                        textAlign: "right"
                    }}>
                        3
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </>
}

export default Home