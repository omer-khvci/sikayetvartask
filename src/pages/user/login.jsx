import BlankLayout from "@/component/layout/BlankLayout";
import Login from "@/component/pages/user/login";

const LoginPage = () => {
    return <Login />
}
LoginPage.Layout = (page) => <BlankLayout >{page} </BlankLayout>

export default LoginPage