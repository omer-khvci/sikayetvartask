import UserLayout from "@/component/layout/UserLayout"
import BookmarkLgIcon from "@/icon/BookmarkLgIcon";
import GraduationCapIcon from "@/icon/GraduationCapIcon"
import PaymentLgIcon from "@/icon/PaymentIconLg";
import UserLgIcon from "@/icon/UserLgIcon";
import { Box, Card, CardContent, CardHeader, CardMedia, Typography, createSvgIcon } from "@mui/material"
const CapIcon = createSvgIcon(
    <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="graduation-cap 1">
            <path id="Vector" d="M45.912 11.4289L26.037 5.06989C24.7013 4.64313 23.2995 4.64313 21.9638 5.06989L2.08875 11.4289C0.8205 11.8349 0 12.9423 0 14.25C0 15.5577 0.8205 16.6651 2.088 17.0711L4.31625 17.7836C4.06875 18.2422 3.88575 18.7358 3.7665 19.2531C2.96475 19.6375 2.4 20.4339 2.4 21.375C2.4 22.3198 2.96775 23.1206 3.77475 23.5029L2.421 31.805C2.30025 32.5464 2.71425 33.25 3.2715 33.25H6.32775C6.885 33.25 7.29975 32.5464 7.17825 31.805L5.82525 23.5029C6.63225 23.1206 7.2 22.3198 7.2 21.375C7.2 20.5883 6.78825 19.9248 6.19275 19.4921C6.3045 19.1462 6.47775 18.8345 6.6855 18.5413L10.6958 19.8246L9.6 28.5C9.6 31.1236 16.047 33.25 24 33.25C31.953 33.25 38.4 31.1236 38.4 28.5L37.3043 19.8246L45.912 17.0703C47.1795 16.6651 48 15.5577 48 14.25C48 12.9423 47.1795 11.8349 45.912 11.4289ZM35.961 28.3412C35.154 29.1821 31.053 30.875 24 30.875C16.947 30.875 12.846 29.1821 12.039 28.3412L13.0208 20.5682L21.9638 23.4294C22.1588 23.4917 23.8928 24.1144 26.037 23.4294L34.98 20.5682L35.961 28.3412ZM45.171 14.8126L25.296 21.1716C24.4478 21.4433 23.5523 21.4433 22.704 21.1716L9.52875 16.956L24.2205 14.2292C24.8723 14.109 25.3013 13.4885 25.179 12.8436C25.0575 12.1979 24.417 11.7755 23.7795 11.8958L8.496 14.7309C7.566 14.9031 6.73275 15.2987 6.015 15.8316L2.82825 14.8118C2.2395 14.6226 2.26875 13.8663 2.82825 13.6874L22.7033 7.32836C23.8358 6.96617 24.7913 7.16731 25.2952 7.32836L45.1703 13.6874C45.7245 13.8648 45.7635 14.6226 45.171 14.8126Z" fill="#74C1ED" />
        </g>
    </svg>
);
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
                    <CardMedia sx={{

                    }}>
                        <CapIcon sx={{
                            height: "38px",
                            width: "48px"
                        }} />
                    </CardMedia>
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
                    <CardMedia sx={{

                    }}>
                       <BookmarkLgIcon sx={{
                            height: "28px",
                            width: "35px"
                        }} />
                    </CardMedia>
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
                    <CardMedia sx={{

                    }}>
                        <PaymentLgIcon sx={{
                            height: "40px",
                            width: "35px"
                        }} />
                    </CardMedia>
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
                    <CardMedia sx={{

                    }}>
                        <UserLgIcon sx={{
                            height: "34px",
                            width: "34px"
                        }} />
                    </CardMedia>
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