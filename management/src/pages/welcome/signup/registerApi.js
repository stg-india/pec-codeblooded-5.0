import axios from "../../../setup/api/axios";
export const register = async (User) => {
        const response = await axios.post('http://localhost:3000/signup', {
            name: User['Name'].trim(),
            email: User['E-mail Address'].trim(),
            password: User['Password'].trim(),
        })
    return response.status;
}