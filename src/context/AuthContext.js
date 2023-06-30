import { useRouter } from "next/router";

const { createContext, useState, useEffect } = require("react");

const defaultProvider = {
    user: null,
    login: Promise.resolve(),
    init: Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [user, setUser] = useState(null)
    const login = (data) => {
        debugger
        const { userName, password } = data
        //TODO: userName parola kontrolü yap.

        localStorage.setItem('userInfo', JSON.stringify(data))

        return true;
    }

    const init = () => {
        const user = localStorage.getItem('userInfo')
        if (!user) {
            router.push('user/login')
        }
        setUser(JSON.parse(user))

    }

    useEffect(() => {
        init()

    }, [])

    const value = {
        user: user,
        login: login,
        init: init
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }