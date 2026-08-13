import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        my-app
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
