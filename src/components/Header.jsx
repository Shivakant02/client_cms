import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {

  const {isLoggedIn, currentUser} = useSelector((state) => state.auth)
  function handleLogout() {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <nav className=" w-full h-[60px] bg-gray-950 text-white p-3 flex justify-between items-center">
    <Link to="/">
      <h2 className=" font-bold text-2xl select-none"> U-inSure</h2>
    </Link>
    <ul className=" gap-2 flex flex-row items-center justify-center">
      {isLoggedIn ? (
        <>
          <li>
            <Link to="/user/myPolicies">
              <button className=" btn btn-outline btn-info btn-sm rounded-md">
               My Policies
              </button>
            </Link>
          </li>
          <li>
            <Link to="/user/myClaims">
              <button className=" btn btn-outline btn-info btn-sm rounded-md">
                My Claims
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className=" btn  btn-sm btn-error rounded-md"
            >
              Logout
            </button>
          </li>
          <li>
            <Link to="/profile">
              <div className="avatar flex flex-col justify-center items-center">
                <div className="w-10 rounded-full">
                  <img src={currentUser.avatar} alt="profile" />
                </div>
              </div>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">
              <button className=" btn  btn-sm btn-primary rounded-md">
                Signup
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className=" btn  btn-sm btn-primary rounded-md">
                Login
              </button>
            </Link>
          </li>
        </>
      )}
    </ul>
  </nav>
  )
}

export default Header