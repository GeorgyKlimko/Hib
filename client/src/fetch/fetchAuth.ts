import axios from "axios"
class FetchAuth {
    async login(username: string, password: string) {
        try { 
            const response = await axios.post("/api/auth/login", {
                username: username,
                password: password
            }, {
                withCredentials: true,
            })


            return response;

        } catch(e) {
            console.log(e)
        }
    
    }

    async registration(username: string, password: string) {
        try {
            const response = await axios.post('/api/auth/registration',
                {
                    username: username,
                    password: password,
                }, {
                    withCredentials: true,
                }
            )

            return response;

        } catch(e) {
            console.log(e)
            return e;
        }

    }
} 

export default new FetchAuth;