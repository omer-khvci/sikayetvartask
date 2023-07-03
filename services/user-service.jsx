const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const UserService = {

    GetAll: async (limit = 10, skip = 0) => {

        let url = `${ApiUrl}/users/?limit=${limit}&skip=${skip}&select=firstName,lastName,phone,email,company,domain`

        const response = await fetch(url)

        return await response.json()

    },
    SearchUser: async (search) => {
        const url = `${ApiUrl}/users/search?q=${search}`
        const response = await fetch(url)

        return await response.json()
    },
    GetUserInfo: async (id) => {
        const url = `${ApiUrl}/users/${id}`
        const response = await fetch(url)

        return await response.json()
    },

}
export default UserService;