import axios from "axios"
const fetchUsers=async ({queryKey})=>{  // query key -> is a array[]
    const userId= queryKey[1];

    const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
                'app-id':import.meta.env.VITE_APP_ID
            }
        }).then((response) =>{
            setLoading(false);
        setUser(response.data);
        });
    return response;
}

export default fetchUsers;