const ApiUrl =  process.env.NEXT_PUBLIC_API_URL;

const UserService ={

    GetAll: async () => {
        let url = ApiUrl+`users`

        return  fetch(url)
        .then(res => res.json())
        .then(console.log)

    },

}
export default UserService;