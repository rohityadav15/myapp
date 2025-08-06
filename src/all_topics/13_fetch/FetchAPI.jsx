import { useEffect, useState} from "react";

const FetchAPI = () => {

    const [users, setUsers] = useState([])
  
  async function getUsers() {
    let responce = await fetch("https://api.github.com/users");
    let data = await responce.json();
    console.log(data);
    setUsers(data)
  }
//  https://xcountries-backend.azurewebsites.net/all   

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>FetchAPI-useEffect hook</h1>
    {
        users.map((user)=>{
            return(
                <div>
                    {/* <img src={"user.avatar_url"} alt="" /> */}
                    <h1>{user.name}</h1>
                </div>
            )
        })
    }
    </div>
  );
};

export default FetchAPI;
