import logout from "../../Utils/auth/logout";


const User = () => {
  return <div className="pt-[200px]">User
  <button onClick={logout}>Logout</button>
  </div>;
  
}

export default User;