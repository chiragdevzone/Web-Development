import "./navigation.css"

function Navigation() {
  return (
    <>
    <div className="navbar">
    <div className="logo">
        <img src="public/images/brand_logo.png" alt="brand-logo" />
      </div>
      <div className="navlinks">
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="login-btn">
        <button>Login</button>
      </div>
    </div>
      
    </>
  )
}

export default Navigation